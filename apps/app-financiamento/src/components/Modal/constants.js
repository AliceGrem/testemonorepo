import { PropTypes, React } from '@monorepo/ui-components';

export const propTypes = {
  modalType: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
  footerProps: PropTypes.object,
  onClose: PropTypes.func,
  children: PropTypes.element,
  width: PropTypes.string,
};

export const defaultProps = {
  modalType: 'success',
  title: '',
  message: '',
  footerProps: {
    mainButtonText: 'Avançar',
    mainButtonMethod: () => {},
    secondButtonText: 'Voltar',
    secondButtonMethod: () => {},
  },
  onClose: () => {},
  children: <></>,
  width: '300px',
};
