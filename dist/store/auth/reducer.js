"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actionTypes_1 = require("../actionTypes");
const INITIAL_STATE = {
    isLoadingActionAuth: false,
    statusAuth: "",
    errorAuth: '',
    userDetails: null,
};
// eslint-disable-next-line import/no-anonymous-default-export
exports.default = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case actionTypes_1.LOGIN_USER_LOADING:
            return Object.assign({}, state, { isLoadingActionAuth: true, statusAuth: actionTypes_1.LOADING, errorAuth: null });
        case actionTypes_1.LOGIN_USER_SUCCESS:
            return Object.assign({}, state, { isLoadingActionAuth: false, statusAuth: actionTypes_1.SUCCESS, errorAuth: null, userDetails: payload.data });
        case actionTypes_1.LOGIN_USER_FAIL:
            return Object.assign({}, state, { isLoadingActionAuth: false, statusAuth: actionTypes_1.FAILURE, errorAuth: payload.error });
        case actionTypes_1.LOGIN_USER_RESET:
            return Object.assign({}, state, { isLoadingActionAuth: false, statusAuth: "", errorAuth: null });
        case actionTypes_1.SET_USER:
            console.log(payload);
            return Object.assign({}, state, { userDetails: payload });
        default:
            return state;
    }
};
//# sourceMappingURL=reducer.js.map