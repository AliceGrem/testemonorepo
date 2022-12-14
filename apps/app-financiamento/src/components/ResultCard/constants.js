import { colors } from '@monorepo/theme';
import { PropTypes } from '@monorepo/ui-components';

export const MAX_PERCENTAGE = 100;

export const propTypes = {
  maximum: PropTypes.number,
  minimum: PropTypes.number,
  title: PropTypes.string,
  message: PropTypes.string,
};

export const defaultProps = {
  minimum: 1000,
};

export const TYPES = {
  error: {
    hint: 'O valor mínimo de entrada é de',
    color: colors.feedbackError.colorMedium,
  },
  normal: {
    hint: 'Aumente o valor para ter mais chance de aprovação',
    color: colors.brandcolor.primaryMedium,
  },
  great: {
    hint: 'Esse valor tem grande chance de aprovação',
    color: colors.feedbackSuccess.colorLight,
  },
  over: {
    hint: 'O valor máximo de entrada é de',
    color: colors.feedbackError.colorMedium,
  },
};

export const ERROR = 'error';
export const NORMAL = 'normal';
export const GREAT = 'great';
export const OVER = 'over';

export const GREAT_PROGRESS = 70;
export const MAX_PROGRESS = 100;

export const MAX_CAR_PRICE = 3000000;

export const MODAL_MAIN_BUTTON_TEXT = 'Ajustar entrada';
