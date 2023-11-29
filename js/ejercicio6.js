const botonIniciar = document.querySelectorAll('button')[0]
const botonDetener = document.querySelectorAll('button')[1]
const botonReiniciar = document.querySelectorAll('button')[2]
const horasElement = document.querySelector('#horas')  
const minutosElement = document.querySelector('#minutos')  
const segundosElement = document.querySelector('#segundos')  
const milisegundosElement = document.querySelector('#milisegundos')  

let detener = true
let milisegundos = 0
let segundos = 0
let minutos = 0
let horas = 0

function iniciarCronometro (){

    detener = false
    

    let intervalo = setInterval(() => {

        if (detener === false) {
            milisegundos++

            if (milisegundos === 1000){
                milisegundos = 0
                segundos++

                if (segundos < 10){
                    segundosElement.innerHTML = `0${segundos}`
                } else {
                    segundosElement.innerHTML = segundos
                }
            }
    
            if (segundos === 60){
                segundos = 0
                minutos++

                if (minutos < 10){
                    minutosElement.innerHTML = `0${minutos}`
                } else {
                    minutosElement.innerHTML = `${minutos}`
                }
            }
    
            if (minutos === 60){
                minutos = 0
                horas++

                if (horas < 10){
                    horasElement.innerHTML = `0${horas}`
                } else {
                    horasElement.innerHTML = horas
                }
            }
    
            if (milisegundos < 10){
                milisegundosElement.innerHTML = `00${milisegundos}`
            } else {
                milisegundosElement.innerHTML = `${milisegundos}`
            }
        }
    }, 1)

    if (detener === true ){
        clearInterval(intervalo)
    }
}

function detenerCronometro (){
    detener = true
}

function reiniciarCronometro (){
    detener = true

    milisegundos = 0
    segundos = 0
    minutos = 0
    horas = 0

    milisegundosElement.innerHTML = `00${milisegundos}`
    segundosElement.innerHTML = `0${segundos}`
    minutosElement.innerHTML = `0${minutos}`
    horasElement.innerHTML = `0${horas}`

}

botonIniciar.addEventListener('click', iniciarCronometro)
botonDetener.addEventListener('click', detenerCronometro)
botonReiniciar.addEventListener('click', reiniciarCronometro)

