let grades: [string, number];

grades = ['John', 90];
console.log(grades[0].substr(1));

enum Color {
    red = "R",
    green = "G",
    blue = "B"
}

let rgbArray: [Color, number][] = [];

rgbArray[0] = [Color.blue, 128];
rgbArray[1] = [Color.red, 39];
rgbArray[2] = [Color.green, 213];

let message = `${Color.red}: ${rgbArray[1][1]}`;
console.log(message);

