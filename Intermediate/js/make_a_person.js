const Person = function (first, last) {
  let [firstName, lastName] = [first, last];
  
  this.getFirstName = function () {
    return firstName;
  };

  this.getLastName = function () {
    return lastName;
  };

  this.getFullName = function () {
    return this.getFirstName() + " " + this.getLastName();
  };

  this.setFirstName = function (first) {
    return (firstName = first);
  };

  this.setLastName = function (last) {
    return (lastName = last);
  };

  this.setFullName = function (first, last) {
    this.setFirstName(first);
    this.setLastName(last);
    return this.getFullName();
  };
};

let person1 = new Person();
let newName = person1.setFullName("Zikos", "Kovitch");
console.log(person1.getFullName());
