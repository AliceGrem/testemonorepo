import { fetch, requestOption } from '@monorepo/utils';

export const getAddressByZipcode = zipCode =>
  fetch(
    requestOption({
      url: `/address/search/${zipCode}`,
      method: 'GET',
    })
  );

export const getStates = () =>
  fetch(
    requestOption({
      url: `${process.env.REACT_APP_UTILS_API}/states`,
      method: 'GET',
    })
  );

export const getCitiesByState = state =>
  fetch(
    requestOption({
      url: `${process.env.REACT_APP_UTILS_API}/states/${state}/cities`,
      method: 'GET',
    })
  );
