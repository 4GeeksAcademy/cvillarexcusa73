/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Función para generar una excusa aleatoria
  //write your code here
  function generarExcusa() {
    // Listas de opciones para construir la excusa
    var who = ["The dog", "My grandma", "The mailman", "My bird"];
    var action = ["ate", "peed", "crushed", "broke"];
    var what = ["my homework", "my phone", "the car"];
    var when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];

    var persona = who[Math.floor(Math.random() * who.length)];
    var accion = action[Math.floor(Math.random() * who.length)];
    var objeto = what[Math.floor(Math.random() * what.length)];
    var momento = when[Math.floor(Math.random() * when.length)];

    var excuse = `${persona} ${accion} ${objeto} ${momento}.`;
    // Mostrar la excusa en el elemento HTML con id "excuse"
    var textescuse = document.getElementById("excuse");
    textescuse.innerText = excuse;
    console.dir(textescuse);
  }
  generarExcusa();

  console.log("4 Geeks Academy");
};
