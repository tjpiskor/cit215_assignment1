var boxEle = document.body.querySelector(".box");

var prompter = prompt("Who are you?");

boxEle.innnerHTML="Name: "+prompter;