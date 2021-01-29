import {Dog, DoWork, Man, Work} from '@monorepo-typescript/types'
import {DogNames} from "@monorepo-typescript/types/src/enums";


export const someLogic = async (name: string, age: number, eyeColor: string) => {
    const luckyOwner: Man = {
        age,
        eyeColor,
        name
    }

    const lucky: Dog = {
        say(luckyOwner): void {
            console.log(`Hello, ${luckyOwner.name}`);
        },
        age: 1,
        name: DogNames.LUCKY
    }

    lucky.say(luckyOwner)
    class BadWork implements Work {
        isDone: boolean;
        worker: Man;
        constructor(worker: Man) {
            this.worker = worker
        }
    }
    class WorkDone implements DoWork {
        work: Work
        constructor(work: Work) {
            this.work = work
        }
        bad(): void {
            console.log(`${this.work.worker.name} doing bad work`);
        }

        good(): void {
            console.log(`${this.work.worker.name} doing good work`);
        }

        async isDone(): Promise<boolean> {
            return this.work.isDone
        }

    }
    const someWork = new BadWork(luckyOwner);

    const someWorkDone = new WorkDone(someWork);
    someWorkDone.bad();
    const isWorkDone = await someWorkDone.isDone();
    console.log(`The work is ${isWorkDone ? 'done' : "didn't done yet"}`);
}

