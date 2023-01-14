import { typeset } from "@/typeset";
import { symbols } from "@/symbols";
import { operators } from "@/operators";

describe("predefined", () => {
  test("disjoint", () => {
    const overlap = [...operators.keys()].filter((e) => symbols.has(e));
    expect(overlap).toStrictEqual([]);
  });
});

describe("math", () => {
  test("simple", () => {
    expect(typeset("abc")).toBe("𝑎𝑏𝑐");
  });

  test("superscript", () => {
    expect(typeset("a^bc")).toBe("𝑎ᵇ𝑐");
  });

  test("superscript-range", () => {
    expect(typeset("a^{bc}d")).toBe("𝑎ᵇᶜ𝑑");
  });

  test("subscript", () => {
    expect(typeset("w_xy")).toBe("𝑤ₓ𝑦");
  });

  test("subscript-range", () => {
    expect(typeset("a_{0123456789}b")).toBe("𝑎₀₁₂₃₄₅₆₇₈₉𝑏");
  });

  test("simple macro", () => {
    expect(typeset("\\lim")).toBe("lim");
    expect(typeset("\\infty")).toBe("∞");
  });

  test("greek", () => {
    expect(typeset("\\alpha")).toBe("α");
    expect(typeset("\\epsilon")).toBe("ϵ");
    expect(typeset("\\varepsilon")).toBe("ε");
  });

  test("font", () => {
    expect(typeset("\\bm{a}")).toBe("𝒂");
    expect(typeset("a\\bm{a}a")).toBe("𝑎𝒂𝑎");
  });

  test("symbol", () => {
    expect(typeset("\\sqrt{a}")).toBe("√𝑎");
    expect(typeset("\\sqrt a")).toBe("√ 𝑎"); // :(
  });

  test("braces", () => {
    expect(typeset("{}")).toBe("");
    expect(typeset("\\{\\}")).toBe("{}");
  });

  test("sentence", () => {
    expect(typeset("任意の a \\in \\mathbb{R} に対して a^2 \\ge 0")).toBe(
      "任意の 𝑎 ∈ ℝ に対して 𝑎² ≥ 0"
    );
  });
});
