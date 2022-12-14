import { border } from '@monorepo/theme';
import styled from 'styled-components';

import { sizes, types } from './constants';

const getButtonSize = (size) => sizes[size];
const getButtonType = (type) => types[type];

const StyledButton = styled.button`
  ${({ size }) => getButtonSize(size)};
  ${({ type }) => getButtonType(type)};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${border.radius.borderMd};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: ${({ maxWidth }) => maxWidth};
  width: ${({ width }) => width};
`;

export default StyledButton;
