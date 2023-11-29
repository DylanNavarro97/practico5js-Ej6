const botonIniciar = document.querySelectorAll('button')[0]
const botonDetener = document.querySelectorAll('button')[1]
const botonReiniciar = document.querySelectorAll('button')[2]
const horasElement = document.querySelector('#horas')  
const minutosElement = document.querySelector('#minutos')  
const segundosElement = document.querySelector('#segundos')  
const milisegundosElement = document.querySelector('#milisegundos')  
const contenedorTemporizador = document.querySelector('#temporizador-container')

let detener = true

function iniciarTemporizador (){

    detener = false

    let milisegundos = parseInt(milisegundosElement.textContent)
    let segundos = parseInt(segundosElement.textContent)
    let minutos = parseInt(minutosElement.textContent)
    let horas = parseInt(horasElement.textContent)
    
    let intervalo = setInterval(() => {

        if (detener === false) {
            // Condicional para detener el temporizador
            if (milisegundos > 0 || segundos > 0 || minutos > 0 || horas > 0){
                milisegundos--
            } else {
                detener = true
            }

            if (segundos > 0){
                if (milisegundos <= 0){
                    milisegundos = 999
                    segundos--
                    if (segundos < 10){
                        segundosElement.textContent = `0${segundos}`
                    } else {
                        segundosElement.textContent = segundos
                    }
                }
            }

            if (minutos > 0){
                if (segundos <= 0){
                    segundos = 60
                    minutos--
                    if (minutos < 10){
                        minutosElement.textContent = `0${minutos}`
                    } else {
                        minutosElement.textContent = `${minutos}`
                    }
                }
            }

            if (horas > 0){
                if (minutos <= 0){
                    minutos = 60
                    horas--
                    if (horas < 10){
                        horasElement.textContent = `0${horas}`
                    } else {
                        horasElement.textContent = horas
                    }
                }
            }

            if (milisegundos < 100){
                milisegundosElement.textContent = `0${milisegundos}`
            }
            if (milisegundos < 10){
                milisegundosElement.textContent = `00${milisegundos}`
            } else {
                milisegundosElement.textContent = `${milisegundos}`
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

    milisegundosElement.textContent = `000`
    segundosElement.textContent = `00`
    minutosElement.textContent = `00`
    horasElement.textContent = `00`

}

function verificarInputs(variable, elemento, cantidadLimite, ceros){

    if (variable.length > cantidadLimite) {
        contenido = variable.slice(0, cantidadLimite);
        elemento.textContent = contenido;
    }

    if (!/^\d+$/.test(elemento.textContent)){
        alert('Solo se pueden ingresar números')
        elemento.textContent = ceros
    }
}

contenedorTemporizador.addEventListener('input', () => {

    let milisegundos = milisegundosElement.textContent
    let segundos = segundosElement.textContent
    let minutos = minutosElement.textContent
    let horas = horasElement.textContent
    
    verificarInputs(milisegundos, milisegundosElement, 3, "000")
    verificarInputs(segundos, segundosElement, 2, "00")
    verificarInputs(minutos, minutosElement, 2, "00")
    verificarInputs(horas, horasElement, 2, "00")
})

botonIniciar.addEventListener('click', iniciarTemporizador)
botonDetener.addEventListener('click', detenerCronometro)
botonReiniciar.addEventListener('click', reiniciarCronometro)

