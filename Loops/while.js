// let i = 0
// while (i < 10) {
//     i++;
//     console.log(i)

// }

// const secret = "Babyboss"
// let guess = prompt("Enter the code again")
// while (guess !== secret) {
//     guess = prompt("Enter the code again")
// 
// console.log("Congrats you got it.")

// for (let i = 0; i < 1000; i++) {
//     console.log(i);
//     if (i === 100) break;
// }



let max = parseInt(prompt("Enter a max number"));
while (!max) {
    max = parseInt(prompt("Enter a valid max number"));
}
const tg = 10;
let guess = parseInt(prompt("Enter your first guess"));
let attempts = 1

while (parseInt(guess) !== tg) {
    if (guess === `q`) break;
    attempts++;
    if (guess > tg) {
        guess = prompt("To high enter again");
    }
    else {
        guess = prompt("Too low");
    }
}
if (guess === `q`) {
    console.log("Ok you quit");
}
else {
    console.log("Congoo you got it!!");
    console.log(`It took you  ${attempts} guess`)
}
