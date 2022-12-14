import { Box, React } from '@monorepo/ui-components';

import {  AppMobile, Links, Powered, Social, Terms } from '../Footer';
import {
  backgroundFooter,
  footer,
} from './Footer.module.scss';

const Footer = () => {

  return (
    <footer className={backgroundFooter}>
      <AppMobile />
      <Box className={footer}>
        <Links />
        <Social  />
        <Terms />
      </Box>
      <Powered />
    </footer>
  )
};
export default Footer;
