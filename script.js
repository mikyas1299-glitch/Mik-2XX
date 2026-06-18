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

const links = document.querySelectorAll(".menu a");
const sections = document.querySelectorAll(".page-section");

links.forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        const target = this.getAttribute("href").substring(1);

        sections.forEach(section => {
            section.style.display = "none";
        });

        const activeSection = document.getElementById(target);

        if(target === "home"){
            activeSection.style.display = "flex";
        }else{
            activeSection.style.display = "block";
        }
    });
});
