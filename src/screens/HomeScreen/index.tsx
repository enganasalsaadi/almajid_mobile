import {useEffect, useState} from 'react';
import Layout from '../../components/template/layout';
import {useTranslation} from 'react-i18next';
import ProductList from '../../components/app/ProductList';
import {TouchableOpacity, View} from 'react-native';
import MTextInput from '../../components/global/elements/TextInput';
import {
  getProductsRequest,
  setSearchProductName,
} from '../../store/product/actions';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import MButton from '../../components/global/elements/Button';
import colors from '../../constants/colors';
import MText from '../../components/global/elements/Text';
import {useDispatch, useSelector} from 'react-redux';
import {useIsConnected} from 'react-native-offline';
import * as React from 'react';

const orderByOptions = [
  {
    id: 1,
    name: 'Default',
    value: '&order_by=products.product_id&order=DESC',
  },
  {
    id: 2,
    name: 'Price - Cheapest',
    value: '&order_by=products.price&order=ASC',
  },
  {
    id: 3,
    name: 'Price - Most expensive',
    value: '&order_by=products.price&order=DESC',
  },
  {
    id: 4,
    name: 'Newest',
    value: '&order_by=products.created_at&order=DESC',
  },
  {
    id: 5,
    name: 'Oldest',
    value: '&order_by=products.created_at&order=ASC',
  },
];
const HomeScreen = () => {

  const {t} = useTranslation();

  const dispatch = useDispatch();
  const {
    isLoadingActionProducts,
    statusProducts,
    errorProducts,
    productList,
    searchProductName,
  } = useSelector((state: any) => state.product);
  const [order, setOrder] = useState(null);
 

  const getData = () => {
    let orderBy = order ? order.value : '';
    const getParams = '?search=' + searchProductName + orderBy;
    dispatch(getProductsRequest({getParams}));
  };

  useEffect(() => {
    if (order) {
      getData();
    }
  }, [order]);

  return (
    <Layout title={t('search_screen')}>
      <View style={styles.container as any}>
        <MTextInput
          onChangeText={(value: string) => {
            dispatch(setSearchProductName(value));
          }}
          value={searchProductName}
          moreStyle={{
            width: wp(60),
          }as any} 
          placeholder={t('enter_name')}
        />
        <MButton
          style={{
            width: wp(30),
            marginStart: wp(4),
          }}
          onPress={() => getData()}
          text={t('search')}
          loading={isLoadingActionProducts}
        />
      </View>

      <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
        {orderByOptions.map((e, i) => {
          return (
            <TouchableOpacity
              key={'order' + i}
              onPress={() => {
                setOrder(e);
              }}
              style={[
                styles.orderOption,
                {borderColor: order?.id === e.id ? colors.black : colors.gray},
              ]}>
              <MText type={'R_3'} text={e.name} color={colors.black} />
            </TouchableOpacity>
          );
        })}
      </View>

      <ProductList
        data={productList ? productList : []}
        isLoading={isLoadingActionProducts}
        status={statusProducts}
        error={errorProducts}
        keyExtractor={'product_list'}
      />
    </Layout>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: wp(2),
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    paddingBottom: wp(4),
  },

  orderOption: {
    marginHorizontal: wp(2),
    borderWidth: 1,
    backgroundColor: colors.white,
    paddingHorizontal: wp(2),
    paddingVertical: wp(1),
    borderRadius: wp(2),
    marginBottom: wp(2),
  },
};
export default HomeScreen;
