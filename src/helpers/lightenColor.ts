export function lightenColor(color: string, amount: number): string {
    // Remove the "rgb(" and ")" from the color string
    const rgb = color.slice(4, -1);
    // Split the RGB values into an arrays
    //quitar los espacios en blanco
    const rgbValues = rgb.split(',').map(value => parseInt(value.trim()));

    // Calculate the new RGB values based on the amount
    const newRgbValues = rgbValues.map(value => {
        const newValue = value + (255 - value) * amount;
        return Math.round(newValue);
    });

    // Construct the new color string
    const newColor = `rgb(${newRgbValues.join(', ')})`;
    return newColor;
}