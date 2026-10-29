// // import prompt from 'prompt-sync'
const prompt = require('prompt-sync')({ sigint: true });


// let userAge = parseInt(prompt("Please Enter your age to check? "))

// if(userAge < 5){
//     console.log("children under 5 are free")
// }else if(userAge <= 12){
//     console.log("child ticket applied")
// }else if(userAge >= 65){
//     console.log("senior discount applied" + " " + userAge)
// }else{
//     console.log("standard adult applied")
// }

// let num1 = 100
// let num2 = 300
// let sum = num1 + num2
// console.log("The sum of" + " " + num1 + " and" + num2 + " is " + sum)

// template literals
// console.log(`The sum of ${num1} and ${num2} is ${sum}`)
// const myage = 30
// myage = 50
// console.log(myage)

const myAge = parseInt(prompt("Please enter your age? "))
let ticketPrice = 0.00

if(myAge < 5){
    ticketPrice = 0.00
    console.log(`Ticke is ${ticketPrice} for children`)
} else if(myAge <= 12){
    ticketPrice = 8.00
    console.log(`Ticket price is ${ticketPrice} for Child`)
}else if(myAge >=65){
    ticketPrice = 10.00
    console.log(`Ticket price is ${ticketPrice} for senior`)
}else{
    ticketPrice = 15.00
    console.log(`Ticket price is ${ticketPrice} for standard adult`)
}