import { colors, spacings, utils } from '@monorepo/theme';
import { Flex } from '@monorepo/ui-components';
import styled from 'styled-components';

export const Container = styled(Flex)`
  width: ${utils.width.full};
  border-top: 1px solid ${colors.neutral.colorLight};
  border-bottom: 1px solid ${colors.neutral.colorLight};
  padding: ${spacings.padding.spacingXs} 0;
  gap: ${spacings.layout.spacingXs};
  justify-content: space-between;
  align-items: center;
`;
