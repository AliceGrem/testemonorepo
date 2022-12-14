import { React } from '@monorepo/ui-components';

import { Footer, Header } from './components';
import { defaultProps, propTypes } from './constants';
import { StyledModal, StyledModalContainer } from './style';

const Modal = ({ modalType, footerProps, children, show, controller, onClose, width }) => {
  const closeModal = () => {
    onClose();
    controller({ show: false });
  };
  return (
    show && (
      <StyledModalContainer>
        <StyledModal width={width}>
          <Header onClose={closeModal} modalType={modalType} />
          {children}
          <Footer {...footerProps} controller={controller} />
        </StyledModal>
      </StyledModalContainer>
    )
  );
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
