import React from 'react';

import { Box } from '~Atoms';
import { CarInfo } from '~Molecules';

export default {
  title: 'Molecules/CarInfo',
  component: CarInfo,
  args: {},
  argTypes: {},
};

const LOGO = 'renault';
const LICENCE_PLATE = 'HSN2021';
const DESCRIPTION = 'Renaut Sandero 1.6 S Edition 2021 / 2022 Azul';

export const CarInfoTemplate = () => (
  <Box bg="lightgray" p={3}>
    <CarInfo logo={LOGO} licencePlate={LICENCE_PLATE} description={DESCRIPTION} />
  </Box>
);
