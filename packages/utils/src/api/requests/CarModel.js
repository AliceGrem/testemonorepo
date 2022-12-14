import { fetch, requestOption } from '@monorepo/utils';

export const getModels = (filterModel, filterYear, token) => {
  return fetch(
    requestOption({
      url: `${process.env.REACT_APP_LIST_MODELS}versions?model=${filterModel}&year=${filterYear}`,
      method: 'GET',
      token,
    })
  );
};

export const getVehicles = (vehicleId, token) => {
  return fetch(
    requestOption({
      url: `${process.env.REACT_APP_LIST_MODELS}versions/${vehicleId}`,
      method: 'GET',
      token,
    })
  );
};
