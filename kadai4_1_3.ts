// function greetings(val) {
//   console.log(`${val.message()}, value: ${val.name}`);
// }

// greetings({
//   name: 'aaa',
//   message: () => 'hello',
// });

type Message = () => string;
type Greetings = {
  name: string;
  message: Message;
};

function greetings(val: Greetings) {
  console.log(`${val.message()}, value: ${val.name}`);
}

greetings({
  name: 'aaa',
  message: () => 'hello',
});
