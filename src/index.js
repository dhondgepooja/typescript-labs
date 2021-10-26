// Basic Types
var id = 5;
var company = "My Company";
var isPublished = true;
var x = 'Hello';
var ids = [1, 2, 3, 4, 5];
var arr = [1, 2, "three", true];
//Tuple
var person = [1, "Pooja", true];
var employee;
employee = [
    [1, "Pooja"],
    [2, "Pratik"]
];
// Union
var identifier = 22;
identifier = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
