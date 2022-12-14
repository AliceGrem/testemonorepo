import { colors } from '@monorepo/theme';
import React from 'react';

import { Icon, Label } from '~Atoms';
import { MultipleAdLinks } from '~Templates';

const NEW_CAR_TEXT = '0 km';
const USED_CAR_TEXT = 'Seminovo usado';
const NEW_CAR_ICON = 'carro_novo';
const USED_CAR_ICON = 'carro_usado';
const FONT_SIZE_TEXT_LINK = 'fontXs';
const ICON_SIZE = 'xl';

export default {
  title: 'Templates/MultipleAdLinks',
  component: MultipleAdLinks,
};

const usedCarIcon = (
  <Icon
    key={USED_CAR_ICON}
    title={USED_CAR_ICON}
    name={USED_CAR_ICON}
    size={ICON_SIZE}
    isDisabled
    hoverColor={colors.Icon.enabled}
    stroke={colors.neutral.colorMedium}
  />
);

const usedCarText = (
  <Label size={FONT_SIZE_TEXT_LINK} color={colors.Label.enabled} enabled>
    {USED_CAR_TEXT}
  </Label>
);

const newCarText = (
  <Label size={FONT_SIZE_TEXT_LINK} color={colors.Label.enabled} enabled>
    {NEW_CAR_TEXT}
  </Label>
);

const newCarIcon = (
  <Icon
    key={NEW_CAR_ICON}
    title={NEW_CAR_ICON}
    name={NEW_CAR_ICON}
    size={ICON_SIZE}
    isDisabled
    hoverColor={colors.Icon.enabled}
    stroke={colors.neutral.colorMedium}
  />
);

export const MultipleAdLinksTemplate = () => {
  const adLinkList = [
    { figure: usedCarIcon, label: usedCarText },
    { figure: newCarIcon, label: newCarText },
  ];

  return <MultipleAdLinks adLinkList={adLinkList} />;
};
