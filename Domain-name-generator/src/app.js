/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".es"];
  let print = "";
  let aux = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let h = 0; h < domain.length; h++) {
          print += `${pronoun[i] + adj[j] + noun[k] + domain[h]}</br>`;
        }
      }
    }
  }
  console.log(print);
  document.getElementById("mensaje").innerHTML = print;
  console.log("Hello Rigo from the console!");
};
