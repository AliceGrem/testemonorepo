import React from 'react';

import { Icon } from '~Atoms';

import { defaultProps, propTypes } from './constants';
import { Container } from './style';

const Toast = ({
  iconName,
  iconSize,
  iconStroke,
  children,
  onClose,
  closeSize,
  closeStroke,
  backgroundColor,
}) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <Icon name={iconName} size={iconSize} stroke={iconStroke} />
      {children}
      <Icon
        name="fechar"
        size={closeSize}
        stroke={closeStroke}
        style={{ cursor: 'pointer' }}
        onClick={onClose}
      />
    </Container>
  );
};

Toast.propTypes = propTypes;
Toast.defaultProps = defaultProps;

export default Toast;
