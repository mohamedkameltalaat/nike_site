let menu =document.querySelector(".fa-bars");
let slide =document.querySelector("header nav");
window.onscroll=function(){
    menu.classList.remove("fa-times")
    slide.classList.remove("active")
}
menu.onclick=function(){
    this.classList.toggle("fa-times")
    slide.classList.toggle("active")
}


let list_slide=document.querySelectorAll(".slide_container");
let index=0;

function next(){
list_slide[index].classList.remove("active");
index = (index+1) % list_slide.length;
list_slide[index].classList.add("active");

}

function prev(){
list_slide[index].classList.remove("active");
index =(index-1+list_slide.length)% list_slide.length;
list_slide[index].classList.add("active");

}


document.getElementById("right").addEventListener("click",next)
document.getElementById("left").addEventListener("click",prev)

