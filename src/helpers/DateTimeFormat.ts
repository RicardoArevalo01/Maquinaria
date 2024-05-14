export type DateTypes = 'date' | 'time' | 'datetime';
export const formatDate = (inputDateStr: string, type: DateTypes) => {
  // Verifica si la entrada está en el formato 'yyyy-mm-dd' o 'yyyy/mm/dd'
  const isISOFormat = /^\d{4}[-/]\d{2}[-/]\d{2}$/.test(inputDateStr);

  if (isISOFormat) {
    // Convierte la fecha al formato 'dd/mm/yyyy'
    const [year, month, day] = inputDateStr.split(/[-/]/);
    inputDateStr = `${day}/${month}/${year}`;
  }

  // Ahora inputDateStr está en el formato 'dd/mm/yyyy', por lo que puedes continuar con el formateo
  const isValidFormat =
    /^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}$/.test(inputDateStr) || // dd/mm/yyyy HH:MM
    /^\d{2}:\d{2}$/.test(inputDateStr) || // HH:MM
    /^\d{2}\/\d{2}\/\d{4}$/.test(inputDateStr); // dd/mm/yyyy

  // Si la entrada ya está en uno de los formatos deseados, simplemente devuélvela
  if (isValidFormat) {
    return inputDateStr;
  }

  // De lo contrario, formatea la fecha y la hora normalmente según el tipo
  const inputDate = new Date(inputDateStr);
  const pad = (num: number) => num.toString().padStart(2, '0');
  const day = pad(inputDate.getDate());
  const month = pad(inputDate.getMonth() + 1); // Se suma 1 porque los meses en JavaScript van de 0 a 11.
  const year = inputDate.getFullYear();
  const hours = pad(inputDate.getHours());
  const minutes = pad(inputDate.getMinutes());

  switch (type) {
    case 'date':
      return `${day}/${month}/${year}`;
    case 'time':
      return `${hours}:${minutes}`;
    case 'datetime':
    default:
      return `${day}/${month}/${year} ${hours}:${minutes}`;
  }
};
