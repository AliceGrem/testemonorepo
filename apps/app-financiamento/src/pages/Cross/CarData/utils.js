import { Yup } from '@monorepo/ui-components';
import { brlFormatter, GTM, isValidCarPrice, isValidSelection } from '@monorepo/utils';

import {
  getAreaCodePhone,
  getNumberPhone,
  getTimestamp,
} from '../../Mobile/PersonalDataSecondStep/utils';

export const form = (data = {}) => {
  return {
    enableReinitialize: true,
    initialValues: {
      ...data,
      price: data.price || '',
      year: data.year || { label: '', value: '' },
    },
    validationSchema: Yup.object().shape({
      price: Yup.string().test('t1', 'Valor inválido', function (value) {
        return isValidCarPrice(value, this.createError);
      }),
      year: Yup.object().test('t1', 'Selecionar ano do modelo', isValidSelection),
    }),
  };
};

export const getCarYearOptions = YEARS_BACK => {
  const currentYear = new Date().getFullYear();
  const options = [];

  for (let i = 0; i <= YEARS_BACK; i++) {
    options.push({
      label: currentYear - i,
      value: +(currentYear - i),
    });
  }
  return options;
};

export const formatValues = values => {
  const { fullName, email, birthDate, phone, cpf, price, year } = values;
  const { value } = year;
  return {
    name: fullName,
    email,
    cpf,
    numberPhone: getNumberPhone(phone),
    areaCodePhone: getAreaCodePhone(phone),
    birthDate: getTimestamp(birthDate),
    vehicleModelYear: value,
    vehicleValue: price,
  };
};

export const formatAndSetSimulationData = ({ data }, setSimulationData, originalUpfrontValue) => {
  const { totalPayable, upfrontValue, installments, financeOperationOptions, selectedOption } =
    data.financeOperationDetails;
  const formattedResponse = {
    id: data.id,
    totalValue: totalPayable,
    downPayment: upfrontValue,
    upfrontValue: originalUpfrontValue || upfrontValue,
    installments: installments,
    options: financeOperationOptions.map(({ installments, vehicleInstallmentValue }) => {
      return {
        label: `${installments}x de ${brlFormatter(vehicleInstallmentValue)}`,
        value: installments,
      };
    }),
  };
  if (selectedOption) {
    const { installments, vehicleInstallmentValue } = selectedOption;
    formattedResponse.updatedInstallmentsValue = {
      label: `${installments}x de ${brlFormatter(vehicleInstallmentValue)}`,
      value: installments,
    };
  }
  setSimulationData(formattedResponse);
};

export const saveStepDataApi = async (values, api, setStepData) => {
  setStepData({ ...values });
  const formattedValues = formatValues(values);
  return await api.postTransactionSimulation(formattedValues, []);
};

export const populateDataLayer = formik => {
  const { price, year } = formik.values;

  const eventsCarDataGa = [
    {
      action: 'preencheu:preco',
      category: 'icarros:simulacao-financiamento',
      label: `price:[[${price}]]`,
      value: `${price}`,
    },
    {
      action: 'selecionou:ano',
      category: 'icarros:simulacao-financiamento',
      label: `year:[[${year.label}]]`,
      value: `${year.label}`,
    },
  ];

  const variablesCarDataGA = [
    { key: `nfCarPrice`, value: `${price}` },
    { key: `nfCarYearModel`, value: `${year.label}` },
  ];

  GTM.addManyEvents(eventsCarDataGa);
  GTM.addManyVariables(variablesCarDataGA);

  formik.handleSubmit();
};
