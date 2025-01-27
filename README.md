# Guess-the-number-JS
Guess the number: A JavaScript game

Este código JavaScript implementa un simple juego donde el usuario debe adivinar un número secreto. El juego incluye las siguientes funcionalidades:

Generación de un número secreto: Se genera un número aleatorio entre 1 y un máximo definido.
Ingreso de intentos: El usuario ingresa un número en un campo de texto y hace clic en un botón para verificar su respuesta.
Validación de intentos: Se compara el número ingresado con el número secreto y se brindan pistas al usuario (mayor o menor).
Límite de intentos: Se establece un límite máximo de intentos.
Reinicio del juego: Al agotar los intentos o al acertar, se habilita un botón para reiniciar el juego.
Estructura del código
Variables globales: Se declaran variables para almacenar el número secreto, el contador de intentos, una lista de números ya sorteados y el número máximo.
Funciones:
asignarTexto: Asigna un texto a un elemento HTML específico.
verificarIntento: Compara el número ingresado por el usuario con el número secreto y actualiza el juego según el resultado.
limpiarCaja: Limpia el campo de entrada de texto.
generarNumeroSecreto: Genera un número secreto aleatorio y lo agrega a la lista de números ya sorteados para evitar repeticiones.
condicionesIniciales: Inicializa el juego, genera un número secreto y muestra las instrucciones al usuario.
reiniciarJuego: Reinicia el juego, generando un nuevo número secreto y restableciendo los intentos.
