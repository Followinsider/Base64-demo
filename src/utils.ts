/**
 * 
 * @param str 传入的base64 binary
 * @returns 转换后的十进制值
 */
export const baseValToDecimalVal = (str: string) => {
  let sum = 0;
  const len = str.length;
  const base64Num = 6;
  for (let i = 0; i < len; i++) {
    sum += Math.pow(2, Math.abs(i - base64Num + 1)) * Number(str[i]);
  }
  return sum;
};

/**
 * 
 * @param decimal 传入的十进制值
 * @param bits 传入的比特位数
 * @returns 
 */
export const decimalValToBinary = (decimal: number, bits: number) => {
  let binary = decimal?.toString(2) || "";
  return binary.padStart(bits, "0");
};

/**
 * 
 * @param str 传入的字符串
 * @param length 切割单位
 * @returns 按切割单位切割后的数组
 */
export const splitString = (str: string, length: number) => {
  const regex = new RegExp(`.{1,${length}}`, "g");
  return str.match(regex) || [];
};
