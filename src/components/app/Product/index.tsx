import {FC, useContext} from 'react';

import * as React from 'react';
import {View, TouchableOpacity, StyleProp} from 'react-native';
import colors from './../../../constants/colors';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import MText from './../../global/elements/Text';
import {useTranslation} from 'react-i18next';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {productItem} from '../../../@types/product';
import {AuthContext} from '../../../context/AuthContext';
import {ProductContext} from '../../../context/ProductContext';

type UserType = {
  product: productItem;
};
const Product: FC<UserType> = ({product}) => {
  const {ifLogged} = useContext(AuthContext);
  const {ifInWishList, addRemoveFromWishList} = useContext(ProductContext);
  const {t} = useTranslation();

  const triggerFavoriteProduct = (product_: productItem) => {
    if (ifLogged()) {
      addRemoveFromWishList(product_);
    } else {
      alert(t('please_login'));
    }
  };
  return (
    <TouchableOpacity>
      <View style={styles.container as any}>
        <TouchableOpacity
          onPress={() => triggerFavoriteProduct(product)}
          style={styles.favoriteButton as any}>
          {ifInWishList(product) ? (
            <AntDesign name={'heart'} size={wp(5)} color={colors.red} />
          ) : (
            <AntDesign name={'hearto'} size={wp(5)} />
          )}
        </TouchableOpacity>

        <View style={{marginStart: wp(3)}}>
          <MText type={'R'} color={colors.black} bold text={product?.title} />

          {product?.description && (
            <MText
              type={'R_4'}
              color={colors.black}
              text={product?.description}
              moreStyle={{width: wp(70)}}
            />
          )}

          <MText
            type={'R'}
            color={colors.black}
            bold
            text={product?.price + '$'}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: wp(95),
    paddingVertical: wp(2),
    paddingHorizontal: wp(2),
    borderRadius: wp(3),
    borderWidth: 1,
    borderColor: colors.gray,
    flexDirection: 'row',
    marginBottom: wp(2),
  },
  containerCounters: {
    borderTopWidth: 1,
    borderTopColor: colors.gray,
    paddingTop: wp(2),
    flexDirection: 'row',
    width: wp(60),
    justifyContent: 'space-between',
    marginTop: wp(3),
  },

  favoriteButton: {
    backgroundColor: colors.white,
    width: wp(11),
    height: wp(11),

    borderRadius: wp(11),

    borderWidth: 1,
    borderColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
};
export default Product;
