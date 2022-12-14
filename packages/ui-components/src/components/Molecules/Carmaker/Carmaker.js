import React from 'react';

import { Label,Logo } from '~Atoms';

import { defaultProps, MAKER_BY_NAME,propTypes } from './constants';
import StyledCarmaker from './style';

const Carmaker = ({ maker, ...props }) => {
  const title = MAKER_BY_NAME[maker];
  return (
    <StyledCarmaker {...props} title={title}>
      <Logo name={maker} title={title} />
      <Label>{title}</Label>
    </StyledCarmaker>
  );
};

Carmaker.propTypes = propTypes;
Carmaker.defaultProps = defaultProps;

export default Carmaker;
