import {createContext, FC, ReactNode} from 'react';
import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ProductContextType, productItem} from '../@types/product';
import {
  saveFavoritesProductsRequest,
  setFavoriteProducts,
} from '../store/product/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ProductContext = createContext<ProductContextType | null>(null);

type ProductProviderType = {
  children: ReactNode;
};
const ProductProvider: FC<ProductProviderType> = ({children}) => {
  const dispatch = useDispatch();
  const {favoriteProducts} = useSelector((state: any) => state.product);

  const ifInWishList = (product: productItem) => {
    return favoriteProducts.find(
        (      e: { product_id: string; }) => parseInt(e.product_id) === product.product_id,
    );
  };

  const addRemoveFromWishList = (product_: productItem) => {
    if (favoriteProducts.find((e: { product_id: number; }) => e.product_id === product_.product_id)) {
      let FavoriteList = favoriteProducts;
      FavoriteList = FavoriteList.filter(
          (        e: { product_id: number; }) => e.product_id !== product_.product_id,
      );
      dispatch(setFavoriteProducts([]));
      dispatch(setFavoriteProducts(FavoriteList));
      // dispatch(saveFavoritesProductsRequest(FA));
      AsyncStorage.setItem('favorite_products', JSON.stringify(FavoriteList));
      dispatch(
        saveFavoritesProductsRequest({
          ids: FavoriteList.map(function (e: { product_id: any; }) {
            return e.product_id;
          }).join(','),
        }),
      );
    } else {
      let FavoriteList = favoriteProducts;
      FavoriteList.push({
        product_id: product_.product_id,
        title: product_.title,
        description: product_.description,
        price: product_.price,
      });
      dispatch(setFavoriteProducts([]));

      dispatch(setFavoriteProducts(FavoriteList));

      AsyncStorage.setItem('favorite_products', JSON.stringify(FavoriteList));
      dispatch(
        saveFavoritesProductsRequest({
          ids: FavoriteList.map(function (e: { product_id: any; }) {
            return e.product_id;
          }).join(','),
        }),
      );
    }
  };

  return (
    <ProductContext.Provider value={{ifInWishList, addRemoveFromWishList}}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
