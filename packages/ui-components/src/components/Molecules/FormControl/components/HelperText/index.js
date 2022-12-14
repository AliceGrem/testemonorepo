import { colors } from '@monorepo/theme';
import React from 'react';

import { Label } from '~Atoms';

import { propTypes } from './constants';

const HelperText = ({ text, size }) => (
  <Label color={colors.Label.error} size={size} active>
    {text}
  </Label>
);

HelperText.propTypes = propTypes;

export default HelperText;
