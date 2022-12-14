import { fonts } from '@monorepo/theme';
import { PropTypes } from 'prop-types';

const DEFAULT_CURRENCY_SYMBOL = 'R$';

export const propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  key: PropTypes.string,
};

export const defaultProps = {
  key: '',
  currency: DEFAULT_CURRENCY_SYMBOL,
};

export const moneyPropTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  decimalSeparator: PropTypes.string,
  thousandSeparator: PropTypes.string,
};

export const defaultMoneyProp = {
  decimalSeparator: ',',
  thousandSeparator: '.',
  onChange: () => {},
  value: '',
};

export const inputProps = {
  style: {
    fontSize: fonts.sizes.fontSm,
    fontWeight: fonts.weight.fontSemiBold,
  },
};

export const FIELD_SIZE = 'medium';
export const HELPER_TEXT_SIZE = 'font2xs';
