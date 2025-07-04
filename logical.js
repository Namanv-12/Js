//                  AND &&
// const password = prompt("Enter the password");
// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("You have a strong password");
// }
// else {
//     console.log("The length should be 6 and no space");
// }

// 0-5 free
// 5-10- $10
// 10-65- $20
// +65 - free

//              OR || + AND &&
// const age = prompt("Enter the age");
// if (age >= 0 && age < 5 || age >= 65) {
//     console.log("Free");
// } else if (age > 5 && age < 10) {
//     console.log("You have to pay 10$");
// } else if (age >= 10 && age < 65) {
//     console.log("You have to pay 20$");
// } else {
//     console.log("Wrong age");
// }

//              NOT !
const age = prompt("Enter the age");
if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("You are not a baby or a senior ");
}
else {
    console.log("You are a small baby :)")
}