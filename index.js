// Your code goes here
document.addEventListener("DOMContentLoaded" , function(){ 
    console.log("The DOM has loaded.");
   let newText = document.getElementById("text")
   newText.innerHTML = "This is really cool!"
   console.log(newText);

});