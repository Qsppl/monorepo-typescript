import { Work } from "./work";
export interface DoWork {
    work: Work;
    good: () => void;
    bad: () => void;
    isDone: () => Promise<boolean>;
}
