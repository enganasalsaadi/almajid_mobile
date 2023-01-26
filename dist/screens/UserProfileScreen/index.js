"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const layout_1 = require("../../components/template/layout");
const UserContext_1 = require("../../context/UserContext");
const react_redux_1 = require("react-redux");
const User_1 = require("../../components/app/User");
const react_i18next_1 = require("react-i18next");
const UserProfileScreen = ({ route }) => {
    const { t } = react_i18next_1.useTranslation();
    const { fetchUserData } = react_1.useContext(UserContext_1.ProductContext);
    const [userDataFetched, setUserDataFetched] = react_1.useState(null);
    const { userData, keyUserDetails } = react_redux_1.useSelector(state => state.user);
    react_1.useEffect(() => {
        fetchUserData(route.params.userName, route.key);
    }, []);
    react_1.useEffect(() => {
        if (route.key === keyUserDetails) {
            setUserDataFetched(userData);
        }
    }, [userData]);
    return (react_1.default.createElement(layout_1.default, { title: t("profile"), back: true }, userDataFetched && react_1.default.createElement(User_1.default, { userData: userDataFetched })));
};
exports.default = react_1.memo(UserProfileScreen);
//# sourceMappingURL=index.js.map