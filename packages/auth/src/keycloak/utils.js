import Keycloak from 'keycloak-js';

import { LOGIN_PATH } from './constants';

export const onKeycloakEvent = (instance, event) => {
  if (event === 'onReady' && !instance.authenticated) {
    if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'development') {
      window.location.href = LOGIN_PATH;
    } else {
      instance.login();
    }
  }
};

export const instance = new Keycloak(process.env.REACT_APP_KEYCLOAK);
