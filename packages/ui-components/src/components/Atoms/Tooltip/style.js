import { border, colors, fonts, spacings } from '@monorepo/theme';
import styled from 'styled-components';

export const StyledTooltip = styled.div`
  position: absolute;
  text-align: center;
  font-family: ${fonts.family.fontSans};
  color: ${colors.neutral.colorWhite};
  background-color: ${colors.neutral.colorDarkest};
  border-radius: ${border.width.borderMd};
  padding: ${spacings.padding.spacing3xs};
  margin-top: ${spacings.margin.spacingLg};
  cursor: pointer;
`;
