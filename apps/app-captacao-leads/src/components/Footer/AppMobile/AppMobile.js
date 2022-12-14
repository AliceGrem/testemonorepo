import { colors } from '@monorepo/theme';
import { Box, Flex, React,Text } from '@monorepo/ui-components';
import { StaticImage } from 'gatsby-plugin-image';

import {
  appWrapper,
  downloadApp
} from './AppMobile.module.scss';

const AppMobile = () => {

  return (
    <Box className={appWrapper} >
      <Text className={downloadApp} color={colors.neutral.colorWhite}>Baixe nosso aplicativo</Text>

      <Flex alignItems="center" justifyContent="space-between" sx={{ gap: '10px'}}>
        <StaticImage src="../../../images/android.svg" alt="Disponível no Google Play"/>
        <StaticImage src="../../../images/ios.svg" alt="Baixe agora na App Store"/>
      </Flex>
    </Box>
  )
};
export default AppMobile;
