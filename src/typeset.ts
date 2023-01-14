import { SUPERSCRIPTS, SUBSCRIPTS } from "./fonts";
import { symbols } from "./symbols";
import { operators } from "./operators";

enum FontType {
  Neutral = 0,
  Superscript = 1 << 0,
  Subscript = 1 << 1,
  Bold = 1 << 2,
  Italic = 1 << 3,
  SansSerif = 1 << 4,
  Fraktur = 1 << 5,
  Script = 1 << 6,
  DoubleStruck = 1 << 7,
  Monospace = 1 << 8,
}

const selectFont = (str: string, font: FontType): string => {
  const numbers: Map<string, string> = new Map([
    ["0", "zero"],
    ["1", "one"],
    ["2", "two"],
    ["3", "three"],
    ["4", "four"],
    ["5", "five"],
    ["6", "six"],
    ["7", "seven"],
    ["8", "eight"],
    ["9", "nine"],
  ]);

  const definedFonts: [FontType, string][] = [
    [FontType.Monospace, "mtt"],
    [FontType.DoubleStruck, "Bbb"],
    [FontType.SansSerif | FontType.Bold | FontType.Italic, "mbfitsans"],
    [FontType.SansSerif | FontType.Italic, "mitsans"],
    [FontType.SansSerif | FontType.Bold, "mbfsans"],
    [FontType.SansSerif, "msans"],
    [FontType.Fraktur | FontType.Bold, "mbffrak"],
    [FontType.Fraktur, "mfrak"],
    [FontType.Script | FontType.Bold, "mbfscr"],
    [FontType.Script, "mscr"],
    [FontType.Italic | FontType.Bold, "mbfit"],
    [FontType.Italic, "mit"],
    [FontType.Bold, "mbf"],
  ];

  const res = (() => {
    const chars = [...str].map((ch) => {
      if (font === FontType.Neutral) return ch;
      if ((font & FontType.Superscript) !== 0) return SUPERSCRIPTS[ch];
      if ((font & FontType.Subscript) !== 0) return SUBSCRIPTS[ch];

      for (const [mask, name] of definedFonts) {
        if ((font & mask) !== mask) continue;

        const chname = numbers.get(ch) ?? ch;
        const key = `${name}${chname}`;
        if (symbols.has(key)) return symbols.get(key);
      }

      return ch;
    });
    if (chars.includes(undefined)) return undefined;
    return chars.join("");
  })();
  if (res === undefined) throw `invalid string (${str})`;
  return res;
};

const updateStyle = (lhs: FontType, rhs: FontType): FontType => {
  if (rhs === FontType.Neutral) return rhs;

  const exclusive =
    FontType.Script |
    FontType.Fraktur |
    FontType.DoubleStruck |
    FontType.Monospace |
    FontType.Superscript |
    FontType.Subscript;

  return (rhs & exclusive) !== 0
    ? (lhs & ~exclusive) | (rhs & exclusive)
    : lhs | rhs;
};

export const typeset = (expr: string): string => {
  const tokens = /\$|\\[a-zA-Z]+|\\.|\^|_|\{|\}|\s+|./g;
  const styleSelector: Map<string, FontType> = new Map([
    ["mathrm", FontType.Neutral],
    ["mathit", FontType.Italic],
    ["mathbf", FontType.Bold],
    ["bm", FontType.Bold],
    ["mathsf", FontType.SansSerif],
    ["mathbb", FontType.DoubleStruck],
    ["mathfrak", FontType.Fraktur],
    ["mathscr", FontType.Script],
    ["mathcal", FontType.Script],
    ["mathtt", FontType.Monospace],
  ]);

  let res = "";
  let mode: FontType[] = [FontType.Italic];
  let lastStyle: FontType = null;

  let m;
  while ((m = tokens.exec(expr))) {
    const token = m[0];

    if (token.trim() === "") {
      res += token;
      continue;
    }

    const curStyle = lastStyle ?? mode[mode.length - 1];
    switch (token[0]) {
      case "^":
        lastStyle = FontType.Superscript;
        break;
      case "_":
        lastStyle = FontType.Subscript;
        break;
      case "{":
        mode.push(curStyle);
        lastStyle = null;
        break;
      case "}":
        mode.pop();
        break;
      case "\\":
        {
          const name = token.substr(1);
          if (operators.has(name)) {
            res += selectFont(name, FontType.Neutral);
          } else if (symbols.has(name)) {
            res += symbols.get(name);
          } else if (styleSelector.has(name)) {
            const newStyle = styleSelector.get(name);
            lastStyle = updateStyle(curStyle, newStyle);
          } else {
            // 一旦そのまま出力。変更するときは "\\{" のようなものに気をつける。
            res += selectFont(name, FontType.Neutral);
          }
        }
        break;
      default:
        res += selectFont(token, curStyle);
        lastStyle = null;
        break;
    }
  }

  console.log(`"${expr}" => "${res}"`);
  return res;
};
