export interface CustomAsciiObj {
  [key: string]: SingleASCII;
}

export interface Base64Table {
  [key: number | string]: Base64Character;
}

interface SingleASCII {
  decimal: number;
  binary: string;
  symbol: string;
}

interface Base64Character {
  decimal: number;
  symbol: string;
}
