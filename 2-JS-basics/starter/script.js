
var markMass, markHeight, johnMass, johnHeight;

markMass = prompt("Please enter Mark Mass in klgms");
console.log("Mark mass " + markMass);

markHeight = prompt("Please enter Mark Height in meters");
console.log("Mark heigth " + markHeight);

johnMass = prompt("Please enter John Mass in klgms");
console.log("John mass " + johnMass);

johnHeight = prompt("Please enter John Height in meters");
console.log("John height " + johnHeight);

var markBMI = markMass/(markHeight^2);
var johnBMI = johnMass/(johnHeight^2);
console.log(markBMI, johnBMI);

var compareBMI = markBMI > johnBMI;

console.log("Is Mark's BMI higher than John's? " + compareBMI);
