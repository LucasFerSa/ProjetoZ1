let img1 = document.getElementById("hb")
let img = document.getElementById("img-close")
let mobul = document.getElementById("mobul")

function run(){
    mobul.style.top = "0px"
}

function rruunn(){
    mobul.style.top = "-1000px"
}

img1.addEventListener("click", run)

img.addEventListener("click", rruunn)