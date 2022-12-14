import { colors } from '@monorepo/theme';
import { R } from '@monorepo/utils';
import React from 'react';
import { Box } from 'rebass';

import { CHECKBOX_SIZES } from '~Molecules/Checkbox/constants';
import { CheckboxList } from '~Organisms';

export default {
  title: 'Organisms/CheckboxList',
  component: CheckboxList,
  argTypes: {
    size: { control: 'inline-radio', options: R.keys(CHECKBOX_SIZES) },
    color: { control: 'color' },
  },
};

const options = [
  { value: 'Aerofólio' },
  { value: 'Airbag motorista' },
  { value: 'Banco com ajuste de altura' },
  { value: 'Alarme' },
  { value: 'Ar condicionado' },
  { value: 'Ar quente' },
  { value: 'Bancos de couro' },
  { value: 'Cd Player' },
  { value: 'Computador de bordo' },
  { value: 'Desenbaçador traseiro' },
];

export const CheckBoxListDefault = args => (
  <Box bg={colors.neutral.colorWhite}>
    <CheckboxList {...args} options={options} />
  </Box>
);
