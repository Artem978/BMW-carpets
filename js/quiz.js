const
    body=document.getElementsByTagName('body')[0],
    selectDesign=document.getElementById('select-design'),
    orderSquareButton=document.getElementById('order-square-button'),
    orderRhombButton=document.getElementById('order-rhomb-button'),
    quizes=document.querySelectorAll('.quiz'),
    close=document.querySelectorAll('.quiz-close'),
    quizImages=document.querySelectorAll('.quiz-image'),
    quizImagesBlock=document.querySelectorAll('.quiz-images'),
    beforeButtons=document.querySelectorAll('.button-before'),
    nextButtons=document.querySelectorAll('.button-next'),
    quizInputs=document.querySelectorAll('.quiz-input'),
    phoneInputs=document.querySelectorAll('.phone-input'),
    inputLabels=document.querySelectorAll('.quiz-input-label'),
    inputPhoneLabel=document.getElementById('input-phone-label');
let
    quizIndex=0;
console.log(inputLabels);
const removeActiveClass = () => {
    for (image of quizImages){
        image.classList.remove('quiz-image-active')
    }
}
const closeQuiz = index =>{
    quizes[index].style.display="none";
    body.style.overflow="auto"
}
const nextButton = index => {
    if (index<7){
        quizes[index].style.display="none";
        index++;
        quizIndex=index;
        quizes[index].style.display="block";
    }
}
const backButton = index => {
    if (index>0){
        quizes[index].style.display="none";
        index--;
        quizIndex=index;
        quizes[index].style.display="block";
    }
}
orderSquareButton.addEventListener('click',() =>{
    quizIndex=0;
    quizes[quizIndex].style.display="block";
    body.style.overflow="hidden"
})
orderRhombButton.addEventListener('click',()=>{
    quizIndex=4;
    quizes[quizIndex].style.display="block";
    body.style.overflow="hidden"
})
close[0].addEventListener('click',() =>{
    closeQuiz(quizIndex);
})
close[1].addEventListener('click',() =>{
    closeQuiz(quizIndex);
})
close[2].addEventListener('click',() =>{
    closeQuiz(quizIndex);
})
close[3].addEventListener('click',() =>{
    closeQuiz(quizIndex);
})
close[4].addEventListener('click',() =>{
    closeQuiz(quizIndex);
})
close[5].addEventListener('click',() =>{
    closeQuiz(quizIndex);
})
close[6].addEventListener('click',() =>{
    closeQuiz(quizIndex);
})
close[7].addEventListener('click',() =>{
    closeQuiz(quizIndex);
})

quizImages[0].addEventListener('click',() =>{
    removeActiveClass();
    quizImages[0].classList.add('quiz-image-active');
    nextButton(quizIndex)
})
quizImages[1].addEventListener('click',() =>{
    removeActiveClass();
    quizImages[1].classList.add('quiz-image-active');
    nextButton(quizIndex)
})
quizImages[2].addEventListener('click',() =>{
    removeActiveClass();
    quizImages[2].classList.add('quiz-image-active');
    nextButton(quizIndex)
})
quizImages[3].addEventListener('click',() =>{
    removeActiveClass();
    quizImages[3].classList.add('quiz-image-active');
    nextButton(quizIndex)
})
quizImages[4].addEventListener('click',() =>{
    removeActiveClass();
    quizImages[4].classList.add('quiz-image-active');
    nextButton(quizIndex)
})
quizImages[5].addEventListener('click',() =>{
    removeActiveClass();
    quizImages[5].classList.add('quiz-image-active');
    nextButton(quizIndex)
})
quizImages[6].addEventListener('click',() =>{
    removeActiveClass();
    quizImages[6].classList.add('quiz-image-active');
    nextButton(quizIndex)
})
quizImages[7].addEventListener('click',() =>{
    removeActiveClass();
    quizImages[7].classList.add('quiz-image-active');
    nextButton(quizIndex)
})
quizImages[8].addEventListener('click',() =>{
    removeActiveClass();
    quizImages[8].classList.add('quiz-image-active');
    nextButton(quizIndex)
})
quizImages[9].addEventListener('click',() =>{
    removeActiveClass();
    quizImages[9].classList.add('quiz-image-active');
    nextButton(quizIndex)
})
quizImages[10].addEventListener('click',() =>{
    removeActiveClass();
    quizImages[10].classList.add('quiz-image-active');
    nextButton(quizIndex)
})
quizImages[11].addEventListener('click',() =>{
    removeActiveClass();
    quizImages[11].classList.add('quiz-image-active');
    nextButton(quizIndex)
})
quizImages[12].addEventListener('click',() =>{
    removeActiveClass();
    quizImages[12].classList.add('quiz-image-active');
    nextButton(quizIndex)
})
quizImages[13].addEventListener('click',() =>{
    removeActiveClass();
    quizImages[13].classList.add('quiz-image-active');
    nextButton(quizIndex)
})
nextButtons[0].addEventListener('click',()=>{
    var flag=false;
    for (var i=0; i<=3; i++)
        for (clas of quizImages[i].classList)
            if (clas=="quiz-image-active")
                flag=true;
    if (flag==false)
        quizImagesBlock[0].classList.add('quiz-images-active')
    else
        nextButton(quizIndex)
})
nextButtons[1].addEventListener('click',()=>{
    var flag=false;
    for (var i=4; i<=6; i++)
        for (clas of quizImages[i].classList)
            if (clas=="quiz-image-active")
                flag=true;
    if (flag==false)
        quizImagesBlock[1].classList.add('quiz-images-active')
    else
        nextButton(quizIndex)
})
nextButtons[2].addEventListener('click',()=>{
    if(quizInputs[0].value==''){
        quizInputs[0].classList.add('quiz-input-active');
        inputLabels[0].style.display="block";
    }
    else
        nextButton(quizIndex)
})
nextButtons[3].addEventListener('click',()=>{
    if(quizInputs[1].value==''){
        quizInputs[1].classList.add('quiz-input-active');
        inputLabels[1].style.display="block";
    }
    else
    document.location.href = "thankyou.html"
})
nextButtons[4].addEventListener('click',()=>{
    var flag=false;
    for (var i=7; i<=10; i++)
        for (clas of quizImages[i].classList)
            if (clas=="quiz-image-active")
                flag=true;
    if (flag==false)
        quizImagesBlock[2].classList.add('quiz-images-active')
    else
        nextButton(quizIndex)
})
nextButtons[5].addEventListener('click',()=>{
    var flag=false;
    for (var i=10; i<=13; i++)
        for (clas of quizImages[i].classList)
            if (clas=="quiz-image-active")
                flag=true;
    if (flag==false)
        quizImagesBlock[3].classList.add('quiz-images-active')
    else
        nextButton(quizIndex)
})
nextButtons[6].addEventListener('click',()=>{
    if(quizInputs[2].value==''){
        quizInputs[2].classList.add('quiz-input-active');
        inputLabels[2].style.display="block";
    }
    else
        nextButton(quizIndex)
})
nextButtons[7].addEventListener('click',()=>{
    if(quizInputs[3].value==''){
        quizInputs[3].classList.add('quiz-input-active');
        inputLabels[3].style.display="block";
    }
    else
    document.location.href = "thankyou.html"
})
beforeButtons[1].addEventListener('click',()=>{
    console.log('back');
    backButton(quizIndex);
})
beforeButtons[2].addEventListener('click',()=>{
    console.log('back');
    backButton(quizIndex);
})
beforeButtons[3].addEventListener('click',()=>{
    console.log('back');
    backButton(quizIndex);
})
beforeButtons[5].addEventListener('click',()=>{
    console.log('back');
    backButton(quizIndex);
})
beforeButtons[6].addEventListener('click',()=>{
    console.log('back');
    backButton(quizIndex);
})