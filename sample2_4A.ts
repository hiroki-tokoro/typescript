function createSequenceA() {
  let val = 1;
  console.log('aaa', val);

  return function () {
    console.log('bbb', val);

    return val++;
  };
}

const sequenceA = createSequenceA();
console.log(sequenceA());
console.log(sequenceA());
