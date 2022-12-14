import { colors } from '@monorepo/theme';
import { handleChangeCheckbox } from '@monorepo/utils';
import React, { useState } from 'react';

import { Icon, Label } from '~Atoms';

import {
  CHECKBOX_SIZES,
  CHECKBOX_TYPE,
  CHECKED_ICON,
  defaultProps,
  LABEL_SIZES,
  PARTIAL_ICON,
  propTypes,
} from './constants';
import { StyledCheckbox, StyledInput, Wrapper } from './style';
import { setStrokePartialDisabled } from './utils';

const Checkbox = ({
  name,
  size,
  isEnabled,
  isError,
  isDisabled,
  isPartial,
  isPartialDisabled,
  isCheckedDisabled,
  text,
  color,
  initialState,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(initialState);

  const checkIsDisabled = isDisabled || isCheckedDisabled;
  const checkIsPartial = isPartial || isPartialDisabled;
  const shouldShowChecked = isChecked || isCheckedDisabled;
  const shouldShowPartial = isPartial || isPartialDisabled;

  const onChange = (checked, name) => {
    if (!checkIsDisabled && !checkIsPartial) {
      setIsChecked(checked);
      props.onChange(checked, name);
    }
  };

  return (
    <Wrapper htmlFor={name}>
      <StyledInput
        {...props}
        id={name}
        name={name}
        type={CHECKBOX_TYPE}
        checked={isChecked}
        onChange={e => handleChangeCheckbox(e, onChange)}
      />
      <StyledCheckbox
        size={size}
        isEnabled={isEnabled}
        isChecked={isChecked}
        isError={isError}
        isDisabled={isDisabled}
        isPartial={isPartial}
        isPartialDisabled={isPartialDisabled}
        isCheckedDisabled={isCheckedDisabled}
        color={color}
      >
        {shouldShowChecked && (
          <Icon
            name={CHECKED_ICON}
            size={CHECKBOX_SIZES[size]}
            stroke={colors.neutral.colorWhite}
          />
        )}

        {shouldShowPartial && (
          <Icon
            name={PARTIAL_ICON}
            size={CHECKBOX_SIZES[size]}
            stroke={setStrokePartialDisabled(isPartialDisabled)}
          />
        )}
      </StyledCheckbox>
      <Label size={LABEL_SIZES[size]}>{text}</Label>
    </Wrapper>
  );
};

export { CHECKBOX_SIZES };

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
