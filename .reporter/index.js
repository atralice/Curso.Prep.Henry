const gitRemoteOriginUrl = require("git-remote-origin-url");
const GitUrlParse = require("git-url-parse");
const fs = require('fs');
const os = require('os');
const axios = require('axios');
const path = require('path');

const WINDOWS = 'Windows_NT';
const MACOS = 'Darwin';
const LINUX = 'Linux';
const USERNAME = os.userInfo().username;
const WINDOWS_PATH = `C:\\Users\\${USERNAME}\\.gitconfig`;
const MACOS_PATH = `${os.homedir()}/.gitconfig`;
const LINUX_PATH = `${os.homedir()}/.gitconfig`;
function getGitEmail() {
  switch (os.type()) {
    case WINDOWS:
      return getEmail(WINDOWS_PATH);
    case MACOS:
      return getEmail(MACOS_PATH);
    case LINUX:
      return getEmail(LINUX_PATH);
  }
}
function searchEmail(str) {
  var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  return re.exec(str);
}
function getEmail(PATH) {
	try {
		const email = searchEmail(fs
			.readFileSync(PATH)
      .toString());
		if (email.length > 0) {
			return email[0];
		} else {
			console.log(`
            configura tu cuenta de git por favor!
            https://git-scm.com/book/es/v2/Personalizaci%C3%B3n-de-Git-Configuraci%C3%B3n-de-Git`);
			process.exit()
		}
	} catch (error) {
		console.log(
			`Tienes que instalar git!
        https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Instalaci%C3%B3n-de-Git`
		);
		process.exit()
	}
}

function readFile() {
  try{
    const lt = fs.readFileSync('./.reporter/lt.json');
    return JSON.parse(lt);
  } catch (e) {
    return {};
  }
}


module.exports = function report(data) {
  try {
    const lastRun = readFile();
    const username = getGitEmail();
    gitRemoteOriginUrl()
        .then((remote) => {
          const { name: repo, owner: github } = GitUrlParse(remote);
          const pedidos = data.testResults.map(test => {
            if(!lastRun[test.testFilePath]) {
              lastRun[test.testFilePath] = {
                passing: test.numPassingTests,
                tries: 0,
              }
            }
            if(lastRun[test.testFilePath].passing != test.numPassingTests || lastRun[test.testFilePath].tries == 0) {
              const tries = lastRun[test.testFilePath].tries;
              lastRun[test.testFilePath].passing = test.numPassingTests;
              lastRun[test.testFilePath].tries = 1;
              return axios.post('https://proxy.soyhenry.com:3001/m0/grade', {
                "pending": test.numPendingTests,
                "passing": test.numPassingTests,
                "failed": test.numFailingTests,
                "runtime": test.perfStats.runtime,
                "slow": test.perfStats.slow,
                "file": path.basename(test.testFilePath),
                "repo": repo,
                "github": github,
                "username": username,
                "tries": tries
              });
          } else {
              lastRun[test.testFilePath].tries++;
              lastRun[test.testFilePath].passing = test.numPassingTests;
              return Promise.resolve();
          }
          });
          return Promise.all(pedidos);
        })
        .then((results) => {
          fs.writeFileSync('./.reporter/lt.json', JSON.stringify(lastRun));
        })
        .catch((err) => {
          console.log(err);
        });
  } catch (error) {
    console.error(error);
  }
  return data;
};

