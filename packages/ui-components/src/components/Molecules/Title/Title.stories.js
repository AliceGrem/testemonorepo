import React from 'react';

import { Title } from '~Molecules';

const MOCK_SUBTITLE = 'Qual veículo você deseja anunciar?';
const MOCK_TITLE = 'Escolha a modalidade do anúncio para cada um dos portais';

export default {
  title: 'Molecules/Title',
  component: Title,
  args: { textTitle: MOCK_TITLE, textSubTitle: MOCK_SUBTITLE },
  argTypes: {
    colorTitle: { control: 'color' },
    textTitle: { control: 'text' },
    colorSubTitle: { control: 'color' },
    textSubTitle: { control: 'text' },
    textAlign: { control: 'text' },
  },
};

export const TitleComponent = args => <Title {...args} />;
