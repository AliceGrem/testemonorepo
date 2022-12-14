import { Box, Flex, Icon, React,Text } from '@monorepo/ui-components';

import { Title } from '../../components';
import { LIST_PRODUCTS, TITLE } from './const';
import {
  gridProducts,
  iconStyle,
  productBox,
} from './Products.module.scss';

const Products = () => {
  return (
    <Box py={50}>

      <Title>{TITLE}</Title>
      <Box className={gridProducts} py={30}>
        {LIST_PRODUCTS.map(product => (
          <Flex className={productBox} key={product.title}>
            <Icon
              className={iconStyle}
              name={product.icon}
              size="lg"
              title={product.title}
            />
            <Text fontSize={16} fontWeight={800}>{product.title}</Text>
            <Text fontSize={14}>{product.description}</Text>
          </Flex>
        ))}
      </Box>
    </Box>
  )
};
export default Products;
