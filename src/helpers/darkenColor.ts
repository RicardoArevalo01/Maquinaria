export function darkenColor(rgbColor: string, amount: number): string {
    // Extraer los componentes RGB del string
    var rgbValues = rgbColor.match(/\d+/g);
    var red = 0;
    var green = 0;
    var blue = 0;

    if (rgbValues) {
        red = parseInt(rgbValues[0]);
        green = parseInt(rgbValues[1]);
        blue = parseInt(rgbValues[2]);
    }
    
    // Calcular la cantidad de oscurecimiento para cada canal
    var redDarkened = Math.round(red * (1 - amount));
    var greenDarkened = Math.round(green * (1 - amount));
    var blueDarkened = Math.round(blue * (1 - amount));
    
    // Asegurarse de que los valores estén en el rango 0-255
    redDarkened = Math.max(0, Math.min(255, redDarkened));
    greenDarkened = Math.max(0, Math.min(255, greenDarkened));
    blueDarkened = Math.max(0, Math.min(255, blueDarkened));
    
    // Devolver el nuevo color oscurecido en formato RGB
    return 'rgb(' + redDarkened + ', ' + greenDarkened + ', ' + blueDarkened + ')';
}

// Ejemplo de uso:
var colorOriginal = "rgb(123, 134, 123)";
var amount = 0.5;
var colorOscurecido = darkenColor(colorOriginal, amount);
console.log("Color original:", colorOriginal);
console.log("Color oscurecido:", colorOscurecido);
