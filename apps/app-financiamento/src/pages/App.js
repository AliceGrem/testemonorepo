import { GlobalStyles } from '@monorepo/theme';
import { BrowserRouter, CoreProvider, React, useEffect, useState } from '@monorepo/ui-components';
import { api, GTM } from '@monorepo/utils';

import { FlowRouter, Wizard } from '../components';
import { DESKTOP_MIN_WIDTH } from '../components/Wizard/constants';
import DesktopTemplate from '../templates/DesktopTemplate';
import MobileTemplate from '../templates/MobileTemplate';
import { GTM_ID } from '../utils';

GTM.start(GTM_ID);

const RouterChildren = () => {
  const [isDesk, setDesk] = useState();
  const handleWindowSizeChange = () => {
    if (typeof window === 'undefined') return;
    const isDesk = window && window.innerWidth >= DESKTOP_MIN_WIDTH;
    setDesk(isDesk);
  };
  useEffect(() => {
    handleWindowSizeChange();
  }, []);

  if (isDesk) {
    return (
      <DesktopTemplate>
        <FlowRouter />
      </DesktopTemplate>
    );
  }
  return (
    <MobileTemplate>
      <FlowRouter />
    </MobileTemplate>
  );
};

const App = () => {
  return (
    <CoreProvider api={api}>
      <GlobalStyles />
      <BrowserRouter>
        <Wizard routeSwitch={() => RouterChildren()} />
      </BrowserRouter>
    </CoreProvider>
  );
};

export default App;
