import {first} from '@monorepo-typescript/first'
import {second} from '@monorepo-typescript/second'
export const app = () => 'Hi from the app';

export const main = () => {
  console.log(app());
  console.log(first());
  console.log(second());
};

main();
