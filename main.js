let img = document.querySelector("#imgBis")
let imgC = document.querySelector("#imgBisCra")
let screen1 = document.querySelector(".screen1")
let screen2 = document.querySelector(".screen2")
let button = document.querySelector("#btnBack")


img.addEventListener('click', handleCraTex)
button.addEventListener('click', toggleSreen)


function handleCraTex(event){
 toggleSreen()
}

function toggleSreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}



