'use strcict';

const gcd = (a, b) => {
  const numA = Math.abs(a);
  const numB = Math.abs(b);
  return numB === 0 ? numA : gcd(numB, numA % numB);
};

console.log(gcd(48, 18));