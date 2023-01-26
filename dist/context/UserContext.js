"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const actions_1 = require("../store/product/actions");
exports.UserContext = react_1.createContext(null);
const UserProvider = ({ children }) => {
    const dispatch = react_redux_1.useDispatch();
    const fetchUserData = (userName, key) => {
        dispatch(actions_1.fetchUser({ userName, key }));
    };
    return (react_1.default.createElement(exports.UserContext.Provider, { value: { fetchUserData } }, children));
};
exports.default = UserProvider;
//# sourceMappingURL=UserContext.js.map