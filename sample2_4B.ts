function createSequenceB() {
  let val = 1;
  return val++;
}

const sequenceB = createSequenceB;
console.log(sequenceB());
console.log(sequenceB());
