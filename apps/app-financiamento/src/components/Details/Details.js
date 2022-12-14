import { colors } from '@monorepo/theme';
import { Flex, Icon, React } from '@monorepo/ui-components';

import { defaultProps, propTypes } from './constants';
import { StyledDetails, StyledTitle } from './style';

const Details = ({ title, icon, last, onClick }) => {
  return (
    <StyledDetails last={last} onClick={onClick}>
      <Flex alignItems="center" height="100%">
        <StyledTitle>{title}</StyledTitle>
        <Icon name={icon} stroke={colors.neutral.colorMedium} size="sm" />
      </Flex>
    </StyledDetails>
  );
};

Details.propTypes = propTypes;
Details.defaultProps = defaultProps;

export default Details;
