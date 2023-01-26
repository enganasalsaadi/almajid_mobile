"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
require("react-native-gesture-handler");
const react_1 = require("react");
const react_native_1 = require("react-native");
const native_1 = require("@react-navigation/native");
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const navigation_1 = require("./navigation");
const react_redux_1 = require("react-redux");
const store_1 = require("./store");
require("./localization/i18n");
const NavigationService_1 = require("./navigation/NavigationService");
const ProductContext_1 = require("./context/ProductContext");
react_native_1.LogBox.ignoreAllLogs(true);
const App = () => {
    return (react_1.default.createElement(react_redux_1.Provider, { store: store_1.default },
        react_1.default.createElement(react_native_safe_area_context_1.SafeAreaProvider, null,
            react_1.default.createElement(ProductContext_1.default, null,
                react_1.default.createElement(native_1.NavigationContainer, { ref: NavigationService_1.navigationRef },
                    react_1.default.createElement(navigation_1.default, null))))));
};
exports.default = App;
//# sourceMappingURL=App.js.map