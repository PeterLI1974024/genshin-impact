
function navslide(){
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li ")
//toggle Nav
    burger.addEventListener("click",()=>{
        nav.classList.toggle("nav-active");
 //Animate navlinks
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = ""
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.5}s`;
            }
          
        })
    })
   
    
};

navslide();

const carouseSlide = document.querySelector(".carousel-slide");
const carouseImage = document.querySelectorAll(".carousel-slide img");
// buttons
const preBtn = document.querySelector("#preBtn");
const nextBtn = document.querySelector("#nextBtn");
// counter
let counter = 1;
let size = carouseImage[0].clientWidth;

carouseSlide.style.transform = "translateX(" + (-size * counter )+"px)"

nextBtn.addEventListener("click",()=>{
    if(counter >= carouseImage.length - 1) return
    carouseSlide.style.transition = "transform 0.4s ease-in-out"
    counter ++;
    carouseSlide.style.transform = "translateX(" + (-size * counter )+"px)";
  
});

preBtn.addEventListener("click",()=>{
    if(counter <= 0) return
    carouseSlide.style.transition = "transform 0.4s ease-in-out"
    counter --;
    carouseSlide.style.transform = "translateX(" + (-size * counter )+"px)";
});

carouseSlide.addEventListener("transitionend",()=>{
    if(carouseImage[counter].id ==="lastclone"){
        carouseSlide.style.transition = "none"
        counter =carouseImage.length - 2;
        carouseSlide.style.transform = "translateX(" + (-size * counter )+"px)";
    }
    if(carouseImage[counter].id ==="firstclone"){
        carouseSlide.style.transition = "none"
        counter =carouseImage.length - counter;
        carouseSlide.style.transform = "translateX(" + (-size * counter )+"px)";
    }
})

function namePop(){
    const arrow = document.querySelector("#arrow")
    const name1 = document.querySelector(".name1")
    
    arrow.addEventListener("click",()=>{
        name1.classList.toggle("name1")
    })

}

namePop();




const tl = gsap.timeline({defaults:{ease:"power1.out"}})
tl.to('span',{y:'0%',duration:1.3});
tl.to('.intro-picture',{y:'0%',duration:1.5},'-=0.5');
tl.to('.slider',{y:'-130%',duration:1})
tl.to('.intro',{y:'-130%',duration:0.8},'-=0.8')
tl.fromTo('.nav-links',{opacity:0},{opacity:1,duration:2})
