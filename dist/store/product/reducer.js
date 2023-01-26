"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actionsType_1 = require("../actionsType");
const INITIAL_STATE = {
    isLoadingActionProducts: false,
    statusProducts: "",
    errorProducts: "",
    productList: [],
};
// eslint-disable-next-line import/no-anonymous-default-export
exports.default = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case actionsType_1.GET_PRODUCTS_LIST_LOADING:
            return Object.assign({}, state, { isLoadingActionProducts: true, statusProducts: actionsType_1.LOADING, errorProducts: null });
        case actionsType_1.GET_PRODUCTS_LIST_SUCCESS:
            return Object.assign({}, state, { isLoadingActionProducts: false, statusProducts: actionsType_1.SUCCESS, errorProducts: null, productList: payload.data });
        case actionsType_1.GET_PRODUCTS_LIST_FAIL:
            return Object.assign({}, state, { isLoadingActionProducts: false, statusProducts: actionsType_1.FAILURE, errorProducts: payload.error });
        case actionsType_1.GET_PRODUCTS_LIST_RESET:
            return Object.assign({}, state, { isLoadingActionProducts: false, statusProducts: "", errorProducts: null });
        default:
            return state;
    }
};
//# sourceMappingURL=reducer.js.map