//Classes and Objects

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  //setting hello method
  hello() {
    return `Hello, ${this.firstName} ${this.lastName}`;
  }
}
//creating objects and setting first and last name
const user1 = new User("John", "Doe");
const user2 = new User("Jane", "Doe");

//printing results
console.log(`${user1.firstName} ${user1.lastName}`);
console.log(user1.hello());

console.log(`${user2.firstName} ${user2.lastName}`);
console.log(user2.hello());
