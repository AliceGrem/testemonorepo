import { Box, Button, React } from '@monorepo/ui-components';

import { defaultProps, propTypes } from './constants';

const NavButton = ({ hasError, onNext, path, children, type, size, onBack, loading }) => {
  const hasLoadingOrError = loading || hasError;
  const onClick = () => {
    if (onNext && !hasLoadingOrError) {
      onNext();
      return;
    }
    if (!loading) onBack();
  };
  return (
    <Box width={1}>
      {path && (
        <Button onClick={onClick} type={type} size={size} loading={loading && !onBack}>
          {children}
        </Button>
      )}
    </Box>
  );
};

NavButton.propTypes = propTypes;
NavButton.defaultProps = defaultProps;

export default NavButton;
