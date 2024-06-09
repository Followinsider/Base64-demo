import {
  ascii7BitKeyByBinary,
  ascii7BitKeyBySymbol,
  base64TableKeyOfDecimal,
  base64TableKeyOfSymbol,
} from "./const";
import { baseValToDecimalVal, decimalValToBinary, splitString } from "./utils";

// ASCII编码 -> base64编码
const myAtob = (str: string) => {
  const asciiStrArr = [];
  for (let i = 0; i < str.length; i++) {
    asciiStrArr.push(ascii7BitKeyBySymbol[str[i]].binary);
  }
  let aasciiStr = asciiStrArr.join("");
  const extraZeroNum = Math.abs((aasciiStr.length % 6) - 6);
  if (extraZeroNum !== 0) {
    aasciiStr = aasciiStr.padEnd(aasciiStr.length + extraZeroNum, "0");
  }

  const base64StrArr = splitString(aasciiStr, 6);
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
  const ascii = bytesArr
    .map((binary) => ascii7BitKeyByBinary[binary]?.symbol || "")
    .join("");
  return ascii;
};

console.log("Lcx--encode:", myAtob("Lcx"));
console.log("TGN4A--decode:", myBtoA("TGN4A"));
