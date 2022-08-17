/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let palos = [
    '<i class="bi bi-heart-fill"></i>',
    '<i class="bi bi-suit-diamond-fill"></i>',
    '<i class="bi bi-suit-club-fill"></i>',
    '<i class="bi bi-suit-spade-fill"></i>'
  ];

  let numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  function generarRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  let resultadoPalo = generarRandom(palos);
  let resultadoNumero = generarRandom(numeros);
  // console.log(resultadoPalo);
  // console.log(resultadoNumero);

  let reemplazarPalo = document.querySelectorAll(".dibujo");
  for (let i = 0; i < reemplazarPalo.length; i++) {
    reemplazarPalo[i].innerHTML = resultadoPalo;
    console.log(reemplazarPalo[i]);
  }

  let reemplazarNumero = document.querySelector("#numero");
  reemplazarNumero.innerHTML = resultadoNumero;

  console.log("Hello Rigo from the console!");
};
