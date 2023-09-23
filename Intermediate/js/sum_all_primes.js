function sumPrimes(num) {
  const isPrime = (number) => {
    let isprime = number == 1 ? false : true;
    let sum = 0;
    for (let i = 2; i < number; i++) {
      number % i == 0 ? (isprime *= false) : (isprime *= true);
    }
    return isprime;
  };
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumPrimes(10));
