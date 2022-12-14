import { colors, spacings } from '@monorepo/theme';
import { Box, Label, MoneyInput, useApi } from '@monorepo/ui-components';
import React, { useEffect, useState } from 'react';

import { Progress } from '../../../components';
import { useWizard } from '../../../components/Wizard/components/WizardProvider/WizardProvider';
import { BackgroundSVGComponent, ResultModalBody } from '../components';
import { defaultProps, MAX_CAR_PRICE, propTypes } from '../constants';
import { StyledDownPaymentCard } from '../style.js';
import {
  getBackgroundURI,
  getInitialProgress,
  handleModal,
  parseStringValue,
  recalculatePaymentOptions,
  updateValue,
} from '../utils.js';

const DownPaymentCard = ({ formik, modalController }) => {
  const { api } = useApi();
  const { data, setStepData, simulationData, setSimulationData, setLoading } = useWizard();

  const [background] = useState(getBackgroundURI(BackgroundSVGComponent()));
  const [downPayment, setDownPayment] = useState(simulationData.downPayment);
  const [maximum, setMaximum] = useState(data.price || MAX_CAR_PRICE);
  const [progress, setProgress] = useState(getInitialProgress(downPayment, downPayment, maximum));

  useEffect(() => {
    const { price } = data;

    setMaximum(price || MAX_CAR_PRICE);
  }, [data.price]);

  useEffect(() => {
    const { downPayment, upfrontValue } = simulationData;

    setDownPayment(upfrontValue);
    setProgress(getInitialProgress(downPayment, upfrontValue, maximum));
    updateValue(formik, upfrontValue, setStepData);
  }, [simulationData]);

  const mountModal = (modalTemplate, { title, message, mainButtonMethod }) => {
    const body = <ResultModalBody title={title} message={message}></ResultModalBody>;
    const footerProps = { mainButtonMethod, ...modalTemplate.footerProps };

    const mountedModal = { ...modalTemplate, body, footerProps };
    return mountedModal;
  };

  const recalculate = async value => {
    setStepData({
      ...formik.values,
      installments: {
        value: '',
        label: '',
      },
    });
    return recalculatePaymentOptions(
      api,
      {
        id: simulationData.id,
        downPayment: value,
        price: data.price,
        year: data.year,
        originalUpfrontValue: simulationData.upfrontValue,
      },
      setSimulationData,
      setLoading,
      formik
    );
  };

  const parameters = {
    data,
    downPayment,
    formik,
    maximum,
    modalController,
    mountModal,
    recalculate,
    setProgress,
    setStepData,
    originalUpfrontValue: simulationData.upfrontValue,
  };

  const updateValueAndHandleModal = async ({ nativeEvent }) => {
    const parsedValue = parseStringValue(nativeEvent.target);
    updateValue(formik, parsedValue, setStepData);

    const handled = handleModal(parsedValue, parameters);
    if (!handled) {
      await recalculate(parsedValue);
    }
  };

  return (
    <StyledDownPaymentCard background={background}>
      <MoneyInput
        label="Valor da entrada"
        onBlur={value => updateValueAndHandleModal(value)}
        name="downPaymentFormik"
        formik={formik}
      />
      <Box my={spacings.margin.spacingXs}>
        <Label color={progress.color} size="font2xs">
          {progress.hint}
        </Label>
      </Box>
      <Progress
        progress={progress.value}
        error={progress.color === colors.feedbackError.colorMedium}
      />
    </StyledDownPaymentCard>
  );
};

DownPaymentCard.propTypes = propTypes;
DownPaymentCard.defaultProps = defaultProps;

export default DownPaymentCard;
