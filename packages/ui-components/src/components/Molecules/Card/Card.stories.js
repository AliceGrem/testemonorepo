import { spacings } from '@monorepo/theme';
import React from 'react';

import { Card, Carmaker } from '~Molecules';

export default {
  title: 'Molecules/Card',
  component: Card,
  args: {
    children: <Carmaker maker="renault" />,
  },
  argTypes: {},
};

export const CarmakerCard = () => (
  <Card>
    <Carmaker
      maker="renault"
      width={spacings.layout.spacing5xl}
      height={spacings.layout.spacing5xl}
    />
  </Card>
);
