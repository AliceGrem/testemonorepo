export const getCharsLeftText = value => `Caracteres restantes: ${value}`;

export const getPlaceholderText = value => `Máximo ${value} caracteres`;

export const handleChange = (e, onChange = () => {}) => {
  e.preventDefault();
  const { value, name } = e.target;
  onChange(value, name);
};
