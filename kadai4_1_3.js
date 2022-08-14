// function greetings(val) {
//   console.log(`${val.message()}, value: ${val.name}`);
// }
function greetings(val) {
    console.log("".concat(val.message(), ", value: ").concat(val.name));
}
greetings({
    name: 'aaa',
    message: function () { return 'hello'; }
});
