import React from 'react';

import { useDynamicSVGImport } from '~hooks';

import { defaultProps, ICON_SIZES, propTypes } from './constants';
import { StyledIcon } from './style';

const Icon = ({ name, size, onCompleted, onError, ...props }) => {
  const fileName = size ? `${name}_${size}` : name;
  const { error, SvgIcon } = useDynamicSVGImport('icons', name, fileName, {
    onCompleted,
    onError,
  });
  if (error) {
    return null;
  }
  /**TODO: add loading behaviour **/
  if (SvgIcon) {
    return (
      <StyledIcon {...props}>
        <SvgIcon />
      </StyledIcon>
    );
  }
  return null;
};

export { ICON_SIZES };

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
