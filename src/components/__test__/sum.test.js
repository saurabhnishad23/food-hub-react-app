import { sum } from "../sum";

test("check sum of 2 positive numbers", () => {
  expect(sum(2, 3)).toBe(5);
});
