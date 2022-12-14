import * as R from 'ramda';

import { differenceInYears } from '../dates';
import { brlFormatter } from '../formatters';

const MAJORITY = 18;
const MAX_AGE_ALLOWED = 75;
const MIN_PRICE = 1500;
const MAX_PRICE = 1150000;
const CELLPHONE_EXPECTED_LENGTH = 15;
const DATE_EXPECTED_LENGTH = 10;
const ZIPCODE_EXPECTED_LENGTH = 8;

export const isValidName = (value = '', maxLength) => {
  if (R.isEmpty(value)) {
    return false;
  }

  if (value.length > maxLength) {
    return false;
  }

  const cleanValue = value.trim();
  const names = cleanValue.split(' ');

  if (names && names.length >= 2 && names.every(elem => elem.length >= 2)) {
    return true;
  }

  return false;
};

export const removeMaskZipcode = zipcode => zipcode?.replace('-', '').replace(/\D/g, '');

export const isValidZipcode = zipcode => {
  if (R.isEmpty(zipcode) || R.isNil(zipcode)) return false;

  const formattedZipcode = removeMaskZipcode(zipcode);
  return formattedZipcode.length === ZIPCODE_EXPECTED_LENGTH;
};

export const onlyNumbers = str => {
  const numbers = str && str.match(/\d/g);
  return numbers && numbers.join('');
};

export const isValidCpf = stringCpf => {
  const cpfValue = stringCpf ? onlyNumbers(stringCpf) : '';
  let cpfSum;
  let cpfRest;
  cpfSum = 0;

  if (cpfValue !== undefined && cpfValue.length >= 11) {
    if (
      cpfValue === '00000000000' ||
      cpfValue === '11111111111' ||
      cpfValue === '22222222222' ||
      cpfValue === '33333333333' ||
      cpfValue === '44444444444' ||
      cpfValue === '55555555555' ||
      cpfValue === '66666666666' ||
      cpfValue === '77777777777' ||
      cpfValue === '88888888888' ||
      cpfValue === '99999999999'
    ) {
      return false;
    }

    for (let i = 1; i <= 9; i += 1) {
      cpfSum += parseInt(cpfValue.substring(i - 1, i)) * (11 - i);
    }
    cpfRest = (cpfSum * 10) % 11;

    if (cpfRest === 10 || cpfRest === 11) cpfRest = 0;
    if (cpfRest !== parseInt(cpfValue.substring(9, 10))) return false;

    cpfSum = 0;
    for (let i = 1; i <= 10; i += 1) {
      cpfSum += parseInt(cpfValue.substring(i - 1, i)) * (12 - i);
    }

    cpfRest = (cpfSum * 10) % 11;

    if (cpfRest === 10 || cpfRest === 11) cpfRest = 0;
    if (cpfRest !== parseInt(cpfValue.substring(10, 11))) return false;
    return true;
  }

  return false;
};

export const isValidPhone = stringPhone => {
  if (!stringPhone) return false;
  if (stringPhone.length < CELLPHONE_EXPECTED_LENGTH) return false;

  const phoneRegex = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/;
  return phoneRegex.test(stringPhone);
};

export const isValidBirthDate = (stringBirthDate, createError) => {
  if (!stringBirthDate) return false;

  const parsedBirthDate = stringBirthDate.replaceAll('_', '');

  if (parsedBirthDate.length < DATE_EXPECTED_LENGTH) return false;

  const handleBirthDate = parsedBirthDate.split('/').reverse().join('-');

  const today = new Date();
  const birthDate = new Date(handleBirthDate);

  const result = differenceInYears(today, birthDate);
  if (!result || isNaN(result)) return createError({ message: 'Data inválida' });
  if (result < MAJORITY) return createError({ message: `Deve ser maior de ${MAJORITY} anos` });
  if (result > MAX_AGE_ALLOWED)
    return createError({ message: `Não pode ser maior de ${MAX_AGE_ALLOWED} anos` });
  return true;
};

export const isValidCarPrice = (value, createError) => {
  const minValue = brlFormatter(MIN_PRICE);
  const maxValue = brlFormatter(MAX_PRICE);
  if (value === undefined || value === '') return createError({ message: 'Valor inválido' });
  if (value < MIN_PRICE) return createError({ message: `Valor mínimo de ${minValue}` });
  if (value > MAX_PRICE) return createError({ message: `Valor máximo de ${maxValue}` });
  return true;
};

export const isValidSelection = selection => {
  return R.prop('value', selection) && R.prop('label', selection);
};

export const isDataValid = data => {
  const isValid = R.pipe(
    R.filter(e => R.isNil(e) || R.isEmpty(e)),
    R.isEmpty
  )(data);
  return isValid;
};
