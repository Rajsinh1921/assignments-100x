const calculateTime = require("../hard (promises)/3-promise-all");

describe("calculateTime function", () => {
  test("calculates time 1", async () => {
    const [result1, result2, result3] = await calculateTime(1, 2, 3);
    expect(result1).toBeUndefined();
    expect(result2).toBeUndefined();
    expect(result3).toBeUndefined();
  }, 4000);

  test("calculates time 2", async () => {
    const [result1, result2, result3] = await calculateTime(4, 5, 7);
    expect(result1).toBeUndefined();
    expect(result2).toBeUndefined();
    expect(result3).toBeUndefined();
  }, 8000);

  test("calculates time 3", async () => {
    const [result1, result2, result3] = await calculateTime(10, 1, 1);
    expect(result1).toBeUndefined();
    expect(result2).toBeUndefined();
    expect(result3).toBeUndefined();
  }, 11000);

  test("calculates time for zero seconds", async () => {
    const [result1, result2, result3] = await calculateTime(0, 0, 0);
    expect(result1).toBeUndefined();
    expect(result2).toBeUndefined();
    expect(result3).toBeUndefined();
  }, 1000);
});
