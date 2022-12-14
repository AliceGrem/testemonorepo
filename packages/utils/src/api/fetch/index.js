import axios from 'axios';

import { CONFIG } from './constants';

export const fetch = axios.create({
  baseURL: `${CONFIG.protocol}://${CONFIG.host}/${CONFIG.version}`,
});

export const requestOption = ({ ...req }) => {
  return {
    ...req,
    headers: {
      ...req.headers,
      // Authorization: `Bearer ${token}`,
    },
  };
};
