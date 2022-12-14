import React from 'react';

import { ActionModal, Button, BUTTON_SIZES, Flex } from '~Atoms';

const MOCK_TEXT = 'Modal informativo';
export default {
  title: 'Atoms/ActionModal',
  component: ActionModal,
  args: {
    title: MOCK_TEXT,
    width: '350px',
    confirmText: 'Confirmar',
  },
  argTypes: {
    title: { control: 'text' },
    width: { control: 'text' },
    confirmText: { control: 'text' },
  },
};

export const Default = args => {
  const [modalState, setModalState] = React.useState(false);
  return (
    <Flex justifyContent="center">
      <Button size={BUTTON_SIZES.small} width={200} onClick={() => setModalState(true)}>
        Abrir modal
      </Button>
      <ActionModal state={[modalState, setModalState]} {...args}></ActionModal>
    </Flex>
  );
};
