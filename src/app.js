/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function generarExcusa() {
    let who = ["The dog", "My grandma", "The mailman", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "my phone", "the car"];
    let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];

    let persona = who[Math.floor(Math.random() * who.length)];
    let accion = action[Math.floor(Math.random() * who.length)];
    let objeto = what[Math.floor(Math.random() * what.length)];
    let momento = when[Math.floor(Math.random() * when.length)];

    let excuse = `${persona} ${accion} ${objeto} ${momento}.`;

    let textescuse = document.getElementById("excuse");
    textescuse.innerText = excuse;
    console.dir(textescuse);
  }
  generarExcusa();

  console.log("4 Geeks Academy");
};
