import { border, colors, effects,spacings } from '@monorepo/theme';
import styled from 'styled-components';

const StyledCard = styled.div`
  padding: ${spacings.padding.spacingXs};
  background: ${colors.neutral.colorWhite};
  border-radius: ${border.radius.borderMd};
  box-shadow: ${effects.boxShadow.dropShadowMd};
  box-sizing: border-box;
  display: flex;
  width: fit-content;
`;

export default StyledCard;
