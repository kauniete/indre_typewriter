"use strict";
//div id typewriter.//const text "this text".

//init.
function init() {
  console.log("init");
}
let text = document.getElementById("typewriter").textContent;
console.log(text);
let counter;
let textNew;
let textLeng;
const audio1 = new Audio("typekey1.mp3");
const audio2 = new Audio("typekey2.mp3");
const audio3 = new Audio("typespace.mp3");

function sound() {
  audio2.play();
  document.getElementById("typekey2.mp3");
  audio2.onended = function() {
    audio2.play();
  };
}
sound();

function settings() {
  document.getElementById("typewriter").textContent = "";
  counter = 0;
  let textLeng = text.length;
  loop();
}
settings();

function loop() {
  textNew = text.substring(0, counter++);
  document.getElementById("typewriter").textContent = textNew;
  if (counter != textLeng) {
    setTimeout(loop, 400);
  }
}
