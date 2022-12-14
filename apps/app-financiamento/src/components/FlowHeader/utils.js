export const getCurrentStep = (pathname, steps) => {
  const index = steps.findIndex(step => step.paths.includes(pathname));
  return index === -1 ? 1 : index + 1;
};
