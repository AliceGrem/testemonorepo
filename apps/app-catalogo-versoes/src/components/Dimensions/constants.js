import { PropTypes } from '@monorepo/ui-components';
export const propTypes = {
  initialValues: PropTypes.object,
};

export const SUBTITLE = 'Dimensões';

export const DIMENSIONS_INPUT = [
  { name: "Altura (mm)", key: "height" },
  { name: "Largura (mm)", key: "width" },
  { name: "Comprimento (mm)", key: "length" },
  { name: "Entre-eixos (mm)", key: "betweenAxles" },
  { name: "Peso (kg)", key: "weight" },
  { name: "Tanque (L)", key: "tank" },
  { name: "Porta-malas", key: "trunk" },
  { name: "Ocupantes", key: "occupants" },
];

