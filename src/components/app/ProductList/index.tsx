import {FC} from 'react';
import * as React from 'react';
import {View, FlatList} from 'react-native';
import colors from './../../../constants/colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import MText from './../../global/elements/Text';
import Product from '../Product';
import {useTranslation} from 'react-i18next';
import {SUCCESS} from '../../../store/actionsType';
import {productItem} from './../../../@types/product'; 

type ProductListType = {
  data: productItem[];
  isLoading: boolean;
  status: string;
  keyExtractor: string;
  error: string | '';
};
const ProductList: FC<ProductListType> = ({
  data,
  isLoading,
  status,
  keyExtractor,
  error,
}) => {
  const {t} = useTranslation();

  const renderItem = ({item}: any) => {
    return <Product product={item} />;
  };

  return (
    <React.Fragment>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          paddingBottom: wp(3),
        }}>
        {error && <MText type={'R_3'} text={error} color={colors.red} />}
        <FlatList
          ListEmptyComponent={
            !isLoading &&
            data.length == 0 &&
            status === SUCCESS && (
              <MText type={'R'} text={t('empty')} color={colors.black} />
            )
          }
          horizontal={false}
          numColumns={1}
          data={data}
          keyExtractor={item => keyExtractor + item.product_id}
          refreshing={false}
          renderItem={renderItem}
          onEndReachedThreshold={0.01}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          disableVirtualization={false}
          ListFooterComponent={() => {
            return (
              isLoading && (
                <View style={{paddingBottom: wp(5), alignItems: 'center'}}>
                  <MText type={'R'} text={t('loading')} color={colors.black} />
                </View>
              )
            );
          }}
        />
      </View>
    </React.Fragment>
  );
};

export default ProductList;
