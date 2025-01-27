    /*
        El metodo document.querySelector() devuelve el primer parametro 
        que cumpla con la condicion,  en este caso el primer elemento es h1
    */

    // Variables 
let numeroSecreto = 0;
let intentos = 0;
  // Lista de numeros sorteados
let listaNumerosSorteados = []; 
let numeroMaximo = 100;

    // Funcion para asignar texto a un elemento HTML
    /* 
    Debido a buenas practicas independientemente la funcion no retorne
    ningun valor deberiamos declarar el return
    */

function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

    /*
    Funcion boton intentoUsuario, envia un mensaje de alerta desde 
    la consola que produce 'Click detectado'
    */

    
function verificarIntento(){
        // parseInt convierte el valor de un string a un entero
    let numeroUsuario =  parseInt(document.getElementById('valorUsuario').value);
    
    

        // Condicionales para verificar el numero del usuario
    if (numeroSecreto === numeroUsuario){
        asignarTexto('p',`Felicidades, adivinaste el número en ${intentos} intentos`);
        
        //Quitamos el atributo disabled de HTML para que el boton reiniciar sea clickeable
        document.getElementById('reiniciar').removeAttribute('disabled');
    

    }else {
         // El usuario no acerto el numero secreto
        if (numeroSecreto < numeroUsuario){
            asignarTexto('p', 'El número secreto es menor');
        } else {
            asignarTexto('p', 'El número secreto es mayor');
        }
            if (intentos ===5){
                asignarTexto('p', 'Has llegando al limite de intentos');
                document.getElementById('reiniciar').removeAttribute('disabled');
                document.getElementById('jugar').setAttribute('disabled', true);    
        
        };
        intentos++;
            //Limpia la caja de texto cuando no acierta
        
        limpiarCaja();
    }
    return;
}

    // Funcion para limpiar la caja de texto
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    return;
}

    // Funcion para generar un numero secreto
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    

        //Si ya sorteamos todos los numeros posibles
    if (listaNumerosSorteados.length === numeroMaximo){
        asignarTexto('p', 'Ya no hay mas intentos disponibles');
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
            //Si el numero generado ya esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        } else {
            // Si no esta en la lista lo agregamos
        listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    
    }

}   

    // Funcion para condiciones iniciales
function condicionesIniciales(){
    
    asignarTexto('h1','Número secreto');
    asignarTexto('p', `Adivina el numero entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}


    // Funcion para reiniciar el juego
function reiniciarJuego(){
        //1. Limpiar la caja de texto
    limpiarCaja();
        //2. condiciones iniciales / Mensajes iniciales / Numero de intentos / Numero secreto
    condicionesIniciales();
        //3. Deshabilitar el boton reiniciar
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('jugar').removeAttribute('disabled');        
    return;

}



condicionesIniciales();