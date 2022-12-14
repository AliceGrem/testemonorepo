import { PropTypes } from '@monorepo/ui-components';
export const propTypes = {
  initialValues: PropTypes.object,
};

export const SUBTITLE = 'Mecânica';

export const MECHANICS_INPUT = [
  { name: "Tipo de câmbio", key: "transmissionType" },
  { name: "Câmbio", key: "transmission" },
  { name: "Tração", key: "traction" },
  { name: "Direção", key: "direction" },
  { name: "Suspensão Dianteira", key: "frontSuspension" },
  { name: "Suspensão Traseira", key: "frontBrake" },
  { name: "Freio Traseiro", key: "rearBrake" },
];
