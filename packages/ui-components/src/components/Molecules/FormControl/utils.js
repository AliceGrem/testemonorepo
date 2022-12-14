import { colors } from '@monorepo/theme';

export const setLabelColor = (isError, isSuccess) => {
  const { error, success, warning } = colors.Label;

  if (isError) return error;
  if (isSuccess) return success;

  return warning;
};
