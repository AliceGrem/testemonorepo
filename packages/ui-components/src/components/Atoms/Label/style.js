import { colors, fonts, types } from '@monorepo/theme';
import { R } from '@monorepo/utils';
import styled from 'styled-components';

const getFontSize = size => fonts.sizes[size] || R.head(fonts.sizes);

const StyledLabel = styled.span`
  font-family: ${fonts.family.fontSans};
  font-size: ${({ size }) => getFontSize(size)};
  color: ${({ color }) => color || colors.Label.default};
  text-align: ${({ textAlign }) => textAlign || 'left'}
    ${({ enabled }) => enabled && { ...types.labelEnabled }};
  ${({ active }) => active && { ...types.labelActive }};
`;

export default StyledLabel;
