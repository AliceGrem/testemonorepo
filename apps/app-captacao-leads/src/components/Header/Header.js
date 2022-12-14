import {
  Box,
  Link,
  Logo,
  React,
} from '@monorepo/ui-components';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import { FormModal } from '../';
import { header, nav } from './Header.module.scss';
const Header = () => {
  const breakpoints = useBreakpoint();

  return (
    <header className={header}>
      <Box className={nav} alignItems="center" justifyContent="center" >
        <Link>
          <Logo width="127px" name="icarros-azul" title="iCarros" />
        </Link>

        {breakpoints.sm === false && (
          <FormModal color="#0071CE" linkMargin={0} />
        )}
      </Box>
    </header>
  );
};
export default Header;
