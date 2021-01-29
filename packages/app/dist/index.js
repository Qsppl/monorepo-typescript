"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = exports.app = void 0;
const first_1 = require("@monorepo-ts/first");
const second_1 = require("@monorepo-ts/second");
const app = () => 'Hi from the app';
exports.app = app;
const main = () => {
    console.log(exports.app());
    console.log(first_1.first());
    console.log(second_1.second());
};
exports.main = main;
exports.main();
//# sourceMappingURL=index.js.map