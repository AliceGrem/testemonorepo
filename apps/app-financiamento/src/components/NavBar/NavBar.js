import { colors, spacings, utils } from '@monorepo/theme';
import { Box, Flex, Logo, React, useNavigate } from '@monorepo/ui-components';

import { ROOT_PAGE } from '../../pages/constants';
import { NavBarButton, NavBarItem } from './components';
import { defaultProps, NAVBAR_ADDONS, NAVBAR_ITEMS, propTypes } from './constants';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Box
      height={spacings.layout.spacingXl}
      width={utils.width.full}
      backgroundColor={colors.brandcolor.primaryMedium}
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        height={utils.height.full}
        p={`0 ${spacings.padding.spacingLg}`}
      >
        <Box
          width={spacings.layout.spacing3xl}
          mr="auto"
          sx={{ cursor: 'pointer' }}
          onClick={() => navigate(ROOT_PAGE)}
        >
          <Logo name="icarros" />
        </Box>
        <Flex
          height={utils.height.full}
          alignItems="center"
          mr="auto"
          sx={{ gap: spacings.layout.spacing2xs }}
        >
          {NAVBAR_ITEMS.map((title, index) => {
            return <NavBarItem title={title} key={`navbarItem-index-${index}`} />;
          })}
          {NAVBAR_ADDONS.map((title, index) => {
            return <NavBarItem title={title} key={`navbarAddon-index-${index}`} addon={true} />;
          })}
          <NavBarItem title="App" divider icon="celular" />
          <NavBarButton text="login" />
        </Flex>
      </Flex>
    </Box>
  );
};

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;

export default NavBar;
