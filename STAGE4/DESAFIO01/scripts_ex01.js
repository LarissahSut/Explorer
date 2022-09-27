let number1 = Number(prompt("Digite o primeiro número:"));
let number2 = Number(prompt("Digite o segundo número:"));

const sum = number1 + number2;
const sub = number1 - number2;
const multi = number1 * number2;
const div = number1 / number2;
const mod = number1 % number2;

alert(`A soma dos dois números é: ${sum}`);
alert(`A subtração dos dois números é: ${sub}`);
alert(`A multiplicação dos dois números é: ${multi}`);
alert(`A divisão dos dois números é: ${div}`);
alert(`O resto dos dois números é: ${mod}`);

if (sum % 2 == 0) {
  alert(`A soma é par: ${sum}`)
} else {
  alert(`A soma dos dois números é impar: ${sum}`)
};

if (number1 == number2) {
  alert(`Os números sao iguais`)
} else {
  alert(`Os números são diferentes`)
}
