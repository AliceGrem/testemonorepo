import { React } from '@monorepo/ui-components';

import {
  AdditionalData,
  CarChoice,
  CarData,
  PersonalData,
  PersonalDataSecondStep,
  Result,
} from '../pages';

export const DESK_ROUTES = [
  {
    label: 'Dados Pessoais',
    path: '/dados-pessoais',
    children: [
      {
        path: '/dados-pessoais',
        element: <PersonalDataSecondStep />,
      },
    ],
  },
  {
    label: 'Sobre o carro',
    path: '/sobre-o-carro',
    children: [
      {
        path: '/sobre-o-carro',
        element: <CarData />,
      },
      {
        path: '/sobre-o-carro/resultado',
        element: <Result />,
      },
    ],
  },
  {
    label: 'Escolha do carro',
    path: '/escolha-o-carro',
    children: [
      {
        path: '/escolha-o-carro',
        element: <CarChoice />,
      },
    ],
  },
  {
    label: 'Dados adicionais',
    path: '/dados-adicionais',
    children: [
      {
        path: '/dados-adicionais',
        element: <AdditionalData />,
      },
    ],
  },
];

export const SECTIONS = {
  simulation: {
    title: 'Simulação de financiamento',
    steps: 3,
  },
  analysis: {
    title: 'Análise de crédito',
    steps: 2,
  },
};

export const MOBILE_ROUTES = [
  {
    label: 'Dados Pessoais',
    path: '/dados-pessoais',
    section: 'simulation',
    step: 1,
    children: [
      {
        path: '/dados-pessoais',
        element: <PersonalData />,
      },
      {
        path: '/dados-pessoais/2',
        element: <PersonalDataSecondStep />,
      },
    ],
  },
  {
    header: 'Simulação de financiamento',
    label: 'Sobre o carro',
    path: '/sobre-o-carro',
    section: 'simulation',
    step: 2,
    children: [
      {
        path: '/sobre-o-carro',
        element: <CarData />,
      },
      {
        path: '/sobre-o-carro/resultado',
        element: <Result />,
        logo: true,
      },
    ],
  },
  {
    header: 'Simulação de financiamento',
    label: 'Escolha do carro',
    path: '/escolha-o-carro',
    section: 'simulation',
    step: 3,
    children: [
      {
        path: '/escolha-o-carro',
        element: <CarChoice />,
        logo: true,
      },
    ],
  },
  {
    label: 'Dados adicionais',
    path: '/dados-adicionais',
    section: 'analysis',
    step: 1,
    children: [
      {
        path: '/dados-adicionais',
        element: <AdditionalData />,
        logo: true,
      },
    ],
  },
];

export const STEPS = MOBILE_ROUTES.map(({ children, label, step, section }) => ({
  label,
  paths: children.map(child => child.path),
  step,
  section,
}));
