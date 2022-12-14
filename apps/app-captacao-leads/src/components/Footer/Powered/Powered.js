import { Flex, Logo, React,Text } from '@monorepo/ui-components';
import { StaticImage } from 'gatsby-plugin-image';

const Powered = () => {

  return (
    <Flex backgroundColor="#FFF" justifyContent="space-between" sx={{ padding: '10px 5%'}}>
      <Logo width="127px" name="icarros-azul" title="iCarros" />

      <Flex alignItems="center" sx={{ gap: '10px'}}>
        <Text>uma empresa do</Text>
        <StaticImage src="../../../images/Itau.svg" alt="Uma empresa do Itaú"/>
      </Flex>
    </Flex>
  )
};
export default Powered;
