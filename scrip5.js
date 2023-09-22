//Abstraction
// Abstract User class
class User {
  constructor() {
    this._username = "";
  }

  // Abstract method for stating the role
  stateYourRole() {
    throw new Error("This method must be overridden by child classes");
  }

  // Getter and Setter for username
  set username(username) {
    this._username = username;
  }

  get username() {
    return this._username;
  }
}

// Admin class that inherits from User
class Admin extends User {
  stateYourRole() {
    return "admin";
  }
}

// Viewer class that inherits from User
class Viewer extends User {
  stateYourRole() {
    return "viewer";
  }
}

// Create an Admin object, set the username to "Balthazar," and state the role
const admin = new Admin();
admin.username = "Balthazar";
console.log(admin.stateYourRole());

// Create a Viewer object, set the username to "Melchior," and state the role
const viewer = new Viewer();
viewer.username = "Melchior";
console.log(viewer.stateYourRole());
