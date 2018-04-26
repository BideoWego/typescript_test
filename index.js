var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = [firstName, middleInitial, lastName].join(' ');
    }
    return Student;
}());
function greeter(person) {
    return "Hello " + person.fullName;
}
var user = new Student('Jane', 'M.', 'Doe');
console.log(greeter(user));
