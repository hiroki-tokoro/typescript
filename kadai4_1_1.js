// function calc(a, b) {
//   return a + b;
// }
// console.log(calc(1)); // 2
// console.log(calc(2, 3)); // 5
function calc(a, b) {
    if (typeof b === 'undefined') {
        b = 1;
    }
    return a + b;
}
console.log(calc(1)); // 2
console.log(calc(2, 3)); // 5
