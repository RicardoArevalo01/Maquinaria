export const trimText = (cadena: string) =>
  cadena.replace(/[\\/:*?"<>|]/g, '-').replace(/\s/g, '');

export const Guid = () =>
  Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
export const getFileName = (uri: string): string =>
  uri?.split('/')?.pop() ?? '';

export const convertNumberToString = (number: number) =>
  Number.isInteger(number) ? number.toString() : number.toFixed(2);
export const replaceCommaToDot = (number: string) => number.replace(/,/g, '.');
