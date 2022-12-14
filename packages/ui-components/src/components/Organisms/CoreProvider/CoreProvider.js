import { baseTheme } from '@monorepo/theme';
import React, { useReducer } from 'react';
import { ThemeProvider } from 'styled-components';

import { ApiProvider, LayoutProvider } from '~Organisms';

const CoreProvider = ({ children, modifier, api, token }) => {
  const defaultTheme = baseTheme();

  const [state, dispatch] = useReducer(modifier, defaultTheme);

  return (
    <LayoutProvider value={{ state, dispatch }}>
      <ThemeProvider theme={state.theme}>
        <ApiProvider api={api} token={token}>
          {children}
        </ApiProvider>
      </ThemeProvider>
    </LayoutProvider>
  );
};

export default CoreProvider;
