import { TagManager } from '@monorepo/ui-components';

const pushDataLayerEvent = (category, action, label, value) =>
  window?.dataLayer.push({
    event: 'event',
    eventProps: {
      category,
      action,
      label,
      value,
    },
  });

const pushManyDataLayerEvents = events =>
  events?.map(({ category, action, label, value }) =>
    pushDataLayerEvent(category, action, label, value)
  );

const pushDataLayerPageview = () =>
  window?.dataLayer.push({
    event: 'pageview',
  });

const pushDataLayerCustomPageview = (url, title) =>
  window?.dataLayer.push({
    event: 'pageview',
    page: {
      url,
      title,
    },
  });

const pushDataLayerVariable = (key, value) => window?.dataLayer.push({ [key]: value });

const pushManyVariables = variables =>
  variables?.map(({ key, value }) => pushDataLayerVariable(key, value));

export const GTM = {
  start: gtmId => TagManager.initialize({ gtmId }),
  addEvent: ({ category, action, label, value }) =>
    pushDataLayerEvent(category, action, label, value),
  addManyEvents: events => pushManyDataLayerEvents(events),
  addPageview: () => pushDataLayerPageview(),
  addCustomPageview: ({ url, title }) => pushDataLayerCustomPageview(url, title),
  addVariable: ({ key, value }) => pushDataLayerVariable(key, value),
  addManyVariables: variables => pushManyVariables(variables),
};
