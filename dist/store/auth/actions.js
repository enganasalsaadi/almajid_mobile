"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actionTypes_1 = require("../actionTypes");
exports.loginRequest = (payload) => ({
    type: actionTypes_1.LOGIN_USER_REQUEST,
    payload,
});
exports.loginReset = () => ({
    type: actionTypes_1.LOGIN_USER_RESET,
});
exports.setUser = (payload) => ({
    type: actionTypes_1.SET_USER,
    payload,
});
//# sourceMappingURL=actions.js.map