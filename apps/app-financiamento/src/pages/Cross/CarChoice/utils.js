import { Yup } from '@monorepo/ui-components';
import { dropdownDefaultValue, GTM, isValidSelection } from '@monorepo/utils';
import * as R from 'ramda';

import { FINANCING_BADGE_TEXT } from '../Result/constants';
import { TITLE } from './constants';

const sortOptionsBySearch = (a, b) => {
  if (a.numberOfSearchs < b.numberOfSearchs) return 1;
  if (a.numberOfSearchs > b.numberOfSearchs) return -1;
  return 0;
};

const getMakes = async api => {
  try {
    const { data } = await api.getMake();
    return formatOptions(data, sortOptionsBySearch);
  } catch (error) {
    console.error(error);
  }
};

const getModels = async (makeId, api) => {
  try {
    const { data } = await api.getModel(makeId);
    return formatOptions(data, sortOptions);
  } catch (error) {
    console.error(error);
  }
};

const getVersions = async ({ modelId, modelYear }, api) => {
  try {
    const { data } = await api.getVersion({ modelId, modelYear });
    return formatOptions(data);
  } catch (error) {
    console.error(error);
  }
};

const getStates = async api => {
  try {
    const { data } = await api.getStates();
    return formatStateOptions(data);
  } catch (error) {
    console.error(error);
  }
};

const getCities = async (state, api) => {
  try {
    const { data } = await api.getCitiesByState(state);
    return formatCityOptions(data);
  } catch (error) {
    console.error(error);
  }
};

export const form = (data = {}) => {
  return {
    enableReinitialize: true,
    initialValues: {
      ...data,
      modelYear: data.modelYear || dropdownDefaultValue,
      make: data.make || dropdownDefaultValue,
      model: data.model || dropdownDefaultValue,
      version: data.version || dropdownDefaultValue,
      state: data.state || dropdownDefaultValue,
      city: data.city || dropdownDefaultValue,
    },
    validationSchema: Yup.object().shape({
      modelYear: Yup.object().test('t1', 'Escolha o ano do modelo', isValidSelection),
      make: Yup.object().test('t1', 'Escolha uma marca', isValidSelection),
      model: Yup.object().test('t1', 'Escolha um modelo', isValidSelection),
      version: Yup.object().test('t1', 'Escolha uma versão', isValidSelection),
      state: Yup.object().test('t1', 'Escolha o estado', isValidSelection),
      city: Yup.object().test('t1', 'Escolha uma cidade', isValidSelection),
    }),
  };
};

const sortOptions = (a, b) => {
  if (a.label < b.label) return -1;
  if (a.label > b.label) return 1;
  return 0;
};

const formatStateOptions = options => {
  const formattedOptions = options.map(({ sigla, nome }) => {
    return {
      label: nome,
      value: sigla,
    };
  });
  return formattedOptions.sort(sortOptions);
};

const formatCityOptions = options => {
  const formattedOptions = options.map(({ id, nome }) => {
    return {
      label: nome,
      value: id,
    };
  });
  return formattedOptions.sort(sortOptions);
};

const formatOptions = (data, sortFunction) => {
  const options = data.map(({ id, nome, numberOfSearchs }) => {
    if (numberOfSearchs)
      return {
        label: nome,
        value: id,
        numberOfSearchs,
      };
    return {
      label: nome,
      value: id,
    };
  });
  if (sortFunction) {
    return options.sort(sortFunction);
  }
  return options;
};

const isDisabled = value => R.isNil(value) || R.isEmpty(value);

export const isFieldDisabled = (formik, previous) => {
  if (!previous) return false;
  return isDisabled(formik.values[previous]?.value);
};

export const handleModelYearChange = ({ formik }) => {
  formik.setFieldValue('model', dropdownDefaultValue);
};

export const handleMakeChange = ({ formik, api, setModel, data }) => {
  if (formik.values.make.value !== data.make?.value)
    formik.setFieldValue('model', dropdownDefaultValue);

  const makeId = formik.values.make.value;
  if (R.isEmpty(makeId) || R.isNil(makeId)) return;

  getModels(makeId, api).then(model => {
    setModel(model);
  });
};

export const handleModelChange = ({ formik, api, setVersion, data }) => {
  if (formik.values.model.value !== data.model?.value)
    formik.setFieldValue('version', dropdownDefaultValue);

  const modelId = formik.values.model.value;
  if (R.isEmpty(modelId) || R.isNil(modelId)) return;

  const modelYear = formik.values.modelYear.value;
  if (R.isEmpty(modelYear) || R.isNil(modelYear)) return;

  getVersions({ modelId, modelYear }, api).then(version => {
    setVersion(version);
  });
};

export const handleStateChange = ({ formik, api, setCity, data }) => {
  if (formik.values.state.value !== data.state?.value)
    formik.setFieldValue('city', dropdownDefaultValue);

  const state = formik.values.state?.value;
  if (R.isEmpty(state) || R.isNil(state)) return;

  getCities(state, api).then(city => setCity(city));
};

export const initializePage = (api, { setMake, setState, setTemplateBadge, setTemplateTitle }) => {
  getMakes(api).then(make => {
    const makes = make.map(({ label, value }) => {
      return {
        label,
        value,
        image: `${process.env.REACT_APP_IMAGE_SEARCH_API}/${value}.png`,
      };
    });
    setMake(makes);
  });

  getStates(api).then(state => {
    setState(state);
  });

  setTemplateTitle(TITLE);
  setTemplateBadge(FINANCING_BADGE_TEXT);
};

export const populateDataLayer = values => {
  if (!values) return;
  const { modelYear, make, model, version, state, city } = values;

  const eventsCarChoiceGA = [
    {
      action: 'selecionou:ano-do-modelo',
      category: 'icarros:simulacao-financiamento',
      label: `modelYear:[[${modelYear.label}]]`,
      value: `${modelYear.label}`,
    },
    {
      action: 'selecionou:marca-do-carro',
      category: 'icarros:simulacao-financiamento',
      label: `make:[[${make.label}]]`,
      value: `${make.label}`,
    },
    {
      action: 'selecionou:modelo-do-carro',
      category: 'icarros:simulacao-financiamento',
      label: `model:[[${model.label}]]`,
      value: `${model.label}`,
    },
    {
      action: 'selecionou:versao-do-carro',
      category: 'icarros:simulacao-financiamento',
      label: `version:[[${version.label}]]`,
      value: `${version.label}`,
    },
    {
      action: 'selecionou:estado',
      category: 'icarros:simulacao-financiamento',
      label: `state:[[${state.label}]]`,
      value: `${state.label}`,
    },
    {
      action: 'selecionou:cidade',
      category: 'icarros:simulacao-financiamento',
      label: `city:[[${city.label}]]`,
      value: `${city.label}`,
    },
  ];

  const variablesCarChoiceGA = [
    { key: 'nfCarModelYear', value: `${model.label}` },
    { key: 'nfCarMake', value: `${make.label}` },
    { key: 'nfCarModel', value: `${model.label}` },
    { key: 'nfCarVersion', value: `${version.label}` },
    { key: 'nfState', value: `${state.label}` },
    { key: 'nfCity', value: `${city.label}` },
  ];

  GTM.addManyEvents(eventsCarChoiceGA);
  GTM.addManyVariables(variablesCarChoiceGA);
};
