import { colors } from './colors';
import { spacings } from './spacings';

export const checkbox = {
  states: {
    enabled: {
      borderColor: colors.neutral.colorDark,

      '&:hover': {
        borderColor: colors.brandcolor.primaryLightest,
      },
    },

    checked: {
      borderColor: colors.brandcolor.primaryMedium,
      backgroundColor: colors.brandcolor.primaryMedium,
    },

    error: {
      borderColor: colors.feedbackError.colorMedium,
    },

    partial: {
      borderColor: colors.brandcolor.primaryMedium,
      backgroundColor: colors.brandcolor.primaryLightest,
    },

    disabled: {
      borderColor: colors.neutral.colorMedium,
    },

    checkedDisabled: {
      borderColor: colors.neutral.colorMedium,
      backgroundColor: colors.neutral.colorMedium,
    },

    partialDisabled: {
      borderColor: colors.neutral.colorMedium,
      backgroundColor: colors.neutral.colorLight,
    },
  },

  sizes: {
    small: {
      width: `${spacings.layout.spacing2xs}`,
      height: `${spacings.layout.spacing2xs}`,
    },

    medium: {
      width: `${spacings.layout.spacingXs}`,
      height: `${spacings.layout.spacingXs}`,
    },

    large: {
      width: `${spacings.layout.spacingSm}`,
      height: `${spacings.layout.spacingSm}`,
    },
  },
};
