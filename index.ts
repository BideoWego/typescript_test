class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = [firstName, middleInitial, lastName].join(' ');
  }
}

interface Person {
  firstName: string;
  lastName: string;
  middleInitial: string;
  fullName: string;
}

function greeter(person: Person) {
  return `Hello ${ person.fullName }`;
}

let user = new Student('Jane', 'M.', 'Doe');

console.log(greeter(user));
