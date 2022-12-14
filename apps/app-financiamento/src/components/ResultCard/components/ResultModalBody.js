import { colors, spacings, utils } from '@monorepo/theme';
import { Flex, Label, React } from '@monorepo/ui-components';

import { propTypes } from '../constants';

const ResultModalBody = ({ title, message }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height={utils.height.full}
      sx={{ gap: spacings.layout.spacingXs }}
    >
      <Label size="fontLg" color={colors.neutral.colorDark} textAlign="center">
        {title}
      </Label>
      <Label size="fontXs" color={colors.neutral.colorDark} textAlign="center">
        {message}
      </Label>
    </Flex>
  );
};

ResultModalBody.propTypes = propTypes;

export default ResultModalBody;
