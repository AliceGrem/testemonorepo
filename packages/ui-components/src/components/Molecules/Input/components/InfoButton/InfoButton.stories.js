import { R, SIZES_FORM_CONTROL } from '@monorepo/utils';
import React from 'react';

import { InfoButton } from '~Molecules/Input/components';

const DEFAULT_SIZE = R.head(R.keys(SIZES_FORM_CONTROL));
const DEFAULT_TEXT_INFO = 'Adicionar informações';

export default {
  title: 'Molecules/InfoButton',
  component: InfoButton,
  args: { size: DEFAULT_SIZE, textInfo: DEFAULT_TEXT_INFO },
  argTypes: {
    size: { control: 'inline-radio', options: R.keys(SIZES_FORM_CONTROL) },
    textInfo: { control: 'text' },
  },
};

export const DefaultInfoButton = args => <InfoButton {...args} />;
