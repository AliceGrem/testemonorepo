import { PropTypes } from '@monorepo/ui-components';

import { getCarYearOptions } from './utils';

export const propTypes = {
  initialValues: PropTypes.object,
};

export const TITLE = 'Qual o valor do carro que você deseja fazer a simulação?';
export const SUBTITLE = 'Preencha todos os campos abaixo';

export const BACK_MOBILE = '/dados-pessoais/2';
export const BACK_DESK = '/dados-pessoais';
export const NEXT = '/sobre-o-carro/resultado';

const YEARS_BACK = 20;
export const OPTIONS = getCarYearOptions(YEARS_BACK);
