import React from 'react';

import { Box, Flex, Icon, Modal, Paragraph } from '~Atoms';

import { Footer } from './components';
import { defaultProps, propTypes } from './constants';

const ActionModal = props => {
  const text = (
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </Paragraph>
  );

  const icon = <Icon name="info" size="lg" />;

  return (
    <Modal {...props} renderFooter={props => <Footer {...props} />}>
      <Flex flexDirection="column">
        <Box>{icon}</Box>
        <Box>{text}</Box>
      </Flex>
    </Modal>
  );
};

ActionModal.defaultProps = defaultProps;
ActionModal.propTypes = propTypes;

export default ActionModal;
