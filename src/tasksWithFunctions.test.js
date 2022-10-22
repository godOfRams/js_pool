import {
  sayHelloWorld,
  sayHello,
  sumNumbers,
  valueByKeyInObject,
  extendObject,
  increaseBiggerArg,
  calculateFigureArea
} from "./tasksWithFunctions";

describe("should test tasksWithFunctions", () => {
  it("should test sayHelloWorld", () => {
    expect(sayHelloWorld()).toEqual("Hello, World!");
  });

  it("should test sayHello", () => {
    expect(sayHello("Steven")).toEqual("Hello, Steven!");
  });

  it("should test sayHello 2", () => {
    expect(sayHello("Mark")).toEqual("Hello, Mark!");
  });

  it("should test sumNumbers", () => {
    expect(sumNumbers(4, 10)).toEqual(14);
  });

  it("should test valueByKeyInObject", () => {
    expect(valueByKeyInObject("email", { email: "test@mail.com" })).toEqual(
      "test@mail.com"
    );
  });

  it("should test extendObject", () => {
    const output = { name: "Alice" };
    expect(extendObject("name", "Alice")).toEqual(output);
  });

  it("should test extendObject when object provided", () => {
    const input = { name: "Alice" };
    const output = { name: "Alice", age: 10 };
    expect(extendObject("age", 10, input)).toEqual(output);
  });

  it("should test increaseBiggerArg with (100, 9)", () => {
    expect(increaseBiggerArg(100, 9)).toEqual(200);
  });

  it("should test increaseBiggerArg with (100, 903)", () => {
    expect(increaseBiggerArg(100, 903)).toEqual(1003);
  });

  it("should test calculateFigureArea with 'circle' type", () => {
    const output = Math.PI * 100;

    expect(calculateFigureArea("circle", 10)).toEqual(output);
  });

  it("should test calculateFigureArea with 'rectangle' type", () => {
    const output = 10 * 5;

    expect(calculateFigureArea("rectangle", 10, 5)).toEqual(output);
  });

  it("should test calculateFigureArea with 'square' type", () => {
    const output = 100;

    expect(calculateFigureArea("square", 10)).toEqual(output);
  });
});
