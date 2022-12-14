import { Label, React, useEffect, useLocation, useState } from '@monorepo/ui-components';

import { getStepData } from '../Wizard/utils.js';
import HeaderProgress from './components/HeaderProgress';
import { defaultProps, propTypes } from './constants.js';
import { FlowHeaderContainer, StyledLabel } from './style.js';

const FlowHeader = () => {
  const { pathname } = useLocation();
  const [currentStep, setCurrentStep] = useState();
  const [sectionSteps, setSectionSteps] = useState();
  const [stepName, setStepName] = useState('');
  const [progress, setProgress] = useState('');

  useEffect(() => {
    const stepData = getStepData(pathname);
    if (!stepData) return;
    const { step, steps, label, progress } = stepData;
    setCurrentStep(step);
    setSectionSteps(steps);
    setStepName(label);
    setProgress(progress);
  }, [pathname]);

  return (
    <FlowHeaderContainer>
      <StyledLabel>{stepName}</StyledLabel>
      <HeaderProgress progress={progress}>
        <Label>
          {currentStep} / {sectionSteps}
        </Label>
      </HeaderProgress>
    </FlowHeaderContainer>
  );
};
FlowHeader.defaultProps = defaultProps;
FlowHeader.propTypes = propTypes;

export default FlowHeader;
