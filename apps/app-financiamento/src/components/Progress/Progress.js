import { colors } from '@monorepo/theme';
import { Flex, Label, React } from '@monorepo/ui-components';

import { defaultProps, propTypes } from './constants';
import { StyledProgressBar, StyledProgressIndicator } from './style';

const Progress = ({ progress, error }) => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <StyledProgressBar>
        <StyledProgressIndicator progress={progress} error={error} />
      </StyledProgressBar>
      <Flex height="auto" width="100%" justifyContent="space-between" alignItems="center">
        <Label color={colors.neutral.colorDark} size="font2xs">
          Entrada
        </Label>
        <Label color={colors.neutral.colorDark} size="font2xs">
          Valor total
        </Label>
      </Flex>
    </Flex>
  );
};

Progress.propTypes = propTypes;
Progress.defaultProps = defaultProps;

export default Progress;
