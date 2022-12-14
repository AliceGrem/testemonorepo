import { Yup } from '@monorepo/ui-components';
import { isValidCpf, isValidName } from '@monorepo/utils';

export const form = (data = {}) => {
  return {
    enableReinitialize: true,
    initialValues: {
      ...data,
      fullName: data.fullName || '',
      cpf: data.cpf || '',
    },
    validationSchema: Yup.object().shape({
      fullName: Yup.string().test('t1', 'Insira um nome válido', isValidName),
      cpf: Yup.string().test('t1', 'CPF inválido', isValidCpf),
    }),
  };
};
