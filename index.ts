#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
    message: "Enter First Number :", 
    type: "number", 
    name: "firstAnswer"},

    {
    message: "Enter Second Number :",
    type: "number",
    name: "SecondAnswer"},
    {
    message: "Select one of the operator to perform action",
    type: "list",
    name: "Operator",
    choices: ["Addition", "Substraction", "Multiply", "Divide", "Percentage",]},
    
]);
const extraNumber = 100;

if (answer.Operator === "Addition"){
    console.log("Your Answer is :"), 
    console.log(answer.firstAnswer + answer.SecondAnswer)}

else if (answer.Operator === "Substraction"){
    console.log("Your Answer is :"), 
    console.log(answer.firstAnswer - answer.SecondAnswer)}  

else if (answer.Operator === "Multiply"){
    console.log("Your Answer is :"), 
    console.log(answer.firstAnswer * answer.SecondAnswer)}

else if (answer.Operator === "Divide"){
    console.log("Your Answer is :"), 
    console.log(answer.firstAnswer / answer.SecondAnswer)}
else if (answer.Operator === "Percentage"){
    console.log("Your Percentage is : "), 
    console.log(answer.firstAnswer / answer.SecondAnswer * 100, "%")}
else{
    console.log("Select valid operator ")};

    
            


