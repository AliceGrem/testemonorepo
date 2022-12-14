import { fetch, requestOption } from '@monorepo/utils';

export const postPreSimulation = data =>
  fetch(
    requestOption({
      url: 'transaction/leads',
      method: 'POST',
      data,
    })
  );

export const postTransactionSimulation = data =>
  fetch(
    requestOption({
      url: 'transaction/simulation',
      method: 'POST',
      data,
    })
  );

export const putTransactionSimulation = data => {
  return fetch(
    requestOption({
      url: 'transaction/simulation',
      method: 'PUT',
      data,
    })
  );
};
