import { colors } from '@monorepo/theme';
import { MASKS } from '@monorepo/utils';
import React from 'react';

import { Box } from '~Atoms';
import { Input } from '~Molecules';

const DEFAULT_TEXT_INFO = 'Input com botão informativo';

export default {
  title: 'Molecules/Input',
  component: Input,
  args: {
    hasClearButton: true,
  },
  parameters: {
    backgrounds: {
      default: 'colorMedium',
      values: [
        { name: 'colorMedium', value: '#a2a2a2' },
        { name: 'colorDark', value: '#3c3c3c' },
      ],
    },
  },
};

const NAME_INPUT = 'default-input';

const onChange = (value, name) => console.log(value, name);

const InputWrapper = ({ children }) => (
  <Box width={1 / 4} p={3} bg={colors.neutral.colorWhite}>
    {children}
  </Box>
);

export const InputHasInfo = args => (
  <InputWrapper>
    <Input {...args} textInfo={DEFAULT_TEXT_INFO} />
  </InputWrapper>
);

export const InputClearable = args => (
  <InputWrapper>
    <Input {...args} hasClearButton />
  </InputWrapper>
);

export const InputHasSuccess = args => (
  <InputWrapper>
    <Input {...args} isSuccess />
  </InputWrapper>
);

export const InputHasError = args => (
  <InputWrapper>
    <Input {...args} isError />
  </InputWrapper>
);

export const MaskedInput = args => (
  <InputWrapper>
    <Input {...args} mask={MASKS.licensePlate} />
  </InputWrapper>
);

export const InputWithOnChange = args => (
  <InputWrapper>
    <Input {...args} onChange={onChange} name={NAME_INPUT} />
  </InputWrapper>
);
