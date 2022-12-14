import { React, Flex } from '@monorepo/ui-components';
import {
  Layout,
  Seo,
  BoxBenefits,
  HintsGrid,
  TopBanner,
  CustomBanner,
  ProfilePicture,
  FacebookCover,
  DigitalKit,
} from '../components';

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Feirão" />
      <TopBanner />
      <Flex id="beneficios" sx={{ position: 'relative', top: -240 }} />
      <Flex width={1} justifyContent="center" flexWrap="wrap">
        <BoxBenefits />
      </Flex>
      <Flex id="dicas" sx={{ position: 'relative', top: -120 }} />
      <Flex pt={[34, 0]} width={1} justifyContent="center" flexWrap="wrap">
        <HintsGrid />
      </Flex>
      <Flex
        id="comunicacao-personalizada"
        pt={[34, 34, 34, 80]}
        width={1}
        justifyContent="center"
        flexWrap="wrap"
      >
        <CustomBanner />
      </Flex>
      <Flex px={3} pt={[34, 34, 34, 80]} width={1} justifyContent="center" flexWrap="wrap">
        <ProfilePicture />
      </Flex>
      <Flex
        p={3}
        height={280}
        sx={{ position: 'relative' }}
        width={1}
        justifyContent="center"
        flexWrap="wrap"
      >
        <FacebookCover />
      </Flex>
      <Flex pt={80} width={1} justifyContent="center" flexWrap="wrap">
        <DigitalKit />
      </Flex>
    </Layout>
  );
};

export default IndexPage;
