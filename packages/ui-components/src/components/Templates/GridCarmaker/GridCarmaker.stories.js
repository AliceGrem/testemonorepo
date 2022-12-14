import { R } from '@monorepo/utils';
import React from 'react';

import { Card, Carmaker } from '~Molecules';
import { MAKER_BY_NAME } from '~Molecules/Carmaker/constants';
import { GridCarmaker } from '~Templates';

export default {
  title: 'Templates/GridCarmaker',
  component: GridCarmaker,
  args: {
    size: '84px',
    maxWidth: '366px',
  },
  argTypes: { size: { control: 'text' }, maxWidth: { control: 'text' } },
};

const cardCarmaker = args =>
  R.keys(MAKER_BY_NAME).map(maker => (
    <Card key={maker}>
      <Carmaker maker={maker} width={args.size} height={args.size} {...args} />
    </Card>
  ));

export const GridCarmakerTemplate = args => (
  <GridCarmaker {...args}>{cardCarmaker(args)}</GridCarmaker>
);
