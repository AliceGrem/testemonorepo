import {
  instance,
  KEYCLOAK_PROVIDER_INITCONFIG,
  KeycloakProvider,
  onKeycloakEvent,
} from '@monorepo/auth';
import { React, render } from '@monorepo/ui-components';

import App from './pages/App';
const renderApp = () => {
  render(
    <KeycloakProvider
      authClient={instance}
      initOptions={KEYCLOAK_PROVIDER_INITCONFIG}
      onEvent={e => onKeycloakEvent(instance, e)}
    >
      <App />
    </KeycloakProvider>,
    document.getElementById('root')
  );
};

renderApp();
