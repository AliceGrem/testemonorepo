import { PropTypes } from '@monorepo/ui-components';

export const propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  active: PropTypes.bool,
};

export const defaultProps = {
  label: '',
  icon: '',
  active: false,
};

export const NAVBAR_ITEMS = [
  'Comprar',
  'Vender',
  'Financiamento',
  'Seguros',
  'Catálogo 0km',
  'Tabela FIPE',
  'Notícias',
];

export const NAVBAR_ADDONS = ['+ sites', 'Portal revenda'];
