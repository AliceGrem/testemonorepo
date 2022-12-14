import React from 'react';

import { Flex } from '~Atoms';
import { AdLink } from '~Templates';

import { propTypes } from './constants';

const MultipleAdLinks = ({ adLinkList }) => (
  <Flex>
    {adLinkList.map(({ figure, label }, index) => (
      <AdLink
        Figure={figure}
        Label={label}
        key={index}
        hasTextDivider={adLinkList.length > 1 && adLinkList.length - 1 !== index}
      />
    ))}
  </Flex>
);

export default MultipleAdLinks;

MultipleAdLinks.propTypes = propTypes;
