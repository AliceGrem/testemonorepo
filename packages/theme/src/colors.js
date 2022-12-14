import baseColors from './baseColors';

export const colors = {
  ...baseColors,
  body: {
    background: baseColors.neutral.colorLightest,
    text: baseColors.neutral.colorDark,
  },
  Icon: {
    locked: baseColors.neutral.colorMedium,
    disabled: baseColors.neutral.colorLight,
    enabled: baseColors.brandcolor.primaryMedium,
  },
  Label: {
    default: baseColors.neutral.colorDarkest,
    enabled: baseColors.neutral.colorMedium,
    error: baseColors.feedbackError.colorLight,
    success: baseColors.feedbackSuccess.colorLight,
    warning: baseColors.brandcolor.primaryLight,
  },
  Legend: {
    default: baseColors.neutral.colorMedium,
  },
  Subtitle: {
    default: baseColors.neutral.colorDarkest,
  },
  CarMaker: {
    default: baseColors.neutral.colorDarkest,
  },
  Badge: {
    disabled: baseColors.neutral.colorLight,
    enabled: baseColors.brandcolor.primaryMedium,
  },
  Input: {
    background: baseColors.neutral.colorWhite,
    text: {
      disabled: baseColors.neutral.colorLight,
      enabled: baseColors.neutral.colorDark,
      error: baseColors.feedbackError.colorLight,
      locked: baseColors.neutral.colorMedium,
      success: baseColors.feedbackSuccess.colorLight,
      warning: baseColors.brandcolor.primaryLight,
    },
  },
  FormControl: {
    background: baseColors.neutral.colorWhite,
    text: {
      disabled: baseColors.neutral.colorLight,
      enabled: baseColors.neutral.colorDark,
      error: baseColors.feedbackError.colorLight,
      locked: baseColors.neutral.colorMedium,
      success: baseColors.feedbackSuccess.colorLight,
      warning: baseColors.brandcolor.primaryLight,
    },
  },
  LegalTerms: baseColors.neutral.colorMedium,
  Select: {
    active: baseColors.brandcolor.primaryMedium,
    disabled: baseColors.neutral.colorLight,
    enabled: baseColors.neutral.colorDark,
    error: baseColors.feedbackError.colorLight,
    locked: baseColors.neutral.colorMedium,
    selected: baseColors.neutral.colorDark,
  },
};
