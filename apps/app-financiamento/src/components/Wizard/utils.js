import { SECTIONS, STEPS } from '../../pages/routes';

export const getStepData = currentPath => {
  const stepData = STEPS.find(step => step.paths.includes(currentPath));
  if (!stepData) return;

  const { label, step, section } = stepData;
  const { steps } = SECTIONS[section];

  const progress = Math.round((step / steps) * 100);
  const formattedProgress = `${progress}%`;
  return {
    label,
    step,
    steps,
    progress: formattedProgress,
  };
};
