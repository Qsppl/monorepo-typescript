import { DogNames } from "../enums";
import { Man } from "./man";
export declare type Dog = {
    name: DogNames;
    age: number;
    say: (owner: Man) => void;
};
