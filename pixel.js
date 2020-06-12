//Javscript Control for Pixel Art Maker
document.addEventListener('DOMContentLoaded', () => {
console.log("All content Loaded");
//selected color
let selectedColor ="white";

//color pallete selection
let red = document.getElementById('red');
let blue = document.getElementById('blue');
let orange = document.getElementById('orange');
let yellow =  document.getElementById('yellow');
let green = document.getElementById('green')
let changeCurrent = document.getElementById('current');



//helper functions
let changeColor = (item, selectedColor) => {
  if(item.classList.length === 2){
    item.classList.remove(item.classList[1]);
    item.classList.add(selectedColor);
  } else{
    item.classList.add(selectedColor);
  }
}

let createGrid = (divs) =>{
 let parentNode = document.getElementById('canvas');
   for(let i = 1; i <= divs; i++){
     let newPixel = document.createElement("DIV");
     newPixel.classList.add("pixel");
     newPixel.id = i;
     parentNode.append(newPixel)

   }

}

createGrid(50);

//event listeners

red.addEventListener("click", function(){
  selectedColor = "red";
  changeColor(changeCurrent, selectedColor);
  console.log("I was clicked", selectedColor)
})

blue.addEventListener("click", function(){
  selectedColor = "blue";
  changeColor(changeCurrent, selectedColor);
  console.log("I was clicked", selectedColor)
})

orange.addEventListener("click", function(){
  selectedColor = "orange";
  changeColor(changeCurrent, selectedColor);
  console.log("I was clicked", selectedColor)
})

yellow.addEventListener("click", function(){
  selectedColor = "yellow";
  changeColor(changeCurrent, selectedColor);
  console.log("I was clicked", selectedColor)
})

green.addEventListener("click", function(){
  selectedColor = "green";
  changeColor(changeCurrent, selectedColor);
  console.log("I was clicked", selectedColor)
})

white.addEventListener("click", function(){
  selectedColor = "white";
  changeColor(changeCurrent, selectedColor);
  console.log("I was clicked", selectedColor)
})

//trying to abstract event listener to parent container class
document.getElementById('canvas').addEventListener("click", function(event){
  changeColor(event.target, selectedColor);
})
/*
firstPixel.addEventListener("click", function(){
  changeColor(firstPixel, selectedColor);

})

secondPixel.addEventListener("click", function(){
  changeColor(firstPixel, selectedColor);
})

thirdPixel.addEventListener("click", function(){
  changeColor(firstPixel, selectedColor);
})

fourthPixel.addEventListener("click", function(){
  changeColor(firstPixel, selectedColor);
})*/
})
