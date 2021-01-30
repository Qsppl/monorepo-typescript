"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.someLogic = void 0;
const enums_1 = require("@monorepo-typescript/types/src/enums");
const someLogic = async (name, age, eyeColor) => {
    const luckyOwner = {
        age,
        eyeColor,
        name
    };
    const lucky = {
        say(luckyOwner) {
            console.log(`Hello, ${luckyOwner.name}`);
        },
        age: 1,
        name: enums_1.DogNames.LUCKY
    };
    lucky.say(luckyOwner);
    class BadWork {
        constructor(worker) {
            this.worker = worker;
        }
    }
    class WorkDone {
        constructor(work) {
            this.work = work;
        }
        bad() {
            console.log(`${this.work.worker.name} doing bad work`);
        }
        good() {
            console.log(`${this.work.worker.name} doing good work`);
        }
        async isDone() {
            return this.work.isDone;
        }
    }
    const someWork = new BadWork(luckyOwner);
    const someWorkDone = new WorkDone(someWork);
    someWorkDone.bad();
    const isWorkDone = await someWorkDone.isDone();
    console.log(`The work is ${isWorkDone ? 'done' : "didn't done yet"}`);
};
exports.someLogic = someLogic;
//# sourceMappingURL=index.js.map