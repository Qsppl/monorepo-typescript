import {first} from '@monorepo-ts/first'
import {second} from '@monorepo-ts/second'
export const app = () => 'Hi from the app';

export const main = () => {
  console.log(app());
  console.log(first());
  console.log(second());
};

main();
