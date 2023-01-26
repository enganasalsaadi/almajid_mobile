"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const Button_1 = require("../../components/global/elements/Button");
const TextInput_1 = require("../../components/global/elements/TextInput");
const colors_1 = require("../../constants/colors");
const layout_1 = require("../../components/template/layout");
const react_redux_1 = require("react-redux");
const react_2 = require("react");
const react_native_responsive_screen_1 = require("react-native-responsive-screen");
const ProductContext_1 = require("../../context/ProductContext");
const actionsType_1 = require("../../store/actionsType");
const Text_1 = require("../../components/global/elements/Text");
const User_1 = require("../../components/app/User");
const react_i18next_1 = require("react-i18next");
const HomeScreen = ({ route }) => {
    const { t } = react_i18next_1.useTranslation();
    const { fetchProductsData } = react_1.useContext(ProductContext_1.ProductContext);
    const [productName, setProductName] = react_1.useState('');
    const [userDataFetched, setUserDataFetched] = react_1.useState(null);
    const { isLoadingActionProducts, errorProducts, statusProducts, productList, keyUserDetails } = react_redux_1.useSelector(state => state.product);
    react_2.useEffect(() => {
        if (keyUserDetails === route.key) {
            setUserDataFetched(productList);
        }
    }, [productList]);
    return (react_1.default.createElement(layout_1.default, { title: t("search_screen") },
        react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(TextInput_1.default, { onChangeText: (value) => {
                    setProductName(value);
                }, value: productName, moreStyle: {
                    width: react_native_responsive_screen_1.widthPercentageToDP(60),
                }, placeholder: t("enter_name") }),
            react_1.default.createElement(Button_1.default, { style: {
                    width: react_native_responsive_screen_1.widthPercentageToDP(30),
                    marginStart: react_native_responsive_screen_1.widthPercentageToDP(4)
                }, onPress: () => {
                    fetchProductsData(productName);
                }, text: t("search"), loading: isLoadingActionProducts })),
        react_1.default.createElement(react_native_1.View, { style: { alignItems: 'center', justifyContent: 'center' } }, statusProducts === actionsType_1.FAILURE ?
            react_1.default.createElement(Text_1.default, { type: 'R', color: colors_1.default.black, text: errorProducts }) : statusProducts === actionsType_1.SUCCESS ?
            react_1.default.createElement(react_native_1.View, null, userDataFetched && react_1.default.createElement(User_1.default, { userData: userDataFetched }))
            : null)));
};
const styles = {
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: react_native_responsive_screen_1.widthPercentageToDP(2),
        borderBottomWidth: 1,
        borderBottomColor: colors_1.default.gray,
        paddingBottom: react_native_responsive_screen_1.widthPercentageToDP(4)
    }
};
exports.default = HomeScreen;
//# sourceMappingURL=index.js.map