export function darkenColor(color: string, amount:number): string{
    // Elimina el símbolo "#" del color hexadecimal
    const cleanHexColor = color.replace(/^#/, '');

    // Convierte el color hexadecimal a valores RGB
    const r = parseInt(cleanHexColor.substr(0, 2), 16);
    const g = parseInt(cleanHexColor.substr(2, 2), 16);
    const b = parseInt(cleanHexColor.substr(4, 2), 16);

    // Calcula el oscurecimiento en base al porcentaje dado
    const darkenedR = Math.max(0, Math.round(r * (1 - amount)));
    const darkenedG = Math.max(0, Math.round(g * (1 - amount)));
    const darkenedB = Math.max(0, Math.round(b * (1 - amount)));

    // Convierte los valores RGB oscurecidos de vuelta a hexadecimal
    const darkenedHexColor = ((darkenedR << 16) + (darkenedG << 8) + darkenedB).toString(16);

    // Asegúrate de que el color tenga 6 dígitos
    const paddedHexColor = darkenedHexColor.padStart(6, '0');

    // Devuelve el color oscurecido en formato hexadecimal
    return `#${paddedHexColor}`;
  }