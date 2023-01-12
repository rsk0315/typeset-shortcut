import { twice } from "@/foo";

describe("hello", () => {
  test("first", () => {
    expect(1).toBe(0 + 1);
  });

  test("second", () => {
    expect(twice(".")).toBe("..");
  });
});
