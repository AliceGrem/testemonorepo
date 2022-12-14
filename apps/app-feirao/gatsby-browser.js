import { React, CoreProvider } from '@monorepo/ui-components';
import { baseTheme } from '@monorepo/theme';

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
export const wrapRootElement = ({ element }) => (
  <CoreProvider theme={baseTheme}>{element}</CoreProvider>
);
