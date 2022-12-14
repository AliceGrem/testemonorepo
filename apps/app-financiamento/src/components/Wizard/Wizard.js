import { React, useEffect, useLocation, useState } from '@monorepo/ui-components';
import { R } from '@monorepo/utils';

import { WizardProvider } from './components';
import { DESKTOP_MIN_WIDTH, propTypes } from './constants';

const viewportWidth = window.innerWidth;

const Wizard = ({ routeSwitch }) => {
  const { pathname } = useLocation();
  const [data, setData] = useState({});
  const [hasError, setError] = useState();
  const [stepData, setStepData] = useState({});
  const [stepError, setStepError] = useState({});
  const [loading, setLoading] = useState(false);
  const [simulationData, setSimulationData] = useState({});
  const [templateBadge, setTemplateBadge] = useState('');
  const [templateTitle, setTemplateTitle] = useState('');
  const [isDesk] = useState(viewportWidth >= DESKTOP_MIN_WIDTH);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setData({ ...data, ...stepData });
  }, [stepData]);

  useEffect(() => {
    setError(!R.isEmpty(stepError));
  }, [stepError]);

  const api = {
    currentPath: pathname,
    setStepData,
    setStepError,
    setLoading,
    loading,
    data,
    hasError,
    setSimulationData,
    simulationData,
    isDesk,
    templateBadge,
    setTemplateBadge,
    templateTitle,
    setTemplateTitle,
    showMessage,
    setShowMessage,
    message,
    setMessage,
  };
  return (
    <WizardProvider api={api}>
      <>{routeSwitch()}</>
    </WizardProvider>
  );
};

Wizard.propTypes = propTypes;

export default Wizard;
