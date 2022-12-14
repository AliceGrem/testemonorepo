import { colors, spacings } from '@monorepo/theme';
import { Box, Flex, React } from '@monorepo/ui-components';

const Divider = () => {
  return (
    <Flex justifyContent="center" alignItems="center" width={1} mt={spacings.margin.spacingXs}>
      <Box height="1px" width={1} backgroundColor={colors.neutral.colorMedium} />
    </Flex>
  );
};

export default Divider;
