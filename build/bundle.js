/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/fonts.ts":
/*!**********************!*\
  !*** ./src/fonts.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


// <https://www.asahi-net.or.jp/~ax2s-kmtn/ref/unicode/u1d400.html>
//
// ```zsh
// i=$((16#1d400)); for c in {A..Z}; do echo "$c: \"\\\\u{$(([##16]i))}\","; ((++i)); done
// ```
exports.__esModule = true;
exports.SUBSCRIPTS = exports.SUPERSCRIPTS = exports.MATH_TT = exports.MATH_BOLD_ITALIC_SANS_SERIF = exports.MATH_ITALIC_SANS_SERIF = exports.MATH_BOLD_SANS_SERIF = exports.MATH_SANS_SERIF = exports.MATH_BOLD_FRAKTUR = exports.MATH_BB = exports.MATH_FRAKTUR = exports.MATH_BOLD_SCRIPT = exports.MATH_SCRIPT = exports.MATH_BOLD_ITALIC = exports.MATH_ITALIC = exports.MATH_BOLD = void 0;
exports.MATH_BOLD = {
    A: "\uD835\uDC00",
    B: "\uD835\uDC01",
    C: "\uD835\uDC02",
    D: "\uD835\uDC03",
    E: "\uD835\uDC04",
    F: "\uD835\uDC05",
    G: "\uD835\uDC06",
    H: "\uD835\uDC07",
    I: "\uD835\uDC08",
    J: "\uD835\uDC09",
    K: "\uD835\uDC0A",
    L: "\uD835\uDC0B",
    M: "\uD835\uDC0C",
    N: "\uD835\uDC0D",
    O: "\uD835\uDC0E",
    P: "\uD835\uDC0F",
    Q: "\uD835\uDC10",
    R: "\uD835\uDC11",
    S: "\uD835\uDC12",
    T: "\uD835\uDC13",
    U: "\uD835\uDC14",
    V: "\uD835\uDC15",
    W: "\uD835\uDC16",
    X: "\uD835\uDC17",
    Y: "\uD835\uDC18",
    Z: "\uD835\uDC19",
    a: "\uD835\uDC1A",
    b: "\uD835\uDC1B",
    c: "\uD835\uDC1C",
    d: "\uD835\uDC1D",
    e: "\uD835\uDC1E",
    f: "\uD835\uDC1F",
    g: "\uD835\uDC20",
    h: "\uD835\uDC21",
    i: "\uD835\uDC22",
    j: "\uD835\uDC23",
    k: "\uD835\uDC24",
    l: "\uD835\uDC25",
    m: "\uD835\uDC26",
    n: "\uD835\uDC27",
    o: "\uD835\uDC28",
    p: "\uD835\uDC29",
    q: "\uD835\uDC2A",
    r: "\uD835\uDC2B",
    s: "\uD835\uDC2C",
    t: "\uD835\uDC2D",
    u: "\uD835\uDC2E",
    v: "\uD835\uDC2F",
    w: "\uD835\uDC30",
    x: "\uD835\uDC31",
    y: "\uD835\uDC32",
    z: "\uD835\uDC33"
};
exports.MATH_ITALIC = {
    A: "\uD835\uDC34",
    B: "\uD835\uDC35",
    C: "\uD835\uDC36",
    D: "\uD835\uDC37",
    E: "\uD835\uDC38",
    F: "\uD835\uDC39",
    G: "\uD835\uDC3A",
    H: "\uD835\uDC3B",
    I: "\uD835\uDC3C",
    J: "\uD835\uDC3D",
    K: "\uD835\uDC3E",
    L: "\uD835\uDC3F",
    M: "\uD835\uDC40",
    N: "\uD835\uDC41",
    O: "\uD835\uDC42",
    P: "\uD835\uDC43",
    Q: "\uD835\uDC44",
    R: "\uD835\uDC45",
    S: "\uD835\uDC46",
    T: "\uD835\uDC47",
    U: "\uD835\uDC48",
    V: "\uD835\uDC49",
    W: "\uD835\uDC4A",
    X: "\uD835\uDC4B",
    Y: "\uD835\uDC4C",
    Z: "\uD835\uDC4D",
    a: "\uD835\uDC4E",
    b: "\uD835\uDC4F",
    c: "\uD835\uDC50",
    d: "\uD835\uDC51",
    e: "\uD835\uDC52",
    f: "\uD835\uDC53",
    g: "\uD835\uDC54",
    h: "\u210E",
    i: "\uD835\uDC56",
    j: "\uD835\uDC57",
    k: "\uD835\uDC58",
    l: "\uD835\uDC59",
    m: "\uD835\uDC5A",
    n: "\uD835\uDC5B",
    o: "\uD835\uDC5C",
    p: "\uD835\uDC5D",
    q: "\uD835\uDC5E",
    r: "\uD835\uDC5F",
    s: "\uD835\uDC60",
    t: "\uD835\uDC61",
    u: "\uD835\uDC62",
    v: "\uD835\uDC63",
    w: "\uD835\uDC64",
    x: "\uD835\uDC65",
    y: "\uD835\uDC66",
    z: "\uD835\uDC67"
};
exports.MATH_BOLD_ITALIC = {
    A: "\uD835\uDC68",
    B: "\uD835\uDC69",
    C: "\uD835\uDC6A",
    D: "\uD835\uDC6B",
    E: "\uD835\uDC6C",
    F: "\uD835\uDC6D",
    G: "\uD835\uDC6E",
    H: "\uD835\uDC6F",
    I: "\uD835\uDC70",
    J: "\uD835\uDC71",
    K: "\uD835\uDC72",
    L: "\uD835\uDC73",
    M: "\uD835\uDC74",
    N: "\uD835\uDC75",
    O: "\uD835\uDC76",
    P: "\uD835\uDC77",
    Q: "\uD835\uDC78",
    R: "\uD835\uDC79",
    S: "\uD835\uDC7A",
    T: "\uD835\uDC7B",
    U: "\uD835\uDC7C",
    V: "\uD835\uDC7D",
    W: "\uD835\uDC7E",
    X: "\uD835\uDC7F",
    Y: "\uD835\uDC80",
    Z: "\uD835\uDC81",
    a: "\uD835\uDC82",
    b: "\uD835\uDC83",
    c: "\uD835\uDC84",
    d: "\uD835\uDC85",
    e: "\uD835\uDC86",
    f: "\uD835\uDC87",
    g: "\uD835\uDC88",
    h: "\uD835\uDC89",
    i: "\uD835\uDC8A",
    j: "\uD835\uDC8B",
    k: "\uD835\uDC8C",
    l: "\uD835\uDC8D",
    m: "\uD835\uDC8E",
    n: "\uD835\uDC8F",
    o: "\uD835\uDC90",
    p: "\uD835\uDC91",
    q: "\uD835\uDC92",
    r: "\uD835\uDC93",
    s: "\uD835\uDC94",
    t: "\uD835\uDC95",
    u: "\uD835\uDC96",
    v: "\uD835\uDC97",
    w: "\uD835\uDC98",
    x: "\uD835\uDC99",
    y: "\uD835\uDC9A",
    z: "\uD835\uDC9B"
};
exports.MATH_SCRIPT = {
    A: "\uD835\uDC9C",
    B: "\u212C",
    C: "\uD835\uDC9E",
    D: "\uD835\uDC9F",
    E: "\u2130",
    F: "\u2131",
    G: "\uD835\uDCA2",
    H: "\u210B",
    I: "\u2110",
    J: "\uD835\uDCA5",
    K: "\uD835\uDCA6",
    L: "\u2112",
    M: "\u2133",
    N: "\uD835\uDCA9",
    O: "\uD835\uDCAA",
    P: "\uD835\uDCAB",
    Q: "\uD835\uDCAC",
    R: "\u211B",
    S: "\uD835\uDCAE",
    T: "\uD835\uDCAF",
    U: "\uD835\uDCB0",
    V: "\uD835\uDCB1",
    W: "\uD835\uDCB2",
    X: "\uD835\uDCB3",
    Y: "\uD835\uDCB4",
    Z: "\uD835\uDCB5",
    a: "\uD835\uDCB6",
    b: "\uD835\uDCB7",
    c: "\uD835\uDCB8",
    d: "\uD835\uDCB9",
    e: "\u212F",
    f: "\uD835\uDCBB",
    g: "\u210A",
    h: "\uD835\uDCBD",
    i: "\uD835\uDCBE",
    j: "\uD835\uDCBF",
    k: "\uD835\uDCC0",
    l: "\u2113",
    m: "\uD835\uDCC2",
    n: "\uD835\uDCC3",
    o: "\u2134",
    p: "\uD835\uDCC5",
    q: "\uD835\uDCC6",
    r: "\uD835\uDCC7",
    s: "\uD835\uDCC8",
    t: "\uD835\uDCC9",
    u: "\uD835\uDCCA",
    v: "\uD835\uDCCB",
    w: "\uD835\uDCCC",
    x: "\uD835\uDCCD",
    y: "\uD835\uDCCE",
    z: "\uD835\uDCCF"
};
exports.MATH_BOLD_SCRIPT = {
    A: "\uD835\uDCD0",
    B: "\uD835\uDCD1",
    C: "\uD835\uDCD2",
    D: "\uD835\uDCD3",
    E: "\uD835\uDCD4",
    F: "\uD835\uDCD5",
    G: "\uD835\uDCD6",
    H: "\uD835\uDCD7",
    I: "\uD835\uDCD8",
    J: "\uD835\uDCD9",
    K: "\uD835\uDCDA",
    L: "\uD835\uDCDB",
    M: "\uD835\uDCDC",
    N: "\uD835\uDCDD",
    O: "\uD835\uDCDE",
    P: "\uD835\uDCDF",
    Q: "\uD835\uDCE0",
    R: "\uD835\uDCE1",
    S: "\uD835\uDCE2",
    T: "\uD835\uDCE3",
    U: "\uD835\uDCE4",
    V: "\uD835\uDCE5",
    W: "\uD835\uDCE6",
    X: "\uD835\uDCE7",
    Y: "\uD835\uDCE8",
    Z: "\uD835\uDCE9",
    a: "\uD835\uDCEA",
    b: "\uD835\uDCEB",
    c: "\uD835\uDCEC",
    d: "\uD835\uDCED",
    e: "\uD835\uDCEE",
    f: "\uD835\uDCEF",
    g: "\uD835\uDCF0",
    h: "\uD835\uDCF1",
    i: "\uD835\uDCF2",
    j: "\uD835\uDCF3",
    k: "\uD835\uDCF4",
    l: "\uD835\uDCF5",
    m: "\uD835\uDCF6",
    n: "\uD835\uDCF7",
    o: "\uD835\uDCF8",
    p: "\uD835\uDCF9",
    q: "\uD835\uDCFA",
    r: "\uD835\uDCFB",
    s: "\uD835\uDCFC",
    t: "\uD835\uDCFD",
    u: "\uD835\uDCFE",
    v: "\uD835\uDCFF",
    w: "\uD835\uDD00",
    x: "\uD835\uDD01",
    y: "\uD835\uDD02",
    z: "\uD835\uDD03"
};
exports.MATH_FRAKTUR = {
    A: "\uD835\uDD04",
    B: "\uD835\uDD05",
    C: "\u212D",
    D: "\uD835\uDD07",
    E: "\uD835\uDD08",
    F: "\uD835\uDD09",
    G: "\uD835\uDD0A",
    H: "\u210C",
    I: "\u2111",
    J: "\uD835\uDD0D",
    K: "\uD835\uDD0E",
    L: "\uD835\uDD0F",
    M: "\uD835\uDD10",
    N: "\uD835\uDD11",
    O: "\uD835\uDD12",
    P: "\uD835\uDD13",
    Q: "\uD835\uDD14",
    R: "\u211C",
    S: "\uD835\uDD16",
    T: "\uD835\uDD17",
    U: "\uD835\uDD18",
    V: "\uD835\uDD19",
    W: "\uD835\uDD1A",
    X: "\uD835\uDD1B",
    Y: "\uD835\uDD1C",
    Z: "\u2128",
    a: "\uD835\uDD1E",
    b: "\uD835\uDD1F",
    c: "\uD835\uDD20",
    d: "\uD835\uDD21",
    e: "\uD835\uDD22",
    f: "\uD835\uDD23",
    g: "\uD835\uDD24",
    h: "\uD835\uDD25",
    i: "\uD835\uDD26",
    j: "\uD835\uDD27",
    k: "\uD835\uDD28",
    l: "\uD835\uDD29",
    m: "\uD835\uDD2A",
    n: "\uD835\uDD2B",
    o: "\uD835\uDD2C",
    p: "\uD835\uDD2D",
    q: "\uD835\uDD2E",
    r: "\uD835\uDD2F",
    s: "\uD835\uDD30",
    t: "\uD835\uDD31",
    u: "\uD835\uDD32",
    v: "\uD835\uDD33",
    w: "\uD835\uDD34",
    x: "\uD835\uDD35",
    y: "\uD835\uDD36",
    z: "\uD835\uDD37"
};
exports.MATH_BB = {
    A: "\uD835\uDD38",
    B: "\uD835\uDD39",
    C: "\u2102",
    D: "\uD835\uDD3B",
    E: "\uD835\uDD3C",
    F: "\uD835\uDD3D",
    G: "\uD835\uDD3E",
    H: "\u210D",
    I: "\uD835\uDD40",
    J: "\uD835\uDD41",
    K: "\uD835\uDD42",
    L: "\uD835\uDD43",
    M: "\uD835\uDD44",
    N: "\u2115",
    O: "\uD835\uDD46",
    P: "\u2119",
    Q: "\u211A",
    R: "\u211D",
    S: "\uD835\uDD4A",
    T: "\uD835\uDD4B",
    U: "\uD835\uDD4C",
    V: "\uD835\uDD4D",
    W: "\uD835\uDD4E",
    X: "\uD835\uDD4F",
    Y: "\uD835\uDD50",
    Z: "\u2124",
    a: "\uD835\uDD52",
    b: "\uD835\uDD53",
    c: "\uD835\uDD54",
    d: "\uD835\uDD55",
    e: "\uD835\uDD56",
    f: "\uD835\uDD57",
    g: "\uD835\uDD58",
    h: "\uD835\uDD59",
    i: "\uD835\uDD5A",
    j: "\uD835\uDD5B",
    k: "\uD835\uDD5C",
    l: "\uD835\uDD5D",
    m: "\uD835\uDD5E",
    n: "\uD835\uDD5F",
    o: "\uD835\uDD60",
    p: "\uD835\uDD61",
    q: "\uD835\uDD62",
    r: "\uD835\uDD63",
    s: "\uD835\uDD64",
    t: "\uD835\uDD65",
    u: "\uD835\uDD66",
    v: "\uD835\uDD67",
    w: "\uD835\uDD68",
    x: "\uD835\uDD69",
    y: "\uD835\uDD6A",
    z: "\uD835\uDD6B"
};
exports.MATH_BOLD_FRAKTUR = {
    A: "\uD835\uDD6C",
    B: "\uD835\uDD6D",
    C: "\uD835\uDD6E",
    D: "\uD835\uDD6F",
    E: "\uD835\uDD70",
    F: "\uD835\uDD71",
    G: "\uD835\uDD72",
    H: "\uD835\uDD73",
    I: "\uD835\uDD74",
    J: "\uD835\uDD75",
    K: "\uD835\uDD76",
    L: "\uD835\uDD77",
    M: "\uD835\uDD78",
    N: "\uD835\uDD79",
    O: "\uD835\uDD7A",
    P: "\uD835\uDD7B",
    Q: "\uD835\uDD7C",
    R: "\uD835\uDD7D",
    S: "\uD835\uDD7E",
    T: "\uD835\uDD7F",
    U: "\uD835\uDD80",
    V: "\uD835\uDD81",
    W: "\uD835\uDD82",
    X: "\uD835\uDD83",
    Y: "\uD835\uDD84",
    Z: "\uD835\uDD85",
    a: "\uD835\uDD86",
    b: "\uD835\uDD87",
    c: "\uD835\uDD88",
    d: "\uD835\uDD89",
    e: "\uD835\uDD8A",
    f: "\uD835\uDD8B",
    g: "\uD835\uDD8C",
    h: "\uD835\uDD8D",
    i: "\uD835\uDD8E",
    j: "\uD835\uDD8F",
    k: "\uD835\uDD90",
    l: "\uD835\uDD91",
    m: "\uD835\uDD92",
    n: "\uD835\uDD93",
    o: "\uD835\uDD94",
    p: "\uD835\uDD95",
    q: "\uD835\uDD96",
    r: "\uD835\uDD97",
    s: "\uD835\uDD98",
    t: "\uD835\uDD99",
    u: "\uD835\uDD9A",
    v: "\uD835\uDD9B",
    w: "\uD835\uDD9C",
    x: "\uD835\uDD9D",
    y: "\uD835\uDD9E",
    z: "\uD835\uDD9F"
};
exports.MATH_SANS_SERIF = {
    A: "\uD835\uDDA0",
    B: "\uD835\uDDA1",
    C: "\uD835\uDDA2",
    D: "\uD835\uDDA3",
    E: "\uD835\uDDA4",
    F: "\uD835\uDDA5",
    G: "\uD835\uDDA6",
    H: "\uD835\uDDA7",
    I: "\uD835\uDDA8",
    J: "\uD835\uDDA9",
    K: "\uD835\uDDAA",
    L: "\uD835\uDDAB",
    M: "\uD835\uDDAC",
    N: "\uD835\uDDAD",
    O: "\uD835\uDDAE",
    P: "\uD835\uDDAF",
    Q: "\uD835\uDDB0",
    R: "\uD835\uDDB1",
    S: "\uD835\uDDB2",
    T: "\uD835\uDDB3",
    U: "\uD835\uDDB4",
    V: "\uD835\uDDB5",
    W: "\uD835\uDDB6",
    X: "\uD835\uDDB7",
    Y: "\uD835\uDDB8",
    Z: "\uD835\uDDB9",
    a: "\uD835\uDDBA",
    b: "\uD835\uDDBB",
    c: "\uD835\uDDBC",
    d: "\uD835\uDDBD",
    e: "\uD835\uDDBE",
    f: "\uD835\uDDBF",
    g: "\uD835\uDDC0",
    h: "\uD835\uDDC1",
    i: "\uD835\uDDC2",
    j: "\uD835\uDDC3",
    k: "\uD835\uDDC4",
    l: "\uD835\uDDC5",
    m: "\uD835\uDDC6",
    n: "\uD835\uDDC7",
    o: "\uD835\uDDC8",
    p: "\uD835\uDDC9",
    q: "\uD835\uDDCA",
    r: "\uD835\uDDCB",
    s: "\uD835\uDDCC",
    t: "\uD835\uDDCD",
    u: "\uD835\uDDCE",
    v: "\uD835\uDDCF",
    w: "\uD835\uDDD0",
    x: "\uD835\uDDD1",
    y: "\uD835\uDDD2",
    z: "\uD835\uDDD3"
};
exports.MATH_BOLD_SANS_SERIF = {
    A: "\uD835\uDDD4",
    B: "\uD835\uDDD5",
    C: "\uD835\uDDD6",
    D: "\uD835\uDDD7",
    E: "\uD835\uDDD8",
    F: "\uD835\uDDD9",
    G: "\uD835\uDDDA",
    H: "\uD835\uDDDB",
    I: "\uD835\uDDDC",
    J: "\uD835\uDDDD",
    K: "\uD835\uDDDE",
    L: "\uD835\uDDDF",
    M: "\uD835\uDDE0",
    N: "\uD835\uDDE1",
    O: "\uD835\uDDE2",
    P: "\uD835\uDDE3",
    Q: "\uD835\uDDE4",
    R: "\uD835\uDDE5",
    S: "\uD835\uDDE6",
    T: "\uD835\uDDE7",
    U: "\uD835\uDDE8",
    V: "\uD835\uDDE9",
    W: "\uD835\uDDEA",
    X: "\uD835\uDDEB",
    Y: "\uD835\uDDEC",
    Z: "\uD835\uDDED",
    a: "\uD835\uDDEE",
    b: "\uD835\uDDEF",
    c: "\uD835\uDDF0",
    d: "\uD835\uDDF1",
    e: "\uD835\uDDF2",
    f: "\uD835\uDDF3",
    g: "\uD835\uDDF4",
    h: "\uD835\uDDF5",
    i: "\uD835\uDDF6",
    j: "\uD835\uDDF7",
    k: "\uD835\uDDF8",
    l: "\uD835\uDDF9",
    m: "\uD835\uDDFA",
    n: "\uD835\uDDFB",
    o: "\uD835\uDDFC",
    p: "\uD835\uDDFD",
    q: "\uD835\uDDFE",
    r: "\uD835\uDDFF",
    s: "\uD835\uDE00",
    t: "\uD835\uDE01",
    u: "\uD835\uDE02",
    v: "\uD835\uDE03",
    w: "\uD835\uDE04",
    x: "\uD835\uDE05",
    y: "\uD835\uDE06",
    z: "\uD835\uDE07"
};
exports.MATH_ITALIC_SANS_SERIF = {
    A: "\uD835\uDE08",
    B: "\uD835\uDE09",
    C: "\uD835\uDE0A",
    D: "\uD835\uDE0B",
    E: "\uD835\uDE0C",
    F: "\uD835\uDE0D",
    G: "\uD835\uDE0E",
    H: "\uD835\uDE0F",
    I: "\uD835\uDE10",
    J: "\uD835\uDE11",
    K: "\uD835\uDE12",
    L: "\uD835\uDE13",
    M: "\uD835\uDE14",
    N: "\uD835\uDE15",
    O: "\uD835\uDE16",
    P: "\uD835\uDE17",
    Q: "\uD835\uDE18",
    R: "\uD835\uDE19",
    S: "\uD835\uDE1A",
    T: "\uD835\uDE1B",
    U: "\uD835\uDE1C",
    V: "\uD835\uDE1D",
    W: "\uD835\uDE1E",
    X: "\uD835\uDE1F",
    Y: "\uD835\uDE20",
    Z: "\uD835\uDE21",
    a: "\uD835\uDE22",
    b: "\uD835\uDE23",
    c: "\uD835\uDE24",
    d: "\uD835\uDE25",
    e: "\uD835\uDE26",
    f: "\uD835\uDE27",
    g: "\uD835\uDE28",
    h: "\uD835\uDE29",
    i: "\uD835\uDE2A",
    j: "\uD835\uDE2B",
    k: "\uD835\uDE2C",
    l: "\uD835\uDE2D",
    m: "\uD835\uDE2E",
    n: "\uD835\uDE2F",
    o: "\uD835\uDE30",
    p: "\uD835\uDE31",
    q: "\uD835\uDE32",
    r: "\uD835\uDE33",
    s: "\uD835\uDE34",
    t: "\uD835\uDE35",
    u: "\uD835\uDE36",
    v: "\uD835\uDE37",
    w: "\uD835\uDE38",
    x: "\uD835\uDE39",
    y: "\uD835\uDE3A",
    z: "\uD835\uDE3B"
};
exports.MATH_BOLD_ITALIC_SANS_SERIF = {
    A: "\uD835\uDE3C",
    B: "\uD835\uDE3D",
    C: "\uD835\uDE3E",
    D: "\uD835\uDE3F",
    E: "\uD835\uDE40",
    F: "\uD835\uDE41",
    G: "\uD835\uDE42",
    H: "\uD835\uDE43",
    I: "\uD835\uDE44",
    J: "\uD835\uDE45",
    K: "\uD835\uDE46",
    L: "\uD835\uDE47",
    M: "\uD835\uDE48",
    N: "\uD835\uDE49",
    O: "\uD835\uDE4A",
    P: "\uD835\uDE4B",
    Q: "\uD835\uDE4C",
    R: "\uD835\uDE4D",
    S: "\uD835\uDE4E",
    T: "\uD835\uDE4F",
    U: "\uD835\uDE50",
    V: "\uD835\uDE51",
    W: "\uD835\uDE52",
    X: "\uD835\uDE53",
    Y: "\uD835\uDE54",
    Z: "\uD835\uDE55",
    a: "\uD835\uDE56",
    b: "\uD835\uDE57",
    c: "\uD835\uDE58",
    d: "\uD835\uDE59",
    e: "\uD835\uDE5A",
    f: "\uD835\uDE5B",
    g: "\uD835\uDE5C",
    h: "\uD835\uDE5D",
    i: "\uD835\uDE5E",
    j: "\uD835\uDE5F",
    k: "\uD835\uDE60",
    l: "\uD835\uDE61",
    m: "\uD835\uDE62",
    n: "\uD835\uDE63",
    o: "\uD835\uDE64",
    p: "\uD835\uDE65",
    q: "\uD835\uDE66",
    r: "\uD835\uDE67",
    s: "\uD835\uDE68",
    t: "\uD835\uDE69",
    u: "\uD835\uDE6A",
    v: "\uD835\uDE6B",
    w: "\uD835\uDE6C",
    x: "\uD835\uDE6D",
    y: "\uD835\uDE6E",
    z: "\uD835\uDE6F"
};
exports.MATH_TT = {
    A: "\uD835\uDE70",
    B: "\uD835\uDE71",
    C: "\uD835\uDE72",
    D: "\uD835\uDE73",
    E: "\uD835\uDE74",
    F: "\uD835\uDE75",
    G: "\uD835\uDE76",
    H: "\uD835\uDE77",
    I: "\uD835\uDE78",
    J: "\uD835\uDE79",
    K: "\uD835\uDE7A",
    L: "\uD835\uDE7B",
    M: "\uD835\uDE7C",
    N: "\uD835\uDE7D",
    O: "\uD835\uDE7E",
    P: "\uD835\uDE7F",
    Q: "\uD835\uDE80",
    R: "\uD835\uDE81",
    S: "\uD835\uDE82",
    T: "\uD835\uDE83",
    U: "\uD835\uDE84",
    V: "\uD835\uDE85",
    W: "\uD835\uDE86",
    X: "\uD835\uDE87",
    Y: "\uD835\uDE88",
    Z: "\uD835\uDE89",
    a: "\uD835\uDE8A",
    b: "\uD835\uDE8B",
    c: "\uD835\uDE8C",
    d: "\uD835\uDE8D",
    e: "\uD835\uDE8E",
    f: "\uD835\uDE8F",
    g: "\uD835\uDE90",
    h: "\uD835\uDE91",
    i: "\uD835\uDE92",
    j: "\uD835\uDE93",
    k: "\uD835\uDE94",
    l: "\uD835\uDE95",
    m: "\uD835\uDE96",
    n: "\uD835\uDE97",
    o: "\uD835\uDE98",
    p: "\uD835\uDE99",
    q: "\uD835\uDE9A",
    r: "\uD835\uDE9B",
    s: "\uD835\uDE9C",
    t: "\uD835\uDE9D",
    u: "\uD835\uDE9E",
    v: "\uD835\uDE9F",
    w: "\uD835\uDEA0",
    x: "\uD835\uDEA1",
    y: "\uD835\uDEA2",
    z: "\uD835\uDEA3"
};
// todo: greek
// todo: digits
// <https://en.wikipedia.org/wiki/Unicode_subscripts_and_superscripts>
exports.SUPERSCRIPTS = {
    "0": "\u2070",
    "1": "\u00B9",
    "2": "\u00B2",
    "3": "\u00B3",
    "4": "\u2074",
    "5": "\u2075",
    "6": "\u2076",
    "7": "\u2077",
    "8": "\u2078",
    "9": "\u2079",
    "+": "\u207A",
    "-": "\u207B",
    "=": "\u207C",
    "(": "\u207D",
    ")": "\u207E",
    A: "\u1D2C",
    B: "\u1D2E",
    C: "\uA7F2",
    D: "\u1D30",
    E: "\u1D31",
    F: "\uA7F3",
    G: "\u1D33",
    H: "\u1D34",
    I: "\u1D35",
    J: "\u1D36",
    K: "\u1D37",
    L: "\u1D38",
    M: "\u1D39",
    N: "\u1D3A",
    O: "\u1D3C",
    P: "\u1D3E",
    Q: "\uA7F4",
    R: "\u1D3F",
    T: "\u1D40",
    U: "\u1D41",
    V: "\u2C7D",
    W: "\u1D42",
    a: "\u1D43",
    b: "\u1D47",
    c: "\u1D9C",
    d: "\u1D48",
    e: "\u1D49",
    f: "\u1DA0",
    g: "\u1D4D",
    h: "\u02B0",
    i: "\u2071",
    j: "\u02B2",
    k: "\u1D4F",
    l: "\u02E1",
    m: "\u1D50",
    n: "\u207F",
    o: "\u1D52",
    p: "\u1D56",
    q: "\uD801\uDFA5",
    r: "\u02B3",
    s: "\u02E2",
    t: "\u1D57",
    u: "\u1D58",
    v: "\u1D5B",
    w: "\u02B7",
    x: "\u02E3",
    y: "\u02B8",
    z: "\u1DBB"
};
exports.SUBSCRIPTS = {
    "0": "\u2080",
    "1": "\u2081",
    "2": "\u2082",
    "3": "\u2083",
    "4": "\u2084",
    "5": "\u2085",
    "6": "\u2086",
    "7": "\u2087",
    "8": "\u2088",
    "9": "\u2089",
    "+": "\u208A",
    "-": "\u208B",
    "=": "\u208C",
    "(": "\u208D",
    ")": "\u208E",
    a: "\u2090",
    e: "\u2091",
    h: "\u2095",
    i: "\u1D62",
    j: "\u2C7C",
    k: "\u2096",
    l: "\u2097",
    m: "\u2098",
    n: "\u2099",
    o: "\u2092",
    p: "\u209A",
    r: "\u1D63",
    s: "\u209B",
    t: "\u209C",
    u: "\u1D64",
    v: "\u1D65",
    x: "\u2093"
};


/***/ }),

/***/ "./src/typeset.ts":
/*!************************!*\
  !*** ./src/typeset.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.typeset = void 0;
var fonts_1 = __webpack_require__(/*! ./fonts */ "./src/fonts.ts");
var FontType;
(function (FontType) {
    FontType[FontType["Regular"] = 1] = "Regular";
    FontType[FontType["Superscript"] = 2] = "Superscript";
    FontType[FontType["Subscript"] = 4] = "Subscript";
    FontType[FontType["Bold"] = 8] = "Bold";
    FontType[FontType["Italic"] = 16] = "Italic";
    FontType[FontType["SansSerif"] = 32] = "SansSerif";
})(FontType || (FontType = {}));
var selectFont = function (str, font) {
    var res = (function () {
        var chars = __spreadArray([], __read(str), false).map(function (ch) {
            switch (font) {
                case FontType.Regular:
                    return ch;
                case FontType.Superscript:
                    return fonts_1.SUPERSCRIPTS[ch];
                case FontType.Subscript:
                    return fonts_1.SUBSCRIPTS[ch];
                case FontType.SansSerif:
                    return fonts_1.MATH_SANS_SERIF[ch];
            }
        });
        if (chars.includes(undefined))
            return undefined;
        return chars.join("");
    })();
    if (res === undefined)
        throw "invalid string (".concat(str, ")");
    return res;
};
var compositeFont = function (lhs, rhs) {
    if (lhs == FontType.Regular)
        return rhs;
    if (rhs == FontType.Regular)
        return lhs;
    if (lhs == rhs)
        return lhs;
    var composite = lhs | rhs;
    if (composite == (FontType.Bold | FontType.Italic))
        return composite;
    throw "invalid font";
};
var typeset = function (expr) {
    var tokens = /\\[a-zA-Z]+|\\.|\^|_|\{|\}|\s+|./g;
    var res = "";
    var mode = [FontType.Regular];
    var lastMode = null;
    var m;
    while ((m = tokens.exec(expr))) {
        var token = m[0];
        if (token.trim() === "")
            continue;
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
                res += selectFont(token, lastMode !== null && lastMode !== void 0 ? lastMode : mode[mode.length - 1]);
                lastMode = null;
                break;
        }
    }
    console.log("\"".concat(expr, "\" => \"").concat(res, "\""));
    return res;
};
exports.typeset = typeset;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/typeset.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixVQUFVLE9BQU8scUJBQXFCLGFBQWEsTUFBTSxTQUFTO0FBQ3RGO0FBQ0Esa0JBQWtCO0FBQ2xCLGtCQUFrQixHQUFHLG9CQUFvQixHQUFHLGVBQWUsR0FBRyxtQ0FBbUMsR0FBRyw4QkFBOEIsR0FBRyw0QkFBNEIsR0FBRyx1QkFBdUIsR0FBRyx5QkFBeUIsR0FBRyxlQUFlLEdBQUcsb0JBQW9CLEdBQUcsd0JBQXdCLEdBQUcsbUJBQW1CLEdBQUcsd0JBQXdCLEdBQUcsbUJBQW1CLEdBQUcsaUJBQWlCO0FBQ3RYLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMzeUJhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RSxPQUFPO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGVBQWU7QUFDZixjQUFjLG1CQUFPLENBQUMsK0JBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsNEJBQTRCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLEdBQUc7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7Ozs7Ozs7VUM5R2Y7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9mb250cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXNldC50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8gPGh0dHBzOi8vd3d3LmFzYWhpLW5ldC5vci5qcC9+YXgycy1rbXRuL3JlZi91bmljb2RlL3UxZDQwMC5odG1sPlxuLy9cbi8vIGBgYHpzaFxuLy8gaT0kKCgxNiMxZDQwMCkpOyBmb3IgYyBpbiB7QS4uWn07IGRvIGVjaG8gXCIkYzogXFxcIlxcXFxcXFxcdXskKChbIyMxNl1pKSl9XFxcIixcIjsgKCgrK2kpKTsgZG9uZVxuLy8gYGBgXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5TVUJTQ1JJUFRTID0gZXhwb3J0cy5TVVBFUlNDUklQVFMgPSBleHBvcnRzLk1BVEhfVFQgPSBleHBvcnRzLk1BVEhfQk9MRF9JVEFMSUNfU0FOU19TRVJJRiA9IGV4cG9ydHMuTUFUSF9JVEFMSUNfU0FOU19TRVJJRiA9IGV4cG9ydHMuTUFUSF9CT0xEX1NBTlNfU0VSSUYgPSBleHBvcnRzLk1BVEhfU0FOU19TRVJJRiA9IGV4cG9ydHMuTUFUSF9CT0xEX0ZSQUtUVVIgPSBleHBvcnRzLk1BVEhfQkIgPSBleHBvcnRzLk1BVEhfRlJBS1RVUiA9IGV4cG9ydHMuTUFUSF9CT0xEX1NDUklQVCA9IGV4cG9ydHMuTUFUSF9TQ1JJUFQgPSBleHBvcnRzLk1BVEhfQk9MRF9JVEFMSUMgPSBleHBvcnRzLk1BVEhfSVRBTElDID0gZXhwb3J0cy5NQVRIX0JPTEQgPSB2b2lkIDA7XG5leHBvcnRzLk1BVEhfQk9MRCA9IHtcbiAgICBBOiBcIlxcdUQ4MzVcXHVEQzAwXCIsXG4gICAgQjogXCJcXHVEODM1XFx1REMwMVwiLFxuICAgIEM6IFwiXFx1RDgzNVxcdURDMDJcIixcbiAgICBEOiBcIlxcdUQ4MzVcXHVEQzAzXCIsXG4gICAgRTogXCJcXHVEODM1XFx1REMwNFwiLFxuICAgIEY6IFwiXFx1RDgzNVxcdURDMDVcIixcbiAgICBHOiBcIlxcdUQ4MzVcXHVEQzA2XCIsXG4gICAgSDogXCJcXHVEODM1XFx1REMwN1wiLFxuICAgIEk6IFwiXFx1RDgzNVxcdURDMDhcIixcbiAgICBKOiBcIlxcdUQ4MzVcXHVEQzA5XCIsXG4gICAgSzogXCJcXHVEODM1XFx1REMwQVwiLFxuICAgIEw6IFwiXFx1RDgzNVxcdURDMEJcIixcbiAgICBNOiBcIlxcdUQ4MzVcXHVEQzBDXCIsXG4gICAgTjogXCJcXHVEODM1XFx1REMwRFwiLFxuICAgIE86IFwiXFx1RDgzNVxcdURDMEVcIixcbiAgICBQOiBcIlxcdUQ4MzVcXHVEQzBGXCIsXG4gICAgUTogXCJcXHVEODM1XFx1REMxMFwiLFxuICAgIFI6IFwiXFx1RDgzNVxcdURDMTFcIixcbiAgICBTOiBcIlxcdUQ4MzVcXHVEQzEyXCIsXG4gICAgVDogXCJcXHVEODM1XFx1REMxM1wiLFxuICAgIFU6IFwiXFx1RDgzNVxcdURDMTRcIixcbiAgICBWOiBcIlxcdUQ4MzVcXHVEQzE1XCIsXG4gICAgVzogXCJcXHVEODM1XFx1REMxNlwiLFxuICAgIFg6IFwiXFx1RDgzNVxcdURDMTdcIixcbiAgICBZOiBcIlxcdUQ4MzVcXHVEQzE4XCIsXG4gICAgWjogXCJcXHVEODM1XFx1REMxOVwiLFxuICAgIGE6IFwiXFx1RDgzNVxcdURDMUFcIixcbiAgICBiOiBcIlxcdUQ4MzVcXHVEQzFCXCIsXG4gICAgYzogXCJcXHVEODM1XFx1REMxQ1wiLFxuICAgIGQ6IFwiXFx1RDgzNVxcdURDMURcIixcbiAgICBlOiBcIlxcdUQ4MzVcXHVEQzFFXCIsXG4gICAgZjogXCJcXHVEODM1XFx1REMxRlwiLFxuICAgIGc6IFwiXFx1RDgzNVxcdURDMjBcIixcbiAgICBoOiBcIlxcdUQ4MzVcXHVEQzIxXCIsXG4gICAgaTogXCJcXHVEODM1XFx1REMyMlwiLFxuICAgIGo6IFwiXFx1RDgzNVxcdURDMjNcIixcbiAgICBrOiBcIlxcdUQ4MzVcXHVEQzI0XCIsXG4gICAgbDogXCJcXHVEODM1XFx1REMyNVwiLFxuICAgIG06IFwiXFx1RDgzNVxcdURDMjZcIixcbiAgICBuOiBcIlxcdUQ4MzVcXHVEQzI3XCIsXG4gICAgbzogXCJcXHVEODM1XFx1REMyOFwiLFxuICAgIHA6IFwiXFx1RDgzNVxcdURDMjlcIixcbiAgICBxOiBcIlxcdUQ4MzVcXHVEQzJBXCIsXG4gICAgcjogXCJcXHVEODM1XFx1REMyQlwiLFxuICAgIHM6IFwiXFx1RDgzNVxcdURDMkNcIixcbiAgICB0OiBcIlxcdUQ4MzVcXHVEQzJEXCIsXG4gICAgdTogXCJcXHVEODM1XFx1REMyRVwiLFxuICAgIHY6IFwiXFx1RDgzNVxcdURDMkZcIixcbiAgICB3OiBcIlxcdUQ4MzVcXHVEQzMwXCIsXG4gICAgeDogXCJcXHVEODM1XFx1REMzMVwiLFxuICAgIHk6IFwiXFx1RDgzNVxcdURDMzJcIixcbiAgICB6OiBcIlxcdUQ4MzVcXHVEQzMzXCJcbn07XG5leHBvcnRzLk1BVEhfSVRBTElDID0ge1xuICAgIEE6IFwiXFx1RDgzNVxcdURDMzRcIixcbiAgICBCOiBcIlxcdUQ4MzVcXHVEQzM1XCIsXG4gICAgQzogXCJcXHVEODM1XFx1REMzNlwiLFxuICAgIEQ6IFwiXFx1RDgzNVxcdURDMzdcIixcbiAgICBFOiBcIlxcdUQ4MzVcXHVEQzM4XCIsXG4gICAgRjogXCJcXHVEODM1XFx1REMzOVwiLFxuICAgIEc6IFwiXFx1RDgzNVxcdURDM0FcIixcbiAgICBIOiBcIlxcdUQ4MzVcXHVEQzNCXCIsXG4gICAgSTogXCJcXHVEODM1XFx1REMzQ1wiLFxuICAgIEo6IFwiXFx1RDgzNVxcdURDM0RcIixcbiAgICBLOiBcIlxcdUQ4MzVcXHVEQzNFXCIsXG4gICAgTDogXCJcXHVEODM1XFx1REMzRlwiLFxuICAgIE06IFwiXFx1RDgzNVxcdURDNDBcIixcbiAgICBOOiBcIlxcdUQ4MzVcXHVEQzQxXCIsXG4gICAgTzogXCJcXHVEODM1XFx1REM0MlwiLFxuICAgIFA6IFwiXFx1RDgzNVxcdURDNDNcIixcbiAgICBROiBcIlxcdUQ4MzVcXHVEQzQ0XCIsXG4gICAgUjogXCJcXHVEODM1XFx1REM0NVwiLFxuICAgIFM6IFwiXFx1RDgzNVxcdURDNDZcIixcbiAgICBUOiBcIlxcdUQ4MzVcXHVEQzQ3XCIsXG4gICAgVTogXCJcXHVEODM1XFx1REM0OFwiLFxuICAgIFY6IFwiXFx1RDgzNVxcdURDNDlcIixcbiAgICBXOiBcIlxcdUQ4MzVcXHVEQzRBXCIsXG4gICAgWDogXCJcXHVEODM1XFx1REM0QlwiLFxuICAgIFk6IFwiXFx1RDgzNVxcdURDNENcIixcbiAgICBaOiBcIlxcdUQ4MzVcXHVEQzREXCIsXG4gICAgYTogXCJcXHVEODM1XFx1REM0RVwiLFxuICAgIGI6IFwiXFx1RDgzNVxcdURDNEZcIixcbiAgICBjOiBcIlxcdUQ4MzVcXHVEQzUwXCIsXG4gICAgZDogXCJcXHVEODM1XFx1REM1MVwiLFxuICAgIGU6IFwiXFx1RDgzNVxcdURDNTJcIixcbiAgICBmOiBcIlxcdUQ4MzVcXHVEQzUzXCIsXG4gICAgZzogXCJcXHVEODM1XFx1REM1NFwiLFxuICAgIGg6IFwiXFx1MjEwRVwiLFxuICAgIGk6IFwiXFx1RDgzNVxcdURDNTZcIixcbiAgICBqOiBcIlxcdUQ4MzVcXHVEQzU3XCIsXG4gICAgazogXCJcXHVEODM1XFx1REM1OFwiLFxuICAgIGw6IFwiXFx1RDgzNVxcdURDNTlcIixcbiAgICBtOiBcIlxcdUQ4MzVcXHVEQzVBXCIsXG4gICAgbjogXCJcXHVEODM1XFx1REM1QlwiLFxuICAgIG86IFwiXFx1RDgzNVxcdURDNUNcIixcbiAgICBwOiBcIlxcdUQ4MzVcXHVEQzVEXCIsXG4gICAgcTogXCJcXHVEODM1XFx1REM1RVwiLFxuICAgIHI6IFwiXFx1RDgzNVxcdURDNUZcIixcbiAgICBzOiBcIlxcdUQ4MzVcXHVEQzYwXCIsXG4gICAgdDogXCJcXHVEODM1XFx1REM2MVwiLFxuICAgIHU6IFwiXFx1RDgzNVxcdURDNjJcIixcbiAgICB2OiBcIlxcdUQ4MzVcXHVEQzYzXCIsXG4gICAgdzogXCJcXHVEODM1XFx1REM2NFwiLFxuICAgIHg6IFwiXFx1RDgzNVxcdURDNjVcIixcbiAgICB5OiBcIlxcdUQ4MzVcXHVEQzY2XCIsXG4gICAgejogXCJcXHVEODM1XFx1REM2N1wiXG59O1xuZXhwb3J0cy5NQVRIX0JPTERfSVRBTElDID0ge1xuICAgIEE6IFwiXFx1RDgzNVxcdURDNjhcIixcbiAgICBCOiBcIlxcdUQ4MzVcXHVEQzY5XCIsXG4gICAgQzogXCJcXHVEODM1XFx1REM2QVwiLFxuICAgIEQ6IFwiXFx1RDgzNVxcdURDNkJcIixcbiAgICBFOiBcIlxcdUQ4MzVcXHVEQzZDXCIsXG4gICAgRjogXCJcXHVEODM1XFx1REM2RFwiLFxuICAgIEc6IFwiXFx1RDgzNVxcdURDNkVcIixcbiAgICBIOiBcIlxcdUQ4MzVcXHVEQzZGXCIsXG4gICAgSTogXCJcXHVEODM1XFx1REM3MFwiLFxuICAgIEo6IFwiXFx1RDgzNVxcdURDNzFcIixcbiAgICBLOiBcIlxcdUQ4MzVcXHVEQzcyXCIsXG4gICAgTDogXCJcXHVEODM1XFx1REM3M1wiLFxuICAgIE06IFwiXFx1RDgzNVxcdURDNzRcIixcbiAgICBOOiBcIlxcdUQ4MzVcXHVEQzc1XCIsXG4gICAgTzogXCJcXHVEODM1XFx1REM3NlwiLFxuICAgIFA6IFwiXFx1RDgzNVxcdURDNzdcIixcbiAgICBROiBcIlxcdUQ4MzVcXHVEQzc4XCIsXG4gICAgUjogXCJcXHVEODM1XFx1REM3OVwiLFxuICAgIFM6IFwiXFx1RDgzNVxcdURDN0FcIixcbiAgICBUOiBcIlxcdUQ4MzVcXHVEQzdCXCIsXG4gICAgVTogXCJcXHVEODM1XFx1REM3Q1wiLFxuICAgIFY6IFwiXFx1RDgzNVxcdURDN0RcIixcbiAgICBXOiBcIlxcdUQ4MzVcXHVEQzdFXCIsXG4gICAgWDogXCJcXHVEODM1XFx1REM3RlwiLFxuICAgIFk6IFwiXFx1RDgzNVxcdURDODBcIixcbiAgICBaOiBcIlxcdUQ4MzVcXHVEQzgxXCIsXG4gICAgYTogXCJcXHVEODM1XFx1REM4MlwiLFxuICAgIGI6IFwiXFx1RDgzNVxcdURDODNcIixcbiAgICBjOiBcIlxcdUQ4MzVcXHVEQzg0XCIsXG4gICAgZDogXCJcXHVEODM1XFx1REM4NVwiLFxuICAgIGU6IFwiXFx1RDgzNVxcdURDODZcIixcbiAgICBmOiBcIlxcdUQ4MzVcXHVEQzg3XCIsXG4gICAgZzogXCJcXHVEODM1XFx1REM4OFwiLFxuICAgIGg6IFwiXFx1RDgzNVxcdURDODlcIixcbiAgICBpOiBcIlxcdUQ4MzVcXHVEQzhBXCIsXG4gICAgajogXCJcXHVEODM1XFx1REM4QlwiLFxuICAgIGs6IFwiXFx1RDgzNVxcdURDOENcIixcbiAgICBsOiBcIlxcdUQ4MzVcXHVEQzhEXCIsXG4gICAgbTogXCJcXHVEODM1XFx1REM4RVwiLFxuICAgIG46IFwiXFx1RDgzNVxcdURDOEZcIixcbiAgICBvOiBcIlxcdUQ4MzVcXHVEQzkwXCIsXG4gICAgcDogXCJcXHVEODM1XFx1REM5MVwiLFxuICAgIHE6IFwiXFx1RDgzNVxcdURDOTJcIixcbiAgICByOiBcIlxcdUQ4MzVcXHVEQzkzXCIsXG4gICAgczogXCJcXHVEODM1XFx1REM5NFwiLFxuICAgIHQ6IFwiXFx1RDgzNVxcdURDOTVcIixcbiAgICB1OiBcIlxcdUQ4MzVcXHVEQzk2XCIsXG4gICAgdjogXCJcXHVEODM1XFx1REM5N1wiLFxuICAgIHc6IFwiXFx1RDgzNVxcdURDOThcIixcbiAgICB4OiBcIlxcdUQ4MzVcXHVEQzk5XCIsXG4gICAgeTogXCJcXHVEODM1XFx1REM5QVwiLFxuICAgIHo6IFwiXFx1RDgzNVxcdURDOUJcIlxufTtcbmV4cG9ydHMuTUFUSF9TQ1JJUFQgPSB7XG4gICAgQTogXCJcXHVEODM1XFx1REM5Q1wiLFxuICAgIEI6IFwiXFx1MjEyQ1wiLFxuICAgIEM6IFwiXFx1RDgzNVxcdURDOUVcIixcbiAgICBEOiBcIlxcdUQ4MzVcXHVEQzlGXCIsXG4gICAgRTogXCJcXHUyMTMwXCIsXG4gICAgRjogXCJcXHUyMTMxXCIsXG4gICAgRzogXCJcXHVEODM1XFx1RENBMlwiLFxuICAgIEg6IFwiXFx1MjEwQlwiLFxuICAgIEk6IFwiXFx1MjExMFwiLFxuICAgIEo6IFwiXFx1RDgzNVxcdURDQTVcIixcbiAgICBLOiBcIlxcdUQ4MzVcXHVEQ0E2XCIsXG4gICAgTDogXCJcXHUyMTEyXCIsXG4gICAgTTogXCJcXHUyMTMzXCIsXG4gICAgTjogXCJcXHVEODM1XFx1RENBOVwiLFxuICAgIE86IFwiXFx1RDgzNVxcdURDQUFcIixcbiAgICBQOiBcIlxcdUQ4MzVcXHVEQ0FCXCIsXG4gICAgUTogXCJcXHVEODM1XFx1RENBQ1wiLFxuICAgIFI6IFwiXFx1MjExQlwiLFxuICAgIFM6IFwiXFx1RDgzNVxcdURDQUVcIixcbiAgICBUOiBcIlxcdUQ4MzVcXHVEQ0FGXCIsXG4gICAgVTogXCJcXHVEODM1XFx1RENCMFwiLFxuICAgIFY6IFwiXFx1RDgzNVxcdURDQjFcIixcbiAgICBXOiBcIlxcdUQ4MzVcXHVEQ0IyXCIsXG4gICAgWDogXCJcXHVEODM1XFx1RENCM1wiLFxuICAgIFk6IFwiXFx1RDgzNVxcdURDQjRcIixcbiAgICBaOiBcIlxcdUQ4MzVcXHVEQ0I1XCIsXG4gICAgYTogXCJcXHVEODM1XFx1RENCNlwiLFxuICAgIGI6IFwiXFx1RDgzNVxcdURDQjdcIixcbiAgICBjOiBcIlxcdUQ4MzVcXHVEQ0I4XCIsXG4gICAgZDogXCJcXHVEODM1XFx1RENCOVwiLFxuICAgIGU6IFwiXFx1MjEyRlwiLFxuICAgIGY6IFwiXFx1RDgzNVxcdURDQkJcIixcbiAgICBnOiBcIlxcdTIxMEFcIixcbiAgICBoOiBcIlxcdUQ4MzVcXHVEQ0JEXCIsXG4gICAgaTogXCJcXHVEODM1XFx1RENCRVwiLFxuICAgIGo6IFwiXFx1RDgzNVxcdURDQkZcIixcbiAgICBrOiBcIlxcdUQ4MzVcXHVEQ0MwXCIsXG4gICAgbDogXCJcXHUyMTEzXCIsXG4gICAgbTogXCJcXHVEODM1XFx1RENDMlwiLFxuICAgIG46IFwiXFx1RDgzNVxcdURDQzNcIixcbiAgICBvOiBcIlxcdTIxMzRcIixcbiAgICBwOiBcIlxcdUQ4MzVcXHVEQ0M1XCIsXG4gICAgcTogXCJcXHVEODM1XFx1RENDNlwiLFxuICAgIHI6IFwiXFx1RDgzNVxcdURDQzdcIixcbiAgICBzOiBcIlxcdUQ4MzVcXHVEQ0M4XCIsXG4gICAgdDogXCJcXHVEODM1XFx1RENDOVwiLFxuICAgIHU6IFwiXFx1RDgzNVxcdURDQ0FcIixcbiAgICB2OiBcIlxcdUQ4MzVcXHVEQ0NCXCIsXG4gICAgdzogXCJcXHVEODM1XFx1RENDQ1wiLFxuICAgIHg6IFwiXFx1RDgzNVxcdURDQ0RcIixcbiAgICB5OiBcIlxcdUQ4MzVcXHVEQ0NFXCIsXG4gICAgejogXCJcXHVEODM1XFx1RENDRlwiXG59O1xuZXhwb3J0cy5NQVRIX0JPTERfU0NSSVBUID0ge1xuICAgIEE6IFwiXFx1RDgzNVxcdURDRDBcIixcbiAgICBCOiBcIlxcdUQ4MzVcXHVEQ0QxXCIsXG4gICAgQzogXCJcXHVEODM1XFx1RENEMlwiLFxuICAgIEQ6IFwiXFx1RDgzNVxcdURDRDNcIixcbiAgICBFOiBcIlxcdUQ4MzVcXHVEQ0Q0XCIsXG4gICAgRjogXCJcXHVEODM1XFx1RENENVwiLFxuICAgIEc6IFwiXFx1RDgzNVxcdURDRDZcIixcbiAgICBIOiBcIlxcdUQ4MzVcXHVEQ0Q3XCIsXG4gICAgSTogXCJcXHVEODM1XFx1RENEOFwiLFxuICAgIEo6IFwiXFx1RDgzNVxcdURDRDlcIixcbiAgICBLOiBcIlxcdUQ4MzVcXHVEQ0RBXCIsXG4gICAgTDogXCJcXHVEODM1XFx1RENEQlwiLFxuICAgIE06IFwiXFx1RDgzNVxcdURDRENcIixcbiAgICBOOiBcIlxcdUQ4MzVcXHVEQ0REXCIsXG4gICAgTzogXCJcXHVEODM1XFx1RENERVwiLFxuICAgIFA6IFwiXFx1RDgzNVxcdURDREZcIixcbiAgICBROiBcIlxcdUQ4MzVcXHVEQ0UwXCIsXG4gICAgUjogXCJcXHVEODM1XFx1RENFMVwiLFxuICAgIFM6IFwiXFx1RDgzNVxcdURDRTJcIixcbiAgICBUOiBcIlxcdUQ4MzVcXHVEQ0UzXCIsXG4gICAgVTogXCJcXHVEODM1XFx1RENFNFwiLFxuICAgIFY6IFwiXFx1RDgzNVxcdURDRTVcIixcbiAgICBXOiBcIlxcdUQ4MzVcXHVEQ0U2XCIsXG4gICAgWDogXCJcXHVEODM1XFx1RENFN1wiLFxuICAgIFk6IFwiXFx1RDgzNVxcdURDRThcIixcbiAgICBaOiBcIlxcdUQ4MzVcXHVEQ0U5XCIsXG4gICAgYTogXCJcXHVEODM1XFx1RENFQVwiLFxuICAgIGI6IFwiXFx1RDgzNVxcdURDRUJcIixcbiAgICBjOiBcIlxcdUQ4MzVcXHVEQ0VDXCIsXG4gICAgZDogXCJcXHVEODM1XFx1RENFRFwiLFxuICAgIGU6IFwiXFx1RDgzNVxcdURDRUVcIixcbiAgICBmOiBcIlxcdUQ4MzVcXHVEQ0VGXCIsXG4gICAgZzogXCJcXHVEODM1XFx1RENGMFwiLFxuICAgIGg6IFwiXFx1RDgzNVxcdURDRjFcIixcbiAgICBpOiBcIlxcdUQ4MzVcXHVEQ0YyXCIsXG4gICAgajogXCJcXHVEODM1XFx1RENGM1wiLFxuICAgIGs6IFwiXFx1RDgzNVxcdURDRjRcIixcbiAgICBsOiBcIlxcdUQ4MzVcXHVEQ0Y1XCIsXG4gICAgbTogXCJcXHVEODM1XFx1RENGNlwiLFxuICAgIG46IFwiXFx1RDgzNVxcdURDRjdcIixcbiAgICBvOiBcIlxcdUQ4MzVcXHVEQ0Y4XCIsXG4gICAgcDogXCJcXHVEODM1XFx1RENGOVwiLFxuICAgIHE6IFwiXFx1RDgzNVxcdURDRkFcIixcbiAgICByOiBcIlxcdUQ4MzVcXHVEQ0ZCXCIsXG4gICAgczogXCJcXHVEODM1XFx1RENGQ1wiLFxuICAgIHQ6IFwiXFx1RDgzNVxcdURDRkRcIixcbiAgICB1OiBcIlxcdUQ4MzVcXHVEQ0ZFXCIsXG4gICAgdjogXCJcXHVEODM1XFx1RENGRlwiLFxuICAgIHc6IFwiXFx1RDgzNVxcdUREMDBcIixcbiAgICB4OiBcIlxcdUQ4MzVcXHVERDAxXCIsXG4gICAgeTogXCJcXHVEODM1XFx1REQwMlwiLFxuICAgIHo6IFwiXFx1RDgzNVxcdUREMDNcIlxufTtcbmV4cG9ydHMuTUFUSF9GUkFLVFVSID0ge1xuICAgIEE6IFwiXFx1RDgzNVxcdUREMDRcIixcbiAgICBCOiBcIlxcdUQ4MzVcXHVERDA1XCIsXG4gICAgQzogXCJcXHUyMTJEXCIsXG4gICAgRDogXCJcXHVEODM1XFx1REQwN1wiLFxuICAgIEU6IFwiXFx1RDgzNVxcdUREMDhcIixcbiAgICBGOiBcIlxcdUQ4MzVcXHVERDA5XCIsXG4gICAgRzogXCJcXHVEODM1XFx1REQwQVwiLFxuICAgIEg6IFwiXFx1MjEwQ1wiLFxuICAgIEk6IFwiXFx1MjExMVwiLFxuICAgIEo6IFwiXFx1RDgzNVxcdUREMERcIixcbiAgICBLOiBcIlxcdUQ4MzVcXHVERDBFXCIsXG4gICAgTDogXCJcXHVEODM1XFx1REQwRlwiLFxuICAgIE06IFwiXFx1RDgzNVxcdUREMTBcIixcbiAgICBOOiBcIlxcdUQ4MzVcXHVERDExXCIsXG4gICAgTzogXCJcXHVEODM1XFx1REQxMlwiLFxuICAgIFA6IFwiXFx1RDgzNVxcdUREMTNcIixcbiAgICBROiBcIlxcdUQ4MzVcXHVERDE0XCIsXG4gICAgUjogXCJcXHUyMTFDXCIsXG4gICAgUzogXCJcXHVEODM1XFx1REQxNlwiLFxuICAgIFQ6IFwiXFx1RDgzNVxcdUREMTdcIixcbiAgICBVOiBcIlxcdUQ4MzVcXHVERDE4XCIsXG4gICAgVjogXCJcXHVEODM1XFx1REQxOVwiLFxuICAgIFc6IFwiXFx1RDgzNVxcdUREMUFcIixcbiAgICBYOiBcIlxcdUQ4MzVcXHVERDFCXCIsXG4gICAgWTogXCJcXHVEODM1XFx1REQxQ1wiLFxuICAgIFo6IFwiXFx1MjEyOFwiLFxuICAgIGE6IFwiXFx1RDgzNVxcdUREMUVcIixcbiAgICBiOiBcIlxcdUQ4MzVcXHVERDFGXCIsXG4gICAgYzogXCJcXHVEODM1XFx1REQyMFwiLFxuICAgIGQ6IFwiXFx1RDgzNVxcdUREMjFcIixcbiAgICBlOiBcIlxcdUQ4MzVcXHVERDIyXCIsXG4gICAgZjogXCJcXHVEODM1XFx1REQyM1wiLFxuICAgIGc6IFwiXFx1RDgzNVxcdUREMjRcIixcbiAgICBoOiBcIlxcdUQ4MzVcXHVERDI1XCIsXG4gICAgaTogXCJcXHVEODM1XFx1REQyNlwiLFxuICAgIGo6IFwiXFx1RDgzNVxcdUREMjdcIixcbiAgICBrOiBcIlxcdUQ4MzVcXHVERDI4XCIsXG4gICAgbDogXCJcXHVEODM1XFx1REQyOVwiLFxuICAgIG06IFwiXFx1RDgzNVxcdUREMkFcIixcbiAgICBuOiBcIlxcdUQ4MzVcXHVERDJCXCIsXG4gICAgbzogXCJcXHVEODM1XFx1REQyQ1wiLFxuICAgIHA6IFwiXFx1RDgzNVxcdUREMkRcIixcbiAgICBxOiBcIlxcdUQ4MzVcXHVERDJFXCIsXG4gICAgcjogXCJcXHVEODM1XFx1REQyRlwiLFxuICAgIHM6IFwiXFx1RDgzNVxcdUREMzBcIixcbiAgICB0OiBcIlxcdUQ4MzVcXHVERDMxXCIsXG4gICAgdTogXCJcXHVEODM1XFx1REQzMlwiLFxuICAgIHY6IFwiXFx1RDgzNVxcdUREMzNcIixcbiAgICB3OiBcIlxcdUQ4MzVcXHVERDM0XCIsXG4gICAgeDogXCJcXHVEODM1XFx1REQzNVwiLFxuICAgIHk6IFwiXFx1RDgzNVxcdUREMzZcIixcbiAgICB6OiBcIlxcdUQ4MzVcXHVERDM3XCJcbn07XG5leHBvcnRzLk1BVEhfQkIgPSB7XG4gICAgQTogXCJcXHVEODM1XFx1REQzOFwiLFxuICAgIEI6IFwiXFx1RDgzNVxcdUREMzlcIixcbiAgICBDOiBcIlxcdTIxMDJcIixcbiAgICBEOiBcIlxcdUQ4MzVcXHVERDNCXCIsXG4gICAgRTogXCJcXHVEODM1XFx1REQzQ1wiLFxuICAgIEY6IFwiXFx1RDgzNVxcdUREM0RcIixcbiAgICBHOiBcIlxcdUQ4MzVcXHVERDNFXCIsXG4gICAgSDogXCJcXHUyMTBEXCIsXG4gICAgSTogXCJcXHVEODM1XFx1REQ0MFwiLFxuICAgIEo6IFwiXFx1RDgzNVxcdURENDFcIixcbiAgICBLOiBcIlxcdUQ4MzVcXHVERDQyXCIsXG4gICAgTDogXCJcXHVEODM1XFx1REQ0M1wiLFxuICAgIE06IFwiXFx1RDgzNVxcdURENDRcIixcbiAgICBOOiBcIlxcdTIxMTVcIixcbiAgICBPOiBcIlxcdUQ4MzVcXHVERDQ2XCIsXG4gICAgUDogXCJcXHUyMTE5XCIsXG4gICAgUTogXCJcXHUyMTFBXCIsXG4gICAgUjogXCJcXHUyMTFEXCIsXG4gICAgUzogXCJcXHVEODM1XFx1REQ0QVwiLFxuICAgIFQ6IFwiXFx1RDgzNVxcdURENEJcIixcbiAgICBVOiBcIlxcdUQ4MzVcXHVERDRDXCIsXG4gICAgVjogXCJcXHVEODM1XFx1REQ0RFwiLFxuICAgIFc6IFwiXFx1RDgzNVxcdURENEVcIixcbiAgICBYOiBcIlxcdUQ4MzVcXHVERDRGXCIsXG4gICAgWTogXCJcXHVEODM1XFx1REQ1MFwiLFxuICAgIFo6IFwiXFx1MjEyNFwiLFxuICAgIGE6IFwiXFx1RDgzNVxcdURENTJcIixcbiAgICBiOiBcIlxcdUQ4MzVcXHVERDUzXCIsXG4gICAgYzogXCJcXHVEODM1XFx1REQ1NFwiLFxuICAgIGQ6IFwiXFx1RDgzNVxcdURENTVcIixcbiAgICBlOiBcIlxcdUQ4MzVcXHVERDU2XCIsXG4gICAgZjogXCJcXHVEODM1XFx1REQ1N1wiLFxuICAgIGc6IFwiXFx1RDgzNVxcdURENThcIixcbiAgICBoOiBcIlxcdUQ4MzVcXHVERDU5XCIsXG4gICAgaTogXCJcXHVEODM1XFx1REQ1QVwiLFxuICAgIGo6IFwiXFx1RDgzNVxcdURENUJcIixcbiAgICBrOiBcIlxcdUQ4MzVcXHVERDVDXCIsXG4gICAgbDogXCJcXHVEODM1XFx1REQ1RFwiLFxuICAgIG06IFwiXFx1RDgzNVxcdURENUVcIixcbiAgICBuOiBcIlxcdUQ4MzVcXHVERDVGXCIsXG4gICAgbzogXCJcXHVEODM1XFx1REQ2MFwiLFxuICAgIHA6IFwiXFx1RDgzNVxcdURENjFcIixcbiAgICBxOiBcIlxcdUQ4MzVcXHVERDYyXCIsXG4gICAgcjogXCJcXHVEODM1XFx1REQ2M1wiLFxuICAgIHM6IFwiXFx1RDgzNVxcdURENjRcIixcbiAgICB0OiBcIlxcdUQ4MzVcXHVERDY1XCIsXG4gICAgdTogXCJcXHVEODM1XFx1REQ2NlwiLFxuICAgIHY6IFwiXFx1RDgzNVxcdURENjdcIixcbiAgICB3OiBcIlxcdUQ4MzVcXHVERDY4XCIsXG4gICAgeDogXCJcXHVEODM1XFx1REQ2OVwiLFxuICAgIHk6IFwiXFx1RDgzNVxcdURENkFcIixcbiAgICB6OiBcIlxcdUQ4MzVcXHVERDZCXCJcbn07XG5leHBvcnRzLk1BVEhfQk9MRF9GUkFLVFVSID0ge1xuICAgIEE6IFwiXFx1RDgzNVxcdURENkNcIixcbiAgICBCOiBcIlxcdUQ4MzVcXHVERDZEXCIsXG4gICAgQzogXCJcXHVEODM1XFx1REQ2RVwiLFxuICAgIEQ6IFwiXFx1RDgzNVxcdURENkZcIixcbiAgICBFOiBcIlxcdUQ4MzVcXHVERDcwXCIsXG4gICAgRjogXCJcXHVEODM1XFx1REQ3MVwiLFxuICAgIEc6IFwiXFx1RDgzNVxcdURENzJcIixcbiAgICBIOiBcIlxcdUQ4MzVcXHVERDczXCIsXG4gICAgSTogXCJcXHVEODM1XFx1REQ3NFwiLFxuICAgIEo6IFwiXFx1RDgzNVxcdURENzVcIixcbiAgICBLOiBcIlxcdUQ4MzVcXHVERDc2XCIsXG4gICAgTDogXCJcXHVEODM1XFx1REQ3N1wiLFxuICAgIE06IFwiXFx1RDgzNVxcdURENzhcIixcbiAgICBOOiBcIlxcdUQ4MzVcXHVERDc5XCIsXG4gICAgTzogXCJcXHVEODM1XFx1REQ3QVwiLFxuICAgIFA6IFwiXFx1RDgzNVxcdUREN0JcIixcbiAgICBROiBcIlxcdUQ4MzVcXHVERDdDXCIsXG4gICAgUjogXCJcXHVEODM1XFx1REQ3RFwiLFxuICAgIFM6IFwiXFx1RDgzNVxcdUREN0VcIixcbiAgICBUOiBcIlxcdUQ4MzVcXHVERDdGXCIsXG4gICAgVTogXCJcXHVEODM1XFx1REQ4MFwiLFxuICAgIFY6IFwiXFx1RDgzNVxcdUREODFcIixcbiAgICBXOiBcIlxcdUQ4MzVcXHVERDgyXCIsXG4gICAgWDogXCJcXHVEODM1XFx1REQ4M1wiLFxuICAgIFk6IFwiXFx1RDgzNVxcdUREODRcIixcbiAgICBaOiBcIlxcdUQ4MzVcXHVERDg1XCIsXG4gICAgYTogXCJcXHVEODM1XFx1REQ4NlwiLFxuICAgIGI6IFwiXFx1RDgzNVxcdUREODdcIixcbiAgICBjOiBcIlxcdUQ4MzVcXHVERDg4XCIsXG4gICAgZDogXCJcXHVEODM1XFx1REQ4OVwiLFxuICAgIGU6IFwiXFx1RDgzNVxcdUREOEFcIixcbiAgICBmOiBcIlxcdUQ4MzVcXHVERDhCXCIsXG4gICAgZzogXCJcXHVEODM1XFx1REQ4Q1wiLFxuICAgIGg6IFwiXFx1RDgzNVxcdUREOERcIixcbiAgICBpOiBcIlxcdUQ4MzVcXHVERDhFXCIsXG4gICAgajogXCJcXHVEODM1XFx1REQ4RlwiLFxuICAgIGs6IFwiXFx1RDgzNVxcdUREOTBcIixcbiAgICBsOiBcIlxcdUQ4MzVcXHVERDkxXCIsXG4gICAgbTogXCJcXHVEODM1XFx1REQ5MlwiLFxuICAgIG46IFwiXFx1RDgzNVxcdUREOTNcIixcbiAgICBvOiBcIlxcdUQ4MzVcXHVERDk0XCIsXG4gICAgcDogXCJcXHVEODM1XFx1REQ5NVwiLFxuICAgIHE6IFwiXFx1RDgzNVxcdUREOTZcIixcbiAgICByOiBcIlxcdUQ4MzVcXHVERDk3XCIsXG4gICAgczogXCJcXHVEODM1XFx1REQ5OFwiLFxuICAgIHQ6IFwiXFx1RDgzNVxcdUREOTlcIixcbiAgICB1OiBcIlxcdUQ4MzVcXHVERDlBXCIsXG4gICAgdjogXCJcXHVEODM1XFx1REQ5QlwiLFxuICAgIHc6IFwiXFx1RDgzNVxcdUREOUNcIixcbiAgICB4OiBcIlxcdUQ4MzVcXHVERDlEXCIsXG4gICAgeTogXCJcXHVEODM1XFx1REQ5RVwiLFxuICAgIHo6IFwiXFx1RDgzNVxcdUREOUZcIlxufTtcbmV4cG9ydHMuTUFUSF9TQU5TX1NFUklGID0ge1xuICAgIEE6IFwiXFx1RDgzNVxcdUREQTBcIixcbiAgICBCOiBcIlxcdUQ4MzVcXHVEREExXCIsXG4gICAgQzogXCJcXHVEODM1XFx1RERBMlwiLFxuICAgIEQ6IFwiXFx1RDgzNVxcdUREQTNcIixcbiAgICBFOiBcIlxcdUQ4MzVcXHVEREE0XCIsXG4gICAgRjogXCJcXHVEODM1XFx1RERBNVwiLFxuICAgIEc6IFwiXFx1RDgzNVxcdUREQTZcIixcbiAgICBIOiBcIlxcdUQ4MzVcXHVEREE3XCIsXG4gICAgSTogXCJcXHVEODM1XFx1RERBOFwiLFxuICAgIEo6IFwiXFx1RDgzNVxcdUREQTlcIixcbiAgICBLOiBcIlxcdUQ4MzVcXHVEREFBXCIsXG4gICAgTDogXCJcXHVEODM1XFx1RERBQlwiLFxuICAgIE06IFwiXFx1RDgzNVxcdUREQUNcIixcbiAgICBOOiBcIlxcdUQ4MzVcXHVEREFEXCIsXG4gICAgTzogXCJcXHVEODM1XFx1RERBRVwiLFxuICAgIFA6IFwiXFx1RDgzNVxcdUREQUZcIixcbiAgICBROiBcIlxcdUQ4MzVcXHVEREIwXCIsXG4gICAgUjogXCJcXHVEODM1XFx1RERCMVwiLFxuICAgIFM6IFwiXFx1RDgzNVxcdUREQjJcIixcbiAgICBUOiBcIlxcdUQ4MzVcXHVEREIzXCIsXG4gICAgVTogXCJcXHVEODM1XFx1RERCNFwiLFxuICAgIFY6IFwiXFx1RDgzNVxcdUREQjVcIixcbiAgICBXOiBcIlxcdUQ4MzVcXHVEREI2XCIsXG4gICAgWDogXCJcXHVEODM1XFx1RERCN1wiLFxuICAgIFk6IFwiXFx1RDgzNVxcdUREQjhcIixcbiAgICBaOiBcIlxcdUQ4MzVcXHVEREI5XCIsXG4gICAgYTogXCJcXHVEODM1XFx1RERCQVwiLFxuICAgIGI6IFwiXFx1RDgzNVxcdUREQkJcIixcbiAgICBjOiBcIlxcdUQ4MzVcXHVEREJDXCIsXG4gICAgZDogXCJcXHVEODM1XFx1RERCRFwiLFxuICAgIGU6IFwiXFx1RDgzNVxcdUREQkVcIixcbiAgICBmOiBcIlxcdUQ4MzVcXHVEREJGXCIsXG4gICAgZzogXCJcXHVEODM1XFx1RERDMFwiLFxuICAgIGg6IFwiXFx1RDgzNVxcdUREQzFcIixcbiAgICBpOiBcIlxcdUQ4MzVcXHVEREMyXCIsXG4gICAgajogXCJcXHVEODM1XFx1RERDM1wiLFxuICAgIGs6IFwiXFx1RDgzNVxcdUREQzRcIixcbiAgICBsOiBcIlxcdUQ4MzVcXHVEREM1XCIsXG4gICAgbTogXCJcXHVEODM1XFx1RERDNlwiLFxuICAgIG46IFwiXFx1RDgzNVxcdUREQzdcIixcbiAgICBvOiBcIlxcdUQ4MzVcXHVEREM4XCIsXG4gICAgcDogXCJcXHVEODM1XFx1RERDOVwiLFxuICAgIHE6IFwiXFx1RDgzNVxcdUREQ0FcIixcbiAgICByOiBcIlxcdUQ4MzVcXHVERENCXCIsXG4gICAgczogXCJcXHVEODM1XFx1RERDQ1wiLFxuICAgIHQ6IFwiXFx1RDgzNVxcdUREQ0RcIixcbiAgICB1OiBcIlxcdUQ4MzVcXHVERENFXCIsXG4gICAgdjogXCJcXHVEODM1XFx1RERDRlwiLFxuICAgIHc6IFwiXFx1RDgzNVxcdURERDBcIixcbiAgICB4OiBcIlxcdUQ4MzVcXHVEREQxXCIsXG4gICAgeTogXCJcXHVEODM1XFx1REREMlwiLFxuICAgIHo6IFwiXFx1RDgzNVxcdURERDNcIlxufTtcbmV4cG9ydHMuTUFUSF9CT0xEX1NBTlNfU0VSSUYgPSB7XG4gICAgQTogXCJcXHVEODM1XFx1RERENFwiLFxuICAgIEI6IFwiXFx1RDgzNVxcdURERDVcIixcbiAgICBDOiBcIlxcdUQ4MzVcXHVEREQ2XCIsXG4gICAgRDogXCJcXHVEODM1XFx1REREN1wiLFxuICAgIEU6IFwiXFx1RDgzNVxcdURERDhcIixcbiAgICBGOiBcIlxcdUQ4MzVcXHVEREQ5XCIsXG4gICAgRzogXCJcXHVEODM1XFx1REREQVwiLFxuICAgIEg6IFwiXFx1RDgzNVxcdUREREJcIixcbiAgICBJOiBcIlxcdUQ4MzVcXHVERERDXCIsXG4gICAgSjogXCJcXHVEODM1XFx1RERERFwiLFxuICAgIEs6IFwiXFx1RDgzNVxcdUREREVcIixcbiAgICBMOiBcIlxcdUQ4MzVcXHVERERGXCIsXG4gICAgTTogXCJcXHVEODM1XFx1RERFMFwiLFxuICAgIE46IFwiXFx1RDgzNVxcdURERTFcIixcbiAgICBPOiBcIlxcdUQ4MzVcXHVEREUyXCIsXG4gICAgUDogXCJcXHVEODM1XFx1RERFM1wiLFxuICAgIFE6IFwiXFx1RDgzNVxcdURERTRcIixcbiAgICBSOiBcIlxcdUQ4MzVcXHVEREU1XCIsXG4gICAgUzogXCJcXHVEODM1XFx1RERFNlwiLFxuICAgIFQ6IFwiXFx1RDgzNVxcdURERTdcIixcbiAgICBVOiBcIlxcdUQ4MzVcXHVEREU4XCIsXG4gICAgVjogXCJcXHVEODM1XFx1RERFOVwiLFxuICAgIFc6IFwiXFx1RDgzNVxcdURERUFcIixcbiAgICBYOiBcIlxcdUQ4MzVcXHVEREVCXCIsXG4gICAgWTogXCJcXHVEODM1XFx1RERFQ1wiLFxuICAgIFo6IFwiXFx1RDgzNVxcdURERURcIixcbiAgICBhOiBcIlxcdUQ4MzVcXHVEREVFXCIsXG4gICAgYjogXCJcXHVEODM1XFx1RERFRlwiLFxuICAgIGM6IFwiXFx1RDgzNVxcdURERjBcIixcbiAgICBkOiBcIlxcdUQ4MzVcXHVEREYxXCIsXG4gICAgZTogXCJcXHVEODM1XFx1RERGMlwiLFxuICAgIGY6IFwiXFx1RDgzNVxcdURERjNcIixcbiAgICBnOiBcIlxcdUQ4MzVcXHVEREY0XCIsXG4gICAgaDogXCJcXHVEODM1XFx1RERGNVwiLFxuICAgIGk6IFwiXFx1RDgzNVxcdURERjZcIixcbiAgICBqOiBcIlxcdUQ4MzVcXHVEREY3XCIsXG4gICAgazogXCJcXHVEODM1XFx1RERGOFwiLFxuICAgIGw6IFwiXFx1RDgzNVxcdURERjlcIixcbiAgICBtOiBcIlxcdUQ4MzVcXHVEREZBXCIsXG4gICAgbjogXCJcXHVEODM1XFx1RERGQlwiLFxuICAgIG86IFwiXFx1RDgzNVxcdURERkNcIixcbiAgICBwOiBcIlxcdUQ4MzVcXHVEREZEXCIsXG4gICAgcTogXCJcXHVEODM1XFx1RERGRVwiLFxuICAgIHI6IFwiXFx1RDgzNVxcdURERkZcIixcbiAgICBzOiBcIlxcdUQ4MzVcXHVERTAwXCIsXG4gICAgdDogXCJcXHVEODM1XFx1REUwMVwiLFxuICAgIHU6IFwiXFx1RDgzNVxcdURFMDJcIixcbiAgICB2OiBcIlxcdUQ4MzVcXHVERTAzXCIsXG4gICAgdzogXCJcXHVEODM1XFx1REUwNFwiLFxuICAgIHg6IFwiXFx1RDgzNVxcdURFMDVcIixcbiAgICB5OiBcIlxcdUQ4MzVcXHVERTA2XCIsXG4gICAgejogXCJcXHVEODM1XFx1REUwN1wiXG59O1xuZXhwb3J0cy5NQVRIX0lUQUxJQ19TQU5TX1NFUklGID0ge1xuICAgIEE6IFwiXFx1RDgzNVxcdURFMDhcIixcbiAgICBCOiBcIlxcdUQ4MzVcXHVERTA5XCIsXG4gICAgQzogXCJcXHVEODM1XFx1REUwQVwiLFxuICAgIEQ6IFwiXFx1RDgzNVxcdURFMEJcIixcbiAgICBFOiBcIlxcdUQ4MzVcXHVERTBDXCIsXG4gICAgRjogXCJcXHVEODM1XFx1REUwRFwiLFxuICAgIEc6IFwiXFx1RDgzNVxcdURFMEVcIixcbiAgICBIOiBcIlxcdUQ4MzVcXHVERTBGXCIsXG4gICAgSTogXCJcXHVEODM1XFx1REUxMFwiLFxuICAgIEo6IFwiXFx1RDgzNVxcdURFMTFcIixcbiAgICBLOiBcIlxcdUQ4MzVcXHVERTEyXCIsXG4gICAgTDogXCJcXHVEODM1XFx1REUxM1wiLFxuICAgIE06IFwiXFx1RDgzNVxcdURFMTRcIixcbiAgICBOOiBcIlxcdUQ4MzVcXHVERTE1XCIsXG4gICAgTzogXCJcXHVEODM1XFx1REUxNlwiLFxuICAgIFA6IFwiXFx1RDgzNVxcdURFMTdcIixcbiAgICBROiBcIlxcdUQ4MzVcXHVERTE4XCIsXG4gICAgUjogXCJcXHVEODM1XFx1REUxOVwiLFxuICAgIFM6IFwiXFx1RDgzNVxcdURFMUFcIixcbiAgICBUOiBcIlxcdUQ4MzVcXHVERTFCXCIsXG4gICAgVTogXCJcXHVEODM1XFx1REUxQ1wiLFxuICAgIFY6IFwiXFx1RDgzNVxcdURFMURcIixcbiAgICBXOiBcIlxcdUQ4MzVcXHVERTFFXCIsXG4gICAgWDogXCJcXHVEODM1XFx1REUxRlwiLFxuICAgIFk6IFwiXFx1RDgzNVxcdURFMjBcIixcbiAgICBaOiBcIlxcdUQ4MzVcXHVERTIxXCIsXG4gICAgYTogXCJcXHVEODM1XFx1REUyMlwiLFxuICAgIGI6IFwiXFx1RDgzNVxcdURFMjNcIixcbiAgICBjOiBcIlxcdUQ4MzVcXHVERTI0XCIsXG4gICAgZDogXCJcXHVEODM1XFx1REUyNVwiLFxuICAgIGU6IFwiXFx1RDgzNVxcdURFMjZcIixcbiAgICBmOiBcIlxcdUQ4MzVcXHVERTI3XCIsXG4gICAgZzogXCJcXHVEODM1XFx1REUyOFwiLFxuICAgIGg6IFwiXFx1RDgzNVxcdURFMjlcIixcbiAgICBpOiBcIlxcdUQ4MzVcXHVERTJBXCIsXG4gICAgajogXCJcXHVEODM1XFx1REUyQlwiLFxuICAgIGs6IFwiXFx1RDgzNVxcdURFMkNcIixcbiAgICBsOiBcIlxcdUQ4MzVcXHVERTJEXCIsXG4gICAgbTogXCJcXHVEODM1XFx1REUyRVwiLFxuICAgIG46IFwiXFx1RDgzNVxcdURFMkZcIixcbiAgICBvOiBcIlxcdUQ4MzVcXHVERTMwXCIsXG4gICAgcDogXCJcXHVEODM1XFx1REUzMVwiLFxuICAgIHE6IFwiXFx1RDgzNVxcdURFMzJcIixcbiAgICByOiBcIlxcdUQ4MzVcXHVERTMzXCIsXG4gICAgczogXCJcXHVEODM1XFx1REUzNFwiLFxuICAgIHQ6IFwiXFx1RDgzNVxcdURFMzVcIixcbiAgICB1OiBcIlxcdUQ4MzVcXHVERTM2XCIsXG4gICAgdjogXCJcXHVEODM1XFx1REUzN1wiLFxuICAgIHc6IFwiXFx1RDgzNVxcdURFMzhcIixcbiAgICB4OiBcIlxcdUQ4MzVcXHVERTM5XCIsXG4gICAgeTogXCJcXHVEODM1XFx1REUzQVwiLFxuICAgIHo6IFwiXFx1RDgzNVxcdURFM0JcIlxufTtcbmV4cG9ydHMuTUFUSF9CT0xEX0lUQUxJQ19TQU5TX1NFUklGID0ge1xuICAgIEE6IFwiXFx1RDgzNVxcdURFM0NcIixcbiAgICBCOiBcIlxcdUQ4MzVcXHVERTNEXCIsXG4gICAgQzogXCJcXHVEODM1XFx1REUzRVwiLFxuICAgIEQ6IFwiXFx1RDgzNVxcdURFM0ZcIixcbiAgICBFOiBcIlxcdUQ4MzVcXHVERTQwXCIsXG4gICAgRjogXCJcXHVEODM1XFx1REU0MVwiLFxuICAgIEc6IFwiXFx1RDgzNVxcdURFNDJcIixcbiAgICBIOiBcIlxcdUQ4MzVcXHVERTQzXCIsXG4gICAgSTogXCJcXHVEODM1XFx1REU0NFwiLFxuICAgIEo6IFwiXFx1RDgzNVxcdURFNDVcIixcbiAgICBLOiBcIlxcdUQ4MzVcXHVERTQ2XCIsXG4gICAgTDogXCJcXHVEODM1XFx1REU0N1wiLFxuICAgIE06IFwiXFx1RDgzNVxcdURFNDhcIixcbiAgICBOOiBcIlxcdUQ4MzVcXHVERTQ5XCIsXG4gICAgTzogXCJcXHVEODM1XFx1REU0QVwiLFxuICAgIFA6IFwiXFx1RDgzNVxcdURFNEJcIixcbiAgICBROiBcIlxcdUQ4MzVcXHVERTRDXCIsXG4gICAgUjogXCJcXHVEODM1XFx1REU0RFwiLFxuICAgIFM6IFwiXFx1RDgzNVxcdURFNEVcIixcbiAgICBUOiBcIlxcdUQ4MzVcXHVERTRGXCIsXG4gICAgVTogXCJcXHVEODM1XFx1REU1MFwiLFxuICAgIFY6IFwiXFx1RDgzNVxcdURFNTFcIixcbiAgICBXOiBcIlxcdUQ4MzVcXHVERTUyXCIsXG4gICAgWDogXCJcXHVEODM1XFx1REU1M1wiLFxuICAgIFk6IFwiXFx1RDgzNVxcdURFNTRcIixcbiAgICBaOiBcIlxcdUQ4MzVcXHVERTU1XCIsXG4gICAgYTogXCJcXHVEODM1XFx1REU1NlwiLFxuICAgIGI6IFwiXFx1RDgzNVxcdURFNTdcIixcbiAgICBjOiBcIlxcdUQ4MzVcXHVERTU4XCIsXG4gICAgZDogXCJcXHVEODM1XFx1REU1OVwiLFxuICAgIGU6IFwiXFx1RDgzNVxcdURFNUFcIixcbiAgICBmOiBcIlxcdUQ4MzVcXHVERTVCXCIsXG4gICAgZzogXCJcXHVEODM1XFx1REU1Q1wiLFxuICAgIGg6IFwiXFx1RDgzNVxcdURFNURcIixcbiAgICBpOiBcIlxcdUQ4MzVcXHVERTVFXCIsXG4gICAgajogXCJcXHVEODM1XFx1REU1RlwiLFxuICAgIGs6IFwiXFx1RDgzNVxcdURFNjBcIixcbiAgICBsOiBcIlxcdUQ4MzVcXHVERTYxXCIsXG4gICAgbTogXCJcXHVEODM1XFx1REU2MlwiLFxuICAgIG46IFwiXFx1RDgzNVxcdURFNjNcIixcbiAgICBvOiBcIlxcdUQ4MzVcXHVERTY0XCIsXG4gICAgcDogXCJcXHVEODM1XFx1REU2NVwiLFxuICAgIHE6IFwiXFx1RDgzNVxcdURFNjZcIixcbiAgICByOiBcIlxcdUQ4MzVcXHVERTY3XCIsXG4gICAgczogXCJcXHVEODM1XFx1REU2OFwiLFxuICAgIHQ6IFwiXFx1RDgzNVxcdURFNjlcIixcbiAgICB1OiBcIlxcdUQ4MzVcXHVERTZBXCIsXG4gICAgdjogXCJcXHVEODM1XFx1REU2QlwiLFxuICAgIHc6IFwiXFx1RDgzNVxcdURFNkNcIixcbiAgICB4OiBcIlxcdUQ4MzVcXHVERTZEXCIsXG4gICAgeTogXCJcXHVEODM1XFx1REU2RVwiLFxuICAgIHo6IFwiXFx1RDgzNVxcdURFNkZcIlxufTtcbmV4cG9ydHMuTUFUSF9UVCA9IHtcbiAgICBBOiBcIlxcdUQ4MzVcXHVERTcwXCIsXG4gICAgQjogXCJcXHVEODM1XFx1REU3MVwiLFxuICAgIEM6IFwiXFx1RDgzNVxcdURFNzJcIixcbiAgICBEOiBcIlxcdUQ4MzVcXHVERTczXCIsXG4gICAgRTogXCJcXHVEODM1XFx1REU3NFwiLFxuICAgIEY6IFwiXFx1RDgzNVxcdURFNzVcIixcbiAgICBHOiBcIlxcdUQ4MzVcXHVERTc2XCIsXG4gICAgSDogXCJcXHVEODM1XFx1REU3N1wiLFxuICAgIEk6IFwiXFx1RDgzNVxcdURFNzhcIixcbiAgICBKOiBcIlxcdUQ4MzVcXHVERTc5XCIsXG4gICAgSzogXCJcXHVEODM1XFx1REU3QVwiLFxuICAgIEw6IFwiXFx1RDgzNVxcdURFN0JcIixcbiAgICBNOiBcIlxcdUQ4MzVcXHVERTdDXCIsXG4gICAgTjogXCJcXHVEODM1XFx1REU3RFwiLFxuICAgIE86IFwiXFx1RDgzNVxcdURFN0VcIixcbiAgICBQOiBcIlxcdUQ4MzVcXHVERTdGXCIsXG4gICAgUTogXCJcXHVEODM1XFx1REU4MFwiLFxuICAgIFI6IFwiXFx1RDgzNVxcdURFODFcIixcbiAgICBTOiBcIlxcdUQ4MzVcXHVERTgyXCIsXG4gICAgVDogXCJcXHVEODM1XFx1REU4M1wiLFxuICAgIFU6IFwiXFx1RDgzNVxcdURFODRcIixcbiAgICBWOiBcIlxcdUQ4MzVcXHVERTg1XCIsXG4gICAgVzogXCJcXHVEODM1XFx1REU4NlwiLFxuICAgIFg6IFwiXFx1RDgzNVxcdURFODdcIixcbiAgICBZOiBcIlxcdUQ4MzVcXHVERTg4XCIsXG4gICAgWjogXCJcXHVEODM1XFx1REU4OVwiLFxuICAgIGE6IFwiXFx1RDgzNVxcdURFOEFcIixcbiAgICBiOiBcIlxcdUQ4MzVcXHVERThCXCIsXG4gICAgYzogXCJcXHVEODM1XFx1REU4Q1wiLFxuICAgIGQ6IFwiXFx1RDgzNVxcdURFOERcIixcbiAgICBlOiBcIlxcdUQ4MzVcXHVERThFXCIsXG4gICAgZjogXCJcXHVEODM1XFx1REU4RlwiLFxuICAgIGc6IFwiXFx1RDgzNVxcdURFOTBcIixcbiAgICBoOiBcIlxcdUQ4MzVcXHVERTkxXCIsXG4gICAgaTogXCJcXHVEODM1XFx1REU5MlwiLFxuICAgIGo6IFwiXFx1RDgzNVxcdURFOTNcIixcbiAgICBrOiBcIlxcdUQ4MzVcXHVERTk0XCIsXG4gICAgbDogXCJcXHVEODM1XFx1REU5NVwiLFxuICAgIG06IFwiXFx1RDgzNVxcdURFOTZcIixcbiAgICBuOiBcIlxcdUQ4MzVcXHVERTk3XCIsXG4gICAgbzogXCJcXHVEODM1XFx1REU5OFwiLFxuICAgIHA6IFwiXFx1RDgzNVxcdURFOTlcIixcbiAgICBxOiBcIlxcdUQ4MzVcXHVERTlBXCIsXG4gICAgcjogXCJcXHVEODM1XFx1REU5QlwiLFxuICAgIHM6IFwiXFx1RDgzNVxcdURFOUNcIixcbiAgICB0OiBcIlxcdUQ4MzVcXHVERTlEXCIsXG4gICAgdTogXCJcXHVEODM1XFx1REU5RVwiLFxuICAgIHY6IFwiXFx1RDgzNVxcdURFOUZcIixcbiAgICB3OiBcIlxcdUQ4MzVcXHVERUEwXCIsXG4gICAgeDogXCJcXHVEODM1XFx1REVBMVwiLFxuICAgIHk6IFwiXFx1RDgzNVxcdURFQTJcIixcbiAgICB6OiBcIlxcdUQ4MzVcXHVERUEzXCJcbn07XG4vLyB0b2RvOiBncmVla1xuLy8gdG9kbzogZGlnaXRzXG4vLyA8aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW5pY29kZV9zdWJzY3JpcHRzX2FuZF9zdXBlcnNjcmlwdHM+XG5leHBvcnRzLlNVUEVSU0NSSVBUUyA9IHtcbiAgICBcIjBcIjogXCJcXHUyMDcwXCIsXG4gICAgXCIxXCI6IFwiXFx1MDBCOVwiLFxuICAgIFwiMlwiOiBcIlxcdTAwQjJcIixcbiAgICBcIjNcIjogXCJcXHUwMEIzXCIsXG4gICAgXCI0XCI6IFwiXFx1MjA3NFwiLFxuICAgIFwiNVwiOiBcIlxcdTIwNzVcIixcbiAgICBcIjZcIjogXCJcXHUyMDc2XCIsXG4gICAgXCI3XCI6IFwiXFx1MjA3N1wiLFxuICAgIFwiOFwiOiBcIlxcdTIwNzhcIixcbiAgICBcIjlcIjogXCJcXHUyMDc5XCIsXG4gICAgXCIrXCI6IFwiXFx1MjA3QVwiLFxuICAgIFwiLVwiOiBcIlxcdTIwN0JcIixcbiAgICBcIj1cIjogXCJcXHUyMDdDXCIsXG4gICAgXCIoXCI6IFwiXFx1MjA3RFwiLFxuICAgIFwiKVwiOiBcIlxcdTIwN0VcIixcbiAgICBBOiBcIlxcdTFEMkNcIixcbiAgICBCOiBcIlxcdTFEMkVcIixcbiAgICBDOiBcIlxcdUE3RjJcIixcbiAgICBEOiBcIlxcdTFEMzBcIixcbiAgICBFOiBcIlxcdTFEMzFcIixcbiAgICBGOiBcIlxcdUE3RjNcIixcbiAgICBHOiBcIlxcdTFEMzNcIixcbiAgICBIOiBcIlxcdTFEMzRcIixcbiAgICBJOiBcIlxcdTFEMzVcIixcbiAgICBKOiBcIlxcdTFEMzZcIixcbiAgICBLOiBcIlxcdTFEMzdcIixcbiAgICBMOiBcIlxcdTFEMzhcIixcbiAgICBNOiBcIlxcdTFEMzlcIixcbiAgICBOOiBcIlxcdTFEM0FcIixcbiAgICBPOiBcIlxcdTFEM0NcIixcbiAgICBQOiBcIlxcdTFEM0VcIixcbiAgICBROiBcIlxcdUE3RjRcIixcbiAgICBSOiBcIlxcdTFEM0ZcIixcbiAgICBUOiBcIlxcdTFENDBcIixcbiAgICBVOiBcIlxcdTFENDFcIixcbiAgICBWOiBcIlxcdTJDN0RcIixcbiAgICBXOiBcIlxcdTFENDJcIixcbiAgICBhOiBcIlxcdTFENDNcIixcbiAgICBiOiBcIlxcdTFENDdcIixcbiAgICBjOiBcIlxcdTFEOUNcIixcbiAgICBkOiBcIlxcdTFENDhcIixcbiAgICBlOiBcIlxcdTFENDlcIixcbiAgICBmOiBcIlxcdTFEQTBcIixcbiAgICBnOiBcIlxcdTFENERcIixcbiAgICBoOiBcIlxcdTAyQjBcIixcbiAgICBpOiBcIlxcdTIwNzFcIixcbiAgICBqOiBcIlxcdTAyQjJcIixcbiAgICBrOiBcIlxcdTFENEZcIixcbiAgICBsOiBcIlxcdTAyRTFcIixcbiAgICBtOiBcIlxcdTFENTBcIixcbiAgICBuOiBcIlxcdTIwN0ZcIixcbiAgICBvOiBcIlxcdTFENTJcIixcbiAgICBwOiBcIlxcdTFENTZcIixcbiAgICBxOiBcIlxcdUQ4MDFcXHVERkE1XCIsXG4gICAgcjogXCJcXHUwMkIzXCIsXG4gICAgczogXCJcXHUwMkUyXCIsXG4gICAgdDogXCJcXHUxRDU3XCIsXG4gICAgdTogXCJcXHUxRDU4XCIsXG4gICAgdjogXCJcXHUxRDVCXCIsXG4gICAgdzogXCJcXHUwMkI3XCIsXG4gICAgeDogXCJcXHUwMkUzXCIsXG4gICAgeTogXCJcXHUwMkI4XCIsXG4gICAgejogXCJcXHUxREJCXCJcbn07XG5leHBvcnRzLlNVQlNDUklQVFMgPSB7XG4gICAgXCIwXCI6IFwiXFx1MjA4MFwiLFxuICAgIFwiMVwiOiBcIlxcdTIwODFcIixcbiAgICBcIjJcIjogXCJcXHUyMDgyXCIsXG4gICAgXCIzXCI6IFwiXFx1MjA4M1wiLFxuICAgIFwiNFwiOiBcIlxcdTIwODRcIixcbiAgICBcIjVcIjogXCJcXHUyMDg1XCIsXG4gICAgXCI2XCI6IFwiXFx1MjA4NlwiLFxuICAgIFwiN1wiOiBcIlxcdTIwODdcIixcbiAgICBcIjhcIjogXCJcXHUyMDg4XCIsXG4gICAgXCI5XCI6IFwiXFx1MjA4OVwiLFxuICAgIFwiK1wiOiBcIlxcdTIwOEFcIixcbiAgICBcIi1cIjogXCJcXHUyMDhCXCIsXG4gICAgXCI9XCI6IFwiXFx1MjA4Q1wiLFxuICAgIFwiKFwiOiBcIlxcdTIwOERcIixcbiAgICBcIilcIjogXCJcXHUyMDhFXCIsXG4gICAgYTogXCJcXHUyMDkwXCIsXG4gICAgZTogXCJcXHUyMDkxXCIsXG4gICAgaDogXCJcXHUyMDk1XCIsXG4gICAgaTogXCJcXHUxRDYyXCIsXG4gICAgajogXCJcXHUyQzdDXCIsXG4gICAgazogXCJcXHUyMDk2XCIsXG4gICAgbDogXCJcXHUyMDk3XCIsXG4gICAgbTogXCJcXHUyMDk4XCIsXG4gICAgbjogXCJcXHUyMDk5XCIsXG4gICAgbzogXCJcXHUyMDkyXCIsXG4gICAgcDogXCJcXHUyMDlBXCIsXG4gICAgcjogXCJcXHUxRDYzXCIsXG4gICAgczogXCJcXHUyMDlCXCIsXG4gICAgdDogXCJcXHUyMDlDXCIsXG4gICAgdTogXCJcXHUxRDY0XCIsXG4gICAgdjogXCJcXHUxRDY1XCIsXG4gICAgeDogXCJcXHUyMDkzXCJcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX3JlYWQgPSAodGhpcyAmJiB0aGlzLl9fcmVhZCkgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gICAgaWYgKCFtKSByZXR1cm4gbztcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgICB0cnkge1xuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgICB9XG4gICAgcmV0dXJuIGFyO1xufTtcbnZhciBfX3NwcmVhZEFycmF5ID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20sIHBhY2spIHtcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnR5cGVzZXQgPSB2b2lkIDA7XG52YXIgZm9udHNfMSA9IHJlcXVpcmUoXCIuL2ZvbnRzXCIpO1xudmFyIEZvbnRUeXBlO1xuKGZ1bmN0aW9uIChGb250VHlwZSkge1xuICAgIEZvbnRUeXBlW0ZvbnRUeXBlW1wiUmVndWxhclwiXSA9IDFdID0gXCJSZWd1bGFyXCI7XG4gICAgRm9udFR5cGVbRm9udFR5cGVbXCJTdXBlcnNjcmlwdFwiXSA9IDJdID0gXCJTdXBlcnNjcmlwdFwiO1xuICAgIEZvbnRUeXBlW0ZvbnRUeXBlW1wiU3Vic2NyaXB0XCJdID0gNF0gPSBcIlN1YnNjcmlwdFwiO1xuICAgIEZvbnRUeXBlW0ZvbnRUeXBlW1wiQm9sZFwiXSA9IDhdID0gXCJCb2xkXCI7XG4gICAgRm9udFR5cGVbRm9udFR5cGVbXCJJdGFsaWNcIl0gPSAxNl0gPSBcIkl0YWxpY1wiO1xuICAgIEZvbnRUeXBlW0ZvbnRUeXBlW1wiU2Fuc1NlcmlmXCJdID0gMzJdID0gXCJTYW5zU2VyaWZcIjtcbn0pKEZvbnRUeXBlIHx8IChGb250VHlwZSA9IHt9KSk7XG52YXIgc2VsZWN0Rm9udCA9IGZ1bmN0aW9uIChzdHIsIGZvbnQpIHtcbiAgICB2YXIgcmVzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNoYXJzID0gX19zcHJlYWRBcnJheShbXSwgX19yZWFkKHN0ciksIGZhbHNlKS5tYXAoZnVuY3Rpb24gKGNoKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGZvbnQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIEZvbnRUeXBlLlJlZ3VsYXI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjaDtcbiAgICAgICAgICAgICAgICBjYXNlIEZvbnRUeXBlLlN1cGVyc2NyaXB0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9udHNfMS5TVVBFUlNDUklQVFNbY2hdO1xuICAgICAgICAgICAgICAgIGNhc2UgRm9udFR5cGUuU3Vic2NyaXB0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9udHNfMS5TVUJTQ1JJUFRTW2NoXTtcbiAgICAgICAgICAgICAgICBjYXNlIEZvbnRUeXBlLlNhbnNTZXJpZjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvbnRzXzEuTUFUSF9TQU5TX1NFUklGW2NoXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjaGFycy5pbmNsdWRlcyh1bmRlZmluZWQpKVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIGNoYXJzLmpvaW4oXCJcIik7XG4gICAgfSkoKTtcbiAgICBpZiAocmVzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHRocm93IFwiaW52YWxpZCBzdHJpbmcgKFwiLmNvbmNhdChzdHIsIFwiKVwiKTtcbiAgICByZXR1cm4gcmVzO1xufTtcbnZhciBjb21wb3NpdGVGb250ID0gZnVuY3Rpb24gKGxocywgcmhzKSB7XG4gICAgaWYgKGxocyA9PSBGb250VHlwZS5SZWd1bGFyKVxuICAgICAgICByZXR1cm4gcmhzO1xuICAgIGlmIChyaHMgPT0gRm9udFR5cGUuUmVndWxhcilcbiAgICAgICAgcmV0dXJuIGxocztcbiAgICBpZiAobGhzID09IHJocylcbiAgICAgICAgcmV0dXJuIGxocztcbiAgICB2YXIgY29tcG9zaXRlID0gbGhzIHwgcmhzO1xuICAgIGlmIChjb21wb3NpdGUgPT0gKEZvbnRUeXBlLkJvbGQgfCBGb250VHlwZS5JdGFsaWMpKVxuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIHRocm93IFwiaW52YWxpZCBmb250XCI7XG59O1xudmFyIHR5cGVzZXQgPSBmdW5jdGlvbiAoZXhwcikge1xuICAgIHZhciB0b2tlbnMgPSAvXFxcXFthLXpBLVpdK3xcXFxcLnxcXF58X3xcXHt8XFx9fFxccyt8Li9nO1xuICAgIHZhciByZXMgPSBcIlwiO1xuICAgIHZhciBtb2RlID0gW0ZvbnRUeXBlLlJlZ3VsYXJdO1xuICAgIHZhciBsYXN0TW9kZSA9IG51bGw7XG4gICAgdmFyIG07XG4gICAgd2hpbGUgKChtID0gdG9rZW5zLmV4ZWMoZXhwcikpKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IG1bMF07XG4gICAgICAgIGlmICh0b2tlbi50cmltKCkgPT09IFwiXCIpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgc3dpdGNoICh0b2tlblswXSkge1xuICAgICAgICAgICAgY2FzZSBcIl5cIjpcbiAgICAgICAgICAgICAgICBsYXN0TW9kZSA9IEZvbnRUeXBlLlN1cGVyc2NyaXB0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIl9cIjpcbiAgICAgICAgICAgICAgICBsYXN0TW9kZSA9IEZvbnRUeXBlLlN1YnNjcmlwdDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ7XCI6XG4gICAgICAgICAgICAgICAgbW9kZS5wdXNoKGxhc3RNb2RlKTtcbiAgICAgICAgICAgICAgICBsYXN0TW9kZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwifVwiOlxuICAgICAgICAgICAgICAgIG1vZGUucG9wKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiXFxcXFwiOlxuICAgICAgICAgICAgICAgIC8vIOW8leaVsOOCkuWPluOCi+WItuW+oee2tOOBr+mbo+OBl+OBhOOBreOBiFxuICAgICAgICAgICAgICAgIC8vIGxhc3RNb2RlIOOBv+OBn+OBhOOBq+OBmeOCjOOBsOOBp+OBjeOCi+OBruOBi+OBqlxuICAgICAgICAgICAgICAgIHJlcyArPSBzZWxlY3RGb250KHRva2VuLnN1YnN0cigxKSwgRm9udFR5cGUuU2Fuc1NlcmlmKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmVzICs9IHNlbGVjdEZvbnQodG9rZW4sIGxhc3RNb2RlICE9PSBudWxsICYmIGxhc3RNb2RlICE9PSB2b2lkIDAgPyBsYXN0TW9kZSA6IG1vZGVbbW9kZS5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgbGFzdE1vZGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiXFxcIlwiLmNvbmNhdChleHByLCBcIlxcXCIgPT4gXFxcIlwiKS5jb25jYXQocmVzLCBcIlxcXCJcIikpO1xuICAgIHJldHVybiByZXM7XG59O1xuZXhwb3J0cy50eXBlc2V0ID0gdHlwZXNldDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy90eXBlc2V0LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9