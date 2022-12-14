import { spacings } from '@monorepo/theme';
import { Button,Flex } from '@monorepo/ui-components';
import React from 'react';

import { defaultProps, propTypes } from './constants';

const Footer = ({ confirmText, cancelText, hasCancel, onConfirm, onClose }) => {
  return (
    <Flex sx={{ gap: spacings.layout.spacing2xs }}>
      {confirmText && (
        <Button onClick={() => onConfirm && onConfirm()} size="medium">
          {confirmText}
        </Button>
      )}
      {hasCancel && (
        <Button onClick={() => onClose && onClose()} size="medium" type="secondary">
          {cancelText}
        </Button>
      )}
    </Flex>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
