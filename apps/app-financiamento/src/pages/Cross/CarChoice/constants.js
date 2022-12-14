import { getCarYearOptions } from '../CarData/utils';

export const propTypes = {};
export const defaultProps = {};

export const TITLE = 'Insira os detalhes do carro que vai financiar';
export const SUBTITLE = 'Preencha todos os campos abaixo';

export const NEXT = '/dados-adicionais';
export const BACK = '/sobre-o-carro/resultado';

export const TERMS = {
  text: 'Ao clicar no botão abaixo você autoriza a coleta e envio dos dados para os bancos parceiros, conforme nossos',
  href: 'https://www.google.com',
};

const YEARS_BACK = 20;
export const YEAR_OPTIONS = getCarYearOptions(YEARS_BACK);

export const HELPER_TEXT =
  'As opções do campo Versão são exibidas conforme a seleção do ano do modelo';

export const NO_VERSION_OPTIONS_MESSAGE = 'Não há versões disponíveis para o ano selecionado';
