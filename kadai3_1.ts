type Constructor<T = {}> = new (...args: any[]) => T;

/** 走る */
function Runnable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    run() {
      console.log('Running!');
    }
  };
}

/** 鳴く */
function Cryable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    cry() {
      console.log('Cring!');
    }
  };
}

/** 飛ぶ */
function Flyable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    fly() {
      console.log('Flying!');
    }
  };
}

class Animal {}

const runnableAnimal = Runnable(Animal);
const cryableAnimal = Cryable(Animal);
const flyableAnimal = Flyable(Animal);

const runnableCryableAnimal = Runnable(Cryable(Animal));
const runnableFlyableAnimal = Runnable(Flyable(Animal));
const cryableFlyableAnimal = Cryable(Flyable(Animal));

const dog = new runnableCryableAnimal();
console.log('-----dog-----');
dog.run();
dog.cry();

const bird = new cryableFlyableAnimal();
console.log('-----bird-----');
bird.cry();
bird.fly();
