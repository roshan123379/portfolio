const cross = document.querySelector(".cross")
const bar = document.querySelector(".bar")
const menu = document.querySelector(".menu")

function barchanger(){
    if(window.matchMedia("(max-width: 820px)")< window.matchMedia("(max-width: 2000px)")){
        cross.style.display="none"
    bar.style.display="none"
    menu.style.display="none"
    }
}
bar.addEventListener("click",()=>{
    cross.style.display="block"
    bar.style.display="none"
    menu.style.display="block"
})
cross.addEventListener("click",()=>{
    cross.style.display="none"
    bar.style.display="block"
    menu.style.display="none"
})
