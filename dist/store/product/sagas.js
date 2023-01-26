"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const actionsType_1 = require("../actionsType");
const api_1 = require("../../api");
function* getProductAction(action) {
    try {
        yield effects_1.put({ type: actionsType_1.GET_PRODUCTS_LIST_LOADING });
        var requestConfig = {
            type: "get",
            url: `products/all`,
        };
        const response = yield effects_1.call(api_1.requestAction, requestConfig);
        console.log(" d d ");
        console.log(response.data);
        if (response.status === 200) {
            yield effects_1.put({
                type: actionsType_1.GET_PRODUCTS_LIST_SUCCESS,
                payload: { data: response.data },
            });
        }
        else {
            yield effects_1.put({
                type: actionsType_1.GET_PRODUCTS_LIST_FAIL,
                payload: {
                    error: response.meta.message,
                },
            });
        }
    }
    catch (error) {
        yield effects_1.put({
            type: actionsType_1.GET_PRODUCTS_LIST_FAIL,
            payload: {
                data: "Something wrong try again",
            },
        });
    }
}
function* watcherSaga() {
    yield effects_1.takeLatest(actionsType_1.GET_PRODUCTS_LIST_REQUEST, getProductAction);
}
exports.default = watcherSaga;
//# sourceMappingURL=sagas.js.map