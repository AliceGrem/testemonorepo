import { colors } from '@monorepo/theme';

export const setStrokeByState = (isDisabled, isLocked) => {
  const { locked, disabled, enabled } = colors.Icon;

  if (isDisabled) return disabled;
  if (isLocked) return locked;

  return enabled;
};