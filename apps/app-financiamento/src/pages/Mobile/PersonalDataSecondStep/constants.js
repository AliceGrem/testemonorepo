import { PropTypes } from '@monorepo/ui-components';

export const propTypes = {
  initialValues: PropTypes.object,
};

const TITLE = 'Conte-nos um pouco sobre você';
const SUBTITLE = 'Preencha todos os campos abaixo';
const WELCOME_SUBTITLE = 'Conte-nos um pouco mais sobre você :)';

const TERMS = {
  text: 'Ao clicar no botão abaixo você autoriza a coleta e envio dos dados para os bancos parceiros, conforme nossos',
  href: 'https://www.google.com',
};

const NEXT = '/sobre-o-carro';
const BACK_MOBILE = '/dados-pessoais';
const BACK_DESK = null;

const FIELD_SIZE = 'medium';
const HELPER_TEXT_SIZE = 'font2xs';

export {
  BACK_DESK,
  BACK_MOBILE,
  FIELD_SIZE,
  HELPER_TEXT_SIZE,
  NEXT,
  SUBTITLE,
  TERMS,
  TITLE,
  WELCOME_SUBTITLE,
};
