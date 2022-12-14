import { colors, spacings } from '@monorepo/theme';
import { Box, Flex, Icon, React } from '@monorepo/ui-components';

import { defaultProps, propTypes } from '../constants';
import { Addon, NavItem } from '../style';

const NavBarItem = ({ title, addon, divider, icon }) => {
  return (
    (addon && <Addon>{title}</Addon>) || (
      <NavItem divider={divider}>
        <Flex alignItems="center" justifyContent="center">
          {icon && (
            <Box mr={spacings.margin.spacing3xs}>
              <Icon name={icon} stroke={colors.neutral.colorWhite} size="sm" />
            </Box>
          )}
          {title}
        </Flex>
      </NavItem>
    )
  );
};

NavBarItem.propTypes = propTypes;
NavBarItem.defaultProps = defaultProps;

export default NavBarItem;
