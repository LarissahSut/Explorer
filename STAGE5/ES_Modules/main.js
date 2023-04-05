// import './utils.js'; // nessa linha ele importa e já executa o arquivo



// import qualquerNome from './utils.js';

// console.log(qualquerNome);

// import { message, text } from './utils.js'
// console.log(message, text)



// Named import

// import { double } from './utils.js';

// console.log(double(2))

//importando diversos 
// import { double, today } from './utils.js'



//Misto (named e default) Poderemos usar um default export por arquivo e um (ou mais) named export.

// import funcaoPadrao, { date, greeting } from './utils.js';

// funcaoPadrao('Lari')



// //Import as: é possível renomear um ou mais dados que foram exportados

// import { sum as soma } from './utils.js';

// console.log(soma(2, 5));



// import*as: Importar todos os named exports e dar um nome padrão


import * as calculator from './utils.js';

console.log(calculator.divide(40, 4))