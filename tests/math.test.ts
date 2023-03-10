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
    expect(typeset("abc")).toBe("๐๐๐");
  });

  test("superscript", () => {
    expect(typeset("a^bc")).toBe("๐แต๐");
  });

  test("superscript-range", () => {
    expect(typeset("a^{bc}d")).toBe("๐แตแถ๐");
  });

  test("subscript", () => {
    expect(typeset("w_xy")).toBe("๐คโ๐ฆ");
  });

  test("subscript-range", () => {
    expect(typeset("a_{0123456789}b")).toBe("๐โโโโโโโโโโ๐");
  });

  test("simple macro", () => {
    expect(typeset("\\lim")).toBe("lim");
    expect(typeset("\\infty")).toBe("โ");
  });

  test("greek", () => {
    expect(typeset("\\alpha")).toBe("ฮฑ");
    expect(typeset("\\epsilon")).toBe("ฯต");
    expect(typeset("\\varepsilon")).toBe("ฮต");
  });

  test("font", () => {
    expect(typeset("\\bm{a}")).toBe("๐");
    expect(typeset("a\\bm{a}a")).toBe("๐๐๐");
  });

  test("symbol", () => {
    expect(typeset("\\sqrt{a}")).toBe("โ๐");
    expect(typeset("\\sqrt a")).toBe("โ ๐"); // :(
  });

  test("braces", () => {
    expect(typeset("{}")).toBe("");
    expect(typeset("\\{\\}")).toBe("{}");
  });

  test("sentence", () => {
    expect(typeset("ไปปๆใฎ a \\in \\mathbb{R} ใซๅฏพใใฆ a^2 \\ge 0")).toBe(
      "ไปปๆใฎ ๐ โ โ ใซๅฏพใใฆ ๐ยฒ โฅ 0"
    );
  });
});
