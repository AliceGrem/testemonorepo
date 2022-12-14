import { sortAlphabeticallyLabelValues } from '../../utils/sortOptions';

export const cleanStringValue = string =>
  string
    ?.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Zs]/g, '')
    .toLowerCase();

export const getAddressByZipcode = async (zipcode, api) => {
  try {
    const { data } = await api.getAddressByZipcode(zipcode);
    return data;
  } catch (error) {
    console.error(error);
    return;
  }
};

export const setAddressFieldsValues = (data, states, formik) => {
  const { streetAddress, cityDescription, uf, district } = data;

  const state = states.find(state => state.value === uf);
  const city = { label: cityDescription, value: cleanStringValue(cityDescription) };

  formik.setFieldValue('street', streetAddress);
  formik.setFieldValue('district', district);
  formik.setFieldValue('state', state);
  formik.setFieldValue('city', city);
};

export const formatStateOptions = data => {
  const formattedStates = data?.map(({ nome, sigla }) => {
    return {
      label: nome,
      value: sigla,
    };
  });

  return formattedStates.sort(sortAlphabeticallyLabelValues);
};

export const formatCityOptions = data => {
  const formattedCities = data?.map(({ nome, id }) => {
    return {
      label: nome,
      value: id,
    };
  });

  return formattedCities.sort(sortAlphabeticallyLabelValues);
};
