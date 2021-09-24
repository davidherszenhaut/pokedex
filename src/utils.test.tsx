import { capitalize } from "./utils";

test("capitalizes words grammatically", () => {
  expect(capitalize("test")).toBe("Test");
  expect(capitalize("Test")).toBe("Test");
  expect(capitalize("TEST")).toBe("Test");
  expect(capitalize("")).toBe("");
});
