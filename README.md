# Encode & Decode Base64

## Base64

> 参考 https://en.wikipedia.org/wiki/Base64

在计算机编程中，Base64 是**一组二进制到文本的编码方案**，它将二进制数据转换为可打印字符序列，仅限于一组 64 个唯一字符。更具体地说，源二进制数据一次取 6 位，然后这组 6 位被映射到 64 个唯一字符之一。

**例如/for example：**

- 起初文本：Lcx

- 转化后的二进制数据：TGN4A

速记：base64，六位比特，2 ^ 6 = 64

## 原理

> 图解感觉更快

### encode

![base64encode](./images/base64-encode.png)

### decode

![base64decode](./images/base64-decode.png)

### ASCII Table

> 参考 https://www.ascii-code.com/

### Base64 alphabet

> 参考 https://en.wikipedia.org/wiki/Base64

![image-20240609221010891](./images/base64-alphabet.png)

## 简单实现

> 代码在 src/index.ts

**快速运行：**

- 拉仓库

- pnpm install
- pnpm start

## 值得一提

我们尝试看 chrome 实现的 atob & btoa

![image-20240609221617043](./images/window-atob&btoa.png)

- 由于 base64 转换过程中，会有位数对齐的诉求，以`M`为例
  - 按我们上述【原理】分析下来，结果应该是`TQ`
  - 那为什么此处是`TQ==`呢？
    - 原来是因为，Base64 将输入的 ASCII 文本的每 3 个字节（24 位）分成 4 个 Base64 字符（每个字符代表 6 位）。如果输入文本的长度不是 3 的倍数，会出现不足 24 位的情况：
      - **如果输入长度对 3 取余为 1**（即只剩下一个字节，8 位），则这个字节会被转化为 Base64 的第一个字符的前 6 位，并且用两个等号`==`作为填充。
      - **如果输入长度对 3 取余为 2**（即剩下两个字节，16 位），这两个字节会被转化为 Base64 的前两个字符的前 12 位，并且用一个等号`=`作为填充。
      - 所以你可以回到【Base64 alphabet】看到 index 为 63 下面的【Padding】



## 值得一看

- 黄玄老师 base64 vlog
  - https://www.bilibili.com/video/BV1xy4y187MF
- base64 转换可视化
  - https://base64decode.tech/playground

