"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const actions_1 = require("../store/product/actions");
exports.ProductContext = react_1.createContext(null);
const ProductProvider = ({ children }) => {
    const dispatch = react_redux_1.useDispatch();
    const fetchProductsData = (ProductSearch) => {
        dispatch(actions_1.getProductsRequest({ ProductSearch }));
    };
    return (react_1.default.createElement(exports.ProductContext.Provider, { value: { fetchProductsData } }, children));
};
exports.default = ProductProvider;
//# sourceMappingURL=ProductContext.js.map