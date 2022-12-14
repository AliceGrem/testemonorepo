import { PropTypes } from '@monorepo/ui-components';
export const propTypes = {
  initialValues: PropTypes.object,
};

export const SUBTITLE = 'Motor/Performance';


export const MOTOR_PERFORMANCE_INPUTS = [
  [{ name: "Motor", key: "motor" }],
  [{ name: "Alimentação", key: "alimentation" }],
  [
    { name: "Combustível", key: "fuel" },
    { name: "Combustível", key: "fuel2" }
  ],
  [
    { name: "Potência (cv)", key: "power" },
    { name: "Potência (cv)", key: "power2" }
  ],
  [
    { name: "Cilindrada (cm³)", key: "cylinders" },
    { name: "Cilindrada (cm³)", key: "cylinders2" }
  ],
  [
    { name: "Torque (kgf.m)", key: "torque" },
    { name: "Torque (kgf.m)", key: "torque2" }
  ],
  [
    { name: "Velocidade Máxima (Km/h)", key: "maxSpeed" },
    { name: "Velocidade Máxima (Km/h)", key: "maxSpeed2" }
  ],
  [
    { name: "Tempo 0-100 Km/h (s)", key: "timeZeroToHundred" },
    { name: "Tempo 0-100 Km/h (s)", key: "timeZeroToHundred2" }
  ],
  [
    { name: "Consumo cidade (km/l)", key: "cityConsumption" },
    { name: "Consumo cidade (km/l)", key: "cityConsumption2" }
  ],
  [
    { name: "Consumo estrada (km/l)", key: "roadConsumption" },
    { name: "Consumo estrada (km/l)", key: "roadConsumption2" }
  ]
];
