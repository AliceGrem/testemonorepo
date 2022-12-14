import baseSpacings from './baseSpacings';

export const spacings = {
  ...baseSpacings,
  AdLink: {
    Content: {
      width: '10.625rem',
      height: '10.625rem',
    },
  },
  CarInfo: {
    Logo: {
      width: '4rem',
      height: '4rem',
    },
  },
  Textarea: {
    width: '50rem',
  },
  Wizard: {
    maxWidth: '50rem',
    scrollbar: '6px',
  },
  Dropdown: {
    scrollbar: { height: '35%', width: '4px' },
  },
};
