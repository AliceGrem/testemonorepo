import { brlFormatter, R } from '@monorepo/utils';
import { renderToStaticMarkup } from 'react-dom/server';

import { formatAndSetSimulationData } from '../../pages/Cross/CarData/utils';
import {
  ERROR,
  GREAT,
  GREAT_PROGRESS,
  MAX_PERCENTAGE,
  MAX_PROGRESS,
  MODAL_MAIN_BUTTON_TEXT,
  NORMAL,
  OVER,
  TYPES,
} from './constants';

export const getProgressAndType = (value, downPayment, maximum) => {
  const progress = (value / maximum) * MAX_PROGRESS;
  const downPaymentProgress = (downPayment / maximum) * MAX_PROGRESS;

  if (progress < downPaymentProgress) return { type: ERROR, progress };
  if (progress < GREAT_PROGRESS) return { type: NORMAL, progress };
  if (progress <= MAX_PERCENTAGE) return { type: GREAT, progress };
  return { type: OVER, progress };
};

export const getType = (value, { maximum, setProgress, originalUpfrontValue }) => {
  const { type, progress } = getProgressAndType(value, originalUpfrontValue, maximum);
  setType({ type, progress }, TYPES[type], originalUpfrontValue, maximum, setProgress);
  return type;
};

export const updateFieldValue = (formik, key, value) => {
  formik.setFieldValue(key, value);
};

const getHint = (hint, type, downPayment, maximum) => {
  if (type === ERROR) return `${hint} ${brlFormatter(downPayment)}`;
  if (type === OVER) return `${hint} ${brlFormatter(maximum)}`;
  return hint;
};

const setType = ({ type, progress }, { hint, color }, downPayment, maximum, setProgress) => {
  setProgress({
    hint: getHint(hint, type, downPayment, maximum),
    color,
    value: type === OVER ? MAX_PROGRESS : progress,
  });
};

export const getInitialProgress = (downPaymentFormik, downPayment, maximum) => {
  const { type, progress } = getProgressAndType(
    downPaymentFormik || downPayment,
    downPayment,
    maximum
  );
  const initialType = TYPES[type];

  return {
    hint: getHint(initialType.hint, type, downPayment, maximum),
    value: progress > MAX_PROGRESS ? MAX_PROGRESS : progress,
    color: initialType.color,
  };
};

const getModalTemplate = modalController => {
  return {
    show: true,
    type: 'warning',
    footerProps: {
      mainButtonText: MODAL_MAIN_BUTTON_TEXT,
    },
    onClose: () => {
      modalController({ show: false });
    },
  };
};

const getModalData = (type, parameters) => {
  const { downPayment, maximum, formik, recalculate, setStepData } = parameters;
  if (type === ERROR) {
    return {
      mainButtonMethod: async () => {
        updateValue(formik, downPayment, setStepData);
        const handled = handleModal(downPayment, parameters);
        if (!handled) {
          await recalculate(downPayment);
        }
      },
      title: 'Ops, o valor de entrada está abaixo do mínimo.',
      message: `Para dar continuidade na sua simulação o valor de entrada deve ser maior ou igual a ${brlFormatter(
        downPayment
      )}`,
    };
  }
  if (type === OVER) {
    return {
      mainButtonMethod: async () => {
        updateValue(formik, maximum, setStepData);
        const handled = handleModal(maximum, parameters);
        if (!handled) {
          await recalculate(maximum);
        }
      },
      title: 'Ops, o valor de entrada está acima do máximo.',
      message: `Para dar continuidade na sua simulação o valor de entrada deve ser menor ou igual a ${brlFormatter(
        maximum
      )}`,
    };
  }
  return;
};

export const handleModal = (value, parameters) => {
  const { mountModal, modalController } = parameters;
  const modalType = getType(value, parameters);
  const { modalTemplate, modalData } = getModal(modalType, parameters);

  if (modalData) {
    const mountedModal = mountModal(modalTemplate, modalData);
    modalController(mountedModal);
    return true;
  }
  return false;
};

export const getModal = (type, parameters) => {
  const { modalController } = parameters;
  const modalTemplate = getModalTemplate(modalController);
  const modalData = getModalData(type, parameters);

  return { modalTemplate, modalData };
};

const removeDots = string => {
  return string.replaceAll('.', '');
};

const formatDecimalNotation = string => {
  return string.replaceAll(',', '.');
};

export const parseStringValue = ({ value }) => {
  const valueWithoutDots = removeDots(value);
  const formattedDecimalNotation = formatDecimalNotation(valueWithoutDots);
  return Number.parseFloat(formattedDecimalNotation);
};

export const updateValue = async (formik, value, setStepData) => {
  formik.setFieldValue('downPaymentFormik', value);
  setStepData({ ...formik.values, downPaymentFormik: value });
};

export const getBackgroundURI = component => {
  const svgString = encodeURIComponent(renderToStaticMarkup(component));
  return `url("data:image/svg+xml,${svgString}")`;
};

export const getDropdownValue = (installments, options) => {
  const defaultValue = {
    value: '',
    label: '',
  };
  if (!R.isNil(options) && !R.isEmpty(options)) {
    const option = options.find(opt => opt.value === installments);
    if (option && option.label) {
      return {
        value: installments,
        label: option.label,
      };
    }
  }
  return defaultValue;
};

export const setFieldValues = (installments, options, downPayment, formik, setStepData) => {
  const { value, label } = getDropdownValue(installments, options);
  formik.setFieldValue('downPaymentFormik', downPayment);
  formik.setFieldValue('installments', { value, label });
  setStepData({
    ...formik.values,
    installments: {
      value,
      label,
    },
    downPaymentFormik: downPayment,
  });
};

export const recalculatePaymentOptions = async (
  api,
  { id, downPayment, price, year, originalUpfrontValue, installments },
  setSimulationData,
  setLoading
) => {
  setLoading(true);
  const { value } = year;
  const payload = {
    transactionId: id,
    upfrontValue: downPayment,
    vehicleModelYear: value,
    vehicleValue: price,
    installments: installments,
  };
  try {
    const response = await api.putTransactionSimulation(payload, []);
    formatAndSetSimulationData(response, setSimulationData, originalUpfrontValue);
  } catch (e) {
    console.log(e);
  } finally {
    setLoading(false);
  }
};

export const validate = (data, simulationData, maximum) => {
  const { downPaymentFormik, installments } = data;
  if (R.isNil(installments)) return false;

  const { value, label } = installments;
  const { downPayment } = simulationData;

  const isValidDownPayment = downPaymentFormik >= downPayment && downPaymentFormik <= maximum;
  const isValidLabel = !R.isNil(label) && !R.isEmpty(label);
  const isValidValue = !R.isNil(value) && !R.isEmpty(value);

  return isValidDownPayment && isValidLabel && isValidValue;
};
