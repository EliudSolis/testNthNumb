

const fibonacci = (n: number): number => {
    if (n <= 1) {
      return n;
    }
    const fib = [0, 1];
    for (let i = 1; i < n; i++) {
      fib.push(fib[i - 1] + fib[i]);
    }
    return fib[n];
  };

  // this second function takes the number and calculates his prime
  const primeNumber = (n: number): number => {

    let index = 1
    let element = 1
    while (index <= n) {
        element++
        let isPrime = true
        for (let div = 2; div <= Math.sqrt(element); div++) {
            if (element % div === 0) {
                isPrime = false
            }
        }
        if (isPrime) {
            index++
        }
    }
    return element

  };

  //this last function takes the number and calculates the triangular
  const triangular = (n: number): number => {
    let counter = 0;
    let actual = 0;

    while (counter <= n) {
        actual += counter;
        counter++;
    }
    return actual;
  };
  console.log(fibonacci(-1))

  export const calculator = (n:number ): number => {
   
    if(n<= 2) return 0

    return 3 * primeNumber(n) * triangular(n) / fibonacci(n-2)


  }
