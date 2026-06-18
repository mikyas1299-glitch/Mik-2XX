const text = "";

let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,100);

}

}

typing();

const sections =
document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

sections.forEach(section=>{

const top=
section.getBoundingClientRect().top;

if(top < window.innerHeight-100){

section.classList.add("show");

}

});

});
