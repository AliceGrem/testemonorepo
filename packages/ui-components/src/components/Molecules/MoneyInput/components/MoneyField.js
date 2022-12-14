import React, { forwardRef } from 'react';
import NumberFormat from 'react-number-format';

import { Flex } from '../../../Atoms';
import { defaultMoneyProp, moneyPropTypes } from '../constants';
import { StyledSymbol } from '../style';

const MoneyField = forwardRef(function Input(
  { currency, onChange, decimalSeparator, thousandSeparator, ...props },
  ref
) {
  return (
    <Flex alignItems="center" justifyContent="center">
      <StyledSymbol>{currency}</StyledSymbol>
      <NumberFormat
        {...props}
        getInputRef={ref}
        onValueChange={({ value }) => {
          onChange(+value);
        }}
        decimalSeparator={decimalSeparator}
        thousandSeparator={thousandSeparator}
        decimalScale={2}
        allowLeadingZeros={false}
        allowNegative={false}
        allowEmptyFormatting={false}
        isNumericString
      />
    </Flex>
  );
});

MoneyField.propTypes = moneyPropTypes;
MoneyField.defaultProps = defaultMoneyProp;

export default MoneyField;
