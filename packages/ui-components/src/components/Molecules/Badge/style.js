import { border } from '@monorepo/theme';
import styled from 'styled-components';

import { SIZES } from './constants';

const StyledBadge = styled.div`
  width: ${({ size }) => SIZES[size]};
  height: ${({ size }) => SIZES[size]};
  border-radius: ${border.radius.borderCircle};
  border: ${border.width.borderSm} ${border.style.solid} ${({ colorBorder }) => colorBorder};
  background: ${({ colorBackground }) => colorBackground};
  padding: 0.5rem;
  box-sizing: initial;
  cursor: pointer;
`;

export default StyledBadge;
