import React from 'react';

import { Icon } from '~Atoms';
import { FormControl } from '~Molecules';

import { ICON_SIZES,propTypes } from './constants';
import { setStrokeByState } from './utils';

const TextField = ({
  renderInput,
  iconName,
  isDisabled,
  isLocked,
  size,
  helperTextSize,
  onChange,
  ...props
}) => {
  const startEnhancer = () =>
    iconName && (
      <Icon
        name={iconName}
        size={ICON_SIZES[size]}
        stroke={setStrokeByState(isDisabled, isLocked)}
      />
    );

  return (
    <FormControl
      {...props}
      hasDivider
      isError={!!props.textError}
      render={() => renderInput && renderInput({ onChange })}
      startEnhancer={startEnhancer}
      isDisabled={isDisabled}
      isLocked={isLocked}
      size={size}
      helperTextSize={helperTextSize}
    />
  );
};

TextField.propTypes = propTypes;

export default TextField;
