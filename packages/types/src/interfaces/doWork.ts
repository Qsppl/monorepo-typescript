import {Work} from "./work";

export interface DoWork {
    good: () => void
    bad: () => void
    isDone: (work: Work) => Promise<boolean>
}
