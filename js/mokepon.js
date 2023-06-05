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

  revisarVidas;
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
  let sectionMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");
  parrafo.innerHTML = resultadoFinal;
  sectionMensajes.appendChild(parrafo);
}

function seleccionarMascotaJugador() {
  let InputHipodoge = document.getElementById("hipodoge");
  let InputCapipepo = document.getElementById("capipepo");
  let InputRatigueya = document.getElementById("ratigueya");
  let spanMascotaJugador = document.getElementById("nombre-mascota-jugador");

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
