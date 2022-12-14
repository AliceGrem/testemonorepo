import { colors } from '@monorepo/theme';
import { R, SIZES_FORM_CONTROL } from '@monorepo/utils';
import React from 'react';

import { Box } from '~Atoms';
import { Dropdown } from '~Molecules';

const DEFAULT_SIZE = R.head(R.keys(SIZES_FORM_CONTROL));

const DEFAULT_PLACEHOLDER = 'Selecionar...';
const NAME_DROPDOWN = 'dropdown-default';
const BRAND_ICON = 'marca';

const OPTIONS = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  args: {
    size: DEFAULT_SIZE,
    placeholder: DEFAULT_PLACEHOLDER,
  },
  argTypes: {
    size: { control: 'inline-radio', options: R.keys(SIZES_FORM_CONTROL) },
    placeholder: { control: 'text' },
  },
};

const onChange = (value, name) => console.log(value, name);

const DropdownWrapper = ({ children }) => (
  <Box width={1 / 4} p={3} bg={colors.neutral.colorWhite}>
    {children}
  </Box>
);

export const DropdownEnabled = args => (
  <DropdownWrapper>
    <Dropdown {...args} options={OPTIONS} isEnabled />
  </DropdownWrapper>
);

export const DropdownDisabled = args => (
  <DropdownWrapper>
    <Dropdown {...args} options={OPTIONS} isDisabled />
  </DropdownWrapper>
);

export const DropdownLocked = args => (
  <DropdownWrapper>
    <Dropdown {...args} options={OPTIONS} isLocked />
  </DropdownWrapper>
);

export const DropdownError = args => (
  <DropdownWrapper>
    <Dropdown {...args} options={OPTIONS} isError />
  </DropdownWrapper>
);

export const DropdownWithIcon = args => (
  <DropdownWrapper>
    <Dropdown {...args} options={OPTIONS} iconName={BRAND_ICON} />
  </DropdownWrapper>
);

export const DropdownWithOnChange = args => (
  <DropdownWrapper>
    <Dropdown {...args} name={NAME_DROPDOWN} options={OPTIONS} onChange={onChange} />
  </DropdownWrapper>
);
