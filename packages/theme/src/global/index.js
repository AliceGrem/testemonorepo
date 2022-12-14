import { createGlobalStyle } from 'styled-components';

import baseTheme from '../baseTheme';

const defaultTheme = baseTheme();

export default createGlobalStyle`
  @import url('./normalize.css');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,300');
  @import baseTheme from '../baseTheme';
  html { font-family: "Open Sans", sans-serif; fonti-size: 16px }

  body {
    background: ${defaultTheme.colors.body.background};
    color: ${defaultTheme.colors.body.text};
  }

  a {
    text-decoration: none;
  }
`;
