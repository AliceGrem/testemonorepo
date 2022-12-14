import { border } from './border';
import { colors } from './colors';

export const dropdown = {
  states: {
    active: {
      borderBottom: `${border.width.borderXs} ${border.style.solid} ${
        colors.Select.enabled
      }`,
    },

    disabled: {
      borderBottom: `${border.width.borderXs} ${border.style.solid} ${
        colors.Select.disabled
      }`,
      color: `${colors.neutral.colorLight}`,
      background: 'none',
    },

    enabled: {
      borderBottom: `${border.width.borderXs} ${border.style.solid} ${
        colors.Select.enabled
      }`,
    },

    error: {
      borderBottom: `${border.width.borderXs} ${border.style.solid} ${
        colors.Select.error
      }`,
    },

    locked: {
      borderBottom: `${border.width.borderXs} ${border.style.solid} ${
        colors.neutral.colorMedium
      }`,
      cursor: 'default',

      '&:hover': {
        borderColor: `${colors.neutral.colorMedium}`,
      },
    },

    selected: {
      borderBottom: `${border.width.borderXs} ${border.style.solid} ${
        colors.Select.enabled
      }`,
    },
  },
};
