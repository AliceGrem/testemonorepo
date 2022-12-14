export const debounce = (fn, wait) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(fn, wait);
  };
};
