"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const actionTypes_1 = require("../actionTypes");
const api_1 = require("./../../api");
function* loginAction(action) {
    try {
        yield effects_1.put({ type: actionTypes_1.LOGIN_USER_LOADING });
        var requestConfig = {
            type: 'post',
            url: `auth/login`,
            payload: action.payload.values
        };
        const response = yield effects_1.call(api_1.requestAction, requestConfig);
        console.log(" d d ");
        console.log(response.data);
        if (response.status === 200) {
            localStorage.setItem('token', JSON.stringify(response.data.token));
            localStorage.setItem('user', JSON.stringify(response.data));
            // replace('')
            action.payload.callback(response.data);
            yield effects_1.put({ type: actionTypes_1.LOGIN_USER_SUCCESS, payload: { data: response.data } });
        }
        else {
            yield effects_1.put({
                type: actionTypes_1.LOGIN_USER_FAIL,
                payload: {
                    error: response.meta.message,
                },
            });
        }
    }
    catch (error) {
        alert(error.message);
        yield effects_1.put({
            type: actionTypes_1.LOGIN_USER_FAIL,
            payload: {
                data: "Something wrong try again",
            },
        });
    }
}
function* watcherSaga() {
    yield effects_1.takeLatest(actionTypes_1.LOGIN_USER_REQUEST, loginAction);
}
exports.default = watcherSaga;
//# sourceMappingURL=sagas.js.map