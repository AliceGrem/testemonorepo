import { React, Yup } from '@monorepo/ui-components';
import { isValidBirthDate, isValidPhone } from '@monorepo/utils';

import { StyledLabel } from '../../Desktop/PersonalData/style';
import { getFirstName } from '../../Desktop/PersonalData/utils';

export const form = (data = {}) => {
  return {
    enableReinitialize: true,
    initialValues: {
      ...data,
      email: data.email || '',
      birthDate: data.birthDate || '',
      phone: data.phone || '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('E-mail inválido').required('E-mail inválido'),
      birthDate: Yup.string().test('t1', 'Data inválida', function (value) {
        const { createError } = this;
        return isValidBirthDate(value, createError);
      }),
      phone: Yup.string().test('t1', 'Telefone inválido', isValidPhone),
    }),
  };
};

export const getNumberPhone = phone => {
  const splitPhone = phone.split(') ');
  const numbers = splitPhone[1];
  return Number.parseInt(numbers.replaceAll('-', ''));
};

export const getAreaCodePhone = phone => {
  const splitPhone = phone.split(') ');
  const areaCode = splitPhone[0];

  return Number.parseInt(areaCode.substring(1, areaCode.length));
};

export const getTimestamp = birthDate => {
  const splitBirthDate = birthDate.split('/');
  const [day, month, year] = splitBirthDate;

  const date = new Date(year, month - 1, day);
  return date.getTime();
};

export const formatValues = values => {
  const { fullName, email, birthDate, phone, cpf } = values;
  return {
    name: fullName,
    email,
    cpf,
    numberPhone: getNumberPhone(phone),
    areaCodePhone: getAreaCodePhone(phone),
    birthDate: getTimestamp(birthDate),
    typeLead: 'SIMULACAO',
  };
};

export const saveStepData = (formik, setStepData) => {
  setStepData({ ...formik.values });
};

export const saveStepDataApi = async (values, api, setStepData) => {
  setStepData({ ...values });
  const formattedValues = formatValues(values);
  return await api.postPreSimulation(formattedValues, []);
};

export const welcomeTitle = fullName => {
  return (
    <StyledLabel>
      {fullName ? (
        <>
          Olá, <span>{getFirstName(fullName)}</span>!
        </>
      ) : (
        `Olá! `
      )}
    </StyledLabel>
  );
};
