import {
  MATH_BOLD,
  MATH_ITALIC,
  MATH_BOLD_ITALIC,
  MATH_SCRIPT,
  MATH_BOLD_SCRIPT,
  MATH_FRAKTUR,
  MATH_BB,
  MATH_BOLD_FRAKTUR,
  MATH_SANS_SERIF,
  MATH_BOLD_SANS_SERIF,
  MATH_ITALIC_SANS_SERIF,
  MATH_BOLD_ITALIC_SANS_SERIF,
  MATH_TT,
  SUPERSCRIPTS,
  SUBSCRIPTS,
} from "./fonts";

enum FontType {
  Regular = 1 << 0,
  Superscript = 1 << 1,
  Subscript = 1 << 2,
  Bold = 1 << 3,
  Italic = 1 << 4,
  SansSerif = 1 << 5,
}

const selectFont = (str: string, font: FontType): string => {
  const res = (() => {
    const chars = [...str].map((ch) => {
      switch (font) {
        case FontType.Regular:
          return /[a-z]/i.test(ch) ? MATH_ITALIC[ch] : ch;
        case FontType.Superscript:
          return SUPERSCRIPTS[ch];
        case FontType.Subscript:
          return SUBSCRIPTS[ch];
        case FontType.SansSerif:
          return MATH_SANS_SERIF[ch];
      }
    });
    if (chars.includes(undefined)) return undefined;
    return chars.join("");
  })();
  if (res === undefined) throw `invalid string (${str})`;
  return res;
};

const compositeFont = (lhs: FontType, rhs: FontType): FontType => {
  if (lhs == FontType.Regular) return rhs;
  if (rhs == FontType.Regular) return lhs;
  if (lhs == rhs) return lhs;

  const composite = lhs | rhs;
  if (composite == (FontType.Bold | FontType.Italic)) return composite;

  throw "invalid font";
};

export const typeset = (expr: string): string => {
  const tokens = /\$|\\[a-zA-Z]+|\\.|\^|_|\{|\}|\s+|./g;

  let res = "";
  let mode: FontType[] = [FontType.Regular];
  let lastMode: FontType = null;

  let m;
  while ((m = tokens.exec(expr))) {
    const token = m[0];

    if (token.trim() === "") {
      res += token;
      continue;
    }

    switch (token[0]) {
      case "^":
        lastMode = FontType.Superscript;
        break;
      case "_":
        lastMode = FontType.Subscript;
        break;
      case "{":
        mode.push(lastMode);
        lastMode = null;
        break;
      case "}":
        mode.pop();
        break;
      case "\\":
        // 引数を取る制御綴は難しいねえ
        // lastMode みたいにすればできるのかな
        res += selectFont(token.substr(1), FontType.SansSerif);
        break;
      default:
        res += selectFont(token, lastMode ?? mode[mode.length - 1]);
        lastMode = null;
        break;
    }
  }

  console.log(`"${expr}" => "${res}"`);
  return res;
};
