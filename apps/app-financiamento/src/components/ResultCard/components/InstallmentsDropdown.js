import { colors, spacings } from '@monorepo/theme';
import { Box, Label, useApi } from '@monorepo/ui-components';
import { brlFormatter } from '@monorepo/utils';
import React, { useEffect, useState } from 'react';

import DropdownWrapper from '../../DropdownWrapper/DropdownWrapper';
import { useWizard } from '../../Wizard/components/WizardProvider/WizardProvider';
import { defaultProps, propTypes } from '../constants';
import { recalculatePaymentOptions, setFieldValues } from '../utils';

const InstallmentsDropdown = ({ formik }) => {
  const { api } = useApi();
  const { simulationData, setStepData, setSimulationData, setLoading, data } = useWizard();
  const [totalValue, setTotalValue] = useState(simulationData.totalValue || 0);
  const [options, setOptions] = useState(simulationData.options || []);

  useEffect(() => {
    const { installments } = formik.values;

    if (!installments) return;

    updateValue(installments);
  }, [formik.values.installments?.value]);

  useEffect(() => {
    const { options, totalValue, installments, downPayment } = simulationData;
    setFieldValues(installments, options, downPayment, formik, setStepData);
    setOptions(options);
    setTotalValue(totalValue);
  }, [simulationData]);

  const updateValue = installments => {
    setStepData({
      ...formik.values,
      installments,
    });

    return recalculatePaymentOptions(
      api,
      {
        id: simulationData.id,
        downPayment: simulationData.downPayment,
        price: data.price,
        year: data.year,
        originalUpfrontValue: simulationData.upfrontValue,
        installments: installments.value,
      },
      setSimulationData,
      setLoading,
      formik
    );
  };

  return (
    <Box height="50%" m={spacings.margin.spacingMd}>
      <DropdownWrapper
        name="installments"
        label="Valor das parcelas"
        dataCy="installments"
        options={options}
        formik={formik}
      />
      <Box mt={spacings.margin.spacingXs}>
        <Label size="font2xs" color={colors.neutral.colorMedium}>
          {`O valor total das parcelas é ${brlFormatter(totalValue)}`}
        </Label>
      </Box>
    </Box>
  );
};

InstallmentsDropdown.propTypes = propTypes;
InstallmentsDropdown.defaultProps = defaultProps;

export default InstallmentsDropdown;
