import { Yup } from '@monorepo/ui-components';
import {
  dropdownDefaultValue,
  isValidBirthDate,
  isValidName,
  isValidSelection,
  isValidZipcode,
} from '@monorepo/utils';

export const form = (data = {}) => {
  return {
    enableReinitialize: true,
    initialValues: {
      ...data,
      fullName: data.fullName || '',
      birthDate: data.birthDate || '',
      mothersFullName: data.mothersFullName || '',
      email: data.email || '',
      zipcode: data.zipcode || '',
      street: data.street || '',
      number: data.number || '',
      complement: data.complement || '',
      district: data.district || '',
      state: data.state || dropdownDefaultValue,
      city: data.state || dropdownDefaultValue,
    },
    validationSchema: Yup.object().shape({
      fullName: Yup.string().test('t1', 'Digite o nome completo', isValidName),
      birthDate: Yup.string().test('t1', 'Insira uma data válida', function (value) {
        const { createError } = this;
        return isValidBirthDate(value, createError);
      }),
      mothersFullName: Yup.string().test('t1', 'Digite o nome completo', isValidName),
      email: Yup.string().email('Digite um e-mail válido').required('Digite um e-mail válido'),
      zipcode: Yup.string().test('t1', 'Não conseguimos localizar seu CEP', isValidZipcode),
      street: Yup.string().required('Digite um endereço'),
      number: Yup.string().required('Insira um número'),
      district: Yup.string().required('Digite o nome do bairro'),
      state: Yup.object().test('t1', 'Escolha o estado', isValidSelection),
      city: Yup.object().test('t1', 'Escolha a cidade', isValidSelection),
    }),
  };
};

export const getChosenCar = data => {
  try {
    const { model, make, version } = data;
    return `${make.label} - ${model.label} - ${version.label}`;
  } catch (error) {
    console.error(error);
    return '';
  }
};
