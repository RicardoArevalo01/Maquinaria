export function lightenColor(hexColor: string, amount: number): string {
    // Elimina el símbolo "#" del color hexadecimal
    const cleanHexColor = hexColor.replace(/^#/, '');

    // Convierte el color hexadecimal a valores RGB
    const r = parseInt(cleanHexColor.substr(0, 2), 16);
    const g = parseInt(cleanHexColor.substr(2, 2), 16);
    const b = parseInt(cleanHexColor.substr(4, 2), 16);

    // Calcula el aumento de luminosidad en base al porcentaje dado
    const lightenedR = Math.min(255, Math.round(r + (255 - r) * amount));
    const lightenedG = Math.min(255, Math.round(g + (255 - g) * amount));
    const lightenedB = Math.min(255, Math.round(b + (255 - b) * amount));

    // Convierte los valores RGB aumentados de vuelta a hexadecimal
    const lightenedHexColor = ((lightenedR << 16) + (lightenedG << 8) + lightenedB).toString(16);

    // Asegúrate de que el color tenga 6 dígitos
    const paddedHexColor = lightenedHexColor.padStart(6, '0');

    // Devuelve el color aumentado en formato hexadecimal
    return `#${paddedHexColor}`;
}