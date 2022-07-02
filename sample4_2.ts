/*--------------------------------------------------------*/
class userName {
  public name: string;

  constructor(_name: string) {
    this.name = _name;
  }

  getName(): string {
    return this.name;
  }
}

const user = new userName('John');
user.getName();
console.log(user.name);
/*--------------------------------------------------------*/
