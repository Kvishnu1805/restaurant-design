const menu=document.querySelector(".burger-menu");
const navItem=document.querySelector("nav ul");
const closeMneu=document.querySelector(".header")

menu.addEventListener("click",()=>{
    navItem.style.display="flex";
    menu.style.display="none";
})
closeMneu.addEventListener("click",()=>{
    navItem.style.display="none";
    menu.style.display="flex";
})