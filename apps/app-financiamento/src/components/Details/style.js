import { border, colors, spacings } from '@monorepo/theme';
import styled from 'styled-components';

const StyledDetails = styled.div`
  height: ${spacings.layout.spacingXl};
  border-top: ${border.width.borderXs} ${border.style.solid} ${colors.neutral.colorLight};
  border-bottom: 1px solid ${({ last }) => (last ? colors.neutral.colorLight : colors.transparent)};
  cursor: pointer;
  &:hover {
    background-color: ${colors.neutral.colorLightest};
  }
`;

const StyledTitle = styled.span`
  color: ${colors.brandcolor.primaryMedium};
  margin-right: auto;
`;

export { StyledDetails, StyledTitle };
