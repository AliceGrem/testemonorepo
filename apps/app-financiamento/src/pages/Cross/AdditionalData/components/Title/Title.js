import { React } from '@monorepo/ui-components';

import { defaultProps, propTypes } from './constants';

const Title = ({ chosenCar }) => (
  <>
    Para te mostrar o resultado da análise de crédito para o
    <span className="highlight"> {chosenCar}</span>, a gente precisa saber um pouco mais sobre você
    :)
  </>
);

Title.defaultProps = defaultProps;
Title.propTypes = propTypes;

export default Title;
