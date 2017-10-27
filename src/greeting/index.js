class Greeting {
  constructor(greetingWord) {
    this.greetingWord = greetingWord;
  }
  greet() {
    return `${this.greetingWord}, world!`;
  }
}

module.exports = {
  Greeting
};
