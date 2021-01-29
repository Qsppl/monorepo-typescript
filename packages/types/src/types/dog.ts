import {DogNames} from "../enums";
import {Man} from "./man";

export type Dog = {
    name: DogNames
    age: number
    say: (owner: Man) => void
}
