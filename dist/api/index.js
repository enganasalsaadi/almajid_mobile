"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
/*
 config request header - should passed with axios function
*/
exports.config = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=31536000',
    },
    timeout: 20000,
};
/*
 this for parsing full url with main link
*/
exports.ParseFullUrl = (url) => {
    return 'http://localhost:8080/api/' + url;
};
/*
 handling errors with axios request when error resolved
*/
const parseErrorRequest = (error) => {
    if (error.message === "Request failed with status code 500") {
        return { status: 500, response: null, meta: { message: error.message } };
    }
    else if (error.message === "Request failed with status code 404") {
        return { status: 404, response: null, meta: { message: error.message } };
    }
    else if (error.message === "Network Error" ||
        error.message === "timeout of 30000ms exceeded") {
        return { status: 400, response: null, meta: { message: error.message } };
    }
    else if (error.response !== undefined) {
        return {
            status: 403,
            data: null,
            meta: error.response.data.meta,
        };
    }
    else {
        return { status: 402, data: null, meta: error.response.data.meta };
    }
};
/*
 trigger axios by get type
*/
exports.requestAction = (request) => __awaiter(this, void 0, void 0, function* () {
    if (request.type === "get") {
        return new Promise((resolve, reject) => {
            axios_1.default
                .get(exports.ParseFullUrl(request.url), exports.config)
                .then(function (response) {
                /// Request succesfully
                console.log("response response");
                console.log(response);
                resolve(Object.assign({ status: 200 }, response.data));
            })
                .catch(function (error) {
                console.log(error);
                /// Request error
                resolve(parseErrorRequest(error));
            });
        });
    }
    else {
        return new Promise((resolve, reject) => {
            axios_1.default
                .post(exports.ParseFullUrl(request.url), request.payload, exports.config)
                .then(function (response) {
                /// Request succesfully
                console.log("response response");
                console.log(response);
                resolve(Object.assign({ status: 200 }, response.data));
            })
                .catch(function (error) {
                console.log(error);
                /// Request error
                resolve(parseErrorRequest(error));
            });
        });
    }
});
//# sourceMappingURL=index.js.map