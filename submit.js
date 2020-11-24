const { exec } = require("child_process");
const fetch = require("node-fetch");
const prompts = require('prompts');
const fs = require('fs');

function ejecutar(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        return reject(`error: ${error.message}`);
      }
      if (stderr) {
        return resolve(`stderr: ${stderr}`);
      }
      resolve(stdout);
    });
  });
}

async function submit(pasados, total) {
  console.log(`RESULTADO: ${pasados} de ${total}. \n`);
  const { seguir } = await prompts({
    type: 'text',
    name: 'seguir',
    message: 'Estas seguro que deseas submitear este resultado? (S/n)',
    validate: value => value < 18 ? `Nightclub is 18+ only` : true
  });
  if (seguir.toLowerCase() !== 's') {
    return process.exit(0);
  }

  const { username, password } = await prompts([
  {
    type: 'text',
    name: 'username',
    message: 'usuario de github:'
  },
  {
    type: 'password',
    name: 'password',
    message: 'Password:'
  }]);
  let repo;
  try {
    const p = await ejecutar('git config --get remote.origin.url');
    repo = p.trim().split('/').pop();

    await ejecutar('git add .');
    await ejecutar(`git commit -m "CP commiteado por ${username} a las ${Date.now()}"`);
    await ejecutar(`git push https://${username.toLowerCase()}:${password}@github.com/${username.toLowerCase()}/${repo} master`);
    } catch (e) {
      console.error(e);
      return process.exit(0);
    }

    fetch('https://proxy.soyhenry.com:3000/m0/submit', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "github": username,
        "passed": pasados,
        "total": total,
        "repo": "Prep - " + hwPaths[hwNumber - 1],
      })
    }).then(function(response) {
      if(response.status !== 200) throw new Error(response.statusText)
      console.log('Submit OK\n');
      return process.exit(0);
    }).catch(function(error) {
      console.error(error)
      console.log('Falló el submit\n');
      return process.exit(1);
    });
}

var args = process.argv.slice(2);
if(args.length != 1 || !(["2","3","4","5","6","7","8","9"].includes(args[0]))) {
  console.log("Parámetro inválido revise que sea un número de homework válido");
  return process.exit(0);
}

var hwNumber = args[0];
const hwPaths = ["01-Git", "02-JS-I", "03-JS-II", "04-JS-III", "05-JS-IV", "06-JS-V", "07-JS-VI", "08-HTML", "09-CSS-Positioning"];
const resultFile = __dirname + "/" + hwPaths[hwNumber - 1] + "/homework/tests/result.json";

try {
  fs.unlinkSync(resultFile);
} catch(err) {
  console.log("El archivo result.json no existe por lo que se creará uno nuevo");
}
if(hwNumber === '8' || hwNumber === '9'){
  console.log("Homework sin tests \n");
  submit(0,0);
} else {
  console.log('Ejecutando tests...\n');
  exec("npm run test" + hwNumber, async (error, stdout, stderr) => {
    let rawdata = fs.readFileSync(resultFile);
    let result = JSON.parse(rawdata);
    const pasados = result.numPassedTests;
    const total = result.numTotalTests;
    submit(pasados, total);
  });
}
