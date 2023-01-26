"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const reducer_1 = require("./auth/reducer");
const reducer_2 = require("./product/reducer");
const appReducer = redux_1.combineReducers({
    auth: reducer_1.default,
    product: reducer_2.default
});
exports.default = appReducer;
//# sourceMappingURL=reducers.js.map