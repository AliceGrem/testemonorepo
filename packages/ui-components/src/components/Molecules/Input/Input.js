import { colors } from '@monorepo/theme';
import { handleChangeInput , R } from '@monorepo/utils';
import React, { useState } from 'react';
import MaskedInput from 'react-text-mask';

import { Icon } from '~Atoms';

import { ClearButton, InfoButton } from './components';
import { defaultProps, ICON_SIZES, propTypes, successIcon, TEXT_SIZES } from './constants';
import { StyledInput, Wrapper } from './style';

const Input = ({
  name,
  type,
  isSuccess,
  isLicencePlate,
  isError,
  setIsSuccess,
  setIsError,
  hasClearButton,
  textInfo,
  validator,
  isDisabled,
  isLocked,
  mask,
  size,
  ...props
}) => {
  const [value, setValue] = useState('');
  const isDisabledOrIsLocked = isDisabled || isLocked;

  const showSuccessIcon = isSuccess && !isDisabledOrIsLocked;
  const showClearButton = (hasClearButton && !R.isEmpty(value) && !isDisabledOrIsLocked) || isError;
  const showInfoButton = textInfo && R.isEmpty(value);

  const checkInputIsValid = newValue => {
    setIsSuccess(validator(newValue));
    setIsError(!validator(newValue));
  };

  const onChange = (valueOfInput, name, e) => {
    setValue(valueOfInput);
    props.onChange(e);

    if (validator) checkInputIsValid(valueOfInput);
  };

  const clearField = () => {
    setValue('');
  };

  return (
    <Wrapper isError={isError} isSuccess={isSuccess} textInfo={textInfo}>
      {mask && (
        <MaskedInput
          id={`masked-input${name}`}
          name={name}
          type={type}
          mask={mask}
          fontSize={TEXT_SIZES[size]}
          onChange={e => handleChangeInput(e, onChange)}
          disabled={isDisabled}
          readOnly={isLocked}
          render={(ref, { defaultValue, ...maskProps }) => {
            const unionOfProps = { ...props, ...maskProps };
            return <StyledInput ref={ref} {...unionOfProps} />;
          }}
          {...props}
        />
      )}

      {!mask && (
        <StyledInput
          name={name}
          type={type}
          disabled={isDisabled}
          readOnly={isLocked}
          fontSize={TEXT_SIZES[size]}
          {...props}
        />
      )}

      {showClearButton && !isLicencePlate && (
        <ClearButton onClear={clearField} isError={isError} size={size} />
      )}

      {showInfoButton && <InfoButton textInfo={textInfo} size={size} />}

      {showSuccessIcon && (
        <Icon
          key={successIcon}
          title={successIcon}
          name={successIcon}
          size={ICON_SIZES[size]}
          stroke={colors.Input.text.success}
        />
      )}
    </Wrapper>
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
