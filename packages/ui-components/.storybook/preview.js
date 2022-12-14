import React from 'react';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from '@monorepo/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'colorLightest',
    values: [
      { name: 'colorLightest', value: '#fafafa' },
      { name: 'colorDark', value: '#3c3c3c' },
    ],
  },
};

export const decorators = [
  Story => (
    <ThemeProvider theme={baseTheme}>
      <center>
        <Story />
      </center>
    </ThemeProvider>
  ),
];
