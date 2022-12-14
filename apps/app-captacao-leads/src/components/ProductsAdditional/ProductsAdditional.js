import { Box, Icon, React, Text } from '@monorepo/ui-components';

import { Title  } from '../../components';
import { ADDITIONAL_PRODUCTS, TITLE } from './const';
import {
  productBox,
  productPrice,
  productsWrapper,
  productTitle,
} from './Productsadditional.module.scss';

const ProductsAdditional = () => {

  return (
    <Box py={50}>
      <Title id="plans">{TITLE}</Title>
      <Box className={productsWrapper}>
        {ADDITIONAL_PRODUCTS.map(product => (
          <Box key={product.name} className={productBox}>
             <Icon
              name={product.icon}
              size="lg"
              title={product.title}
            />
            <Text mt={10} className={productTitle}>{product.title}</Text>
            <Text className={productPrice}><span>R$</span>{product.price}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  )
};
export default ProductsAdditional;
