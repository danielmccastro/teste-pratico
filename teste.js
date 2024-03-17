// EXERCICIO 1

let indice = 13;
let soma = 0;
let k = 0;

do {
  k = k + 1;
  soma = soma + k;
} while (k < indice);

console.log(soma);

// EXERCICIO 2

function verifyFibonacci(num) {
  let a = 0;
  let b = 1;

  if (num === a || num === b) {
    console.log("Numero está na sequência de Fibonacci!");
    return;
  }
  while (b <= num) {
    if (b === num) {
      console.log("Numero está na sequência de Fibonacci!");
      return;
    }

    let c = a + b;
    a = b;
    b = c;
  }
  console.log("Numero NAO está na sequência de Fibonacci!");
}

// EXERCICIO 3 : 9 (o anterior + 2),  128 (o dobro do anterior), 49 (quadrado dos numeros naturais), 100 (quadrado dos numeros pares), 13 (fibonacci), 200 (numeros comecam com a letra D)

/* exercicio 4: acenderia 2 interruptores por vez. ex, acenderia interruptor 1 e 3. na primeira ida eu descobriria uma lampada, pois esta apagada e o interruptor tb nao foi ligado. 
/ ex: L1 L2 L3 - I1 I2 I3 - acenderia I1 e I3, assim determinaria duas lampadas acessas e uma apagada. descobriria UMA LAMPADA, pois o interruptor desligado corresponde a lampada apagada.
 na segunda vez, ligaria UMA INTERRUPTOR DESCONHECIDO e O INTERRUPTOR JA CONHECIDO. Dessa forma, a lampada que acender, é o outro interruptor que está ligado (pois já conheço um) e o que está apagado é o outro interruptor que está desligado.
 Dessa forma seria possível descobrir as 3 lâmpadas e os 3 interruptores.
*/

// EXERCICIO 5

function reverseString(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  console.log(reverseStr);
  return reverseStr;
}
