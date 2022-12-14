import { useAuth } from '@monorepo/auth';
import { GlobalStyles } from '@monorepo/theme';
import { BrowserRouter, CoreProvider, React } from '@monorepo/ui-components';
import { api } from '@monorepo/utils';

import FlowRouter from '../components/FlowRouter/FlowRouter';
import DesktopTemplate from '../templates/DesktopTemplate/DesktopTemplate';
import PageTemplate from '../templates/PageTemplate/PageTemplate';

const App = () => {
  const { token } = useAuth();
  if (!token) return null; //add loader
  return (
    <CoreProvider api={api} token={token}>
      <GlobalStyles />
      <BrowserRouter>
        <PageTemplate>
          <DesktopTemplate>
            <FlowRouter />
          </DesktopTemplate>
        </PageTemplate>
      </BrowserRouter>
    </CoreProvider>
  );
};

export default App;
