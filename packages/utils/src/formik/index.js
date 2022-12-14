import * as R from 'ramda';

const PATH_WITH_DOTS = R.useWith(R.path, [R.split('.')]);

const getOnChangeValue = (nameOrValue, maybeValue) => {
  if (maybeValue !== undefined) return maybeValue;
  if (nameOrValue && nameOrValue.target) return nameOrValue.target.value;
  return nameOrValue;
};

export const handleSelectChange = formik => (name, value, isMulti) => {
  if (isMulti) {
    return formik.setFieldValue(name, value + '');
  }
  formik.setFieldValue(name, value);
};

export const handleCheckboxChange = formik => e => {
  const name = R.path(['target', 'name'], e);
  const isChecked = R.path(['target', 'checked'], e);
  formik.setFieldValue(name, isChecked);
};

export const handleRadioChange = formik => (value, name) => {
  formik.setFieldValue(name, value);
};

export const handleInputChange = (formik, callback) => e => {
  const name = R.path(['target', 'name'], e);
  const value = R.path(['target', 'value'], e);
  formik.setFieldValue(name, value);
  if (callback) {
    callback(name, value);
  }
};

const getFormikErroMsg = (name, formik) =>
  R.has(name)(formik.touched) && R.has(name)(formik.errors) && formik.errors[name];

const getInputError = (name, form) =>
  R.hasPath(['errors', name], form) && R.hasPath(['touched', name], form);

export const defineErrors = (name, form) => {
  const value = PATH_WITH_DOTS(name, R.propOr({}, 'values', form));
  const isError = getInputError(name, form);
  return {
    textError: isError ? getFormikErroMsg(name, form) : '',
    formError: isError,
    value,
  };
};

export const configFormikInput = (name, formik, { customChange, customBlur } = {}) => {
  const onChangeFormikInput = (nameOrValue, maybeValue) => {
    formik.setFieldValue(name, getOnChangeValue(nameOrValue, maybeValue));
  };
  const fieldValue = formik.values[name];

  return {
    name: name,
    value: Number(fieldValue) || fieldValue,
    onChange: customChange || onChangeFormikInput,
    onBlur: customBlur || formik.handleBlur,
  };
};
