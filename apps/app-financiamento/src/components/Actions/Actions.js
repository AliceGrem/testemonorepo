import { spacings } from '@monorepo/theme';
import { Flex, React, useNavigate } from '@monorepo/ui-components';
import { GTM } from '@monorepo/utils';

import { useWizard } from '../Wizard/components/WizardProvider/WizardProvider';
import { NavButton } from './components';
import {
  defaultProps,
  DISABLED_BUTTON,
  PRIMARY_BUTTON,
  propTypes,
  SECONDARY_BUTTON,
} from './constants';

const Actions = ({ back, next, onNext, onBack, formik }) => {
  const { hasError, loading } = useWizard();
  const navigate = useNavigate();

  const nextButtonType = (hasError && DISABLED_BUTTON) || PRIMARY_BUTTON;
  const backButtonType = (loading && DISABLED_BUTTON) || SECONDARY_BUTTON;

  const nextPage = next => {
    if (next) {
      GTM.addEvent({
        action: 'clique:avancar',
        category: 'icarros:simulacao-financiamento',
        label: `avancar:[[${next}]]`,
        value: `${next}`,
      });
      onNext(formik);
      return;
    }
    onNext(formik);
  };

  const backPage = back => {
    if (back) {
      GTM.addEvent({
        action: 'clique:voltar',
        category: 'icarros:simulacao-financiamento',
        label: `voltar:[[${back}]]`,
        value: `${back}`,
      });
      onBack();
      navigate(back);
      return;
    }
    onBack();
    navigate(back);
  };

  return (
    <Flex p={`${spacings.padding.spacingXs} 0`} sx={{ gap: spacings.layout.spacing2xs }}>
      <NavButton path={back} type={backButtonType} loading={loading} onBack={() => backPage(back)}>
        Voltar
      </NavButton>
      <NavButton
        hasError={hasError}
        onNext={() => nextPage(next)}
        path={next}
        type={nextButtonType}
        loading={loading}
      >
        Avançar
      </NavButton>
    </Flex>
  );
};

Actions.propTypes = propTypes;
Actions.defaultProps = defaultProps;

export default Actions;
