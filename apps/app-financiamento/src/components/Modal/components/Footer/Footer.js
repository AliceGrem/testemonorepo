import { spacings } from '@monorepo/theme';
import { Box, Button, React } from '@monorepo/ui-components';

import { defaultProps, propTypes } from './constants';

const Footer = ({
  mainButtonText,
  mainButtonMethod,
  secondaryButtonText,
  secondaryButtonMethod,
  controller,
}) => {
  return (
    <Box>
      {mainButtonText && (
        <Box mt={spacings.margin.spacingXs} width="100%">
          <Button onClick={() => mainButtonMethod(controller)} size="medium">
            {mainButtonText}
          </Button>
        </Box>
      )}
      {secondaryButtonText && (
        <Box mt={spacings.margin.spacingXs} width="100%">
          <Button onClick={() => secondaryButtonMethod(controller)} size="medium" type="secondary">
            {secondaryButtonText}
          </Button>
        </Box>
      )}
    </Box>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
