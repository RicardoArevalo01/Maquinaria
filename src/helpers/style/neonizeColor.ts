export function neonizeColor(hexColor: string): string {
    // Elimina el símbolo "#" del color hexadecimal
    const cleanHexColor = hexColor.replace(/^#/, '');

    // Convierte el color hexadecimal a valores RGB
    const r = parseInt(cleanHexColor.substr(0, 2), 16);
    const g = parseInt(cleanHexColor.substr(2, 2), 16);
    const b = parseInt(cleanHexColor.substr(4, 2), 16);

    // Calcula el color neon
    const neonR = Math.min(255, r * 2);
    const neonG = Math.min(255, g * 2);
    const neonB = Math.min(255, b * 2);

    // Convierte los valores RGB a hexadecimal
    const neonHexColor = ((neonR << 16) + (neonG << 8) + neonB).toString(16);

    // Asegúrate de que el color tenga 6 dígitos
    const paddedHexColor = neonHexColor.padStart(6, '0');

    // Devuelve el color neon en formato hexadecimal
    return `#${paddedHexColor}`;
}