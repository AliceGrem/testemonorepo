import { colors } from '@monorepo/theme';
import React from 'react';

import { Button, Icon } from '~Atoms';

import { CLEAR_BUTTON_ICON, CLEAR_BUTTON_TYPE, ICON_SIZES,propTypes } from './constants';

const ClearButton = ({ onClear, isError, size }) => {
  const setStrokeColor = (isError && colors.feedbackError.colorLight) || colors.neutral.colorMedium;

  return (
    <Button type={CLEAR_BUTTON_TYPE} onClick={onClear}>
      <Icon
        key={CLEAR_BUTTON_ICON}
        title={CLEAR_BUTTON_ICON}
        name={CLEAR_BUTTON_ICON}
        size={ICON_SIZES[size]}
        stroke={setStrokeColor}
      />
    </Button>
  );
};

ClearButton.propTypes = propTypes;

export default ClearButton;
