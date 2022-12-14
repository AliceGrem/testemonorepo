import React from 'react';

import { LegalTerms } from '~Atoms';

const MOCK_TEXT = 'Lorem ipsum dolor sit amet';

export default {
  title: 'Atoms/LegalTerms',
  component: LegalTerms,
  args: {
    children: MOCK_TEXT,
  },
  argTypes: {
    color: { control: 'color' },
    children: { control: 'text' },
    textAlign: { control: 'text' },
  },
};

export const DefaultLegalTerms = ({ ...args }) => <LegalTerms {...args} enabled />;
