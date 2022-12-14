import { colors } from '@monorepo/theme';

export const setFontColorByState = (isDisabled, isLocked) => {
  const { locked, disabled, enabled } = colors.Input.text;

  if (isDisabled) return disabled;
  if (isLocked) return locked;

  return enabled;
};