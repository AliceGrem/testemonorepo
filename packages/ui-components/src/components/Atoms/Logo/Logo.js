import React from 'react';

import { defaultProps, propTypes } from './constants';
import StyledImg from './style';

const Logo = ({ name, title, height, width, onClick }) => {
  const img = require(`!!svg-url-loader!../../../assets/logos/${name}.svg`);
  return (
    <StyledImg
      src={img}
      title={title}
      alt={title}
      height={height}
      width={width}
      onClick={onClick}
    />
  );
};

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;
