"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const src_1 = require("./src");
const app = async () => {
    console.log('app started');
    await src_1.someLogic('Eugene', 33, 'gray');
    console.log('app finished');
};
exports.app = app;
//# sourceMappingURL=index.js.map