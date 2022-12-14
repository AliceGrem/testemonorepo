import { PropTypes } from '@monorepo/ui-components';
export const propTypes = {
  initialValues: PropTypes.object,
};

export const SUBTITLE = 'Versões';
export const TEXT_BUTTON = 'Imagem';

export const VERSIONS_INPUT = [
  { name: "Modelo", key: "modelName" },
  { name: "Versão", key: "name" },
  { name: "Data de Lançamento", key: "releaseDate" },
  { name: "Jato id", key: "jatoId" },
  { name: "Categoria", key: "modelCategoryId" },
  { name: "Ano inicial", key: "initYear" },
  { name: "Ano final", key: "endYear" },
  { name: "Código Fipe", key: "fipeID" },
  { name: "Preço 0km", key: "priceNewCar" },
  { name: "Moedas", key: "coin" },
  { name: "Portas", key: "numberOfDoors" },
];

export const VERSIONS_CHECKBOX = [
  { name: "Premium", key: "premium" },
  { name: "Importado", key: "imported" },
  { name: "Disponível 0km", key: "actual" },
];
