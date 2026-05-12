
    // 1. Capturamos el canvas y su contexto de dibujo
    const canvas = document.getElementById("canvasJuego");
    const ctx = canvas.getContext("2d");
    const tamanoCelda = 25;

  dibujarTablero=function(){
    ctx.strokeStyle="white";
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(100,100);
    ctx.stroke();
  }

  function dibujarTablero2(){
    for (let i = 0; i < canvas.width; i += tamanoCelda) {
        ctx.strokeStyle = "white ";
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
    }
    for (let i = 0; i < canvas.height; i += tamanoCelda) {
        ctx.strokeStyle = "white ";
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
    }
  };

  async function dibujarTablero() {
    tx.strokeStyle = "#d84ff3";
    ctx.lineWidth = 1;

  for (let x = 0; x <= canvas.width; x += TAMANIO_CELDA) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  for (let y = 0; y <= canvas.height; y += TAMANIO_CELDA) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  }

    iniciarJuego=function(){
    }

    // =========================
    // FUNCIONES DE DIBUJO
    // =========================

    function limpiarCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function dibujarTodo() {
      dibujarTablero2()
    }

    dibujarTodo();



