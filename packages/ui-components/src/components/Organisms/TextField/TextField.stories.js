import { colors } from '@monorepo/theme';
import { MASKS, R, SIZES_FORM_CONTROL } from '@monorepo/utils';
import React from 'react';

import { Box } from '~Atoms';
import { Dropdown, Input } from '~Molecules';
import { TextField } from '~Organisms';

const DEFAULT_SIZE = R.head(R.keys(SIZES_FORM_CONTROL));

export default {
  title: 'Organisms/TextField',
  component: TextField,
  args: {
    textLabel: '',
    isDisabled: false,
    isLocked: false,
    size: DEFAULT_SIZE,
  },
  argTypes: {
    textLabel: { control: 'text' },
    isDisabled: { control: 'boolean' },
    isLocked: { control: 'boolean' },
    size: { control: 'inline-radio', options: R.keys(SIZES_FORM_CONTROL) },
  },
};

const BRAND_ICON = 'marca';
const BRAND_TEXT = 'Marca';
const LICENSE_PLATE_ICON = 'placa';
const LICENSE_PLATE_TEXT = 'Placa';
const TEXT_ERROR = 'Insira uma placa válida!';
const LICENSE_PLATE_REGEX = /[A-Z]{3}[0-9][0-9A-Z][0-9]{2}/;

const onChange = (value, name) => console.log(value, name);

const defaultInput = props => <Input hasClearButton {...props} />;

export const DefaultTextField = args => (
  <Box width={1 / 4} bg={colors.neutral.colorWhite} p={3}>
    <TextField {...args} iconName={BRAND_ICON} textLabel={BRAND_TEXT} renderInput={defaultInput} />
  </Box>
);

const validateLicensePlate = value => LICENSE_PLATE_REGEX.test(value.replace('-', ''));

const validatorInput = props => (
  <Input {...props} validator={validateLicensePlate} mask={MASKS.licensePlate} />
);

export const ValidatorTextField = args => (
  <Box width={1 / 4} bg={colors.neutral.colorWhite} p={3}>
    <TextField
      {...args}
      iconName={LICENSE_PLATE_ICON}
      textLabel={LICENSE_PLATE_TEXT}
      textError={TEXT_ERROR}
      renderInput={validatorInput}
    />
  </Box>
);

export const DisabledTextField = args => (
  <Box width={1 / 4} bg={colors.neutral.colorWhite} p={3}>
    <TextField
      {...args}
      isDisabled
      iconName={BRAND_ICON}
      textLabel={BRAND_TEXT}
      renderInput={defaultInput}
    />
  </Box>
);

export const LockedTextField = args => (
  <Box width={1 / 4} bg={colors.neutral.colorWhite} p={3}>
    <TextField
      {...args}
      isLocked
      iconName={BRAND_ICON}
      textLabel={BRAND_TEXT}
      renderInput={defaultInput}
    />
  </Box>
);

export const TextFieldWithOnChange = args => (
  <Box width={1 / 4} bg={colors.neutral.colorWhite} p={3}>
    <TextField
      {...args}
      onChange={onChange}
      iconName={BRAND_ICON}
      textLabel={BRAND_TEXT}
      renderInput={defaultInput}
    />
  </Box>
);

const defaultDropdown = props => <Dropdown {...props} />;

export const DefaultTextFieldDropdown = args => (
  <Box width={1 / 4} bg={colors.neutral.colorWhite} p={3}>
    <TextField {...args} textLabel={BRAND_TEXT} renderInput={defaultDropdown} />
  </Box>
);
