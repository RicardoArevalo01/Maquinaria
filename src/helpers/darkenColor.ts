export function darkenColor(color: string, amount: number): string {
    // Check if the color is in hexadecimal format
    if (color.startsWith("#")) {
        // Remove the "#" symbol
        color = color.slice(1);

        // Check if the hexadecimal color has a valid length
        if (color.length !== 3 && color.length !== 6) {
            throw new Error('Invalid color format');
        }

        // Expand the shorthand hexadecimal color to full length if needed
        if (color.length === 3) {
            color = color
                .split("")
                .map((char) => char + char)
                .join("");
        }

        // Parse the RGB values from the expanded hexadecimal color
        const r = parseInt(color.slice(0, 2), 16);
        const g = parseInt(color.slice(2, 4), 16);
        const b = parseInt(color.slice(4, 6), 16);

        // Calculate the new RGB values based on the amount
        const newR = Math.round(r * (1 - amount));
        const newG = Math.round(g * (1 - amount));
        const newB = Math.round(b * (1 - amount));

        // Return the new color string in hexadecimal format
        return `#${newR.toString(16)}${newG.toString(16)}${newB.toString(16)}`;
    } else {
        // Parse the RGB values from the color string
        const rgbValues = color.match(/\d+/g);
        if (!rgbValues || rgbValues.length !== 3) {
            throw new Error('Invalid color format');
        }

        // Convert the RGB values to integers
        const r = parseInt(rgbValues[0]);
        const g = parseInt(rgbValues[1]);
        const b = parseInt(rgbValues[2]);

        // Calculate the new RGB values based on the amount
        const newR = Math.round(r * (1 - amount));
        const newG = Math.round(g * (1 - amount));
        const newB = Math.round(b * (1 - amount));

        // Return the new color string in RGB format
        return `rgb(${newR}, ${newG}, ${newB})`;
    }
}