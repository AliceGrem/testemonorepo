import { colors } from '@monorepo/theme';
import { Flex, Link, React, Text } from '@monorepo/ui-components';
import { StaticImage } from 'gatsby-plugin-image';

import { facebookLink, youtubeLink } from './constants';
import {
  wrapperSocial,
} from './Social.module.scss';

const Social = () => {

  return (
    <Flex className={wrapperSocial} py={20} my={20}>
      <Text color={colors.neutral.colorWhite} fontSize={13}>Acompanhe nossas redes</Text>
      <Flex sx={{ gap: '30px'}}>
        <Link href={facebookLink} target="_blank">
          <StaticImage src="../../../images/facebook.svg" alt="Facebook"/>
        </Link>
        <Link href={youtubeLink} target="_blank">
          <StaticImage src="../../../images/youtube.svg" alt="Youtube" />
        </Link>
      </Flex>
    </Flex>
  )
};
export default Social;
