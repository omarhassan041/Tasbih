let tasbix =     document.querySelector("#tasbix")
let btnIncrement= document.querySelector("#btnIncreement")
let btnReset=   document.querySelector("#btnReset")

let value =0

btnIncrement.addEventListener("click",() =>{
 value++
 tasbix.innerHTML = value

})


btnReset.addEventListener("click",() =>{

value =0
tasbix.innerHTML =value


})