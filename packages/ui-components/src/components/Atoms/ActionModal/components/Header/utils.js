import { colors } from '@monorepo/theme';
import { Icon } from '@monorepo/ui-components';
import React from 'react';

const getIcon = modalType => {
  switch (modalType) {
    case 'success':
      return <Icon name="sucesso" size="xl" stroke={colors.feedbackSuccess.colorLight} />;
    case 'warning':
      return <Icon name="alerta" size="xl" stroke={colors.feedbackWarning.colorMedium} />;
    case 'error':
      return <Icon name="erro" size="xl" stroke={colors.feedbackError.colorMedium} />;
    default:
      return <></>;
  }
};

export default getIcon;
