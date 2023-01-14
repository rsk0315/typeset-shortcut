/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/base64.ts":
/*!***********************!*\
  !*** ./src/base64.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


// https://stackoverflow.com/questions/30106476/using-javascripts-atob-to-decode-base64-doesnt-properly-decode-utf-8-strings
exports.__esModule = true;
exports.toBase64 = exports.fromBase64 = void 0;
var fromBase64 = function (str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str)
        .split("")
        .map(function (c) { return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2); })
        .join(""));
};
exports.fromBase64 = fromBase64;
var toBase64 = function (str) {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode(parseInt(p1, 16));
    }));
};
exports.toBase64 = toBase64;


/***/ }),

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
                    return /[a-z]/i.test(ch) ? fonts_1.MATH_ITALIC[ch] : ch;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

exports.__esModule = true;
var typeset_1 = __webpack_require__(/*! ./typeset */ "./src/typeset.ts");
var base64_1 = __webpack_require__(/*! ./base64 */ "./src/base64.ts");
var input = (0, base64_1.fromBase64)("");
var output = (0, typeset_1.typeset)(input);
document.write((0, base64_1.toBase64)(output));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0Esa0JBQWtCO0FBQ2xCLGdCQUFnQixHQUFHLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwrREFBK0Q7QUFDM0Y7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxFQUFFO0FBQzlEO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZ0JBQWdCOzs7Ozs7Ozs7OztBQ3BCSDtBQUNiO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixVQUFVLE9BQU8scUJBQXFCLGFBQWEsTUFBTSxTQUFTO0FBQ3RGO0FBQ0Esa0JBQWtCO0FBQ2xCLGtCQUFrQixHQUFHLG9CQUFvQixHQUFHLGVBQWUsR0FBRyxtQ0FBbUMsR0FBRyw4QkFBOEIsR0FBRyw0QkFBNEIsR0FBRyx1QkFBdUIsR0FBRyx5QkFBeUIsR0FBRyxlQUFlLEdBQUcsb0JBQW9CLEdBQUcsd0JBQXdCLEdBQUcsbUJBQW1CLEdBQUcsd0JBQXdCLEdBQUcsbUJBQW1CLEdBQUcsaUJBQWlCO0FBQ3RYLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMzeUJhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RSxPQUFPO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGVBQWU7QUFDZixjQUFjLG1CQUFPLENBQUMsK0JBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsNEJBQTRCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLEdBQUc7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlOzs7Ozs7O1VDaEhmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYixrQkFBa0I7QUFDbEIsZ0JBQWdCLG1CQUFPLENBQUMsbUNBQVc7QUFDbkMsZUFBZSxtQkFBTyxDQUFDLGlDQUFVO0FBQ2pDO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iYXNlNjQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlc2V0LnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zMDEwNjQ3Ni91c2luZy1qYXZhc2NyaXB0cy1hdG9iLXRvLWRlY29kZS1iYXNlNjQtZG9lc250LXByb3Blcmx5LWRlY29kZS11dGYtOC1zdHJpbmdzXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy50b0Jhc2U2NCA9IGV4cG9ydHMuZnJvbUJhc2U2NCA9IHZvaWQgMDtcbnZhciBmcm9tQmFzZTY0ID0gZnVuY3Rpb24gKHN0cikge1xuICAgIC8vIEdvaW5nIGJhY2t3YXJkczogZnJvbSBieXRlc3RyZWFtLCB0byBwZXJjZW50LWVuY29kaW5nLCB0byBvcmlnaW5hbCBzdHJpbmcuXG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChhdG9iKHN0cilcbiAgICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIFwiJVwiICsgKFwiMDBcIiArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTsgfSlcbiAgICAgICAgLmpvaW4oXCJcIikpO1xufTtcbmV4cG9ydHMuZnJvbUJhc2U2NCA9IGZyb21CYXNlNjQ7XG52YXIgdG9CYXNlNjQgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgLy8gZmlyc3Qgd2UgdXNlIGVuY29kZVVSSUNvbXBvbmVudCB0byBnZXQgcGVyY2VudC1lbmNvZGVkIFVURi04LFxuICAgIC8vIHRoZW4gd2UgY29udmVydCB0aGUgcGVyY2VudCBlbmNvZGluZ3MgaW50byByYXcgYnl0ZXMgd2hpY2hcbiAgICAvLyBjYW4gYmUgZmVkIGludG8gYnRvYS5cbiAgICByZXR1cm4gYnRvYShlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC8lKFswLTlBLUZdezJ9KS9nLCBmdW5jdGlvbiAobWF0Y2gsIHAxKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KHAxLCAxNikpO1xuICAgIH0pKTtcbn07XG5leHBvcnRzLnRvQmFzZTY0ID0gdG9CYXNlNjQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIDxodHRwczovL3d3dy5hc2FoaS1uZXQub3IuanAvfmF4MnMta210bi9yZWYvdW5pY29kZS91MWQ0MDAuaHRtbD5cbi8vXG4vLyBgYGB6c2hcbi8vIGk9JCgoMTYjMWQ0MDApKTsgZm9yIGMgaW4ge0EuLlp9OyBkbyBlY2hvIFwiJGM6IFxcXCJcXFxcXFxcXHV7JCgoWyMjMTZdaSkpfVxcXCIsXCI7ICgoKytpKSk7IGRvbmVcbi8vIGBgYFxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuU1VCU0NSSVBUUyA9IGV4cG9ydHMuU1VQRVJTQ1JJUFRTID0gZXhwb3J0cy5NQVRIX1RUID0gZXhwb3J0cy5NQVRIX0JPTERfSVRBTElDX1NBTlNfU0VSSUYgPSBleHBvcnRzLk1BVEhfSVRBTElDX1NBTlNfU0VSSUYgPSBleHBvcnRzLk1BVEhfQk9MRF9TQU5TX1NFUklGID0gZXhwb3J0cy5NQVRIX1NBTlNfU0VSSUYgPSBleHBvcnRzLk1BVEhfQk9MRF9GUkFLVFVSID0gZXhwb3J0cy5NQVRIX0JCID0gZXhwb3J0cy5NQVRIX0ZSQUtUVVIgPSBleHBvcnRzLk1BVEhfQk9MRF9TQ1JJUFQgPSBleHBvcnRzLk1BVEhfU0NSSVBUID0gZXhwb3J0cy5NQVRIX0JPTERfSVRBTElDID0gZXhwb3J0cy5NQVRIX0lUQUxJQyA9IGV4cG9ydHMuTUFUSF9CT0xEID0gdm9pZCAwO1xuZXhwb3J0cy5NQVRIX0JPTEQgPSB7XG4gICAgQTogXCJcXHVEODM1XFx1REMwMFwiLFxuICAgIEI6IFwiXFx1RDgzNVxcdURDMDFcIixcbiAgICBDOiBcIlxcdUQ4MzVcXHVEQzAyXCIsXG4gICAgRDogXCJcXHVEODM1XFx1REMwM1wiLFxuICAgIEU6IFwiXFx1RDgzNVxcdURDMDRcIixcbiAgICBGOiBcIlxcdUQ4MzVcXHVEQzA1XCIsXG4gICAgRzogXCJcXHVEODM1XFx1REMwNlwiLFxuICAgIEg6IFwiXFx1RDgzNVxcdURDMDdcIixcbiAgICBJOiBcIlxcdUQ4MzVcXHVEQzA4XCIsXG4gICAgSjogXCJcXHVEODM1XFx1REMwOVwiLFxuICAgIEs6IFwiXFx1RDgzNVxcdURDMEFcIixcbiAgICBMOiBcIlxcdUQ4MzVcXHVEQzBCXCIsXG4gICAgTTogXCJcXHVEODM1XFx1REMwQ1wiLFxuICAgIE46IFwiXFx1RDgzNVxcdURDMERcIixcbiAgICBPOiBcIlxcdUQ4MzVcXHVEQzBFXCIsXG4gICAgUDogXCJcXHVEODM1XFx1REMwRlwiLFxuICAgIFE6IFwiXFx1RDgzNVxcdURDMTBcIixcbiAgICBSOiBcIlxcdUQ4MzVcXHVEQzExXCIsXG4gICAgUzogXCJcXHVEODM1XFx1REMxMlwiLFxuICAgIFQ6IFwiXFx1RDgzNVxcdURDMTNcIixcbiAgICBVOiBcIlxcdUQ4MzVcXHVEQzE0XCIsXG4gICAgVjogXCJcXHVEODM1XFx1REMxNVwiLFxuICAgIFc6IFwiXFx1RDgzNVxcdURDMTZcIixcbiAgICBYOiBcIlxcdUQ4MzVcXHVEQzE3XCIsXG4gICAgWTogXCJcXHVEODM1XFx1REMxOFwiLFxuICAgIFo6IFwiXFx1RDgzNVxcdURDMTlcIixcbiAgICBhOiBcIlxcdUQ4MzVcXHVEQzFBXCIsXG4gICAgYjogXCJcXHVEODM1XFx1REMxQlwiLFxuICAgIGM6IFwiXFx1RDgzNVxcdURDMUNcIixcbiAgICBkOiBcIlxcdUQ4MzVcXHVEQzFEXCIsXG4gICAgZTogXCJcXHVEODM1XFx1REMxRVwiLFxuICAgIGY6IFwiXFx1RDgzNVxcdURDMUZcIixcbiAgICBnOiBcIlxcdUQ4MzVcXHVEQzIwXCIsXG4gICAgaDogXCJcXHVEODM1XFx1REMyMVwiLFxuICAgIGk6IFwiXFx1RDgzNVxcdURDMjJcIixcbiAgICBqOiBcIlxcdUQ4MzVcXHVEQzIzXCIsXG4gICAgazogXCJcXHVEODM1XFx1REMyNFwiLFxuICAgIGw6IFwiXFx1RDgzNVxcdURDMjVcIixcbiAgICBtOiBcIlxcdUQ4MzVcXHVEQzI2XCIsXG4gICAgbjogXCJcXHVEODM1XFx1REMyN1wiLFxuICAgIG86IFwiXFx1RDgzNVxcdURDMjhcIixcbiAgICBwOiBcIlxcdUQ4MzVcXHVEQzI5XCIsXG4gICAgcTogXCJcXHVEODM1XFx1REMyQVwiLFxuICAgIHI6IFwiXFx1RDgzNVxcdURDMkJcIixcbiAgICBzOiBcIlxcdUQ4MzVcXHVEQzJDXCIsXG4gICAgdDogXCJcXHVEODM1XFx1REMyRFwiLFxuICAgIHU6IFwiXFx1RDgzNVxcdURDMkVcIixcbiAgICB2OiBcIlxcdUQ4MzVcXHVEQzJGXCIsXG4gICAgdzogXCJcXHVEODM1XFx1REMzMFwiLFxuICAgIHg6IFwiXFx1RDgzNVxcdURDMzFcIixcbiAgICB5OiBcIlxcdUQ4MzVcXHVEQzMyXCIsXG4gICAgejogXCJcXHVEODM1XFx1REMzM1wiXG59O1xuZXhwb3J0cy5NQVRIX0lUQUxJQyA9IHtcbiAgICBBOiBcIlxcdUQ4MzVcXHVEQzM0XCIsXG4gICAgQjogXCJcXHVEODM1XFx1REMzNVwiLFxuICAgIEM6IFwiXFx1RDgzNVxcdURDMzZcIixcbiAgICBEOiBcIlxcdUQ4MzVcXHVEQzM3XCIsXG4gICAgRTogXCJcXHVEODM1XFx1REMzOFwiLFxuICAgIEY6IFwiXFx1RDgzNVxcdURDMzlcIixcbiAgICBHOiBcIlxcdUQ4MzVcXHVEQzNBXCIsXG4gICAgSDogXCJcXHVEODM1XFx1REMzQlwiLFxuICAgIEk6IFwiXFx1RDgzNVxcdURDM0NcIixcbiAgICBKOiBcIlxcdUQ4MzVcXHVEQzNEXCIsXG4gICAgSzogXCJcXHVEODM1XFx1REMzRVwiLFxuICAgIEw6IFwiXFx1RDgzNVxcdURDM0ZcIixcbiAgICBNOiBcIlxcdUQ4MzVcXHVEQzQwXCIsXG4gICAgTjogXCJcXHVEODM1XFx1REM0MVwiLFxuICAgIE86IFwiXFx1RDgzNVxcdURDNDJcIixcbiAgICBQOiBcIlxcdUQ4MzVcXHVEQzQzXCIsXG4gICAgUTogXCJcXHVEODM1XFx1REM0NFwiLFxuICAgIFI6IFwiXFx1RDgzNVxcdURDNDVcIixcbiAgICBTOiBcIlxcdUQ4MzVcXHVEQzQ2XCIsXG4gICAgVDogXCJcXHVEODM1XFx1REM0N1wiLFxuICAgIFU6IFwiXFx1RDgzNVxcdURDNDhcIixcbiAgICBWOiBcIlxcdUQ4MzVcXHVEQzQ5XCIsXG4gICAgVzogXCJcXHVEODM1XFx1REM0QVwiLFxuICAgIFg6IFwiXFx1RDgzNVxcdURDNEJcIixcbiAgICBZOiBcIlxcdUQ4MzVcXHVEQzRDXCIsXG4gICAgWjogXCJcXHVEODM1XFx1REM0RFwiLFxuICAgIGE6IFwiXFx1RDgzNVxcdURDNEVcIixcbiAgICBiOiBcIlxcdUQ4MzVcXHVEQzRGXCIsXG4gICAgYzogXCJcXHVEODM1XFx1REM1MFwiLFxuICAgIGQ6IFwiXFx1RDgzNVxcdURDNTFcIixcbiAgICBlOiBcIlxcdUQ4MzVcXHVEQzUyXCIsXG4gICAgZjogXCJcXHVEODM1XFx1REM1M1wiLFxuICAgIGc6IFwiXFx1RDgzNVxcdURDNTRcIixcbiAgICBoOiBcIlxcdTIxMEVcIixcbiAgICBpOiBcIlxcdUQ4MzVcXHVEQzU2XCIsXG4gICAgajogXCJcXHVEODM1XFx1REM1N1wiLFxuICAgIGs6IFwiXFx1RDgzNVxcdURDNThcIixcbiAgICBsOiBcIlxcdUQ4MzVcXHVEQzU5XCIsXG4gICAgbTogXCJcXHVEODM1XFx1REM1QVwiLFxuICAgIG46IFwiXFx1RDgzNVxcdURDNUJcIixcbiAgICBvOiBcIlxcdUQ4MzVcXHVEQzVDXCIsXG4gICAgcDogXCJcXHVEODM1XFx1REM1RFwiLFxuICAgIHE6IFwiXFx1RDgzNVxcdURDNUVcIixcbiAgICByOiBcIlxcdUQ4MzVcXHVEQzVGXCIsXG4gICAgczogXCJcXHVEODM1XFx1REM2MFwiLFxuICAgIHQ6IFwiXFx1RDgzNVxcdURDNjFcIixcbiAgICB1OiBcIlxcdUQ4MzVcXHVEQzYyXCIsXG4gICAgdjogXCJcXHVEODM1XFx1REM2M1wiLFxuICAgIHc6IFwiXFx1RDgzNVxcdURDNjRcIixcbiAgICB4OiBcIlxcdUQ4MzVcXHVEQzY1XCIsXG4gICAgeTogXCJcXHVEODM1XFx1REM2NlwiLFxuICAgIHo6IFwiXFx1RDgzNVxcdURDNjdcIlxufTtcbmV4cG9ydHMuTUFUSF9CT0xEX0lUQUxJQyA9IHtcbiAgICBBOiBcIlxcdUQ4MzVcXHVEQzY4XCIsXG4gICAgQjogXCJcXHVEODM1XFx1REM2OVwiLFxuICAgIEM6IFwiXFx1RDgzNVxcdURDNkFcIixcbiAgICBEOiBcIlxcdUQ4MzVcXHVEQzZCXCIsXG4gICAgRTogXCJcXHVEODM1XFx1REM2Q1wiLFxuICAgIEY6IFwiXFx1RDgzNVxcdURDNkRcIixcbiAgICBHOiBcIlxcdUQ4MzVcXHVEQzZFXCIsXG4gICAgSDogXCJcXHVEODM1XFx1REM2RlwiLFxuICAgIEk6IFwiXFx1RDgzNVxcdURDNzBcIixcbiAgICBKOiBcIlxcdUQ4MzVcXHVEQzcxXCIsXG4gICAgSzogXCJcXHVEODM1XFx1REM3MlwiLFxuICAgIEw6IFwiXFx1RDgzNVxcdURDNzNcIixcbiAgICBNOiBcIlxcdUQ4MzVcXHVEQzc0XCIsXG4gICAgTjogXCJcXHVEODM1XFx1REM3NVwiLFxuICAgIE86IFwiXFx1RDgzNVxcdURDNzZcIixcbiAgICBQOiBcIlxcdUQ4MzVcXHVEQzc3XCIsXG4gICAgUTogXCJcXHVEODM1XFx1REM3OFwiLFxuICAgIFI6IFwiXFx1RDgzNVxcdURDNzlcIixcbiAgICBTOiBcIlxcdUQ4MzVcXHVEQzdBXCIsXG4gICAgVDogXCJcXHVEODM1XFx1REM3QlwiLFxuICAgIFU6IFwiXFx1RDgzNVxcdURDN0NcIixcbiAgICBWOiBcIlxcdUQ4MzVcXHVEQzdEXCIsXG4gICAgVzogXCJcXHVEODM1XFx1REM3RVwiLFxuICAgIFg6IFwiXFx1RDgzNVxcdURDN0ZcIixcbiAgICBZOiBcIlxcdUQ4MzVcXHVEQzgwXCIsXG4gICAgWjogXCJcXHVEODM1XFx1REM4MVwiLFxuICAgIGE6IFwiXFx1RDgzNVxcdURDODJcIixcbiAgICBiOiBcIlxcdUQ4MzVcXHVEQzgzXCIsXG4gICAgYzogXCJcXHVEODM1XFx1REM4NFwiLFxuICAgIGQ6IFwiXFx1RDgzNVxcdURDODVcIixcbiAgICBlOiBcIlxcdUQ4MzVcXHVEQzg2XCIsXG4gICAgZjogXCJcXHVEODM1XFx1REM4N1wiLFxuICAgIGc6IFwiXFx1RDgzNVxcdURDODhcIixcbiAgICBoOiBcIlxcdUQ4MzVcXHVEQzg5XCIsXG4gICAgaTogXCJcXHVEODM1XFx1REM4QVwiLFxuICAgIGo6IFwiXFx1RDgzNVxcdURDOEJcIixcbiAgICBrOiBcIlxcdUQ4MzVcXHVEQzhDXCIsXG4gICAgbDogXCJcXHVEODM1XFx1REM4RFwiLFxuICAgIG06IFwiXFx1RDgzNVxcdURDOEVcIixcbiAgICBuOiBcIlxcdUQ4MzVcXHVEQzhGXCIsXG4gICAgbzogXCJcXHVEODM1XFx1REM5MFwiLFxuICAgIHA6IFwiXFx1RDgzNVxcdURDOTFcIixcbiAgICBxOiBcIlxcdUQ4MzVcXHVEQzkyXCIsXG4gICAgcjogXCJcXHVEODM1XFx1REM5M1wiLFxuICAgIHM6IFwiXFx1RDgzNVxcdURDOTRcIixcbiAgICB0OiBcIlxcdUQ4MzVcXHVEQzk1XCIsXG4gICAgdTogXCJcXHVEODM1XFx1REM5NlwiLFxuICAgIHY6IFwiXFx1RDgzNVxcdURDOTdcIixcbiAgICB3OiBcIlxcdUQ4MzVcXHVEQzk4XCIsXG4gICAgeDogXCJcXHVEODM1XFx1REM5OVwiLFxuICAgIHk6IFwiXFx1RDgzNVxcdURDOUFcIixcbiAgICB6OiBcIlxcdUQ4MzVcXHVEQzlCXCJcbn07XG5leHBvcnRzLk1BVEhfU0NSSVBUID0ge1xuICAgIEE6IFwiXFx1RDgzNVxcdURDOUNcIixcbiAgICBCOiBcIlxcdTIxMkNcIixcbiAgICBDOiBcIlxcdUQ4MzVcXHVEQzlFXCIsXG4gICAgRDogXCJcXHVEODM1XFx1REM5RlwiLFxuICAgIEU6IFwiXFx1MjEzMFwiLFxuICAgIEY6IFwiXFx1MjEzMVwiLFxuICAgIEc6IFwiXFx1RDgzNVxcdURDQTJcIixcbiAgICBIOiBcIlxcdTIxMEJcIixcbiAgICBJOiBcIlxcdTIxMTBcIixcbiAgICBKOiBcIlxcdUQ4MzVcXHVEQ0E1XCIsXG4gICAgSzogXCJcXHVEODM1XFx1RENBNlwiLFxuICAgIEw6IFwiXFx1MjExMlwiLFxuICAgIE06IFwiXFx1MjEzM1wiLFxuICAgIE46IFwiXFx1RDgzNVxcdURDQTlcIixcbiAgICBPOiBcIlxcdUQ4MzVcXHVEQ0FBXCIsXG4gICAgUDogXCJcXHVEODM1XFx1RENBQlwiLFxuICAgIFE6IFwiXFx1RDgzNVxcdURDQUNcIixcbiAgICBSOiBcIlxcdTIxMUJcIixcbiAgICBTOiBcIlxcdUQ4MzVcXHVEQ0FFXCIsXG4gICAgVDogXCJcXHVEODM1XFx1RENBRlwiLFxuICAgIFU6IFwiXFx1RDgzNVxcdURDQjBcIixcbiAgICBWOiBcIlxcdUQ4MzVcXHVEQ0IxXCIsXG4gICAgVzogXCJcXHVEODM1XFx1RENCMlwiLFxuICAgIFg6IFwiXFx1RDgzNVxcdURDQjNcIixcbiAgICBZOiBcIlxcdUQ4MzVcXHVEQ0I0XCIsXG4gICAgWjogXCJcXHVEODM1XFx1RENCNVwiLFxuICAgIGE6IFwiXFx1RDgzNVxcdURDQjZcIixcbiAgICBiOiBcIlxcdUQ4MzVcXHVEQ0I3XCIsXG4gICAgYzogXCJcXHVEODM1XFx1RENCOFwiLFxuICAgIGQ6IFwiXFx1RDgzNVxcdURDQjlcIixcbiAgICBlOiBcIlxcdTIxMkZcIixcbiAgICBmOiBcIlxcdUQ4MzVcXHVEQ0JCXCIsXG4gICAgZzogXCJcXHUyMTBBXCIsXG4gICAgaDogXCJcXHVEODM1XFx1RENCRFwiLFxuICAgIGk6IFwiXFx1RDgzNVxcdURDQkVcIixcbiAgICBqOiBcIlxcdUQ4MzVcXHVEQ0JGXCIsXG4gICAgazogXCJcXHVEODM1XFx1RENDMFwiLFxuICAgIGw6IFwiXFx1MjExM1wiLFxuICAgIG06IFwiXFx1RDgzNVxcdURDQzJcIixcbiAgICBuOiBcIlxcdUQ4MzVcXHVEQ0MzXCIsXG4gICAgbzogXCJcXHUyMTM0XCIsXG4gICAgcDogXCJcXHVEODM1XFx1RENDNVwiLFxuICAgIHE6IFwiXFx1RDgzNVxcdURDQzZcIixcbiAgICByOiBcIlxcdUQ4MzVcXHVEQ0M3XCIsXG4gICAgczogXCJcXHVEODM1XFx1RENDOFwiLFxuICAgIHQ6IFwiXFx1RDgzNVxcdURDQzlcIixcbiAgICB1OiBcIlxcdUQ4MzVcXHVEQ0NBXCIsXG4gICAgdjogXCJcXHVEODM1XFx1RENDQlwiLFxuICAgIHc6IFwiXFx1RDgzNVxcdURDQ0NcIixcbiAgICB4OiBcIlxcdUQ4MzVcXHVEQ0NEXCIsXG4gICAgeTogXCJcXHVEODM1XFx1RENDRVwiLFxuICAgIHo6IFwiXFx1RDgzNVxcdURDQ0ZcIlxufTtcbmV4cG9ydHMuTUFUSF9CT0xEX1NDUklQVCA9IHtcbiAgICBBOiBcIlxcdUQ4MzVcXHVEQ0QwXCIsXG4gICAgQjogXCJcXHVEODM1XFx1RENEMVwiLFxuICAgIEM6IFwiXFx1RDgzNVxcdURDRDJcIixcbiAgICBEOiBcIlxcdUQ4MzVcXHVEQ0QzXCIsXG4gICAgRTogXCJcXHVEODM1XFx1RENENFwiLFxuICAgIEY6IFwiXFx1RDgzNVxcdURDRDVcIixcbiAgICBHOiBcIlxcdUQ4MzVcXHVEQ0Q2XCIsXG4gICAgSDogXCJcXHVEODM1XFx1RENEN1wiLFxuICAgIEk6IFwiXFx1RDgzNVxcdURDRDhcIixcbiAgICBKOiBcIlxcdUQ4MzVcXHVEQ0Q5XCIsXG4gICAgSzogXCJcXHVEODM1XFx1RENEQVwiLFxuICAgIEw6IFwiXFx1RDgzNVxcdURDREJcIixcbiAgICBNOiBcIlxcdUQ4MzVcXHVEQ0RDXCIsXG4gICAgTjogXCJcXHVEODM1XFx1RENERFwiLFxuICAgIE86IFwiXFx1RDgzNVxcdURDREVcIixcbiAgICBQOiBcIlxcdUQ4MzVcXHVEQ0RGXCIsXG4gICAgUTogXCJcXHVEODM1XFx1RENFMFwiLFxuICAgIFI6IFwiXFx1RDgzNVxcdURDRTFcIixcbiAgICBTOiBcIlxcdUQ4MzVcXHVEQ0UyXCIsXG4gICAgVDogXCJcXHVEODM1XFx1RENFM1wiLFxuICAgIFU6IFwiXFx1RDgzNVxcdURDRTRcIixcbiAgICBWOiBcIlxcdUQ4MzVcXHVEQ0U1XCIsXG4gICAgVzogXCJcXHVEODM1XFx1RENFNlwiLFxuICAgIFg6IFwiXFx1RDgzNVxcdURDRTdcIixcbiAgICBZOiBcIlxcdUQ4MzVcXHVEQ0U4XCIsXG4gICAgWjogXCJcXHVEODM1XFx1RENFOVwiLFxuICAgIGE6IFwiXFx1RDgzNVxcdURDRUFcIixcbiAgICBiOiBcIlxcdUQ4MzVcXHVEQ0VCXCIsXG4gICAgYzogXCJcXHVEODM1XFx1RENFQ1wiLFxuICAgIGQ6IFwiXFx1RDgzNVxcdURDRURcIixcbiAgICBlOiBcIlxcdUQ4MzVcXHVEQ0VFXCIsXG4gICAgZjogXCJcXHVEODM1XFx1RENFRlwiLFxuICAgIGc6IFwiXFx1RDgzNVxcdURDRjBcIixcbiAgICBoOiBcIlxcdUQ4MzVcXHVEQ0YxXCIsXG4gICAgaTogXCJcXHVEODM1XFx1RENGMlwiLFxuICAgIGo6IFwiXFx1RDgzNVxcdURDRjNcIixcbiAgICBrOiBcIlxcdUQ4MzVcXHVEQ0Y0XCIsXG4gICAgbDogXCJcXHVEODM1XFx1RENGNVwiLFxuICAgIG06IFwiXFx1RDgzNVxcdURDRjZcIixcbiAgICBuOiBcIlxcdUQ4MzVcXHVEQ0Y3XCIsXG4gICAgbzogXCJcXHVEODM1XFx1RENGOFwiLFxuICAgIHA6IFwiXFx1RDgzNVxcdURDRjlcIixcbiAgICBxOiBcIlxcdUQ4MzVcXHVEQ0ZBXCIsXG4gICAgcjogXCJcXHVEODM1XFx1RENGQlwiLFxuICAgIHM6IFwiXFx1RDgzNVxcdURDRkNcIixcbiAgICB0OiBcIlxcdUQ4MzVcXHVEQ0ZEXCIsXG4gICAgdTogXCJcXHVEODM1XFx1RENGRVwiLFxuICAgIHY6IFwiXFx1RDgzNVxcdURDRkZcIixcbiAgICB3OiBcIlxcdUQ4MzVcXHVERDAwXCIsXG4gICAgeDogXCJcXHVEODM1XFx1REQwMVwiLFxuICAgIHk6IFwiXFx1RDgzNVxcdUREMDJcIixcbiAgICB6OiBcIlxcdUQ4MzVcXHVERDAzXCJcbn07XG5leHBvcnRzLk1BVEhfRlJBS1RVUiA9IHtcbiAgICBBOiBcIlxcdUQ4MzVcXHVERDA0XCIsXG4gICAgQjogXCJcXHVEODM1XFx1REQwNVwiLFxuICAgIEM6IFwiXFx1MjEyRFwiLFxuICAgIEQ6IFwiXFx1RDgzNVxcdUREMDdcIixcbiAgICBFOiBcIlxcdUQ4MzVcXHVERDA4XCIsXG4gICAgRjogXCJcXHVEODM1XFx1REQwOVwiLFxuICAgIEc6IFwiXFx1RDgzNVxcdUREMEFcIixcbiAgICBIOiBcIlxcdTIxMENcIixcbiAgICBJOiBcIlxcdTIxMTFcIixcbiAgICBKOiBcIlxcdUQ4MzVcXHVERDBEXCIsXG4gICAgSzogXCJcXHVEODM1XFx1REQwRVwiLFxuICAgIEw6IFwiXFx1RDgzNVxcdUREMEZcIixcbiAgICBNOiBcIlxcdUQ4MzVcXHVERDEwXCIsXG4gICAgTjogXCJcXHVEODM1XFx1REQxMVwiLFxuICAgIE86IFwiXFx1RDgzNVxcdUREMTJcIixcbiAgICBQOiBcIlxcdUQ4MzVcXHVERDEzXCIsXG4gICAgUTogXCJcXHVEODM1XFx1REQxNFwiLFxuICAgIFI6IFwiXFx1MjExQ1wiLFxuICAgIFM6IFwiXFx1RDgzNVxcdUREMTZcIixcbiAgICBUOiBcIlxcdUQ4MzVcXHVERDE3XCIsXG4gICAgVTogXCJcXHVEODM1XFx1REQxOFwiLFxuICAgIFY6IFwiXFx1RDgzNVxcdUREMTlcIixcbiAgICBXOiBcIlxcdUQ4MzVcXHVERDFBXCIsXG4gICAgWDogXCJcXHVEODM1XFx1REQxQlwiLFxuICAgIFk6IFwiXFx1RDgzNVxcdUREMUNcIixcbiAgICBaOiBcIlxcdTIxMjhcIixcbiAgICBhOiBcIlxcdUQ4MzVcXHVERDFFXCIsXG4gICAgYjogXCJcXHVEODM1XFx1REQxRlwiLFxuICAgIGM6IFwiXFx1RDgzNVxcdUREMjBcIixcbiAgICBkOiBcIlxcdUQ4MzVcXHVERDIxXCIsXG4gICAgZTogXCJcXHVEODM1XFx1REQyMlwiLFxuICAgIGY6IFwiXFx1RDgzNVxcdUREMjNcIixcbiAgICBnOiBcIlxcdUQ4MzVcXHVERDI0XCIsXG4gICAgaDogXCJcXHVEODM1XFx1REQyNVwiLFxuICAgIGk6IFwiXFx1RDgzNVxcdUREMjZcIixcbiAgICBqOiBcIlxcdUQ4MzVcXHVERDI3XCIsXG4gICAgazogXCJcXHVEODM1XFx1REQyOFwiLFxuICAgIGw6IFwiXFx1RDgzNVxcdUREMjlcIixcbiAgICBtOiBcIlxcdUQ4MzVcXHVERDJBXCIsXG4gICAgbjogXCJcXHVEODM1XFx1REQyQlwiLFxuICAgIG86IFwiXFx1RDgzNVxcdUREMkNcIixcbiAgICBwOiBcIlxcdUQ4MzVcXHVERDJEXCIsXG4gICAgcTogXCJcXHVEODM1XFx1REQyRVwiLFxuICAgIHI6IFwiXFx1RDgzNVxcdUREMkZcIixcbiAgICBzOiBcIlxcdUQ4MzVcXHVERDMwXCIsXG4gICAgdDogXCJcXHVEODM1XFx1REQzMVwiLFxuICAgIHU6IFwiXFx1RDgzNVxcdUREMzJcIixcbiAgICB2OiBcIlxcdUQ4MzVcXHVERDMzXCIsXG4gICAgdzogXCJcXHVEODM1XFx1REQzNFwiLFxuICAgIHg6IFwiXFx1RDgzNVxcdUREMzVcIixcbiAgICB5OiBcIlxcdUQ4MzVcXHVERDM2XCIsXG4gICAgejogXCJcXHVEODM1XFx1REQzN1wiXG59O1xuZXhwb3J0cy5NQVRIX0JCID0ge1xuICAgIEE6IFwiXFx1RDgzNVxcdUREMzhcIixcbiAgICBCOiBcIlxcdUQ4MzVcXHVERDM5XCIsXG4gICAgQzogXCJcXHUyMTAyXCIsXG4gICAgRDogXCJcXHVEODM1XFx1REQzQlwiLFxuICAgIEU6IFwiXFx1RDgzNVxcdUREM0NcIixcbiAgICBGOiBcIlxcdUQ4MzVcXHVERDNEXCIsXG4gICAgRzogXCJcXHVEODM1XFx1REQzRVwiLFxuICAgIEg6IFwiXFx1MjEwRFwiLFxuICAgIEk6IFwiXFx1RDgzNVxcdURENDBcIixcbiAgICBKOiBcIlxcdUQ4MzVcXHVERDQxXCIsXG4gICAgSzogXCJcXHVEODM1XFx1REQ0MlwiLFxuICAgIEw6IFwiXFx1RDgzNVxcdURENDNcIixcbiAgICBNOiBcIlxcdUQ4MzVcXHVERDQ0XCIsXG4gICAgTjogXCJcXHUyMTE1XCIsXG4gICAgTzogXCJcXHVEODM1XFx1REQ0NlwiLFxuICAgIFA6IFwiXFx1MjExOVwiLFxuICAgIFE6IFwiXFx1MjExQVwiLFxuICAgIFI6IFwiXFx1MjExRFwiLFxuICAgIFM6IFwiXFx1RDgzNVxcdURENEFcIixcbiAgICBUOiBcIlxcdUQ4MzVcXHVERDRCXCIsXG4gICAgVTogXCJcXHVEODM1XFx1REQ0Q1wiLFxuICAgIFY6IFwiXFx1RDgzNVxcdURENERcIixcbiAgICBXOiBcIlxcdUQ4MzVcXHVERDRFXCIsXG4gICAgWDogXCJcXHVEODM1XFx1REQ0RlwiLFxuICAgIFk6IFwiXFx1RDgzNVxcdURENTBcIixcbiAgICBaOiBcIlxcdTIxMjRcIixcbiAgICBhOiBcIlxcdUQ4MzVcXHVERDUyXCIsXG4gICAgYjogXCJcXHVEODM1XFx1REQ1M1wiLFxuICAgIGM6IFwiXFx1RDgzNVxcdURENTRcIixcbiAgICBkOiBcIlxcdUQ4MzVcXHVERDU1XCIsXG4gICAgZTogXCJcXHVEODM1XFx1REQ1NlwiLFxuICAgIGY6IFwiXFx1RDgzNVxcdURENTdcIixcbiAgICBnOiBcIlxcdUQ4MzVcXHVERDU4XCIsXG4gICAgaDogXCJcXHVEODM1XFx1REQ1OVwiLFxuICAgIGk6IFwiXFx1RDgzNVxcdURENUFcIixcbiAgICBqOiBcIlxcdUQ4MzVcXHVERDVCXCIsXG4gICAgazogXCJcXHVEODM1XFx1REQ1Q1wiLFxuICAgIGw6IFwiXFx1RDgzNVxcdURENURcIixcbiAgICBtOiBcIlxcdUQ4MzVcXHVERDVFXCIsXG4gICAgbjogXCJcXHVEODM1XFx1REQ1RlwiLFxuICAgIG86IFwiXFx1RDgzNVxcdURENjBcIixcbiAgICBwOiBcIlxcdUQ4MzVcXHVERDYxXCIsXG4gICAgcTogXCJcXHVEODM1XFx1REQ2MlwiLFxuICAgIHI6IFwiXFx1RDgzNVxcdURENjNcIixcbiAgICBzOiBcIlxcdUQ4MzVcXHVERDY0XCIsXG4gICAgdDogXCJcXHVEODM1XFx1REQ2NVwiLFxuICAgIHU6IFwiXFx1RDgzNVxcdURENjZcIixcbiAgICB2OiBcIlxcdUQ4MzVcXHVERDY3XCIsXG4gICAgdzogXCJcXHVEODM1XFx1REQ2OFwiLFxuICAgIHg6IFwiXFx1RDgzNVxcdURENjlcIixcbiAgICB5OiBcIlxcdUQ4MzVcXHVERDZBXCIsXG4gICAgejogXCJcXHVEODM1XFx1REQ2QlwiXG59O1xuZXhwb3J0cy5NQVRIX0JPTERfRlJBS1RVUiA9IHtcbiAgICBBOiBcIlxcdUQ4MzVcXHVERDZDXCIsXG4gICAgQjogXCJcXHVEODM1XFx1REQ2RFwiLFxuICAgIEM6IFwiXFx1RDgzNVxcdURENkVcIixcbiAgICBEOiBcIlxcdUQ4MzVcXHVERDZGXCIsXG4gICAgRTogXCJcXHVEODM1XFx1REQ3MFwiLFxuICAgIEY6IFwiXFx1RDgzNVxcdURENzFcIixcbiAgICBHOiBcIlxcdUQ4MzVcXHVERDcyXCIsXG4gICAgSDogXCJcXHVEODM1XFx1REQ3M1wiLFxuICAgIEk6IFwiXFx1RDgzNVxcdURENzRcIixcbiAgICBKOiBcIlxcdUQ4MzVcXHVERDc1XCIsXG4gICAgSzogXCJcXHVEODM1XFx1REQ3NlwiLFxuICAgIEw6IFwiXFx1RDgzNVxcdURENzdcIixcbiAgICBNOiBcIlxcdUQ4MzVcXHVERDc4XCIsXG4gICAgTjogXCJcXHVEODM1XFx1REQ3OVwiLFxuICAgIE86IFwiXFx1RDgzNVxcdUREN0FcIixcbiAgICBQOiBcIlxcdUQ4MzVcXHVERDdCXCIsXG4gICAgUTogXCJcXHVEODM1XFx1REQ3Q1wiLFxuICAgIFI6IFwiXFx1RDgzNVxcdUREN0RcIixcbiAgICBTOiBcIlxcdUQ4MzVcXHVERDdFXCIsXG4gICAgVDogXCJcXHVEODM1XFx1REQ3RlwiLFxuICAgIFU6IFwiXFx1RDgzNVxcdUREODBcIixcbiAgICBWOiBcIlxcdUQ4MzVcXHVERDgxXCIsXG4gICAgVzogXCJcXHVEODM1XFx1REQ4MlwiLFxuICAgIFg6IFwiXFx1RDgzNVxcdUREODNcIixcbiAgICBZOiBcIlxcdUQ4MzVcXHVERDg0XCIsXG4gICAgWjogXCJcXHVEODM1XFx1REQ4NVwiLFxuICAgIGE6IFwiXFx1RDgzNVxcdUREODZcIixcbiAgICBiOiBcIlxcdUQ4MzVcXHVERDg3XCIsXG4gICAgYzogXCJcXHVEODM1XFx1REQ4OFwiLFxuICAgIGQ6IFwiXFx1RDgzNVxcdUREODlcIixcbiAgICBlOiBcIlxcdUQ4MzVcXHVERDhBXCIsXG4gICAgZjogXCJcXHVEODM1XFx1REQ4QlwiLFxuICAgIGc6IFwiXFx1RDgzNVxcdUREOENcIixcbiAgICBoOiBcIlxcdUQ4MzVcXHVERDhEXCIsXG4gICAgaTogXCJcXHVEODM1XFx1REQ4RVwiLFxuICAgIGo6IFwiXFx1RDgzNVxcdUREOEZcIixcbiAgICBrOiBcIlxcdUQ4MzVcXHVERDkwXCIsXG4gICAgbDogXCJcXHVEODM1XFx1REQ5MVwiLFxuICAgIG06IFwiXFx1RDgzNVxcdUREOTJcIixcbiAgICBuOiBcIlxcdUQ4MzVcXHVERDkzXCIsXG4gICAgbzogXCJcXHVEODM1XFx1REQ5NFwiLFxuICAgIHA6IFwiXFx1RDgzNVxcdUREOTVcIixcbiAgICBxOiBcIlxcdUQ4MzVcXHVERDk2XCIsXG4gICAgcjogXCJcXHVEODM1XFx1REQ5N1wiLFxuICAgIHM6IFwiXFx1RDgzNVxcdUREOThcIixcbiAgICB0OiBcIlxcdUQ4MzVcXHVERDk5XCIsXG4gICAgdTogXCJcXHVEODM1XFx1REQ5QVwiLFxuICAgIHY6IFwiXFx1RDgzNVxcdUREOUJcIixcbiAgICB3OiBcIlxcdUQ4MzVcXHVERDlDXCIsXG4gICAgeDogXCJcXHVEODM1XFx1REQ5RFwiLFxuICAgIHk6IFwiXFx1RDgzNVxcdUREOUVcIixcbiAgICB6OiBcIlxcdUQ4MzVcXHVERDlGXCJcbn07XG5leHBvcnRzLk1BVEhfU0FOU19TRVJJRiA9IHtcbiAgICBBOiBcIlxcdUQ4MzVcXHVEREEwXCIsXG4gICAgQjogXCJcXHVEODM1XFx1RERBMVwiLFxuICAgIEM6IFwiXFx1RDgzNVxcdUREQTJcIixcbiAgICBEOiBcIlxcdUQ4MzVcXHVEREEzXCIsXG4gICAgRTogXCJcXHVEODM1XFx1RERBNFwiLFxuICAgIEY6IFwiXFx1RDgzNVxcdUREQTVcIixcbiAgICBHOiBcIlxcdUQ4MzVcXHVEREE2XCIsXG4gICAgSDogXCJcXHVEODM1XFx1RERBN1wiLFxuICAgIEk6IFwiXFx1RDgzNVxcdUREQThcIixcbiAgICBKOiBcIlxcdUQ4MzVcXHVEREE5XCIsXG4gICAgSzogXCJcXHVEODM1XFx1RERBQVwiLFxuICAgIEw6IFwiXFx1RDgzNVxcdUREQUJcIixcbiAgICBNOiBcIlxcdUQ4MzVcXHVEREFDXCIsXG4gICAgTjogXCJcXHVEODM1XFx1RERBRFwiLFxuICAgIE86IFwiXFx1RDgzNVxcdUREQUVcIixcbiAgICBQOiBcIlxcdUQ4MzVcXHVEREFGXCIsXG4gICAgUTogXCJcXHVEODM1XFx1RERCMFwiLFxuICAgIFI6IFwiXFx1RDgzNVxcdUREQjFcIixcbiAgICBTOiBcIlxcdUQ4MzVcXHVEREIyXCIsXG4gICAgVDogXCJcXHVEODM1XFx1RERCM1wiLFxuICAgIFU6IFwiXFx1RDgzNVxcdUREQjRcIixcbiAgICBWOiBcIlxcdUQ4MzVcXHVEREI1XCIsXG4gICAgVzogXCJcXHVEODM1XFx1RERCNlwiLFxuICAgIFg6IFwiXFx1RDgzNVxcdUREQjdcIixcbiAgICBZOiBcIlxcdUQ4MzVcXHVEREI4XCIsXG4gICAgWjogXCJcXHVEODM1XFx1RERCOVwiLFxuICAgIGE6IFwiXFx1RDgzNVxcdUREQkFcIixcbiAgICBiOiBcIlxcdUQ4MzVcXHVEREJCXCIsXG4gICAgYzogXCJcXHVEODM1XFx1RERCQ1wiLFxuICAgIGQ6IFwiXFx1RDgzNVxcdUREQkRcIixcbiAgICBlOiBcIlxcdUQ4MzVcXHVEREJFXCIsXG4gICAgZjogXCJcXHVEODM1XFx1RERCRlwiLFxuICAgIGc6IFwiXFx1RDgzNVxcdUREQzBcIixcbiAgICBoOiBcIlxcdUQ4MzVcXHVEREMxXCIsXG4gICAgaTogXCJcXHVEODM1XFx1RERDMlwiLFxuICAgIGo6IFwiXFx1RDgzNVxcdUREQzNcIixcbiAgICBrOiBcIlxcdUQ4MzVcXHVEREM0XCIsXG4gICAgbDogXCJcXHVEODM1XFx1RERDNVwiLFxuICAgIG06IFwiXFx1RDgzNVxcdUREQzZcIixcbiAgICBuOiBcIlxcdUQ4MzVcXHVEREM3XCIsXG4gICAgbzogXCJcXHVEODM1XFx1RERDOFwiLFxuICAgIHA6IFwiXFx1RDgzNVxcdUREQzlcIixcbiAgICBxOiBcIlxcdUQ4MzVcXHVERENBXCIsXG4gICAgcjogXCJcXHVEODM1XFx1RERDQlwiLFxuICAgIHM6IFwiXFx1RDgzNVxcdUREQ0NcIixcbiAgICB0OiBcIlxcdUQ4MzVcXHVERENEXCIsXG4gICAgdTogXCJcXHVEODM1XFx1RERDRVwiLFxuICAgIHY6IFwiXFx1RDgzNVxcdUREQ0ZcIixcbiAgICB3OiBcIlxcdUQ4MzVcXHVEREQwXCIsXG4gICAgeDogXCJcXHVEODM1XFx1REREMVwiLFxuICAgIHk6IFwiXFx1RDgzNVxcdURERDJcIixcbiAgICB6OiBcIlxcdUQ4MzVcXHVEREQzXCJcbn07XG5leHBvcnRzLk1BVEhfQk9MRF9TQU5TX1NFUklGID0ge1xuICAgIEE6IFwiXFx1RDgzNVxcdURERDRcIixcbiAgICBCOiBcIlxcdUQ4MzVcXHVEREQ1XCIsXG4gICAgQzogXCJcXHVEODM1XFx1RERENlwiLFxuICAgIEQ6IFwiXFx1RDgzNVxcdURERDdcIixcbiAgICBFOiBcIlxcdUQ4MzVcXHVEREQ4XCIsXG4gICAgRjogXCJcXHVEODM1XFx1REREOVwiLFxuICAgIEc6IFwiXFx1RDgzNVxcdUREREFcIixcbiAgICBIOiBcIlxcdUQ4MzVcXHVERERCXCIsXG4gICAgSTogXCJcXHVEODM1XFx1REREQ1wiLFxuICAgIEo6IFwiXFx1RDgzNVxcdURERERcIixcbiAgICBLOiBcIlxcdUQ4MzVcXHVERERFXCIsXG4gICAgTDogXCJcXHVEODM1XFx1RERERlwiLFxuICAgIE06IFwiXFx1RDgzNVxcdURERTBcIixcbiAgICBOOiBcIlxcdUQ4MzVcXHVEREUxXCIsXG4gICAgTzogXCJcXHVEODM1XFx1RERFMlwiLFxuICAgIFA6IFwiXFx1RDgzNVxcdURERTNcIixcbiAgICBROiBcIlxcdUQ4MzVcXHVEREU0XCIsXG4gICAgUjogXCJcXHVEODM1XFx1RERFNVwiLFxuICAgIFM6IFwiXFx1RDgzNVxcdURERTZcIixcbiAgICBUOiBcIlxcdUQ4MzVcXHVEREU3XCIsXG4gICAgVTogXCJcXHVEODM1XFx1RERFOFwiLFxuICAgIFY6IFwiXFx1RDgzNVxcdURERTlcIixcbiAgICBXOiBcIlxcdUQ4MzVcXHVEREVBXCIsXG4gICAgWDogXCJcXHVEODM1XFx1RERFQlwiLFxuICAgIFk6IFwiXFx1RDgzNVxcdURERUNcIixcbiAgICBaOiBcIlxcdUQ4MzVcXHVEREVEXCIsXG4gICAgYTogXCJcXHVEODM1XFx1RERFRVwiLFxuICAgIGI6IFwiXFx1RDgzNVxcdURERUZcIixcbiAgICBjOiBcIlxcdUQ4MzVcXHVEREYwXCIsXG4gICAgZDogXCJcXHVEODM1XFx1RERGMVwiLFxuICAgIGU6IFwiXFx1RDgzNVxcdURERjJcIixcbiAgICBmOiBcIlxcdUQ4MzVcXHVEREYzXCIsXG4gICAgZzogXCJcXHVEODM1XFx1RERGNFwiLFxuICAgIGg6IFwiXFx1RDgzNVxcdURERjVcIixcbiAgICBpOiBcIlxcdUQ4MzVcXHVEREY2XCIsXG4gICAgajogXCJcXHVEODM1XFx1RERGN1wiLFxuICAgIGs6IFwiXFx1RDgzNVxcdURERjhcIixcbiAgICBsOiBcIlxcdUQ4MzVcXHVEREY5XCIsXG4gICAgbTogXCJcXHVEODM1XFx1RERGQVwiLFxuICAgIG46IFwiXFx1RDgzNVxcdURERkJcIixcbiAgICBvOiBcIlxcdUQ4MzVcXHVEREZDXCIsXG4gICAgcDogXCJcXHVEODM1XFx1RERGRFwiLFxuICAgIHE6IFwiXFx1RDgzNVxcdURERkVcIixcbiAgICByOiBcIlxcdUQ4MzVcXHVEREZGXCIsXG4gICAgczogXCJcXHVEODM1XFx1REUwMFwiLFxuICAgIHQ6IFwiXFx1RDgzNVxcdURFMDFcIixcbiAgICB1OiBcIlxcdUQ4MzVcXHVERTAyXCIsXG4gICAgdjogXCJcXHVEODM1XFx1REUwM1wiLFxuICAgIHc6IFwiXFx1RDgzNVxcdURFMDRcIixcbiAgICB4OiBcIlxcdUQ4MzVcXHVERTA1XCIsXG4gICAgeTogXCJcXHVEODM1XFx1REUwNlwiLFxuICAgIHo6IFwiXFx1RDgzNVxcdURFMDdcIlxufTtcbmV4cG9ydHMuTUFUSF9JVEFMSUNfU0FOU19TRVJJRiA9IHtcbiAgICBBOiBcIlxcdUQ4MzVcXHVERTA4XCIsXG4gICAgQjogXCJcXHVEODM1XFx1REUwOVwiLFxuICAgIEM6IFwiXFx1RDgzNVxcdURFMEFcIixcbiAgICBEOiBcIlxcdUQ4MzVcXHVERTBCXCIsXG4gICAgRTogXCJcXHVEODM1XFx1REUwQ1wiLFxuICAgIEY6IFwiXFx1RDgzNVxcdURFMERcIixcbiAgICBHOiBcIlxcdUQ4MzVcXHVERTBFXCIsXG4gICAgSDogXCJcXHVEODM1XFx1REUwRlwiLFxuICAgIEk6IFwiXFx1RDgzNVxcdURFMTBcIixcbiAgICBKOiBcIlxcdUQ4MzVcXHVERTExXCIsXG4gICAgSzogXCJcXHVEODM1XFx1REUxMlwiLFxuICAgIEw6IFwiXFx1RDgzNVxcdURFMTNcIixcbiAgICBNOiBcIlxcdUQ4MzVcXHVERTE0XCIsXG4gICAgTjogXCJcXHVEODM1XFx1REUxNVwiLFxuICAgIE86IFwiXFx1RDgzNVxcdURFMTZcIixcbiAgICBQOiBcIlxcdUQ4MzVcXHVERTE3XCIsXG4gICAgUTogXCJcXHVEODM1XFx1REUxOFwiLFxuICAgIFI6IFwiXFx1RDgzNVxcdURFMTlcIixcbiAgICBTOiBcIlxcdUQ4MzVcXHVERTFBXCIsXG4gICAgVDogXCJcXHVEODM1XFx1REUxQlwiLFxuICAgIFU6IFwiXFx1RDgzNVxcdURFMUNcIixcbiAgICBWOiBcIlxcdUQ4MzVcXHVERTFEXCIsXG4gICAgVzogXCJcXHVEODM1XFx1REUxRVwiLFxuICAgIFg6IFwiXFx1RDgzNVxcdURFMUZcIixcbiAgICBZOiBcIlxcdUQ4MzVcXHVERTIwXCIsXG4gICAgWjogXCJcXHVEODM1XFx1REUyMVwiLFxuICAgIGE6IFwiXFx1RDgzNVxcdURFMjJcIixcbiAgICBiOiBcIlxcdUQ4MzVcXHVERTIzXCIsXG4gICAgYzogXCJcXHVEODM1XFx1REUyNFwiLFxuICAgIGQ6IFwiXFx1RDgzNVxcdURFMjVcIixcbiAgICBlOiBcIlxcdUQ4MzVcXHVERTI2XCIsXG4gICAgZjogXCJcXHVEODM1XFx1REUyN1wiLFxuICAgIGc6IFwiXFx1RDgzNVxcdURFMjhcIixcbiAgICBoOiBcIlxcdUQ4MzVcXHVERTI5XCIsXG4gICAgaTogXCJcXHVEODM1XFx1REUyQVwiLFxuICAgIGo6IFwiXFx1RDgzNVxcdURFMkJcIixcbiAgICBrOiBcIlxcdUQ4MzVcXHVERTJDXCIsXG4gICAgbDogXCJcXHVEODM1XFx1REUyRFwiLFxuICAgIG06IFwiXFx1RDgzNVxcdURFMkVcIixcbiAgICBuOiBcIlxcdUQ4MzVcXHVERTJGXCIsXG4gICAgbzogXCJcXHVEODM1XFx1REUzMFwiLFxuICAgIHA6IFwiXFx1RDgzNVxcdURFMzFcIixcbiAgICBxOiBcIlxcdUQ4MzVcXHVERTMyXCIsXG4gICAgcjogXCJcXHVEODM1XFx1REUzM1wiLFxuICAgIHM6IFwiXFx1RDgzNVxcdURFMzRcIixcbiAgICB0OiBcIlxcdUQ4MzVcXHVERTM1XCIsXG4gICAgdTogXCJcXHVEODM1XFx1REUzNlwiLFxuICAgIHY6IFwiXFx1RDgzNVxcdURFMzdcIixcbiAgICB3OiBcIlxcdUQ4MzVcXHVERTM4XCIsXG4gICAgeDogXCJcXHVEODM1XFx1REUzOVwiLFxuICAgIHk6IFwiXFx1RDgzNVxcdURFM0FcIixcbiAgICB6OiBcIlxcdUQ4MzVcXHVERTNCXCJcbn07XG5leHBvcnRzLk1BVEhfQk9MRF9JVEFMSUNfU0FOU19TRVJJRiA9IHtcbiAgICBBOiBcIlxcdUQ4MzVcXHVERTNDXCIsXG4gICAgQjogXCJcXHVEODM1XFx1REUzRFwiLFxuICAgIEM6IFwiXFx1RDgzNVxcdURFM0VcIixcbiAgICBEOiBcIlxcdUQ4MzVcXHVERTNGXCIsXG4gICAgRTogXCJcXHVEODM1XFx1REU0MFwiLFxuICAgIEY6IFwiXFx1RDgzNVxcdURFNDFcIixcbiAgICBHOiBcIlxcdUQ4MzVcXHVERTQyXCIsXG4gICAgSDogXCJcXHVEODM1XFx1REU0M1wiLFxuICAgIEk6IFwiXFx1RDgzNVxcdURFNDRcIixcbiAgICBKOiBcIlxcdUQ4MzVcXHVERTQ1XCIsXG4gICAgSzogXCJcXHVEODM1XFx1REU0NlwiLFxuICAgIEw6IFwiXFx1RDgzNVxcdURFNDdcIixcbiAgICBNOiBcIlxcdUQ4MzVcXHVERTQ4XCIsXG4gICAgTjogXCJcXHVEODM1XFx1REU0OVwiLFxuICAgIE86IFwiXFx1RDgzNVxcdURFNEFcIixcbiAgICBQOiBcIlxcdUQ4MzVcXHVERTRCXCIsXG4gICAgUTogXCJcXHVEODM1XFx1REU0Q1wiLFxuICAgIFI6IFwiXFx1RDgzNVxcdURFNERcIixcbiAgICBTOiBcIlxcdUQ4MzVcXHVERTRFXCIsXG4gICAgVDogXCJcXHVEODM1XFx1REU0RlwiLFxuICAgIFU6IFwiXFx1RDgzNVxcdURFNTBcIixcbiAgICBWOiBcIlxcdUQ4MzVcXHVERTUxXCIsXG4gICAgVzogXCJcXHVEODM1XFx1REU1MlwiLFxuICAgIFg6IFwiXFx1RDgzNVxcdURFNTNcIixcbiAgICBZOiBcIlxcdUQ4MzVcXHVERTU0XCIsXG4gICAgWjogXCJcXHVEODM1XFx1REU1NVwiLFxuICAgIGE6IFwiXFx1RDgzNVxcdURFNTZcIixcbiAgICBiOiBcIlxcdUQ4MzVcXHVERTU3XCIsXG4gICAgYzogXCJcXHVEODM1XFx1REU1OFwiLFxuICAgIGQ6IFwiXFx1RDgzNVxcdURFNTlcIixcbiAgICBlOiBcIlxcdUQ4MzVcXHVERTVBXCIsXG4gICAgZjogXCJcXHVEODM1XFx1REU1QlwiLFxuICAgIGc6IFwiXFx1RDgzNVxcdURFNUNcIixcbiAgICBoOiBcIlxcdUQ4MzVcXHVERTVEXCIsXG4gICAgaTogXCJcXHVEODM1XFx1REU1RVwiLFxuICAgIGo6IFwiXFx1RDgzNVxcdURFNUZcIixcbiAgICBrOiBcIlxcdUQ4MzVcXHVERTYwXCIsXG4gICAgbDogXCJcXHVEODM1XFx1REU2MVwiLFxuICAgIG06IFwiXFx1RDgzNVxcdURFNjJcIixcbiAgICBuOiBcIlxcdUQ4MzVcXHVERTYzXCIsXG4gICAgbzogXCJcXHVEODM1XFx1REU2NFwiLFxuICAgIHA6IFwiXFx1RDgzNVxcdURFNjVcIixcbiAgICBxOiBcIlxcdUQ4MzVcXHVERTY2XCIsXG4gICAgcjogXCJcXHVEODM1XFx1REU2N1wiLFxuICAgIHM6IFwiXFx1RDgzNVxcdURFNjhcIixcbiAgICB0OiBcIlxcdUQ4MzVcXHVERTY5XCIsXG4gICAgdTogXCJcXHVEODM1XFx1REU2QVwiLFxuICAgIHY6IFwiXFx1RDgzNVxcdURFNkJcIixcbiAgICB3OiBcIlxcdUQ4MzVcXHVERTZDXCIsXG4gICAgeDogXCJcXHVEODM1XFx1REU2RFwiLFxuICAgIHk6IFwiXFx1RDgzNVxcdURFNkVcIixcbiAgICB6OiBcIlxcdUQ4MzVcXHVERTZGXCJcbn07XG5leHBvcnRzLk1BVEhfVFQgPSB7XG4gICAgQTogXCJcXHVEODM1XFx1REU3MFwiLFxuICAgIEI6IFwiXFx1RDgzNVxcdURFNzFcIixcbiAgICBDOiBcIlxcdUQ4MzVcXHVERTcyXCIsXG4gICAgRDogXCJcXHVEODM1XFx1REU3M1wiLFxuICAgIEU6IFwiXFx1RDgzNVxcdURFNzRcIixcbiAgICBGOiBcIlxcdUQ4MzVcXHVERTc1XCIsXG4gICAgRzogXCJcXHVEODM1XFx1REU3NlwiLFxuICAgIEg6IFwiXFx1RDgzNVxcdURFNzdcIixcbiAgICBJOiBcIlxcdUQ4MzVcXHVERTc4XCIsXG4gICAgSjogXCJcXHVEODM1XFx1REU3OVwiLFxuICAgIEs6IFwiXFx1RDgzNVxcdURFN0FcIixcbiAgICBMOiBcIlxcdUQ4MzVcXHVERTdCXCIsXG4gICAgTTogXCJcXHVEODM1XFx1REU3Q1wiLFxuICAgIE46IFwiXFx1RDgzNVxcdURFN0RcIixcbiAgICBPOiBcIlxcdUQ4MzVcXHVERTdFXCIsXG4gICAgUDogXCJcXHVEODM1XFx1REU3RlwiLFxuICAgIFE6IFwiXFx1RDgzNVxcdURFODBcIixcbiAgICBSOiBcIlxcdUQ4MzVcXHVERTgxXCIsXG4gICAgUzogXCJcXHVEODM1XFx1REU4MlwiLFxuICAgIFQ6IFwiXFx1RDgzNVxcdURFODNcIixcbiAgICBVOiBcIlxcdUQ4MzVcXHVERTg0XCIsXG4gICAgVjogXCJcXHVEODM1XFx1REU4NVwiLFxuICAgIFc6IFwiXFx1RDgzNVxcdURFODZcIixcbiAgICBYOiBcIlxcdUQ4MzVcXHVERTg3XCIsXG4gICAgWTogXCJcXHVEODM1XFx1REU4OFwiLFxuICAgIFo6IFwiXFx1RDgzNVxcdURFODlcIixcbiAgICBhOiBcIlxcdUQ4MzVcXHVERThBXCIsXG4gICAgYjogXCJcXHVEODM1XFx1REU4QlwiLFxuICAgIGM6IFwiXFx1RDgzNVxcdURFOENcIixcbiAgICBkOiBcIlxcdUQ4MzVcXHVERThEXCIsXG4gICAgZTogXCJcXHVEODM1XFx1REU4RVwiLFxuICAgIGY6IFwiXFx1RDgzNVxcdURFOEZcIixcbiAgICBnOiBcIlxcdUQ4MzVcXHVERTkwXCIsXG4gICAgaDogXCJcXHVEODM1XFx1REU5MVwiLFxuICAgIGk6IFwiXFx1RDgzNVxcdURFOTJcIixcbiAgICBqOiBcIlxcdUQ4MzVcXHVERTkzXCIsXG4gICAgazogXCJcXHVEODM1XFx1REU5NFwiLFxuICAgIGw6IFwiXFx1RDgzNVxcdURFOTVcIixcbiAgICBtOiBcIlxcdUQ4MzVcXHVERTk2XCIsXG4gICAgbjogXCJcXHVEODM1XFx1REU5N1wiLFxuICAgIG86IFwiXFx1RDgzNVxcdURFOThcIixcbiAgICBwOiBcIlxcdUQ4MzVcXHVERTk5XCIsXG4gICAgcTogXCJcXHVEODM1XFx1REU5QVwiLFxuICAgIHI6IFwiXFx1RDgzNVxcdURFOUJcIixcbiAgICBzOiBcIlxcdUQ4MzVcXHVERTlDXCIsXG4gICAgdDogXCJcXHVEODM1XFx1REU5RFwiLFxuICAgIHU6IFwiXFx1RDgzNVxcdURFOUVcIixcbiAgICB2OiBcIlxcdUQ4MzVcXHVERTlGXCIsXG4gICAgdzogXCJcXHVEODM1XFx1REVBMFwiLFxuICAgIHg6IFwiXFx1RDgzNVxcdURFQTFcIixcbiAgICB5OiBcIlxcdUQ4MzVcXHVERUEyXCIsXG4gICAgejogXCJcXHVEODM1XFx1REVBM1wiXG59O1xuLy8gdG9kbzogZ3JlZWtcbi8vIHRvZG86IGRpZ2l0c1xuLy8gPGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VuaWNvZGVfc3Vic2NyaXB0c19hbmRfc3VwZXJzY3JpcHRzPlxuZXhwb3J0cy5TVVBFUlNDUklQVFMgPSB7XG4gICAgXCIwXCI6IFwiXFx1MjA3MFwiLFxuICAgIFwiMVwiOiBcIlxcdTAwQjlcIixcbiAgICBcIjJcIjogXCJcXHUwMEIyXCIsXG4gICAgXCIzXCI6IFwiXFx1MDBCM1wiLFxuICAgIFwiNFwiOiBcIlxcdTIwNzRcIixcbiAgICBcIjVcIjogXCJcXHUyMDc1XCIsXG4gICAgXCI2XCI6IFwiXFx1MjA3NlwiLFxuICAgIFwiN1wiOiBcIlxcdTIwNzdcIixcbiAgICBcIjhcIjogXCJcXHUyMDc4XCIsXG4gICAgXCI5XCI6IFwiXFx1MjA3OVwiLFxuICAgIFwiK1wiOiBcIlxcdTIwN0FcIixcbiAgICBcIi1cIjogXCJcXHUyMDdCXCIsXG4gICAgXCI9XCI6IFwiXFx1MjA3Q1wiLFxuICAgIFwiKFwiOiBcIlxcdTIwN0RcIixcbiAgICBcIilcIjogXCJcXHUyMDdFXCIsXG4gICAgQTogXCJcXHUxRDJDXCIsXG4gICAgQjogXCJcXHUxRDJFXCIsXG4gICAgQzogXCJcXHVBN0YyXCIsXG4gICAgRDogXCJcXHUxRDMwXCIsXG4gICAgRTogXCJcXHUxRDMxXCIsXG4gICAgRjogXCJcXHVBN0YzXCIsXG4gICAgRzogXCJcXHUxRDMzXCIsXG4gICAgSDogXCJcXHUxRDM0XCIsXG4gICAgSTogXCJcXHUxRDM1XCIsXG4gICAgSjogXCJcXHUxRDM2XCIsXG4gICAgSzogXCJcXHUxRDM3XCIsXG4gICAgTDogXCJcXHUxRDM4XCIsXG4gICAgTTogXCJcXHUxRDM5XCIsXG4gICAgTjogXCJcXHUxRDNBXCIsXG4gICAgTzogXCJcXHUxRDNDXCIsXG4gICAgUDogXCJcXHUxRDNFXCIsXG4gICAgUTogXCJcXHVBN0Y0XCIsXG4gICAgUjogXCJcXHUxRDNGXCIsXG4gICAgVDogXCJcXHUxRDQwXCIsXG4gICAgVTogXCJcXHUxRDQxXCIsXG4gICAgVjogXCJcXHUyQzdEXCIsXG4gICAgVzogXCJcXHUxRDQyXCIsXG4gICAgYTogXCJcXHUxRDQzXCIsXG4gICAgYjogXCJcXHUxRDQ3XCIsXG4gICAgYzogXCJcXHUxRDlDXCIsXG4gICAgZDogXCJcXHUxRDQ4XCIsXG4gICAgZTogXCJcXHUxRDQ5XCIsXG4gICAgZjogXCJcXHUxREEwXCIsXG4gICAgZzogXCJcXHUxRDREXCIsXG4gICAgaDogXCJcXHUwMkIwXCIsXG4gICAgaTogXCJcXHUyMDcxXCIsXG4gICAgajogXCJcXHUwMkIyXCIsXG4gICAgazogXCJcXHUxRDRGXCIsXG4gICAgbDogXCJcXHUwMkUxXCIsXG4gICAgbTogXCJcXHUxRDUwXCIsXG4gICAgbjogXCJcXHUyMDdGXCIsXG4gICAgbzogXCJcXHUxRDUyXCIsXG4gICAgcDogXCJcXHUxRDU2XCIsXG4gICAgcTogXCJcXHVEODAxXFx1REZBNVwiLFxuICAgIHI6IFwiXFx1MDJCM1wiLFxuICAgIHM6IFwiXFx1MDJFMlwiLFxuICAgIHQ6IFwiXFx1MUQ1N1wiLFxuICAgIHU6IFwiXFx1MUQ1OFwiLFxuICAgIHY6IFwiXFx1MUQ1QlwiLFxuICAgIHc6IFwiXFx1MDJCN1wiLFxuICAgIHg6IFwiXFx1MDJFM1wiLFxuICAgIHk6IFwiXFx1MDJCOFwiLFxuICAgIHo6IFwiXFx1MURCQlwiXG59O1xuZXhwb3J0cy5TVUJTQ1JJUFRTID0ge1xuICAgIFwiMFwiOiBcIlxcdTIwODBcIixcbiAgICBcIjFcIjogXCJcXHUyMDgxXCIsXG4gICAgXCIyXCI6IFwiXFx1MjA4MlwiLFxuICAgIFwiM1wiOiBcIlxcdTIwODNcIixcbiAgICBcIjRcIjogXCJcXHUyMDg0XCIsXG4gICAgXCI1XCI6IFwiXFx1MjA4NVwiLFxuICAgIFwiNlwiOiBcIlxcdTIwODZcIixcbiAgICBcIjdcIjogXCJcXHUyMDg3XCIsXG4gICAgXCI4XCI6IFwiXFx1MjA4OFwiLFxuICAgIFwiOVwiOiBcIlxcdTIwODlcIixcbiAgICBcIitcIjogXCJcXHUyMDhBXCIsXG4gICAgXCItXCI6IFwiXFx1MjA4QlwiLFxuICAgIFwiPVwiOiBcIlxcdTIwOENcIixcbiAgICBcIihcIjogXCJcXHUyMDhEXCIsXG4gICAgXCIpXCI6IFwiXFx1MjA4RVwiLFxuICAgIGE6IFwiXFx1MjA5MFwiLFxuICAgIGU6IFwiXFx1MjA5MVwiLFxuICAgIGg6IFwiXFx1MjA5NVwiLFxuICAgIGk6IFwiXFx1MUQ2MlwiLFxuICAgIGo6IFwiXFx1MkM3Q1wiLFxuICAgIGs6IFwiXFx1MjA5NlwiLFxuICAgIGw6IFwiXFx1MjA5N1wiLFxuICAgIG06IFwiXFx1MjA5OFwiLFxuICAgIG46IFwiXFx1MjA5OVwiLFxuICAgIG86IFwiXFx1MjA5MlwiLFxuICAgIHA6IFwiXFx1MjA5QVwiLFxuICAgIHI6IFwiXFx1MUQ2M1wiLFxuICAgIHM6IFwiXFx1MjA5QlwiLFxuICAgIHQ6IFwiXFx1MjA5Q1wiLFxuICAgIHU6IFwiXFx1MUQ2NFwiLFxuICAgIHY6IFwiXFx1MUQ2NVwiLFxuICAgIHg6IFwiXFx1MjA5M1wiXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICAgIGlmICghbSkgcmV0dXJuIG87XG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gICAgdHJ5IHtcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gICAgfVxuICAgIHJldHVybiBhcjtcbn07XG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy50eXBlc2V0ID0gdm9pZCAwO1xudmFyIGZvbnRzXzEgPSByZXF1aXJlKFwiLi9mb250c1wiKTtcbnZhciBGb250VHlwZTtcbihmdW5jdGlvbiAoRm9udFR5cGUpIHtcbiAgICBGb250VHlwZVtGb250VHlwZVtcIlJlZ3VsYXJcIl0gPSAxXSA9IFwiUmVndWxhclwiO1xuICAgIEZvbnRUeXBlW0ZvbnRUeXBlW1wiU3VwZXJzY3JpcHRcIl0gPSAyXSA9IFwiU3VwZXJzY3JpcHRcIjtcbiAgICBGb250VHlwZVtGb250VHlwZVtcIlN1YnNjcmlwdFwiXSA9IDRdID0gXCJTdWJzY3JpcHRcIjtcbiAgICBGb250VHlwZVtGb250VHlwZVtcIkJvbGRcIl0gPSA4XSA9IFwiQm9sZFwiO1xuICAgIEZvbnRUeXBlW0ZvbnRUeXBlW1wiSXRhbGljXCJdID0gMTZdID0gXCJJdGFsaWNcIjtcbiAgICBGb250VHlwZVtGb250VHlwZVtcIlNhbnNTZXJpZlwiXSA9IDMyXSA9IFwiU2Fuc1NlcmlmXCI7XG59KShGb250VHlwZSB8fCAoRm9udFR5cGUgPSB7fSkpO1xudmFyIHNlbGVjdEZvbnQgPSBmdW5jdGlvbiAoc3RyLCBmb250KSB7XG4gICAgdmFyIHJlcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjaGFycyA9IF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZChzdHIpLCBmYWxzZSkubWFwKGZ1bmN0aW9uIChjaCkge1xuICAgICAgICAgICAgc3dpdGNoIChmb250KSB7XG4gICAgICAgICAgICAgICAgY2FzZSBGb250VHlwZS5SZWd1bGFyOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gL1thLXpdL2kudGVzdChjaCkgPyBmb250c18xLk1BVEhfSVRBTElDW2NoXSA6IGNoO1xuICAgICAgICAgICAgICAgIGNhc2UgRm9udFR5cGUuU3VwZXJzY3JpcHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmb250c18xLlNVUEVSU0NSSVBUU1tjaF07XG4gICAgICAgICAgICAgICAgY2FzZSBGb250VHlwZS5TdWJzY3JpcHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmb250c18xLlNVQlNDUklQVFNbY2hdO1xuICAgICAgICAgICAgICAgIGNhc2UgRm9udFR5cGUuU2Fuc1NlcmlmOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9udHNfMS5NQVRIX1NBTlNfU0VSSUZbY2hdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNoYXJzLmluY2x1ZGVzKHVuZGVmaW5lZCkpXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gY2hhcnMuam9pbihcIlwiKTtcbiAgICB9KSgpO1xuICAgIGlmIChyZXMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgdGhyb3cgXCJpbnZhbGlkIHN0cmluZyAoXCIuY29uY2F0KHN0ciwgXCIpXCIpO1xuICAgIHJldHVybiByZXM7XG59O1xudmFyIGNvbXBvc2l0ZUZvbnQgPSBmdW5jdGlvbiAobGhzLCByaHMpIHtcbiAgICBpZiAobGhzID09IEZvbnRUeXBlLlJlZ3VsYXIpXG4gICAgICAgIHJldHVybiByaHM7XG4gICAgaWYgKHJocyA9PSBGb250VHlwZS5SZWd1bGFyKVxuICAgICAgICByZXR1cm4gbGhzO1xuICAgIGlmIChsaHMgPT0gcmhzKVxuICAgICAgICByZXR1cm4gbGhzO1xuICAgIHZhciBjb21wb3NpdGUgPSBsaHMgfCByaHM7XG4gICAgaWYgKGNvbXBvc2l0ZSA9PSAoRm9udFR5cGUuQm9sZCB8IEZvbnRUeXBlLkl0YWxpYykpXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgdGhyb3cgXCJpbnZhbGlkIGZvbnRcIjtcbn07XG52YXIgdHlwZXNldCA9IGZ1bmN0aW9uIChleHByKSB7XG4gICAgdmFyIHRva2VucyA9IC9cXFxcW2EtekEtWl0rfFxcXFwufFxcXnxffFxce3xcXH18XFxzK3wuL2c7XG4gICAgdmFyIHJlcyA9IFwiXCI7XG4gICAgdmFyIG1vZGUgPSBbRm9udFR5cGUuUmVndWxhcl07XG4gICAgdmFyIGxhc3RNb2RlID0gbnVsbDtcbiAgICB2YXIgbTtcbiAgICB3aGlsZSAoKG0gPSB0b2tlbnMuZXhlYyhleHByKSkpIHtcbiAgICAgICAgdmFyIHRva2VuID0gbVswXTtcbiAgICAgICAgaWYgKHRva2VuLnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgICAgICAgcmVzICs9IHRva2VuO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0b2tlblswXSkge1xuICAgICAgICAgICAgY2FzZSBcIl5cIjpcbiAgICAgICAgICAgICAgICBsYXN0TW9kZSA9IEZvbnRUeXBlLlN1cGVyc2NyaXB0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIl9cIjpcbiAgICAgICAgICAgICAgICBsYXN0TW9kZSA9IEZvbnRUeXBlLlN1YnNjcmlwdDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ7XCI6XG4gICAgICAgICAgICAgICAgbW9kZS5wdXNoKGxhc3RNb2RlKTtcbiAgICAgICAgICAgICAgICBsYXN0TW9kZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwifVwiOlxuICAgICAgICAgICAgICAgIG1vZGUucG9wKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiXFxcXFwiOlxuICAgICAgICAgICAgICAgIC8vIOW8leaVsOOCkuWPluOCi+WItuW+oee2tOOBr+mbo+OBl+OBhOOBreOBiFxuICAgICAgICAgICAgICAgIC8vIGxhc3RNb2RlIOOBv+OBn+OBhOOBq+OBmeOCjOOBsOOBp+OBjeOCi+OBruOBi+OBqlxuICAgICAgICAgICAgICAgIHJlcyArPSBzZWxlY3RGb250KHRva2VuLnN1YnN0cigxKSwgRm9udFR5cGUuU2Fuc1NlcmlmKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmVzICs9IHNlbGVjdEZvbnQodG9rZW4sIGxhc3RNb2RlICE9PSBudWxsICYmIGxhc3RNb2RlICE9PSB2b2lkIDAgPyBsYXN0TW9kZSA6IG1vZGVbbW9kZS5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgbGFzdE1vZGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiXFxcIlwiLmNvbmNhdChleHByLCBcIlxcXCIgPT4gXFxcIlwiKS5jb25jYXQocmVzLCBcIlxcXCJcIikpO1xuICAgIHJldHVybiByZXM7XG59O1xuZXhwb3J0cy50eXBlc2V0ID0gdHlwZXNldDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgdHlwZXNldF8xID0gcmVxdWlyZShcIi4vdHlwZXNldFwiKTtcbnZhciBiYXNlNjRfMSA9IHJlcXVpcmUoXCIuL2Jhc2U2NFwiKTtcbnZhciBpbnB1dCA9ICgwLCBiYXNlNjRfMS5mcm9tQmFzZTY0KShcIlwiKTtcbnZhciBvdXRwdXQgPSAoMCwgdHlwZXNldF8xLnR5cGVzZXQpKGlucHV0KTtcbmRvY3VtZW50LndyaXRlKCgwLCBiYXNlNjRfMS50b0Jhc2U2NCkob3V0cHV0KSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=