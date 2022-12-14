import React from 'react';

import { Link } from '~Atoms';

const MOCK_TEXT = 'Google';

export default {
  title: 'Atoms/Link',
  component: Link,
  args: { children: MOCK_TEXT },
  argTypes: {
    children: { control: 'text' },
  },
};
const LINK_GOOGLE = 'https://www.google.com.br/';

export const DefaultLink = (args) => <Link {...args} href={LINK_GOOGLE} />;
