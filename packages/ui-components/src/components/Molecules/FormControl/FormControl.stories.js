import { colors } from '@monorepo/theme';
import { R, SIZES_FORM_CONTROL } from '@monorepo/utils';
import React from 'react';

import { Box } from '~Atoms';
import { Checkbox, Dropdown, FormControl, Input, Textarea } from '~Molecules';

const MOCK_TEXT_LABEL = 'Placa';
const MOCK_TEXT_LABEL_CHECKBOX = 'Airbag motorista';
const DEFAULT_SIZE = R.head(R.keys(SIZES_FORM_CONTROL));

export default {
  title: 'Molecules/FormControl',
  component: FormControl,
  args: {
    isDisabled: false,
    isLocked: false,
    hasDivider: false,
    isError: false,
    size: DEFAULT_SIZE,
    helperTextSize: 'font3xs',
  },
  argTypes: {
    isDisabled: { control: 'boolean' },
    size: { control: 'inline-radio', options: R.keys(SIZES_FORM_CONTROL) },
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

const OPTIONS = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const defaultInput = props => <Input {...props} hasClearButton />;

const defaultTextarea = props => <Textarea {...props} />;

const defaultCheckbox = props => <Checkbox {...props} text={MOCK_TEXT_LABEL_CHECKBOX} isEnabled />;

const defaultDropdown = props => <Dropdown {...props} options={OPTIONS} />;

const WrapperFormControl = props => (
  <Box width={1 / 4} {...props} bg={colors.neutral.colorWhite} p={3} />
);

const FormControlTemplate = args => (
  <WrapperFormControl>
    <FormControl {...args} />
  </WrapperFormControl>
);

export const InputFormControl = FormControlTemplate.bind({});

InputFormControl.args = {
  render: defaultInput,
  textLabel: MOCK_TEXT_LABEL,
  hasDivider: false,
  isLocked: false,
};

InputFormControl.argTypes = {
  hasDivider: { control: 'boolean' },
  isLocked: { control: 'boolean' },
  textLabel: { control: 'text' },
};

export const CheckboxFormControl = FormControlTemplate.bind({});

CheckboxFormControl.args = {
  render: defaultCheckbox,
  text: MOCK_TEXT_LABEL_CHECKBOX,
};

CheckboxFormControl.argTypes = { text: { control: 'text' } };

export const TextAreaFormControl = FormControlTemplate.bind({});

TextAreaFormControl.args = { render: defaultTextarea };

export const DropdownFormControl = FormControlTemplate.bind({});

DropdownFormControl.args = { render: defaultDropdown };
