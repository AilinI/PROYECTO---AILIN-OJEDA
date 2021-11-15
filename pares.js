let cartasArray;

let tiempo,
  carta1,
  carta2,
  valCarta1 = 0,
  valCarta2 = 0,
  cartasTotales = 18;
aciertos = cartasTotales / 2;

  document.getElementById("iniciar").addEventListener("click", function () {
    iniciarJuego();
    document.getElementById("reiniciar").removeAttribute("disabled", "");
  });

  document.getElementById("reiniciar").addEventListener("click", function () {
    clearInterval(tiempo);  
    valCarta1 = 0;
    iniciarJuego();
  });

  let contenedor = document.getElementById("tablero");
  let numeroCarta = 1;
  let numerosCartas = [];

  function barajar() {
    contenedor.innerHTML = "";
    numerosCartas = [];
    for (let index = 1; index <= cartasTotales; index++) {
      numeroCarta == cartasTotales / 2 + 1 ? (numeroCarta = 1) : "";
      numerosCartas.push(numeroCarta);
      numeroCarta++;
    }
    Object.keys(
      numerosCartas.sort(function () {
        return Math.random() - 0.5;
      })
    ).forEach(function (key) {
      let carta = document.createElement("div");
      carta.setAttribute("name", numerosCartas[key]);
      carta.setAttribute("class", "carta abajo");      
      contenedor.appendChild(carta);
      carta.innerHTML =
        "<img class='img-frente' src='imagenes/" +
        numerosCartas[key] +
        ".jpeg'/>";
    });
    cartasArray = document.getElementsByClassName("carta");

    Object.keys(cartasArray).forEach(function (key) {
      cartasArray[key].addEventListener("click", function () {
        cartaSeleccionada(cartasArray[key]);
      });
    });
  }

  function iniciarJuego(x) {
    barajar();

    Object.keys(cartasArray).forEach(function (key) {
      cartasArray[key].classList.add("iniciado");
    });
  }

  function cartaSeleccionada(x) {
    if (valCarta1 == 0) {
      valCarta1 = x.getAttribute("name");
      carta1 = x;
      carta1.querySelector("img").classList.add("activo");
      carta1.classList.add("deshabilitar");
      return;
    } else if (valCarta2 == 0) {
      valCarta2 = x.getAttribute("name");
      carta2 = x;
      carta2.querySelector("img").classList.add("activo");
      carta2.classList.add("deshabilitar");
    }
    if (valCarta1 != 0 && valCarta2 != 0) {
      if (valCarta2 == valCarta1) {
        carta1.classList.remove("iniciado");
        carta2.classList.remove("iniciado");
        aciertos--;        
        valCarta2 = 0;
        valCarta1 = 0;
      } else {
        setTimeout(function () {
          carta1.querySelector("img").classList.remove("activo");
          carta2.querySelector("img").classList.remove("activo");
          console.log();
          carta1.classList.remove("deshabilitar");
          carta2.classList.remove("deshabilitar");
          valCarta1 = 0;
          valCarta2 = 0;
        }, 900);
      }
    }
  }
