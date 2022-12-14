import { colors } from '@monorepo/theme';
import { Box, Icon, React } from '@monorepo/ui-components';

import { defaultProps, propTypes } from './constants';
import { StyledCloseButtonContainer, StyledIcon } from './style';
import getIcon from './utils';

const Header = ({ modalType, onClose }) => {
  return (
    <Box width="100%">
      <StyledCloseButtonContainer>
        <Icon
          name="fechar"
          size="md"
          stroke={colors.brandcolor.primaryMedium}
          onClick={onClose}
          className="icon"
        />
      </StyledCloseButtonContainer>
      <StyledIcon>{getIcon(modalType)}</StyledIcon>
    </Box>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
