
// const message = "mensagem"; // essa variável fica isolada nesse arquivo, não é possível utilizá-la em outro lugar
// alert(message);

// export default 'algum dado';

// ou algum dado já existente

// const text = 'alguma coisa'
// export default text

// const message = "mensagem"
// const text = "outra mensagem"

// export { text, message}



//named export

// export const today = Date.now()

//exportando um valor já existente

// const double = number => number * 2 ;
// export { double };

//esportando diversos 
// export { today, double }


//Misto (named e default) Poderemos usar um default export por arquivo e um (ou mais) named export.

// const date = new Date();
// const greeting = name => `Hello ${name}`;

// export default function (argument) {
//   console.log(date, greeting(argument))
// }

// export { date, greeting};


// //Import as: é possível renomear um ou mais dados que foram exportados

// export function sum(a, b) {
//   return a + b 
// }



// import*as: Importar todos os named exports e dar um nome padrão

export const sum = (a, b) => a + b;
export const multiply = (a, b) => a * b;
export const subtract = (a, b) => a * b;
export const divide = (a, b) => a / b;
