import { fetch, requestOption } from '@monorepo/utils';

export const getMake = () =>
  fetch(
    requestOption({
      url: `${process.env.REACT_APP_CAR_SEARCH_API}/v1/0/makes`,
      method: 'GET',
    })
  );

export const getModel = makeId =>
  fetch(
    requestOption({
      url: `${process.env.REACT_APP_CAR_SEARCH_API}/v1/0/makes/${makeId}/models`,
      method: 'GET',
    })
  );

export const getVersion = ({ modelId, modelYear }) =>
  fetch(
    requestOption({
      url: `${process.env.REACT_APP_CAR_SEARCH_API}/trim/${modelId}/${modelYear}`,
      method: 'GET',
    })
  );
