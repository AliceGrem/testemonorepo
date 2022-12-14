import { colors } from '@monorepo/theme';

export const setStrokePartialDisabled = isPartialDisabled => {
  if (isPartialDisabled) return colors.neutral.colorMedium;

  return colors.brandcolor.primaryMedium;
};
