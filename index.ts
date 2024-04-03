import inquirer from "inquirer";

const result : { 
    numberOne : number,
    numberTwo : number,
    operator : string

} = await inquirer.prompt([
    {
        type : "number",
        name : "numberOne",
        message : "Enter first number:"
    },
    {
        type : "number",
        name : "numberTwo",
        message : "Enter first number:"
    },
    {
        type : "list",
        name : "operator",
        choices : ["+","-","/","*"],
        message : "Choose operator:"
    }
]);

const {numberOne , numberTwo , operator} = result;

if(numberOne && numberTwo && operator){
    let solution : number = 0;
    if(operator === "+"){
        solution =numberOne + numberTwo
    } else if(operator === "-"){
        solution =numberOne - numberTwo
    } 
    if(operator === "/"){
        solution=numberOne / numberTwo
    } 
    if(operator === "*"){
        solution=numberOne * numberTwo
    } 
    
    console.log("Your result is", solution )
    
} else{
    console.log("kindly enter valid input");
}