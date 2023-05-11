
import { Modal } from './modal.js';
import { AlertError } from './alert-error.js'
import { calculateIMC, notANumber } from './utils.js';

// variáveis 
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

// 3 mandeiras de criar e atribuir função a um evento
form.onsubmit = function(event) {
  event.preventDefault()
  
  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);

  if(weightOrHeightIsNotANumber) {
    AlertError.open()
    return;
  }
  
  AlertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

// form.onsubmit = () => {}

// form.onsubmit = handleSubmit

// function handleSubmit(){

// }

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}


