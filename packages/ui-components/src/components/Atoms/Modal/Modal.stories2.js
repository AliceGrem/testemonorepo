import React from 'react';

import { Button, BUTTON_SIZES, Flex, Modal, Paragraph } from '../../Atoms';

const MOCK_TITLE = 'Modal informativo';
const MOCK_TEXT = 'Lorem ipsom dolor si amt';
export default {
  title: 'Atoms/InfoModal',
  component: Modal,
  args: {
    title: MOCK_TITLE,
    width: '350px',
  },
  argTypes: {
    title: { control: 'text' },
    width: { control: 'text' },
  },
};

const text = <Paragraph>{MOCK_TEXT}</Paragraph>;

export const Default = args => {
  const [modalState, setModalState] = React.useState(false);
  return (
    <Flex justifyContent="center">
      <Button size={BUTTON_SIZES.small} width={200} onClick={() => setModalState(true)}>
        Abrir modal
      </Button>
      <Modal state={[modalState, setModalState]} {...args}>
        {text}
      </Modal>
    </Flex>
  );
};
