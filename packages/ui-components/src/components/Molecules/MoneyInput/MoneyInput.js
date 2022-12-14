import { colors } from '@monorepo/theme';
import { configFormikInput, defineErrors } from '@monorepo/utils';
import React from 'react';

import { Box, Flex, Label } from '../../Atoms';
import { TextField } from '../../Organisms';
import { MoneyField } from './components';
import { defaultProps, FIELD_SIZE, HELPER_TEXT_SIZE, propTypes } from './constants';
import { StyledMoneyInput } from './style';

const MoneyInput = ({ label, currency, name, formik, onChange, onBlur }) => {
  const defaultInput = () => {
    return (
      <StyledMoneyInput>
        <MoneyField
          data-cy={name}
          {...configFormikInput(name, formik, { customBlur: onBlur, customChange: onChange })}
          currency={currency}
        />
      </StyledMoneyInput>
    );
  };

  return (
    <Flex flexDirection="column">
      <Label color={colors.brandcolor.primaryMedium} size="fontXs">
        {label}
      </Label>
      <Box width={1}>
        <TextField
          renderInput={defaultInput}
          {...defineErrors(name, formik)}
          size={FIELD_SIZE}
          helperTextSize={HELPER_TEXT_SIZE}
        />
      </Box>
    </Flex>
  );
};

MoneyInput.propTypes = propTypes;
MoneyInput.defaultProps = defaultProps;

export default MoneyInput;
