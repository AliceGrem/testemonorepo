import { colors } from '@monorepo/theme';
import React, { useState } from 'react';

import { Button, Flex, Icon, Tooltip } from '~Atoms';

import { ICON_SIZES, INFO_BUTTON_ICON, INFO_BUTTON_TYPE, propTypes } from './constants';

const InfoButton = ({ textInfo, size }) => {
  const [hasTooltip, setHasTooltip] = useState(false);

  const showTooltip = () => setHasTooltip(true);

  const hideTooltip = () => setHasTooltip(false);

  return (
    <Flex justifyContent="center">
      <Button type={INFO_BUTTON_TYPE} onMouseOver={showTooltip} onMouseLeave={hideTooltip}>
        <Icon
          key={INFO_BUTTON_ICON}
          title={INFO_BUTTON_ICON}
          name={INFO_BUTTON_ICON}
          size={ICON_SIZES[size]}
          color={colors.neutral.colorMedium}
        />
      </Button>
      {hasTooltip && <Tooltip>{textInfo}</Tooltip>}
    </Flex>
  );
};

InfoButton.propTypes = propTypes;

export default InfoButton;
