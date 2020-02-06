var grades;
grades = ['John', 90];
console.log(grades[0].substr(1));
var Color;
(function (Color) {
    Color["red"] = "R";
    Color["green"] = "G";
    Color["blue"] = "B";
})(Color || (Color = {}));
var rgbArray = [];
rgbArray[0] = [Color.blue, 128];
rgbArray[1] = [Color.red, 39];
rgbArray[2] = [Color.green, 213];
var message = Color.red + ": " + rgbArray[1][1];
console.log(message);
