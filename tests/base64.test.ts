import { fromBase64, toBase64 } from "@/base64";

describe("hello", () => {
  test("decode", () => {
    expect(fromBase64("4pyTIMOgIGxhIG1vZGU=")).toBe("✓ à la mode");
  });

  test("encode", () => {
    expect(toBase64("✓ à la mode")).toBe("4pyTIMOgIGxhIG1vZGU=");
  });
});
