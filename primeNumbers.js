function showPrimeNumber(x, y) {
  //kareköküne kadar olan sayılara tam bölünmüyorsa asaldır.
  if (x == 1) x++;
  for (let i = x; i <= y; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(`${i} asal sayıdır.`);
  }
}

const arguments = process.argv.slice(2);
showPrimeNumber(arguments[0] * 1, arguments[1] * 1);

// input example :node primeNumbers 5 20
