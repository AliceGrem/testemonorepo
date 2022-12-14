import { GTM } from '@monorepo/utils';

export const form = (data = {}) => {
  return {
    enableReinitialize: true,
    initialValues: {
      ...data,
      downPaymentFormik: data.downPaymentFormik || '',
      installments: {
        label: data.installments?.label || '',
        value: data.installments?.value || '',
      },
    },
  };
};

export const populateDataLayerEvents = (values, next) => {
  if (!values) return;

  const { downPaymentFormik, installments } = values;

  const eventsResultGa = [
    {
      action: 'preencheu:valor-da-entrada',
      category: 'icarros:simulacao-financiamento',
      label: `downPaymentFormik:[[${downPaymentFormik}]]`,
      value: `${downPaymentFormik}`,
    },
    {
      action: 'selecionou:numero-parcelas',
      category: 'icarros:simulacao-financiamento',
      label: `installments:[[${installments.value}]]`,
      value: `${installments.value}`,
    },
    {
      action: 'clique:escolher-o-carro',
      category: 'icarros:simulacao-financiamento',
      label: `avançar:[[${next}]]`,
      value: `${next}`,
    },
  ];

  const variablesResultGa = [
    { key: 'nfCarEntryValue', value: `${downPaymentFormik}` },
    { key: 'nfCarNumberOfInstallments', value: `${installments.value}` },
  ];

  GTM.addManyEvents(eventsResultGa);
  GTM.addManyVariables(variablesResultGa);
};
