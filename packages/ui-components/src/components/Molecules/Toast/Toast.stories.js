import { colors } from '@monorepo/theme';
import { R } from '@monorepo/utils';
import React from 'react';

import { Label } from '~Atoms';
import { Toast } from '~Molecules';

import { SIZES } from './constants';

const MOCK_CONTENT = (
  <Label color={colors.neutral.colorWhite}>Esse é um toast de informação!</Label>
);

export default {
  title: 'Molecules/Toast',
  component: Toast,
  args: {},
  argTypes: {
    iconName: { control: 'text' },
    iconSize: { control: 'inline-radio', options: R.keys(SIZES) },
    iconStroke: { control: 'color' },
    closeSize: { control: 'inline-radio', options: R.keys(SIZES) },
    closeStroke: { control: 'color' },
    backgroundColor: { control: 'color' },
  },
};

export const ToastComponent = args => <Toast {...args}>{MOCK_CONTENT}</Toast>;
