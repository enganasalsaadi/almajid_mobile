import Layout from '../../components/template/layout';
import {useSelector} from 'react-redux';
import ProductList from '../../components/app/ProductList';
import {useTranslation} from 'react-i18next';
import * as React from 'react';

const WhislistScreen = () => {
  const {t} = useTranslation();

  const {favoriteProducts} = useSelector((state: any) => state.product);

  return (
    <Layout title={t('wish_list')} back>
      <ProductList
        data={favoriteProducts ? favoriteProducts : []}
        isLoading={false}
        status={''}
        keyExtractor={'wishlist'}
        error={''}
      />
    </Layout>
  );
};

export default WhislistScreen;
