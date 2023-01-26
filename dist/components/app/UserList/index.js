"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const colors_1 = require("./../../../constants/colors");
const react_native_responsive_screen_1 = require("react-native-responsive-screen");
const Text_1 = require("./../../global/elements/Text");
const User_1 = require("../User");
const react_redux_1 = require("react-redux");
const actions_1 = require("../../../store/product/actions");
const react_i18next_1 = require("react-i18next");
const UserList = ({ url, keyScreen, userName }) => {
    const { t } = react_i18next_1.useTranslation();
    const dispatch = react_redux_1.useDispatch();
    const [DataList, setDataList] = react_1.useState([]);
    const [page, setPage] = react_1.useState(1);
    const [haveNext, setHaveNext] = react_1.useState(true);
    const { userDataList, key, isLoadingActionFetchUserList } = react_redux_1.useSelector(state => state.user);
    /*
    function to trigger api with some attribute like page and userName and url "Following/follwers"
    */
    const getData = (nextPage) => {
        dispatch(actions_1.fetchUserList({
            url: `users/${userName}/${url}?page=${nextPage}&per_page=10`,
            key: keyScreen
        }));
    };
    /*
    called when compnent initialized
    */
    react_1.useEffect(() => {
        getData(1);
    }, []);
    /*
    Listener effect when userData returned from api to bind data in correct compnent byy matching key of screen and key of call action
    */
    react_1.useEffect(() => {
        if (keyScreen === key) {
            if (userDataList.length === 0) {
                setHaveNext(false);
            }
            else {
                setDataList([...DataList, ...userDataList]);
            }
        }
    }, [userDataList]);
    /*
    Load more by scrolling and reaching to end of list
    */
    const onLoadMore = () => {
        if (haveNext) {
            setPage(page + 1);
            getData(page + 1);
        }
    };
    const onHandleRefresh = () => {
        setDataList([]);
        setPage(1);
        getData(1);
    };
    const renderItem = ({ item }) => {
        return react_1.default.createElement(User_1.default, { userData: item });
    };
    return react_1.default.createElement(react_native_1.FlatList, { ListEmptyComponent: (!isLoadingActionFetchUserList && DataList.length == 0) && react_1.default.createElement(Text_1.default, { type: 'R', text: t('empty'), color: colors_1.default.black }), horizontal: false, numColumns: 1, data: DataList, keyExtractor: item => 'DataList' + item.id, refreshing: false, onRefresh: onHandleRefresh, renderItem: renderItem, onEndReachedThreshold: 0.01, showsVerticalScrollIndicator: false, showsHorizontalScrollIndicator: false, disableVirtualization: false, onEndReached: onLoadMore, contentContainerStyle: styles.styles, ListFooterComponent: () => {
            return isLoadingActionFetchUserList &&
                react_1.default.createElement(react_native_1.View, { style: { paddingBottom: react_native_responsive_screen_1.widthPercentageToDP(5), alignItems: 'center' } },
                    react_1.default.createElement(Text_1.default, { type: 'R', text: t('loading'), color: colors_1.default.black }));
        } });
};
const styles = {
    containerList: {
        paddingTop: react_native_responsive_screen_1.widthPercentageToDP(2),
        paddingBottom: react_native_responsive_screen_1.widthPercentageToDP(10),
        alignItems: 'center',
        justifyContent: 'center'
    }
};
exports.default = react_1.memo(UserList);
//# sourceMappingURL=index.js.map