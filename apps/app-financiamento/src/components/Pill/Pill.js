import { colors, spacings } from '@monorepo/theme';
import { Box, Flex, Icon, Label, React } from '@monorepo/ui-components';

import { defaultProps, propTypes } from './constants';
import StyledPill from './style';

const Pill = ({ label, icon, active }) => {
  return (
    <StyledPill active={active}>
      <Flex alignItems="center" width={1} height="100%">
        <Icon
          name={icon}
          stroke={active ? colors.brandcolor.primaryMedium : colors.neutral.colorWhite}
          size="xs"
        />
        <Box ml={active && spacings.margin.spacingXs}>
          {active && <Label color={colors.brandcolor.primaryMedium}>{label}</Label>}
        </Box>
      </Flex>
    </StyledPill>
  );
};

Pill.propTypes = propTypes;
Pill.defaultProps = defaultProps;

export default Pill;
