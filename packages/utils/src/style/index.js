export const pxToRem = (pxValue, base = 16) => {
  const remValue = 1 / base * parseFloat(pxValue);
  return remValue;
};

export const remToPx = (remValue, base = 16) => {
  const pxValue = parseFloat(remValue) / (1 / base);
  return pxValue;
};
