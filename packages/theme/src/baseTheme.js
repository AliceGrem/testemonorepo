import { border } from './border';
import { breakpoints } from './breakpoints';
import { buttons } from './buttons';
import { checkbox } from './checkbox';
import { colors } from './colors';
import { effects } from './effects';
import { fonts } from './fonts';
import { formControl } from './formControl';
import { spacings } from './spacings';
import { transitions } from './transitions';
import { types } from './types';
import { utils } from './utils';

export {
  border,
  breakpoints,
  buttons,
  checkbox,
  colors,
  effects,
  fonts,
  formControl,
  spacings,
  transitions,
  types,
  utils,
};

const baseTheme = (
  theme = {
    border,
    breakpoints,
    buttons,
    colors,
    checkbox,
    effects,
    fonts,
    spacings,
    transitions,
    types,
    formControl,
  }
) => ({
  theme,
  border,
  breakpoints,
  buttons,
  colors,
  checkbox,
  effects,
  fonts,
  spacings,
  transitions,
  types,
  formControl,
});

export default baseTheme;
