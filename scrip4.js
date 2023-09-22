//Polymorphism
class User {
  constructor() {
    this.numberOfArticles = 0;
  }
}
class User {
  constructor() {
    this.numberOfArticles = 0;
  }

  setNumberOfArticles(numberOfArticles) {
    this.numberOfArticles = numberOfArticles;
  }

  getNumberOfArticles() {
    return this.numberOfArticles;
  }

  calcScores() {
    // This method will be overridden by the Author and Editor classes.
    return 0;
  }
}

class Author extends User {
  calcScores() {
    return this.numberOfArticles * 10 + 20;
  }
}

class Editor extends User {
  calcScores() {
    return this.numberOfArticles * 6 + 15;
  }
}

// Create an Author object
const author = new Author();
author.setNumberOfArticles(8);

// Calculate and print the scores for the author
console.log(`Author's Scores: ${author.calcScores()}`);

// Create an Editor object
const editor = new Editor();
editor.setNumberOfArticles(15);

// Calculate and print the scores for the editor
console.log(`Editor's Scores: ${editor.calcScores()}`);
