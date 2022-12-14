import { api } from '@monorepo/utils';

export const getListModels = async (...params) => {
  try {
    const data = await api.getModels(...params);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const debounceFilter = (functionFilter, filterTimeout) => {
  clearTimeout(filterTimeout);
  setTimeout(() => {
    functionFilter();
  }, 500)
}

export const textFilterGeneric = (functionFilter, event) => {
  debounceFilter(() => functionFilter(event));
};
