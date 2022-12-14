import { colors } from '@monorepo/theme';
import React from 'react';

import { Flex,Icon, Label } from '~Atoms';
import { AdLink } from '~Templates';

const USED_CAR_ICON = 'carro_usado';
const USED_CAR_TEXT = 'Seminovo usado';
const DEFAULT_FONT_SIZE_TEXT = 'fontXs';
const ICON_SIZE_XL = 'xl';

export default {
  title: 'Templates/AdLink',
  component: AdLink,
  args: {
    children: USED_CAR_TEXT,
  },
  argTypes: {
    children: { control: 'text' },
  },
};

const usedCarIcon = (
  <Icon
    key={USED_CAR_ICON}
    title={USED_CAR_ICON}
    name={USED_CAR_ICON}
    size={ICON_SIZE_XL}
    isDisabled
    hoverColor={colors.Icon.enabled}
    stroke={colors.neutral.colorMedium}
  />
);

const label = (args) => (
  <Label {...args} size={DEFAULT_FONT_SIZE_TEXT} color={colors.Label.enabled} enabled />
);

export const AdLinkTemplate = (args) => (
  <Flex alignItems="center" justifyContent="center" textAlign="center">
    <AdLink Figure={usedCarIcon} Label={label(args)} />
  </Flex>
);
