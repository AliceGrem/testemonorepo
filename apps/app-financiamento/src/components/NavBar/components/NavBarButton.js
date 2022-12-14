import { React } from '@monorepo/ui-components';

import { defaultProps, propTypes } from '../constants';
import { StyledButton } from '../style';

const NavBarButton = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

NavBarButton.propTypes = propTypes;
NavBarButton.defaultProps = defaultProps;

export default NavBarButton;
