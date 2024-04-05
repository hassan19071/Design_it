// toggle active class on links on mobile screen
let mobileLinks = document.querySelectorAll(".navbar .mobile-links");
let menuIcon = document.querySelectorAll(".navbar .menu-icon");
let menuBtns = document.querySelectorAll(".navbar .menu-icon span");

menuIcon.forEach((e)=>{
    e.addEventListener("click",()=>{
       mobileLinks.forEach((el)=>{
        el.classList.toggle("active");
       })
        menuBtns.forEach((el)=>{
            el.classList.toggle("active");
        })
    })
})

let drobDownLink = document.querySelectorAll(".navbar .main-links .drob-down > a");
let drobDownLinks = document.querySelectorAll(".navbar .main-links .drob-down > ul");

for (let i =0;i<drobDownLink.length;i++){
    drobDownLink[i].addEventListener("click",()=>{
        drobDownLinks[i].classList.toggle("active");
    })
}

// when we scroll nav visible
let navbarFixed = document.querySelector(".navbar.fixed");

// to top button
let toTopBtn = document.querySelector(".to-top");

toTopBtn.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

window.onscroll = function(){
    if (window.scrollY  > 400){
        navbarFixed.classList.add("active");
        toTopBtn.classList.add("active");
    }else{
        navbarFixed.classList.remove("active");
        toTopBtn.classList.remove("active");
    }
}


// when window loading
let loading = document.querySelector(".loading");

window.onload = function(){
    loading.style.display = "none";
}

// change hero content;
let heroContents = document.querySelectorAll("header .main-container .main");
let heroContentsDes = document.querySelectorAll("header .description div div");

let mainNum = 0;

function changeHeroContent(){
    heroContents.forEach((e)=>{
        e.classList.remove("active");
    });
    heroContentsDes.forEach((el)=>{
        el.classList.remove("active");
    });
    if (mainNum === 0){
        heroContents[mainNum].classList.add("active");
        heroContentsDes[mainNum].classList.add("active");
        mainNum++;
    }else if(mainNum === 1) {
        heroContents[mainNum].classList.add("active");
        heroContentsDes[mainNum].classList.add("active");
        mainNum++;
    } else if(mainNum === 2){
        heroContents[mainNum].classList.add("active");
        heroContentsDes[mainNum].classList.add("active");
        mainNum = 0;
    }
}

setInterval(changeHeroContent,8000);

// owl carousel
$('.projects-carousel').owlCarousel({
    loop:false,
    margin:2,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        900:{
           items:2
        },
        1000:{
            items:4
        }
    }
})

$('.team-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

// tesimonial
let clients = document.querySelectorAll(".testimonial .clients .client");
let opinion = document.querySelectorAll(".testimonial .texts .text");

for (let i =0;i<clients.length;i++){
    clients[i].addEventListener("click",()=>{
        clients.forEach((e)=>{
            e.classList.remove("active");
        })
        clients[i].classList.add("active");
        opinion.forEach((e)=>{
            e.classList.remove("active");
        })
        opinion[i].classList.add("active");
    })
}

// images popup;
let imagesTestimonialContainer = document.querySelectorAll(".portfolio .projects .project");
let imagesTestimonial = document.querySelectorAll(".portfolio .projects .project .img img");
let numOfImg = document.querySelector(".images-layout .num-of-img");
let totalImages = document.querySelector(".images-layout .total");
let parImageContainer = document.querySelector(".images-layout .img");
let imageContainer = document.querySelector(".images-layout .img img");
let imagesLayout = document.querySelector(".images-layout");
let nextButtonImg = document.querySelector(".images-layout .next");
let prevButtonImg = document.querySelector(".images-layout .prev");
let countImg;
let closeXBtn = document.querySelector(".images-layout .close");

totalImages.innerHTML = imagesTestimonial.length;

for (let i =0;i<imagesTestimonial.length;i++){
    imagesTestimonialContainer[i].addEventListener("click",function(){
        numOfImg.innerHTML = i + 1;
        imagesLayout.classList.add("active");
        countImg = i;
        imageContainer.src = imagesTestimonial[countImg].src;
      })
}
function increaseImgs(){
    countImg++;
    if (numOfImg.innerHTML < totalImages.innerHTML){
        numOfImg.innerHTML++;
        imageContainer.src = imagesTestimonial[countImg].src;
    }else{
        numOfImg.innerHTML = 1;
        countImg = 0;
    }
}

parImageContainer.addEventListener("click",increaseImgs);

nextButtonImg.addEventListener("click",increaseImgs)
prevButtonImg.addEventListener("click",function(){
    countImg--;
    if (numOfImg.innerHTML > 1){
        numOfImg.innerHTML--;
        imageContainer.src = imagesTestimonial[countImg].src;
    }else{
        numOfImg.innerHTML = totalImages.innerHTML;
        countImg = totalImages.innerHTML -1;
    }
});

document.addEventListener("click",function(e){
    if (e.target.id === "image-layout"){
        imagesLayout.classList.remove("active");
    }
})
closeXBtn.addEventListener("click",()=>{
    imagesLayout.classList.remove("active");
})



