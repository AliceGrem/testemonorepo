import { fonts,spacings } from '@monorepo/theme';
import styled from 'styled-components';

const StyledGridCarmaker = styled.div`
  display: flex;
  gap: ${spacings.layout.spacing3xs};
  flex-wrap: wrap;
  max-width: ${({ maxWidth }) => maxWidth || 'max-content'};
  font-size: ${fonts.sizes.font3xs};
`;
export default StyledGridCarmaker;
