let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);
  
  let botonReiniciar = document.getElementById ("boton-reiniciar")
  botonReiniciar.addEventListener("click", reiniciarJuego)
  botonReiniciar.style.display ="none"

  let sectionSeleccionarAtaque = document.getElementById("seleccion-ataque")
  sectionSeleccionarAtaque.style.display = "none"

}
function ataqueFuego() {
  ataqueJugador = "FUEGO";
  ataqueAleatorioEnemigo();
}
function ataqueAgua() {
  ataqueJugador = "AGUA";
  ataqueAleatorioEnemigo();
}
function ataqueTierra() {
  ataqueJugador = "TIERRA";
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "AGUA";
  } else {
    ataqueEnemigo = "TIERRA";
  }

  combate();
}

function crearMensaje(resultadoCombate) {
  let sectionMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");

  parrafo.innerHTML =
    "tu mascota atacó con " +
    ataqueJugador +
    ", y la mascota del enemigo atacó con " +
    ataqueEnemigo +
    " ," +
    resultadoCombate;
  sectionMensajes.appendChild(parrafo);
}

function combate() {
  let spanVidasJugador = document.getElementById("vidas-jugador");
  let spanVidasEnemigo = document.getElementById("vidas-enemigo");
  if (ataqueEnemigo == ataqueJugador) {
    crearMensaje("¡ES UN EMPATE 😑!");
  } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
    crearMensaje("¡GANASTE!🥳");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
    crearMensaje("¡GANASTE!🥳");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
    crearMensaje("¡GANASTE!🥳");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else {
    crearMensaje("¡PERDISTE!😥");
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  }

  revisarVidas();
}

function revisarVidas() {
  if (vidasEnemigo == 0) {
    alert("GANASTE LA BATALLA FINAL");
    crearMensajeFinal("GANASTE LA BATALLA FINAL");
  } else if (vidasJugador == 0) {
    alert("PERDISTE LA BATALLA FINAL :( intentalo de nuevo");
    crearMensajeFinal("PERDISTE LA BATALLA FINAL :( intentalo de nuevo");
  }
}

function crearMensajeFinal(resultadoFinal) {
  let botonReiniciar = document.getElementById ("boton-reiniciar")
  botonReiniciar.style.display ="block"

  let sectionMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");
  parrafo.innerHTML = resultadoFinal;
  sectionMensajes.appendChild(parrafo);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.disabled = true
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.disabled = true
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.disabled = true
}

function seleccionarMascotaJugador() {
  let sectionSeleccionarMascota = document.getElementById ("seleccion-mascota")
  sectionSeleccionarMascota.style.display = "none"

  let sectionSeleccionarAtaque = document.getElementById("seleccion-ataque")
  sectionSeleccionarAtaque.style.display = "block"

  const InputHipodoge = document.getElementById("hipodoge");
  const InputCapipepo = document.getElementById("capipepo");
  const InputRatigueya = document.getElementById("ratigueya");
  const spanMascotaJugador = document.getElementById("nombre-mascota-jugador");

  if (InputHipodoge.checked) {
    spanMascotaJugador.innerHTML = "Hipodoge";
  } else if (InputCapipepo.checked) {
    spanMascotaJugador.innerHTML = "Capipepo";
  } else if (InputRatigueya.checked) {
    spanMascotaJugador.innerHTML = "Ratigueya";
  } else {
    alert("selecciona una mascota");
  }

  seleccionarMascotaEnemigo();
}

function reiniciarJuego(){
  location.reload()
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + 1);
}
function seleccionarMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(1, 3);
  let spanMascotaEnemigo = document.getElementById("nombre-mascota-enemigo");

  if (mascotaAleatoria == 1) {
    spanMascotaEnemigo.innerHTML = "Hipodoge";
  } else if (mascotaAleatoria == 2) {
    spanMascotaEnemigo.innerHTML = "Capipepo";
  } else {
    spanMascotaEnemigo.innerHTML = "Ratigueya";
  }
}
window.addEventListener("load", iniciarJuego);
