import { Yup } from '@monorepo/ui-components';
import { isValidCpf } from '@monorepo/utils';

export const form = (data = {}) => {
  return {
    enableReinitialize: true,
    initialValues: {
      ...data,
      email: data.email || '',
      cpf: data.cpf || '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Digite um e-mail válido').required('E-mail inválido'),
      cpf: Yup.string().test('t1', 'Digite um CPF válido', isValidCpf),
    }),
  };
};

export const getFirstName = (fullName = '') => {
  const splitName = fullName && fullName.split(' ');
  if (!splitName.length) return '';
  const firstName = splitName.shift();
  return firstName;
};
