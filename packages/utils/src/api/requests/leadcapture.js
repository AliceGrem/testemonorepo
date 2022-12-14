import { fetch, requestOption } from '@monorepo/utils';


export const postLead = data =>
  fetch(
    requestOption({
      url: `${process.env.REACT_APP_SEND_MAIL}adesaoservice/adesao/new`,
      method: 'POST',
      data,
    })
  );
