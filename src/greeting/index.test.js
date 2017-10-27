const { Greeting } = require("./index.js");

describe("Greeting module", () => {
  test("should greet user with hello", () => {
    const greeting = new Greeting("Hello");
    expect(greeting.greet()).toBe("Hello, world!");
  });

  test("should greet user with hi", () => {
    const greeting = new Greeting("Hi");
    expect(greeting.greet()).toBe("Hi, world!");
  });
});
