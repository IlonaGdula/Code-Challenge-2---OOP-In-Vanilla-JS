//Inheritance (Subclass and Superclass)

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  hello() {
    return `hello, ${this.firstName} ${this.lastName}`;
  }
}

class Admin extends User {
  constructor(firstName, lastName, username) {
    super(firstName, lastName);
    this.username = username;
  }

  expressYourRole() {
    return "Admin";
  }

  sayHello() {
    return `Hello admin, ${this.username}`;
  }
}

const admin1 = new Admin("Admin", "User", "admin123");

console.log(admin1.hello());
console.log(admin1.expressYourRole());
console.log(admin1.sayHello());

const admin2 = new Admin("Balthazar", "User", "admin");
console.log(admin2.hello());
