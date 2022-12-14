import React from 'react';

import { Flex } from '~Atoms';

import { defaultProps, propTypes, TEXT_DIVIDER } from './constants';
import { StyledContent, StyledTextDivider } from './style';

const AdLink = ({ Label, Figure, hasTextDivider, ...props }) => (
  <Flex alignItems="center" justifyContent="center" textAlign="center">
    <StyledContent {...props}>
      {Figure}
      {Label}
    </StyledContent>
    {hasTextDivider && <StyledTextDivider>{TEXT_DIVIDER}</StyledTextDivider>}
  </Flex>
);

export default AdLink;

AdLink.propTypes = propTypes;
AdLink.defaultProps = defaultProps;
