import { colors } from '@monorepo/theme';
import { R } from '@monorepo/utils';
import React from 'react';

import { Box } from '~Atoms';
import { Checkbox, CHECKBOX_SIZES } from '~Molecules';

const DEFAULT_SIZE = R.head(R.keys(CHECKBOX_SIZES));
const TEXT_LABEL = 'Travas elétricas';

export default {
  title: 'Molecules/Checkbox',
  component: Checkbox,
  args: {
    text: TEXT_LABEL,
    size: DEFAULT_SIZE,
  },
  argTypes: {
    text: { control: 'text' },
    size: { control: 'inline-radio', options: R.keys(CHECKBOX_SIZES) },
    color: { control: 'color' },
  },
};

const onChange = (value, name) => console.log(value, name);

const Wrapper = ({ children }) => (
  <Box width={1 / 4} p={3} bg={colors.neutral.colorWhite}>
    {children}
  </Box>
);

export const Default = args => (
  <Wrapper>
    <Checkbox name="default" {...args} />
  </Wrapper>
);

export const Enabled = args => (
  <Wrapper>
    <Checkbox name="enabled" {...args} isEnabled />
  </Wrapper>
);

export const Disabled = args => (
  <Wrapper>
    <Checkbox name="disabled" {...args} isDisabled />
  </Wrapper>
);

export const DisabledChecked = args => (
  <Wrapper>
    <Checkbox name="disabledChecked" {...args} isCheckedDisabled />
  </Wrapper>
);

export const Partial = args => (
  <Wrapper>
    <Checkbox name="partial" {...args} isPartial />
  </Wrapper>
);

export const PartialDisabled = args => (
  <Wrapper>
    <Checkbox name="partialDisabled" {...args} isPartialDisabled />
  </Wrapper>
);

export const Error = args => (
  <Wrapper>
    <Checkbox name="error" {...args} isError />
  </Wrapper>
);

export const CheckboxWithOnChange = args => (
  <Wrapper>
    <Checkbox name="default" {...args} onChange={onChange} />
  </Wrapper>
);
