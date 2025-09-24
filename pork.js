let input = prompt("Enter your score:");
let score = parseInt(input);
let grade;
grade = (score >= 90 && score <= 100) ? "A" :
        (score >= 75 && score < 90) ? "B" :
        (score >= 50 && score < 75) ? "C" : "D";

switch (grade) {
    case "A":
        console.log("Excellent! Grade A");
        break;
    case "B":
        console.log("Good! Grade B");
        break;
    case "C":
        console.log("Needs improvement! Grade C");
        break;
    default:
        console.log("Fail");
}

let numInput = prompt("Enter a number:");
let num = parseInt(numInput);

if (num % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

let dayInput = prompt("Enter the day number (1-7):");
let day = parseInt(dayInput);

switch (day) {
    case 1:
        console.log("It's a weekday");
        break;
    case 2:
        console.log("It's a weekday");
        break;
    case 3:
        console.log("It's a weekday");
        break;
    case 4:
        console.log("It's a weekday");
        break;
    case 5:
        console.log("It's a weekday");
        break;
    case 6:
        console.log("It's the weekend");
        break;
    case 7:
        console.log("It's the weekend");
        break;
    default:
        console.log("Invalid day");
}