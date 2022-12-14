export const CONFIG = {
  protocol: process.env.REACT_APP_API_HTTP || 'https',
  host: process.env.REACT_APP_API_HOST,
  version: process.env.REACT_APP_API_VERSION || '',
};
