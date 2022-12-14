import { border, colors, fonts, spacings, utils } from '@monorepo/theme';
import { R } from '@monorepo/utils';
import styled from 'styled-components';

import { setFontColorByState } from './utils';

const getFontSize = fontSize => fonts.sizes[fontSize] || R.head(fonts.sizes);

export const StyledInput = styled.input`
  border: ${border.style.none};
  outline: none;
  font-family: ${fonts.family.fontSans};
  font-size: ${({ fontSize }) => getFontSize(fontSize)};
  padding: initial;
  padding-bottom: ${spacings.padding.spacing4xs};
  margin-top: ${spacings.margin.spacing3xs};
  width: ${utils.width.full};
  color: ${({ disabled, readOnly }) => setFontColorByState(disabled, readOnly)};
  background-color: ${({ disabled }) => disabled && colors.transparent};
  cursor: ${({ disabled, readOnly }) => (disabled || readOnly ? 'default' : 'auto')};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${utils.width.full};
  gap: ${spacings.margin.spacing4xs};
  background: ${colors.Input.background};
  margin-top: ${spacings.margin.spacing3xs};
`;
