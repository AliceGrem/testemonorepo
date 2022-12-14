export const MASKS = {
  licensePlate: [/[A-Z]/, /[A-Z]/, /[A-Z]/, '-', /[0-9A-Z]/, /[0-9]/, /[0-9]/, /[0-9]/],
  licensePlate2: [/[A-Z]/, /[A-Z]/, /[A-Z]/, /[0-9A-Z]/, /[0-9]/, /[0-9]/, /[0-9]/],
  cpf: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/],
  zipcode: [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
  date: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
  cellphone: ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
};

export const SIZES_FORM_CONTROL = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};
