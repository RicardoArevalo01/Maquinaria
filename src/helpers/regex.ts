//export const isValidPassword = (password: string): boolean =>
///^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@+*/\-!#$%^&*()_+{};':"\\|,.<>/?]).{8,}$/.test(
//  password,
// );

export const isValidPassword = (password: string): boolean =>
  password.length >= 6;

export const isValidEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const isValidIntegerString = (str: string): boolean => {
  if (str.length === 0) return true;
  return /^[0-9]+$/.test(str);
};

export const isValidDecimalString = (str: string): boolean => {
  if (str.length === 0) return true;
  return /^\d+\.\d+$/.test(str);
};

export const isValidNumber = (input: string): boolean => {
  if (input.trim() === '') return true;
  const numberRegex: RegExp = /^[0-9]*\.?[0-9]+$/;
  return numberRegex.test(input);
};
