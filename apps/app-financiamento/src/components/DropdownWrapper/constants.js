import { PropTypes, React } from '@monorepo/ui-components';

export const propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  dataCy: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  onChange: PropTypes.func,
  helper: PropTypes.string,
  formatLabels: PropTypes.func,
};

export const defaultProps = {
  name: '',
  label: '',
  dataCy: '',
  options: [],
  onChange: () => {},
  helper: '',
  formatLabels: ({ label }) => <div>{label}</div>,
};
