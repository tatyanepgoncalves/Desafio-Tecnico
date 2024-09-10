// Sequência da Fibonacci
function sequenciaFibonacci(num) {
  let fib = [0, 1];
  
  while (fib[fib.length - 1] < num) {
    let proxFib = fib[fib.length - 1] + fib[fib.length - 2];
    fib.push(proxFib);
  }

  if (fib.includes(num)) {
    return `O número ${num} pertence à sequência de Fibonacci.`;
  } else {
    return `O numéro ${num} não pertence à sequência de Fibonacci.`
  }
}

const numero = 21;
console.log(sequenciaFibonacci(numero));