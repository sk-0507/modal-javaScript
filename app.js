const modalbtn = document.querySelector(".modal-btn")
const closebtn = document.querySelector(".close-btn")
const model = document.querySelector(".modal-overlay")


modalbtn.addEventListener("click",function(){
    model.classList.add("open-modal")
})
closebtn.addEventListener("click",function(){
    model.classList.remove("open-modal")
})