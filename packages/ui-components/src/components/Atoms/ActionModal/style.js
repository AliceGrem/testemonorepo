import { border, colors, effects, spacings, utils } from '@monorepo/theme';
import styled from 'styled-components';

export const Dialog = styled.div`
  border-radius: ${border.radius.borderMd};
  padding: ${spacings.padding.spacingLg};
  background-color: ${colors.neutral.colorWhite};
  width: ${({ width }) => width};
  gap: ${spacings.layout.spacing2xs};
  display: flex;
  flex-direction: column;
  box-shadow: ${effects.boxShadow.dropShadowMd};
`;

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.neutral.colorDark};
  opacity: ${effects.opacity.opacity7};
  width: ${utils.width.full};
  height: ${utils.height.full};
  position: fixed;
`;
