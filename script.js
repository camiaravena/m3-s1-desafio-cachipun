let jugadas = ['piedra', 'papel', 'tijera'];
let puntajeUsuario = 0;
let puntajeMaquina = 0;

// Solicitar al usuario las veces que desea que se repita el juego consecutivamente
let numeroJugadas = parseInt(prompt('¿Cuantas partidas vas a jugar?'));

// Solicitar al user su jugada, esta operacion se realizara en cada juego {piedra, papel, tijera}
for (let i = 0; i < numeroJugadas; i++) {
    let jugadaUsuario = prompt('Elige la opción que deseas jugar: ¿piedra, papel o tijera? ').toLowerCase();
    alert("Elegiste " + jugadaUsuario);

    // Aplicar math.random para la seleccion de la jugada de la maquina
    let jugadaAuto = Math.floor(Math.random() * 3);
    let jugadaMaquina = jugadas[jugadaAuto];
    alert('La máquina eligió ' + jugadaMaquina);

    // Evaluar la seleccion del usuario vs la maquina
    // EL USUARIO ELIGE PIEDRA   
    if (jugadaUsuario === 'piedra') {
        if (jugadaMaquina === 'papel') {
            puntajeMaquina += 1;
            alert('¡Perdiste! La máquina eligió papel y tu piedra.');
        } else {
            if (jugadaMaquina === 'tijera') {
                puntajeUsuario += 1;
                alert('¡Ganaste! La máquina eligió tijera y tu piedra.')
            } else {
                if (jugadaMaquina === 'piedra') {
                    alert('¡Empate! Ambos eligieron piedra.')
                }
            }
        }
    }

    // EL USUARIO ELIGE PAPEL
    if (jugadaUsuario === 'papel') {
        if (jugadaMaquina === 'papel') {
            alert("¡Empate! Ambos eligieron papel.");
        } else {
            if (jugadaMaquina === 'tijera') {
                puntajeMaquina += 1;
                alert("¡Perdiste! La máquina eligió tijera y tu papel.")
            } else {
                if (jugadaMaquina === 'piedra') {
                    puntajeUsuario += 1;
                    alert("¡Ganaste! La máquina eligió piedra y tu papel.")
                }
            }
        }
    }

    // EL USUARIO ELIGE TIJERA
    if (jugadaUsuario === 'tijera') {
        if (jugadaMaquina === 'papel') {
            puntajeUsuario += 1;
            alert("¡Ganaste! La máquina eligió papel y tu tijera.");
        } else {
            if (jugadaMaquina === 'tijera') {
                alert("¡Empate! Ambos eligieron tijera.")
            } else {
                if (jugadaMaquina === 'piedra') {
                    puntajeMaquina += 1;
                    alert("¡Perdiste! La máquina eligió piedra y tu tijera.")
                }
            }
        }
    }

    alert(`Tu puntaje en la partida ${i} es: ${puntajeUsuario}. \nEl puntaje de la máquina en la partida ${i} es:  ${puntajeMaquina}.`)
}

// Indicar el resultado de la partida dependiendo del caso
if (puntajeUsuario === puntajeMaquina) {
    alert(`Se ha producido un empate en el juego. \nTu puntaje total es ${puntajeUsuario} y el de la máquina es ${puntajeMaquina}.`);
} else if (puntajeUsuario > puntajeMaquina) {
        alert(`¡Felicitaciones, ganaste el juego! \nTu puntaje total es ${puntajeUsuario} y el de la máquina es ${puntajeMaquina}.`);
    } else {
        alert(`Lo sentimos, perdiste el juego. \nTu puntaje total es ${puntajeUsuario} y el de la máquina es ${puntajeMaquina}.`);
    }


