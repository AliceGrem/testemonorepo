import React from 'react';

import { LicensePlate } from '~Molecules';

const TEXT_COUNTRY = 'brasil';

export default {
  title: 'Molecules/LicensePlate',
  component: LicensePlate,
  args: { textCountry: TEXT_COUNTRY },
  argTypes: { textCountry: { control: 'text' } },
};

export const DefaultLicensePlate = (args) => <LicensePlate {...args} />;
