import { colors, fonts, spacings, utils } from '@monorepo/theme';
import { Flex, Label } from '@monorepo/ui-components';
import styled from 'styled-components';

const FlowHeaderContainer = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  margin: ${spacings.margin.spacingXs} 0;
  padding: 0 ${spacings.padding.spacingLg};
  width: ${utils.width.full};
`;

const StyledLabel = styled(Label)`
  @media screen and (max-width: 350px) {
    font-size: ${fonts.sizes.font3xs};
  }
  color: ${colors.neutral.colorDark};
  font-size: ${fonts.sizes.fontXs};
  font-weight: ${fonts.weight.fontSemiBold};
`;
export { FlowHeaderContainer, StyledLabel };
