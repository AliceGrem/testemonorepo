export const sortAlphabeticallyLabelValues = (a, b) => {
  if (a.label.normalize('NFD').toLowerCase() < b.label.normalize('NFD').toLowerCase()) return -1;
  if (a.label.normalize('NFD').toLowerCase() > b.label.normalize('NFD').toLowerCase()) return 1;
  return 0;
};
