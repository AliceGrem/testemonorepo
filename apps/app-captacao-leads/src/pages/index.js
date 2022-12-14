import { React } from '@monorepo/ui-components';

import { Layout, Products,ProductsAdditional,Seo, TopBanner } from '../components';
import Price from '../components/Price/Price';

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Venda Carros novos, usados e seminovos para comprar e vender - iCarros"/>
      <TopBanner />
      <Products />
      <Price />
      <ProductsAdditional />
    </Layout>
  );
};

export default IndexPage;
