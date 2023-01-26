"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const sagas_1 = require("./auth/sagas");
const sagas_2 = require("./product/sagas");
function* root() {
    yield effects_1.fork(sagas_1.default);
    yield effects_1.fork(sagas_2.default);
}
exports.default = root;
//# sourceMappingURL=sagas.js.map