import { React, render } from '@monorepo/ui-components';

import App from './pages/App';

const renderApp = () => {
  render(<App />, document.getElementById('root'));
};

renderApp();
