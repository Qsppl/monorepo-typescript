const first = require('@monorepo-ts/first');
const second = require('@monorepo-ts/second');

const app = () => 'Hi from the app';

const main = () => {
  console.log(app());
  console.log(first());
  console.log(second());
};

main();

module.exports = { app, main };
