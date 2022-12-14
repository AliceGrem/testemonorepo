import { border, colors, effects, spacings, utils } from '@monorepo/theme';
import styled from 'styled-components';

export const StyledResultCard = styled.div`
  width: ${utils.width.full};
  border-top-right-radius: ${border.radius.border2xl};
  border-top-left-radius: ${border.radius.border2xl};
  border-bottom-right-radius: ${border.radius.borderXl};
  border-bottom-left-radius: ${border.radius.borderXl};
  background-color: ${colors.neutral.colorWhite};
  box-shadow: ${effects.boxShadow.dropShadowMd};
`;

export const StyledDownPaymentCard = styled.div`
  background: ${({ background }) => background};
  background-size: cover;
  min-height: 50%;
  padding: ${spacings.padding.spacingMd};
`;
