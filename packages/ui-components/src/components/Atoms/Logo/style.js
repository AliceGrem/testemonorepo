import { utils } from '@monorepo/theme';
import styled from 'styled-components';

const StyledImg = styled.img`
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || utils.width.full};
`;

export default StyledImg;
