"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var result = await inquirer_1.default.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Enter first number:"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Enter first number:"
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "/", "*"],
        message: "Choose operator:"
    }
]);
var numberOne = result.numberOne, numberTwo = result.numberTwo, operator = result.operator;
if (numberOne && numberTwo && operator) {
    var solution = 0;
    if (operator === "+") {
        solution = numberOne + numberTwo;
    }
    else if (operator === "-") {
        solution = numberOne - numberTwo;
    }
    if (operator === "/") {
        solution = numberOne / numberTwo;
    }
    if (operator === "*") {
        solution = numberOne * numberTwo;
    }
    console.log("Your result is", solution);
}
else {
    console.log("kindly enter valid input");
}
