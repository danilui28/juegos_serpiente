const canvas = document.getElementById("canvasJuego");
const ctx = canvas.getContext("2d");
const tamanoCelda = 30;
let puntaje = 0;
let direccionActual;
const lineaX = 5;
const lineaY = 1;
const serpiente = [
  {x:5,y:6},
  {x:4,y:6},
  {x:4,y:7},
  {x:4,y:8},
  {x:3,y:8},
  {x:3,y:9}
];

function dibujarTablero(){
  for (let i = 0; i < canvas.width; i += tamanoCelda) {
      ctx.strokeStyle = "grey";
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
      ctx.stroke();
  }
  for (let i = 0; i < canvas.height; i += tamanoCelda) {
      ctx.strokeStyle = "grey";
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(canvas.width, i);
      ctx.stroke();
  }
};

function pintarParte(lineaX, lineaY, color){
  let valorx = lineaX * tamanoCelda;
  let valory = lineaY * tamanoCelda;
  ctx.fillStyle = color;
  ctx.fillRect(valorx, valory, tamanoCelda, tamanoCelda);

  ctx.strokeStyle = color;
  ctx.strokeRect(valorx, valory, tamanoCelda, tamanoCelda)
}

function pintarSerpiente(){
  let movimiento;
  for(let i = 0; i < serpiente.length; i++){
    movimiento = serpiente[i]
    if (i == 0){
      pintarParte(movimiento.x, movimiento.y, "brown")
    } else {
    valorx = movimiento.x
    valory = movimiento.y
    let pintarSerpientes = pintarParte(valorx, valory, "red")
    }
  }
}

function moverDerecha(){
  let cabezaActual = serpiente[0]
  let nuevaCabeza = {
    x: cabezaActual.x + 1,
    y: cabezaActual.y
  }
  serpiente.unshift(nuevaCabeza);
  serpiente.pop();
}

function moverIzquierdo(){
  let cabezaActual = serpiente[0]
  let nuevaCabeza = {
    x: cabezaActual.x - 1,
    y: cabezaActual.y 
  }
  serpiente.unshift(nuevaCabeza);
  serpiente.pop();
}

function moverArriba(){
  let cabezaActual = serpiente[0]
  let nuevaCabeza = {
    x: cabezaActual.x,
    y: cabezaActual.y - 1
  }
  serpiente.unshift(nuevaCabeza);
  serpiente.pop();
}

function moverAbajo(){
  let cabezaActual = serpiente[0]
  let nuevaCabeza = {
    x: cabezaActual.x,
    y: cabezaActual.y + 1
  }
  serpiente.unshift(nuevaCabeza);
  serpiente.pop();
}

function cambiarDireccion(direccion){
  direccionActual = direccion
}

function iniciarJuego(){
  intervaloSerpiente = setInterval(moverSerpiente,1000)
}

function pausarJuego(){
  clearInterval(intervaloSerpiente)
}

function moverSerpiente(){
  if(direccionActual == "derecha"){
    moverDerecha()
  } else if(direccionActual == "izquierda"){
    moverIzquierdo()
  } else if(direccionActual == "arriba"){
    moverArriba()
  } else if(direccionActual == "abajo"){
    moverAbajo()
  }

  let colisionComida = atraparComida()

  if (colisionComida == true){
    puntaje = puntaje + 1
    let puntos = document.getElementById("puntaje")
    puntos.innerHTML = puntaje;

    let colaActual = serpiente[serpiente.length - 1]
    let colaNueva
    if(direccionActual == "derecha"){
      colaNueva = {
      x: colaActual.x - 1,
      y: colaActual.y }
    }
    if(direccionActual == "izquierdo"){
      colaNueva = {
      x: colaActual.x + 1,
      y: colaActual.y }
    }
    if(direccionActual == "arriba"){
      colaNueva = {
      x: colaActual.x,
      y: colaActual.y + 1 }
    }
    if(direccionActual == "abajo"){
      colaNueva = {
      x: colaActual.x,
      y: colaActual.y - 1 }
    }
    serpiente.push(colaNueva);
    generarComida()
  }
  dibujarTodo()
}

function generarComida(){
  let lineasY = canvas.height / tamanoCelda
  let lineasX = canvas.width / tamanoCelda
  ComidaX = Math.floor(Math.random() * lineasX)
  ComidaY = Math.floor(Math.random() * lineasY)
}

function pintarComida(){
  pintarParte(ComidaX, ComidaY, "yellow")
}

function atraparComida(){
  let cabeza = serpiente[0]
  if (cabeza.x == ComidaX && cabeza.y == ComidaY){
    return true
  } else {
    return false
  }
}

function limpiarCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function dibujarTodo() {
  limpiarCanvas()
  dibujarTablero()
  pintarSerpiente()
  pintarComida()
}

generarComida()
dibujarTodo();



