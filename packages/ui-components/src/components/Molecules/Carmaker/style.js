import { spacings, utils } from '@monorepo/theme';
import styled from 'styled-components';

const StyledCarmaker = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: self-end;
  justify-content: center;
  row-gap: ${spacings.layout.spacing3xs};
  white-space: nowrap;
  height: ${({ height }) => height || utils.height.full};
  max-height: ${({ maxHeight }) => maxHeight || 'initial'};
  width: ${({ width }) => width || 'auto'};
  img {
    max-height: 80%;
  }
  span {
    position: relative;
    bottom: 0;
  }
`;

export default StyledCarmaker;
