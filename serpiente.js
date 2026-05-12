
    // 1. Capturamos el canvas y su contexto de dibujo
    const canvas = document.getElementById("canvasJuego");
    const ctx = canvas.getContext("2d");
    const tamanoCelda = 30;
    const lineaX = 5;
    const lineaY = 1;

  dibujarTablero=function(){
    ctx.strokeStyle="white";
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(100,100);
    ctx.stroke();
  }

  async function dibujarTablero() {
    tx.strokeStyle = "#d84ff3";
    ctx.lineWidth = 1;

  for (let x = 0; x <= canvas.width; x += tamanoCelda) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  for (let y = 0; y <= canvas.height; y += tamanoCelda) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  }

  function dibujarTablero2(){
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

function iniciarJuego(){
  }

function pintarParte(lineaX, lineaY){
  let valorx = lineaX * tamanoCelda;
  let valory = lineaY * tamanoCelda;
  ctx.fillStyle = "yellow";
  ctx.fillRect(valorx, valory, tamanoCelda, tamanoCelda);

  ctx.strokeStyle = "orange";
  ctx.strokeRect(valorx, valory, tamanoCelda, tamanoCelda)
}


function limpiarCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function dibujarTodo() {
  limpiarCanvas()
  dibujarTablero2()
  pintarParte(5, 5);
  pintarParte(10, 2);
  pintarParte((canvas.height-tamanoCelda)/tamanoCelda, (canvas.width-tamanoCelda)/tamanoCelda);
  pintarParte((canvas.height-tamanoCelda)/tamanoCelda, 10);
  pintarParte(0, (canvas.width-tamanoCelda)/tamanoCelda);
  pintarParte((canvas.height-tamanoCelda)/tamanoCelda, 0);
}

dibujarTodo();



