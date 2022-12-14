import { colors } from '@monorepo/theme';
import { Button, BUTTON_TYPES,Icon, Subtitle } from '@monorepo/ui-components';
import React from 'react';

import { defaultProps, propTypes } from './constants';
import { Wrapper } from './style';

const Header = ({ title, onClose }) => {
  return (
    <Wrapper>
      <Subtitle>{title}</Subtitle>
      <Button type={BUTTON_TYPES.default} onClick={onClose}>
        <Icon name="fechar" size="md" stroke={colors.brandcolor.primaryMedium} />
      </Button>
    </Wrapper>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
