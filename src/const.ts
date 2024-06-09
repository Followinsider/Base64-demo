import { Base64Table, CustomAsciiObj } from "./interface";

export const ascii7BitKeyBySymbol: CustomAsciiObj = {
  "0": {
    decimal: 48,
    binary: "00110000",
    symbol: "0",
  },
  "1": {
    decimal: 49,
    binary: "00110001",
    symbol: "1",
  },
  "2": {
    decimal: 50,
    binary: "00110010",
    symbol: "2",
  },
  "3": {
    decimal: 51,
    binary: "00110011",
    symbol: "3",
  },
  "4": {
    decimal: 52,
    binary: "00110100",
    symbol: "4",
  },
  "5": {
    decimal: 53,
    binary: "00110101",
    symbol: "5",
  },
  "6": {
    decimal: 54,
    binary: "00110110",
    symbol: "6",
  },
  "7": {
    decimal: 55,
    binary: "00110111",
    symbol: "7",
  },
  "8": {
    decimal: 56,
    binary: "00111000",
    symbol: "8",
  },
  "9": {
    decimal: 57,
    binary: "00111001",
    symbol: "9",
  },
  NUL: {
    decimal: 0,
    binary: "00000000",
    symbol: "NUL",
  },
  SOH: {
    decimal: 1,
    binary: "00000001",
    symbol: "SOH",
  },
  STX: {
    decimal: 2,
    binary: "00000010",
    symbol: "STX",
  },
  ETX: {
    decimal: 3,
    binary: "00000011",
    symbol: "ETX",
  },
  EOT: {
    decimal: 4,
    binary: "00000100",
    symbol: "EOT",
  },
  ENQ: {
    decimal: 5,
    binary: "00000101",
    symbol: "ENQ",
  },
  ACK: {
    decimal: 6,
    binary: "00000110",
    symbol: "ACK",
  },
  BEL: {
    decimal: 7,
    binary: "00000111",
    symbol: "BEL",
  },
  BS: {
    decimal: 8,
    binary: "00001000",
    symbol: "BS",
  },
  TAB: {
    decimal: 9,
    binary: "00001001",
    symbol: "TAB",
  },
  LF: {
    decimal: 10,
    binary: "00001010",
    symbol: "LF",
  },
  VT: {
    decimal: 11,
    binary: "00001011",
    symbol: "VT",
  },
  FF: {
    decimal: 12,
    binary: "00001100",
    symbol: "FF",
  },
  CR: {
    decimal: 13,
    binary: "00001101",
    symbol: "CR",
  },
  SO: {
    decimal: 14,
    binary: "00001110",
    symbol: "SO",
  },
  SI: {
    decimal: 15,
    binary: "00001111",
    symbol: "SI",
  },
  DLE: {
    decimal: 16,
    binary: "00010000",
    symbol: "DLE",
  },
  DC1: {
    decimal: 17,
    binary: "00010001",
    symbol: "DC1",
  },
  DC2: {
    decimal: 18,
    binary: "00010010",
    symbol: "DC2",
  },
  DC3: {
    decimal: 19,
    binary: "00010011",
    symbol: "DC3",
  },
  DC4: {
    decimal: 20,
    binary: "00010100",
    symbol: "DC4",
  },
  NAK: {
    decimal: 21,
    binary: "00010101",
    symbol: "NAK",
  },
  SYN: {
    decimal: 22,
    binary: "00010110",
    symbol: "SYN",
  },
  ETB: {
    decimal: 23,
    binary: "00010111",
    symbol: "ETB",
  },
  CAN: {
    decimal: 24,
    binary: "00011000",
    symbol: "CAN",
  },
  EM: {
    decimal: 25,
    binary: "00011001",
    symbol: "EM",
  },
  SUB: {
    decimal: 26,
    binary: "00011010",
    symbol: "SUB",
  },
  ESC: {
    decimal: 27,
    binary: "00011011",
    symbol: "ESC",
  },
  FS: {
    decimal: 28,
    binary: "00011100",
    symbol: "FS",
  },
  GS: {
    decimal: 29,
    binary: "00011101",
    symbol: "GS",
  },
  RS: {
    decimal: 30,
    binary: "00011110",
    symbol: "RS",
  },
  US: {
    decimal: 31,
    binary: "00011111",
    symbol: "US",
  },
  " ": {
    decimal: 32,
    binary: "00100000",
    symbol: " ",
  },
  "!": {
    decimal: 33,
    binary: "00100001",
    symbol: "!",
  },
  '"': {
    decimal: 34,
    binary: "00100010",
    symbol: '"',
  },
  "#": {
    decimal: 35,
    binary: "00100011",
    symbol: "#",
  },
  $: {
    decimal: 36,
    binary: "00100100",
    symbol: "$",
  },
  "%": {
    decimal: 37,
    binary: "00100101",
    symbol: "%",
  },
  "&": {
    decimal: 38,
    binary: "00100110",
    symbol: "&",
  },
  "'": {
    decimal: 39,
    binary: "00100111",
    symbol: "'",
  },
  "(": {
    decimal: 40,
    binary: "00101000",
    symbol: "(",
  },
  ")": {
    decimal: 41,
    binary: "00101001",
    symbol: ")",
  },
  "*": {
    decimal: 42,
    binary: "00101010",
    symbol: "*",
  },
  "+": {
    decimal: 43,
    binary: "00101011",
    symbol: "+",
  },
  ",": {
    decimal: 44,
    binary: "00101100",
    symbol: ",",
  },
  "-": {
    decimal: 45,
    binary: "00101101",
    symbol: "-",
  },
  ".": {
    decimal: 46,
    binary: "00101110",
    symbol: ".",
  },
  "/": {
    decimal: 47,
    binary: "00101111",
    symbol: "/",
  },
  ":": {
    decimal: 58,
    binary: "00111010",
    symbol: ":",
  },
  ";": {
    decimal: 59,
    binary: "00111011",
    symbol: ";",
  },
  "<": {
    decimal: 60,
    binary: "00111100",
    symbol: "<",
  },
  "=": {
    decimal: 61,
    binary: "00111101",
    symbol: "=",
  },
  ">": {
    decimal: 62,
    binary: "00111110",
    symbol: ">",
  },
  "?": {
    decimal: 63,
    binary: "00111111",
    symbol: "?",
  },
  "@": {
    decimal: 64,
    binary: "01000000",
    symbol: "@",
  },
  A: {
    decimal: 65,
    binary: "01000001",
    symbol: "A",
  },
  B: {
    decimal: 66,
    binary: "01000010",
    symbol: "B",
  },
  C: {
    decimal: 67,
    binary: "01000011",
    symbol: "C",
  },
  D: {
    decimal: 68,
    binary: "01000100",
    symbol: "D",
  },
  E: {
    decimal: 69,
    binary: "01000101",
    symbol: "E",
  },
  F: {
    decimal: 70,
    binary: "01000110",
    symbol: "F",
  },
  G: {
    decimal: 71,
    binary: "01000111",
    symbol: "G",
  },
  H: {
    decimal: 72,
    binary: "01001000",
    symbol: "H",
  },
  I: {
    decimal: 73,
    binary: "01001001",
    symbol: "I",
  },
  J: {
    decimal: 74,
    binary: "01001010",
    symbol: "J",
  },
  K: {
    decimal: 75,
    binary: "01001011",
    symbol: "K",
  },
  L: {
    decimal: 76,
    binary: "01001100",
    symbol: "L",
  },
  M: {
    decimal: 77,
    binary: "01001101",
    symbol: "M",
  },
  N: {
    decimal: 78,
    binary: "01001110",
    symbol: "N",
  },
  O: {
    decimal: 79,
    binary: "01001111",
    symbol: "O",
  },
  P: {
    decimal: 80,
    binary: "01010000",
    symbol: "P",
  },
  Q: {
    decimal: 81,
    binary: "01010001",
    symbol: "Q",
  },
  R: {
    decimal: 82,
    binary: "01010010",
    symbol: "R",
  },
  S: {
    decimal: 83,
    binary: "01010011",
    symbol: "S",
  },
  T: {
    decimal: 84,
    binary: "01010100",
    symbol: "T",
  },
  U: {
    decimal: 85,
    binary: "01010101",
    symbol: "U",
  },
  V: {
    decimal: 86,
    binary: "01010110",
    symbol: "V",
  },
  W: {
    decimal: 87,
    binary: "01010111",
    symbol: "W",
  },
  X: {
    decimal: 88,
    binary: "01011000",
    symbol: "X",
  },
  Y: {
    decimal: 89,
    binary: "01011001",
    symbol: "Y",
  },
  Z: {
    decimal: 90,
    binary: "01011010",
    symbol: "Z",
  },
  "[": {
    decimal: 91,
    binary: "01011011",
    symbol: "[",
  },
  "\\": {
    decimal: 92,
    binary: "01011100",
    symbol: "\\",
  },
  "]": {
    decimal: 93,
    binary: "01011101",
    symbol: "]",
  },
  "^": {
    decimal: 94,
    binary: "01011110",
    symbol: "^",
  },
  _: {
    decimal: 95,
    binary: "01011111",
    symbol: "_",
  },
  "`": {
    decimal: 96,
    binary: "01100000",
    symbol: "`",
  },
  a: {
    decimal: 97,
    binary: "01100001",
    symbol: "a",
  },
  b: {
    decimal: 98,
    binary: "01100010",
    symbol: "b",
  },
  c: {
    decimal: 99,
    binary: "01100011",
    symbol: "c",
  },
  d: {
    decimal: 100,
    binary: "01100100",
    symbol: "d",
  },
  e: {
    decimal: 101,
    binary: "01100101",
    symbol: "e",
  },
  f: {
    decimal: 102,
    binary: "01100110",
    symbol: "f",
  },
  g: {
    decimal: 103,
    binary: "01100111",
    symbol: "g",
  },
  h: {
    decimal: 104,
    binary: "01101000",
    symbol: "h",
  },
  i: {
    decimal: 105,
    binary: "01101001",
    symbol: "i",
  },
  j: {
    decimal: 106,
    binary: "01101010",
    symbol: "j",
  },
  k: {
    decimal: 107,
    binary: "01101011",
    symbol: "k",
  },
  l: {
    decimal: 108,
    binary: "01101100",
    symbol: "l",
  },
  m: {
    decimal: 109,
    binary: "01101101",
    symbol: "m",
  },
  n: {
    decimal: 110,
    binary: "01101110",
    symbol: "n",
  },
  o: {
    decimal: 111,
    binary: "01101111",
    symbol: "o",
  },
  p: {
    decimal: 112,
    binary: "01110000",
    symbol: "p",
  },
  q: {
    decimal: 113,
    binary: "01110001",
    symbol: "q",
  },
  r: {
    decimal: 114,
    binary: "01110010",
    symbol: "r",
  },
  s: {
    decimal: 115,
    binary: "01110011",
    symbol: "s",
  },
  t: {
    decimal: 116,
    binary: "01110100",
    symbol: "t",
  },
  u: {
    decimal: 117,
    binary: "01110101",
    symbol: "u",
  },
  v: {
    decimal: 118,
    binary: "01110110",
    symbol: "v",
  },
  w: {
    decimal: 119,
    binary: "01110111",
    symbol: "w",
  },
  x: {
    decimal: 120,
    binary: "01111000",
    symbol: "x",
  },
  y: {
    decimal: 121,
    binary: "01111001",
    symbol: "y",
  },
  z: {
    decimal: 122,
    binary: "01111010",
    symbol: "z",
  },
  "{": {
    decimal: 123,
    binary: "01111011",
    symbol: "{",
  },
  "|": {
    decimal: 124,
    binary: "01111100",
    symbol: "|",
  },
  "}": {
    decimal: 125,
    binary: "01111101",
    symbol: "}",
  },
  "~": {
    decimal: 126,
    binary: "01111110",
    symbol: "~",
  },
  DEL: {
    decimal: 127,
    binary: "01111111",
    symbol: "DEL",
  },
};

export const ascii7BitKeyByBinary: CustomAsciiObj = {
  "00110000": {
    decimal: 48,
    binary: "00110000",
    symbol: "0",
  },
  "00110001": {
    decimal: 49,
    binary: "00110001",
    symbol: "1",
  },
  "00110010": {
    decimal: 50,
    binary: "00110010",
    symbol: "2",
  },
  "00110011": {
    decimal: 51,
    binary: "00110011",
    symbol: "3",
  },
  "00110100": {
    decimal: 52,
    binary: "00110100",
    symbol: "4",
  },
  "00110101": {
    decimal: 53,
    binary: "00110101",
    symbol: "5",
  },
  "00110110": {
    decimal: 54,
    binary: "00110110",
    symbol: "6",
  },
  "00110111": {
    decimal: 55,
    binary: "00110111",
    symbol: "7",
  },
  "00111000": {
    decimal: 56,
    binary: "00111000",
    symbol: "8",
  },
  "00111001": {
    decimal: 57,
    binary: "00111001",
    symbol: "9",
  },
  "00000000": {
    decimal: 0,
    binary: "00000000",
    symbol: "NUL",
  },
  "00000001": {
    decimal: 1,
    binary: "00000001",
    symbol: "SOH",
  },
  "00000010": {
    decimal: 2,
    binary: "00000010",
    symbol: "STX",
  },
  "00000011": {
    decimal: 3,
    binary: "00000011",
    symbol: "ETX",
  },
  "00000100": {
    decimal: 4,
    binary: "00000100",
    symbol: "EOT",
  },
  "00000101": {
    decimal: 5,
    binary: "00000101",
    symbol: "ENQ",
  },
  "00000110": {
    decimal: 6,
    binary: "00000110",
    symbol: "ACK",
  },
  "00000111": {
    decimal: 7,
    binary: "00000111",
    symbol: "BEL",
  },
  "00001000": {
    decimal: 8,
    binary: "00001000",
    symbol: "BS",
  },
  "00001001": {
    decimal: 9,
    binary: "00001001",
    symbol: "TAB",
  },
  "00001010": {
    decimal: 10,
    binary: "00001010",
    symbol: "LF",
  },
  "00001011": {
    decimal: 11,
    binary: "00001011",
    symbol: "VT",
  },
  "00001100": {
    decimal: 12,
    binary: "00001100",
    symbol: "FF",
  },
  "00001101": {
    decimal: 13,
    binary: "00001101",
    symbol: "CR",
  },
  "00001110": {
    decimal: 14,
    binary: "00001110",
    symbol: "SO",
  },
  "00001111": {
    decimal: 15,
    binary: "00001111",
    symbol: "SI",
  },
  "00010000": {
    decimal: 16,
    binary: "00010000",
    symbol: "DLE",
  },
  "00010001": {
    decimal: 17,
    binary: "00010001",
    symbol: "DC1",
  },
  "00010010": {
    decimal: 18,
    binary: "00010010",
    symbol: "DC2",
  },
  "00010011": {
    decimal: 19,
    binary: "00010011",
    symbol: "DC3",
  },
  "00010100": {
    decimal: 20,
    binary: "00010100",
    symbol: "DC4",
  },
  "00010101": {
    decimal: 21,
    binary: "00010101",
    symbol: "NAK",
  },
  "00010110": {
    decimal: 22,
    binary: "00010110",
    symbol: "SYN",
  },
  "00010111": {
    decimal: 23,
    binary: "00010111",
    symbol: "ETB",
  },
  "00011000": {
    decimal: 24,
    binary: "00011000",
    symbol: "CAN",
  },
  "00011001": {
    decimal: 25,
    binary: "00011001",
    symbol: "EM",
  },
  "00011010": {
    decimal: 26,
    binary: "00011010",
    symbol: "SUB",
  },
  "00011011": {
    decimal: 27,
    binary: "00011011",
    symbol: "ESC",
  },
  "00011100": {
    decimal: 28,
    binary: "00011100",
    symbol: "FS",
  },
  "00011101": {
    decimal: 29,
    binary: "00011101",
    symbol: "GS",
  },
  "00011110": {
    decimal: 30,
    binary: "00011110",
    symbol: "RS",
  },
  "00011111": {
    decimal: 31,
    binary: "00011111",
    symbol: "US",
  },
  "00100000": {
    decimal: 32,
    binary: "00100000",
    symbol: " ",
  },
  "00100001": {
    decimal: 33,
    binary: "00100001",
    symbol: "!",
  },
  "00100010": {
    decimal: 34,
    binary: "00100010",
    symbol: '"',
  },
  "00100011": {
    decimal: 35,
    binary: "00100011",
    symbol: "#",
  },
  "00100100": {
    decimal: 36,
    binary: "00100100",
    symbol: "$",
  },
  "00100101": {
    decimal: 37,
    binary: "00100101",
    symbol: "%",
  },
  "00100110": {
    decimal: 38,
    binary: "00100110",
    symbol: "&",
  },
  "00100111": {
    decimal: 39,
    binary: "00100111",
    symbol: "'",
  },
  "00101000": {
    decimal: 40,
    binary: "00101000",
    symbol: "(",
  },
  "00101001": {
    decimal: 41,
    binary: "00101001",
    symbol: ")",
  },
  "00101010": {
    decimal: 42,
    binary: "00101010",
    symbol: "*",
  },
  "00101011": {
    decimal: 43,
    binary: "00101011",
    symbol: "+",
  },
  "00101100": {
    decimal: 44,
    binary: "00101100",
    symbol: ",",
  },
  "00101101": {
    decimal: 45,
    binary: "00101101",
    symbol: "-",
  },
  "00101110": {
    decimal: 46,
    binary: "00101110",
    symbol: ".",
  },
  "00101111": {
    decimal: 47,
    binary: "00101111",
    symbol: "/",
  },
  "00111010": {
    decimal: 58,
    binary: "00111010",
    symbol: ":",
  },
  "00111011": {
    decimal: 59,
    binary: "00111011",
    symbol: ";",
  },
  "00111100": {
    decimal: 60,
    binary: "00111100",
    symbol: "<",
  },
  "00111101": {
    decimal: 61,
    binary: "00111101",
    symbol: "=",
  },
  "00111110": {
    decimal: 62,
    binary: "00111110",
    symbol: ">",
  },
  "00111111": {
    decimal: 63,
    binary: "00111111",
    symbol: "?",
  },
  "01000000": {
    decimal: 64,
    binary: "01000000",
    symbol: "@",
  },
  "01000001": {
    decimal: 65,
    binary: "01000001",
    symbol: "A",
  },
  "01000010": {
    decimal: 66,
    binary: "01000010",
    symbol: "B",
  },
  "01000011": {
    decimal: 67,
    binary: "01000011",
    symbol: "C",
  },
  "01000100": {
    decimal: 68,
    binary: "01000100",
    symbol: "D",
  },
  "01000101": {
    decimal: 69,
    binary: "01000101",
    symbol: "E",
  },
  "01000110": {
    decimal: 70,
    binary: "01000110",
    symbol: "F",
  },
  "01000111": {
    decimal: 71,
    binary: "01000111",
    symbol: "G",
  },
  "01001000": {
    decimal: 72,
    binary: "01001000",
    symbol: "H",
  },
  "01001001": {
    decimal: 73,
    binary: "01001001",
    symbol: "I",
  },
  "01001010": {
    decimal: 74,
    binary: "01001010",
    symbol: "J",
  },
  "01001011": {
    decimal: 75,
    binary: "01001011",
    symbol: "K",
  },
  "01001100": {
    decimal: 76,
    binary: "01001100",
    symbol: "L",
  },
  "01001101": {
    decimal: 77,
    binary: "01001101",
    symbol: "M",
  },
  "01001110": {
    decimal: 78,
    binary: "01001110",
    symbol: "N",
  },
  "01001111": {
    decimal: 79,
    binary: "01001111",
    symbol: "O",
  },
  "01010000": {
    decimal: 80,
    binary: "01010000",
    symbol: "P",
  },
  "01010001": {
    decimal: 81,
    binary: "01010001",
    symbol: "Q",
  },
  "01010010": {
    decimal: 82,
    binary: "01010010",
    symbol: "R",
  },
  "01010011": {
    decimal: 83,
    binary: "01010011",
    symbol: "S",
  },
  "01010100": {
    decimal: 84,
    binary: "01010100",
    symbol: "T",
  },
  "01010101": {
    decimal: 85,
    binary: "01010101",
    symbol: "U",
  },
  "01010110": {
    decimal: 86,
    binary: "01010110",
    symbol: "V",
  },
  "01010111": {
    decimal: 87,
    binary: "01010111",
    symbol: "W",
  },
  "01011000": {
    decimal: 88,
    binary: "01011000",
    symbol: "X",
  },
  "01011001": {
    decimal: 89,
    binary: "01011001",
    symbol: "Y",
  },
  "01011010": {
    decimal: 90,
    binary: "01011010",
    symbol: "Z",
  },
  "01011011": {
    decimal: 91,
    binary: "01011011",
    symbol: "[",
  },
  "01011100": {
    decimal: 92,
    binary: "01011100",
    symbol: "\\",
  },
  "01011101": {
    decimal: 93,
    binary: "01011101",
    symbol: "]",
  },
  "01011110": {
    decimal: 94,
    binary: "01011110",
    symbol: "^",
  },
  "01011111": {
    decimal: 95,
    binary: "01011111",
    symbol: "_",
  },
  "01100000": {
    decimal: 96,
    binary: "01100000",
    symbol: "`",
  },
  "01100001": {
    decimal: 97,
    binary: "01100001",
    symbol: "a",
  },
  "01100010": {
    decimal: 98,
    binary: "01100010",
    symbol: "b",
  },
  "01100011": {
    decimal: 99,
    binary: "01100011",
    symbol: "c",
  },
  "01100100": {
    decimal: 100,
    binary: "01100100",
    symbol: "d",
  },
  "01100101": {
    decimal: 101,
    binary: "01100101",
    symbol: "e",
  },
  "01100110": {
    decimal: 102,
    binary: "01100110",
    symbol: "f",
  },
  "01100111": {
    decimal: 103,
    binary: "01100111",
    symbol: "g",
  },
  "01101000": {
    decimal: 104,
    binary: "01101000",
    symbol: "h",
  },
  "01101001": {
    decimal: 105,
    binary: "01101001",
    symbol: "i",
  },
  "01101010": {
    decimal: 106,
    binary: "01101010",
    symbol: "j",
  },
  "01101011": {
    decimal: 107,
    binary: "01101011",
    symbol: "k",
  },
  "01101100": {
    decimal: 108,
    binary: "01101100",
    symbol: "l",
  },
  "01101101": {
    decimal: 109,
    binary: "01101101",
    symbol: "m",
  },
  "01101110": {
    decimal: 110,
    binary: "01101110",
    symbol: "n",
  },
  "01101111": {
    decimal: 111,
    binary: "01101111",
    symbol: "o",
  },
  "01110000": {
    decimal: 112,
    binary: "01110000",
    symbol: "p",
  },
  "01110001": {
    decimal: 113,
    binary: "01110001",
    symbol: "q",
  },
  "01110010": {
    decimal: 114,
    binary: "01110010",
    symbol: "r",
  },
  "01110011": {
    decimal: 115,
    binary: "01110011",
    symbol: "s",
  },
  "01110100": {
    decimal: 116,
    binary: "01110100",
    symbol: "t",
  },
  "01110101": {
    decimal: 117,
    binary: "01110101",
    symbol: "u",
  },
  "01110110": {
    decimal: 118,
    binary: "01110110",
    symbol: "v",
  },
  "01110111": {
    decimal: 119,
    binary: "01110111",
    symbol: "w",
  },
  "01111000": {
    decimal: 120,
    binary: "01111000",
    symbol: "x",
  },
  "01111001": {
    decimal: 121,
    binary: "01111001",
    symbol: "y",
  },
  "01111010": {
    decimal: 122,
    binary: "01111010",
    symbol: "z",
  },
  "01111011": {
    decimal: 123,
    binary: "01111011",
    symbol: "{",
  },
  "01111100": {
    decimal: 124,
    binary: "01111100",
    symbol: "|",
  },
  "01111101": {
    decimal: 125,
    binary: "01111101",
    symbol: "}",
  },
  "01111110": {
    decimal: 126,
    binary: "01111110",
    symbol: "~",
  },
  "01111111": {
    decimal: 127,
    binary: "01111111",
    symbol: "DEL",
  },
};

export const base64TableKeyOfDecimal: Base64Table = {
  0: { decimal: 0, symbol: "A" },
  1: { decimal: 1, symbol: "B" },
  2: { decimal: 2, symbol: "C" },
  3: { decimal: 3, symbol: "D" },
  4: { decimal: 4, symbol: "E" },
  5: { decimal: 5, symbol: "F" },
  6: { decimal: 6, symbol: "G" },
  7: { decimal: 7, symbol: "H" },
  8: { decimal: 8, symbol: "I" },
  9: { decimal: 9, symbol: "J" },
  10: { decimal: 10, symbol: "K" },
  11: { decimal: 11, symbol: "L" },
  12: { decimal: 12, symbol: "M" },
  13: { decimal: 13, symbol: "N" },
  14: { decimal: 14, symbol: "O" },
  15: { decimal: 15, symbol: "P" },
  16: { decimal: 16, symbol: "Q" },
  17: { decimal: 17, symbol: "R" },
  18: { decimal: 18, symbol: "S" },
  19: { decimal: 19, symbol: "T" },
  20: { decimal: 20, symbol: "U" },
  21: { decimal: 21, symbol: "V" },
  22: { decimal: 22, symbol: "W" },
  23: { decimal: 23, symbol: "X" },
  24: { decimal: 24, symbol: "Y" },
  25: { decimal: 25, symbol: "Z" },
  26: { decimal: 26, symbol: "a" },
  27: { decimal: 27, symbol: "b" },
  28: { decimal: 28, symbol: "c" },
  29: { decimal: 29, symbol: "d" },
  30: { decimal: 30, symbol: "e" },
  31: { decimal: 31, symbol: "f" },
  32: { decimal: 32, symbol: "g" },
  33: { decimal: 33, symbol: "h" },
  34: { decimal: 34, symbol: "i" },
  35: { decimal: 35, symbol: "j" },
  36: { decimal: 36, symbol: "k" },
  37: { decimal: 37, symbol: "l" },
  38: { decimal: 38, symbol: "m" },
  39: { decimal: 39, symbol: "n" },
  40: { decimal: 40, symbol: "o" },
  41: { decimal: 41, symbol: "p" },
  42: { decimal: 42, symbol: "q" },
  43: { decimal: 43, symbol: "r" },
  44: { decimal: 44, symbol: "s" },
  45: { decimal: 45, symbol: "t" },
  46: { decimal: 46, symbol: "u" },
  47: { decimal: 47, symbol: "v" },
  48: { decimal: 48, symbol: "w" },
  49: { decimal: 49, symbol: "x" },
  50: { decimal: 50, symbol: "y" },
  51: { decimal: 51, symbol: "z" },
  52: { decimal: 52, symbol: "0" },
  53: { decimal: 53, symbol: "1" },
  54: { decimal: 54, symbol: "2" },
  55: { decimal: 55, symbol: "3" },
  56: { decimal: 56, symbol: "4" },
  57: { decimal: 57, symbol: "5" },
  58: { decimal: 58, symbol: "6" },
  59: { decimal: 59, symbol: "7" },
  60: { decimal: 60, symbol: "8" },
  61: { decimal: 61, symbol: "9" },
  62: { decimal: 62, symbol: "+" },
  63: { decimal: 63, symbol: "/" },
};

export const base64TableKeyOfSymbol: Base64Table = {
  "0": {
    decimal: 52,
    symbol: "0",
  },
  "1": {
    decimal: 53,
    symbol: "1",
  },
  "2": {
    decimal: 54,
    symbol: "2",
  },
  "3": {
    decimal: 55,
    symbol: "3",
  },
  "4": {
    decimal: 56,
    symbol: "4",
  },
  "5": {
    decimal: 57,
    symbol: "5",
  },
  "6": {
    decimal: 58,
    symbol: "6",
  },
  "7": {
    decimal: 59,
    symbol: "7",
  },
  "8": {
    decimal: 60,
    symbol: "8",
  },
  "9": {
    decimal: 61,
    symbol: "9",
  },
  A: {
    decimal: 0,
    symbol: "A",
  },
  B: {
    decimal: 1,
    symbol: "B",
  },
  C: {
    decimal: 2,
    symbol: "C",
  },
  D: {
    decimal: 3,
    symbol: "D",
  },
  E: {
    decimal: 4,
    symbol: "E",
  },
  F: {
    decimal: 5,
    symbol: "F",
  },
  G: {
    decimal: 6,
    symbol: "G",
  },
  H: {
    decimal: 7,
    symbol: "H",
  },
  I: {
    decimal: 8,
    symbol: "I",
  },
  J: {
    decimal: 9,
    symbol: "J",
  },
  K: {
    decimal: 10,
    symbol: "K",
  },
  L: {
    decimal: 11,
    symbol: "L",
  },
  M: {
    decimal: 12,
    symbol: "M",
  },
  N: {
    decimal: 13,
    symbol: "N",
  },
  O: {
    decimal: 14,
    symbol: "O",
  },
  P: {
    decimal: 15,
    symbol: "P",
  },
  Q: {
    decimal: 16,
    symbol: "Q",
  },
  R: {
    decimal: 17,
    symbol: "R",
  },
  S: {
    decimal: 18,
    symbol: "S",
  },
  T: {
    decimal: 19,
    symbol: "T",
  },
  U: {
    decimal: 20,
    symbol: "U",
  },
  V: {
    decimal: 21,
    symbol: "V",
  },
  W: {
    decimal: 22,
    symbol: "W",
  },
  X: {
    decimal: 23,
    symbol: "X",
  },
  Y: {
    decimal: 24,
    symbol: "Y",
  },
  Z: {
    decimal: 25,
    symbol: "Z",
  },
  a: {
    decimal: 26,
    symbol: "a",
  },
  b: {
    decimal: 27,
    symbol: "b",
  },
  c: {
    decimal: 28,
    symbol: "c",
  },
  d: {
    decimal: 29,
    symbol: "d",
  },
  e: {
    decimal: 30,
    symbol: "e",
  },
  f: {
    decimal: 31,
    symbol: "f",
  },
  g: {
    decimal: 32,
    symbol: "g",
  },
  h: {
    decimal: 33,
    symbol: "h",
  },
  i: {
    decimal: 34,
    symbol: "i",
  },
  j: {
    decimal: 35,
    symbol: "j",
  },
  k: {
    decimal: 36,
    symbol: "k",
  },
  l: {
    decimal: 37,
    symbol: "l",
  },
  m: {
    decimal: 38,
    symbol: "m",
  },
  n: {
    decimal: 39,
    symbol: "n",
  },
  o: {
    decimal: 40,
    symbol: "o",
  },
  p: {
    decimal: 41,
    symbol: "p",
  },
  q: {
    decimal: 42,
    symbol: "q",
  },
  r: {
    decimal: 43,
    symbol: "r",
  },
  s: {
    decimal: 44,
    symbol: "s",
  },
  t: {
    decimal: 45,
    symbol: "t",
  },
  u: {
    decimal: 46,
    symbol: "u",
  },
  v: {
    decimal: 47,
    symbol: "v",
  },
  w: {
    decimal: 48,
    symbol: "w",
  },
  x: {
    decimal: 49,
    symbol: "x",
  },
  y: {
    decimal: 50,
    symbol: "y",
  },
  z: {
    decimal: 51,
    symbol: "z",
  },
  "+": {
    decimal: 62,
    symbol: "+",
  },
  "/": {
    decimal: 63,
    symbol: "/",
  },
};
