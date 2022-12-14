import { border } from './border';
import { colors } from './colors';

export const formControl = {
  states: {
    enabled: {
      borderBottom: `${border.width.borderXs} ${border.style.solid} ${
        colors.FormControl.text.enabled
      }`,
    },

    disabled: {
      borderBottom: `${border.width.borderXs} ${border.style.solid} ${
        colors.FormControl.text.disabled
      }`,
    },

    error: {
      borderBottom: `${border.width.borderXs} ${border.style.solid} ${
        colors.FormControl.text.error
      }`,
    },

    locked: {
      borderBottom: `${border.width.borderXs} ${border.style.solid} ${
        colors.FormControl.text.locked
      }`,
    },

    success: {
      borderBottom: `${border.width.borderXs} ${border.style.solid} ${
        colors.FormControl.text.success
      }`,
    },

    warning: {
      borderBottom: `${border.width.borderXs} ${border.style.solid} ${
        colors.FormControl.text.warning
      }`,
    },
  },
};
