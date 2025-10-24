function multiply(num1: string, num2: string): string {
  if (num1 === "0" || num2 === "0") return "0";

  const m = num1.length, n = num2.length;
  const res = new Array<number>(m + n).fill(0);

  for (let i = m - 1; i >= 0; i--) {
    const a = num1.charCodeAt(i) - 48; // digit
    for (let j = n - 1; j >= 0; j--) {
      const b = num2.charCodeAt(j) - 48;
      const mul = a * b + res[i + j + 1];

      res[i + j + 1] = mul % 10;          // ones place
      res[i + j] += Math.floor(mul / 10); // carry
    }
  }

  // Convert to string, skipping leading zero if present
  let k = 0;
  while (k < res.length - 1 && res[k] === 0) k++;
  return res.slice(k).join("");
}
