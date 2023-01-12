import { typeset } from "@/typeset";

describe("math", () => {
  test("simple", () => {
    expect(typeset("abc")).toBe("abc");
  });

  test("superscript", () => {
    expect(typeset("a^bc")).toBe("aᵇc");
  });

  test("superscript-range", () => {
    expect(typeset("a^{bc}d")).toBe("aᵇᶜd");
  });

  test("subscript", () => {
    expect(typeset("w_xy")).toBe("wₓy");
  });

  test("subscript-range", () => {
    expect(typeset("a_{0123456789}b")).toBe("a₀₁₂₃₄₅₆₇₈₉b");
  });

  test("simple macro", () => {
    expect(typeset("\\lim")).toBe("𝗅𝗂𝗆");
  });
});
