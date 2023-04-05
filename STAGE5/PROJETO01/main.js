//Variáveis
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 =document.querySelector(".screen2");
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

//Eventos
btnTry.addEventListener('click', handleTryClick); // adicionar o evento e depois quem vai reagir a esse evento
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', function(e) {
  if (e.key == "Enter" && screen1.classList.contains('hide')) {
    handleResetClick()
  }

})

//Função callback
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector("h2").innerText =`Acertou em ${xAttempts} tentativas`
  }

  inputNumber.value = ""
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

// Função onde autmáticamente se não tiver o hide vai adicionar e se tiver vai tirar (alterna)
function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
} 
