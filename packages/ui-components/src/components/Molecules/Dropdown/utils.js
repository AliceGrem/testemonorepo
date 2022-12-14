import { colors } from '@monorepo/theme';
import * as R from 'ramda';

export const setPlaceholder = (isDisabled, isLocked, isError) => {
  if (isDisabled) return colors.neutral.colorLight;

  if (isLocked) return colors.neutral.colorMedium;

  return colors.neutral.colorDark;
};

export const setStrokeIcon = (colorIcon, isDisabled, isLocked, isError) => {
  if (isLocked) return colors.neutral.colorLight;

  if (isDisabled) return colors.neutral.colorMedium;

  if (isError) return colors.feedbackError.colorLight;

  return colorIcon;
};

export const formmattedText = text => {
  if (R.isEmpty(text) || R.isNil(text)) null;

  const formattedText = text
    ?.toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  return formattedText;
};
