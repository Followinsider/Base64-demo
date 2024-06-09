import {
  ascii7BitKeyByBinary,
  ascii7BitKeyBySymbol,
  base64TableKeyOfDecimal,
  base64TableKeyOfSymbol,
} from "./const";

const baseValToDecimalVal = (str: string) => {
  let sum = 0;
  const len = str.length;
  const base64Num = 6;
  for (let i = 0; i < len; i++) {
    sum += Math.pow(2, Math.abs(i - base64Num + 1)) * Number(str[i]);
  }
  return sum;
};

const decimalValToBinary = (decimal: number, bits: number) => {
  let binary = decimal?.toString(2) || "";
  return binary.padStart(bits, "0");
};

const splitString = (str: string, length: number) => {
  const regex = new RegExp(`.{1,${length}}`, "g");
  return str.match(regex);
};

// ASCII编码 -> base64编码
const myAtob = (str: string) => {
  let asciiStrArr = [];
  for (let i = 0; i < str.length; i++) {
    asciiStrArr.push(ascii7BitKeyBySymbol[str[i]].binary);
  }
  let aasciiStr = asciiStrArr.join("");
  if (aasciiStr.length % 6 !== 0) {
    console.log("不足以整除6");
    return;
  }
  let index = 0;
  let base64StrArr = [];
  let temp = "";
  for (let j = 0; j < aasciiStr.length; j++) {
    temp += aasciiStr[j];
    index++;
    if (index > 0 && index % 6 === 0) {
      base64StrArr.push(temp);
      index = 0;
      temp = "";
    }
  }
  const decimalNum = base64StrArr?.map(baseValToDecimalVal) || [];
  const base64SymbolArr =
    decimalNum?.map((item) => base64TableKeyOfDecimal[item].symbol) || [];
  return base64SymbolArr.join("");
};

// base64编码 -> ASCII编码
const myBtoA = (str: string) => {
  const base64SymbolArr = str.split("") || [];
  const base64DecimalArr =
    base64SymbolArr?.map(
      (item: string) => base64TableKeyOfSymbol[item]?.decimal || 0
    ) || [];
  const base64BinaryArr =
    base64DecimalArr?.map((decimal) => decimalValToBinary(decimal, 6)) || [];
  const base64BinaryStr = base64BinaryArr.join("");
  const bytesArr = splitString(base64BinaryStr, 8) || [];
  return bytesArr.map((binary) => ascii7BitKeyByBinary[binary]?.symbol || '').join("");
};

console.log(myAtob("followInsider__"));
console.log(myBtoA("Zm9sbG93SW5zaWRlcl9f"));
