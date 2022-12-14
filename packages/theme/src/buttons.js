import colors from './baseColors';
import { border } from './border';
import { fonts } from './fonts';
import { spacings } from './spacings';

export const buttons = {
  types: {
    primary: {
      color: colors.neutral.colorWhite,
      border: border.style.none,
      backgroundColor: colors.brandcolor.secondaryMedium,

      '&:hover': {
        backgroundColor: colors.brandcolor.secondaryDark,
      },

      '&:active': {
        backgroundColor: colors.brandcolor.secondaryDarkest,
      },
    },

    secondary: {
      color: colors.brandcolor.primaryMedium,
      border: `${border.width.borderSm} ${border.style.solid} ${colors.brandcolor.primaryMedium}`,
      backgroundColor: colors.neutral.colorLightest,

      '&:hover': {
        color: colors.brandcolor.primaryLight,
        borderColor: `${colors.brandcolor.primaryLight}`,
      },

      '&:active': {
        color: colors.brandcolor.primaryDark,
        borderColor: `${colors.brandcolor.primaryDark}`,
      },
    },

    default: {
      border: border.style.none,
      padding: 'initial',
      height: 'auto',
      backgroundColor: colors.transparent,
    },

    disabled: {
      color: colors.neutral.colorWhite,
      border: border.style.none,
      backgroundColor: colors.neutral.colorLight,

      '&:hover': {
        cursor: 'not-allowed',
      },
    },
  },

  sizes: {
    small: {
      fontSize: fonts.sizes.font2xs,
      padding: `${spacings.padding.spacing3xs} ${spacings.padding.spacingXs}`,
      height: `${spacings.layout.spacingSm}`,
    },

    medium: {
      fontSize: fonts.sizes.fontXs,
      padding: `${spacings.padding.spacing2xs} ${spacings.padding.spacingXs}`,
      height: `${spacings.layout.spacingLg}`,
    },

    large: {
      fontSize: fonts.sizes.fontSm,
      padding: `${spacings.padding.spacing2xs} ${spacings.padding.spacingMd}`,
      height: `${spacings.layout.spacingXl}`,
    },
  },
};
