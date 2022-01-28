/* We've started Quokka for you automatically on this file.
 *
 * To open a new Quokka file:
 *   - Press `Ctrl K, J` to create a new JavaScript File
 *   - Press `Ctrl K, T` to create a new TypeScript File
 *   - Press `Ctrl K, L` to open an interactive sample from:
 *     https://github.com/wallabyjs/interactive-examples
 *
 * To start/restart Quokka on an existing file:
 *   - Press `Ctrl K, Q`
*/

// See the output of console.log right next to your code
const quokka = { isAwesome: true };

console.log(quokka);

// See the value of a variable simply by typing its name
quokka;

// Use sequence expression to compare objects
const wallaby = { "is Quokka's BigBrother": true };

(quokka, wallaby)

// Gutter indicators show what code was executed (code coverage)

// Orange indicators means only part of the line was executed
// because JavaScript stops processing after first false value
console.log('partialCoverage', false && true);

// Green indicators means that Quokka executed all statements
// on a line of code
if (false) {
  // White indicators means that a line of code was never
  // executed by Quokka
  console.log('noCoverage', true);
}

// Red indicators show where an error occurred. The error message
// is also shown beside the error
throw new Error('Something went wrong');

// There's a lot more Quokka can do! Visit our docs to learn more:
// - https://quokkajs.com/docs/
