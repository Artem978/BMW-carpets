const 
    leftPrev=document.getElementById('left-arrow-left'),
    leftNext=document.getElementById('left-arrow-right'),
    rightPrev=document.getElementById('right-arrow-left'),
    rightNext=document.getElementById('right-arrow-right'),
    leftSlides=document.querySelectorAll('.left-slider-image'),
    rightSlides=document.querySelectorAll('.right-slider-image');
let 
    leftIndex=0;
    rightIndex=0;
const leftActiveSlide = n =>{
    for(slide of leftSlides){
        slide.classList.remove('active');
    }
    leftSlides[n].classList.add('active');
}
const rightActiveSlide = n =>{
    for(slide of rightSlides){
        slide.classList.remove('active');
    }
    rightSlides[n].classList.add('active');
}
const leftNextSlide = () =>{
    if (leftIndex==leftSlides.length-1){
        leftIndex=0;
        leftActiveSlide(leftIndex);
    } else{
        leftIndex++;
        leftActiveSlide(leftIndex);
    }
}
const leftPrevSlide = () =>{
    if (leftIndex==0){
        leftIndex=leftSlides.length-1;
        leftActiveSlide(leftIndex);
    } else{
        leftIndex--;
        leftActiveSlide(leftIndex);
    }
}
const rightNextSlide = () =>{
    if (rightIndex==rightSlides.length-1){
        rightIndex=0;
        rightActiveSlide(rightIndex);
    } else{
        rightIndex++;
        rightActiveSlide(rightIndex);
    }
}
const rightPrevSlide = () =>{
    if (rightIndex==0){
        rightIndex=rightSlides.length-1;
        rightActiveSlide(rightIndex);
    } else{
        rightIndex--;
        rightActiveSlide(rightIndex);
    }
}

var timer = 0;
 makeTimer(); 
 function makeTimer(){
    clearInterval(timer)
    timer = setInterval(function(){
    if (leftIndex==leftSlides.length-1){
        leftIndex=0;
    }
    else{leftIndex++;
        leftActiveSlide(leftIndex);
    }},3000);
    timer = setInterval(function(){
        if (rightIndex==rightSlides.length-1){
            rightIndex=0;
        }
        else{
            rightIndex++;
            rightActiveSlide(rightIndex);
        }},4000);
    }

leftNext.addEventListener('click',leftNextSlide);
leftPrev.addEventListener('click',leftPrevSlide);
rightNext.addEventListener('click',rightNextSlide);
rightPrev.addEventListener('click',rightPrevSlide);