export const handleChangeInput = (e, onChange = () => {}) => {
  e.preventDefault();
  const { value, name } = e.target;

  onChange(value, name);
};

export const handleChangeCheckbox = (e, onChange = () => {}) => {
  const { checked, name } = e.target;
  onChange(checked, name);
};

export const handleChangeDropdown = (value, name, onChange = () => {}) => {
  onChange(value, name);
};
