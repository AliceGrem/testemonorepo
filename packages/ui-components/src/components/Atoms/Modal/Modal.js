import { Flex } from '@monorepo/ui-components';
import React, { useEffect } from 'react';

import { Header } from './components';
import { defaultProps, propTypes } from './constants';
import { Backdrop,Dialog } from './style';

const Modal = ({ state = [], title, children, onClose, renderFooter, ...props }) => {
  const [isOpen, setIsOpen] = state;

  useEffect(() => {
    if (!isOpen && onClose) {
      onClose();
    }
  }, [isOpen]);

  const Footer = () => (renderFooter && renderFooter({ onClose, ...props })) || null;

  return (
    (isOpen && (
      <Backdrop
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <Dialog {...props}>
          <Header
            title={title}
            onClose={() => {
              setIsOpen(false);
            }}
          ></Header>
          <Flex>{children}</Flex>
          <Flex>
            <Footer />
          </Flex>
        </Dialog>
      </Backdrop>
    )) ||
    null
  );
};

Modal.defaultProps = defaultProps;
Modal.propTypes = propTypes;

export default Modal;
