const
    rhomb=document.getElementById('rhomb'),
    square=document.getElementById('square'),
    points=document.querySelectorAll('.point'),
    selectBlockColor=document.querySelectorAll('.select-block-color'),
    designImage=document.getElementById('design-image-main'),
    insertImage=document.getElementById('design-insert-image'),
    Images=document.querySelectorAll('.select-block-item-image'),
    firstImage=document.querySelectorAll('.select-block-item-image')[0],
    secondImage=document.querySelectorAll('.select-block-item-image')[1],
    thirdImage=document.querySelectorAll('.select-block-item-image')[2],
    forthImage=document.querySelectorAll('.select-block-item-image')[3],
    fifthImage=document.querySelectorAll('.select-block-item-image')[4],
    sixthImage=document.querySelectorAll('.select-block-item-image')[5],
    seventhImage=document.querySelectorAll('.select-block-item-image')[6],
    eighthImage=document.querySelectorAll('.select-block-item-image')[7],
    ninethImage=document.querySelectorAll('.select-block-item-image')[8],
    tenthImage=document.querySelectorAll('.select-block-item-image')[9],
    eleventhImage=document.querySelectorAll('.select-block-item-image')[10],
    tvelvethImage=document.querySelectorAll('.select-block-item-image')[11],
    thirtinthImage=document.querySelectorAll('.select-block-item-image')[12],
    fortynthImage=document.querySelectorAll('.select-block-item-image')[13],
    fiftinthImage=document.querySelectorAll('.select-block-item-image')[14],
    sixtinthImage=document.querySelectorAll('.select-block-item-image')[15],
    seventinthImage=document.querySelectorAll('.select-block-item-image')[16],
    eightinthImage=document.querySelectorAll('.select-block-item-image')[17],
    ninetinthImage=document.querySelectorAll('.select-block-item-image')[18],
    twelvethImage=document.querySelectorAll('.select-block-item-image')[19];
let
    i=0;
selectBlockColor[i].style.display='flex';
const selectPicture = elem =>{
    for(point of points){
        point.classList.remove('point-active');
    }
    elem.children[0].classList.add('point-active');
}
const colorBlock = n =>{
    for (block of selectBlockColor){
        block.style.display='none';
    }
    selectBlockColor[n].style.display='flex';
}
const removeImageActiveClass = () =>{
    for (var i=0; i<=15; i++){
        Images[i].classList.remove('select-block-item-image-active')
    }
}
const removeInsertActiveClass = () =>{
    for (var i=16; i<=19; i++){
        Images[i].classList.remove('select-block-item-image-active')
    }
}
rhomb.addEventListener('click',() =>{
    selectPicture(rhomb);
    i=0;
    colorBlock(i);
});
square.addEventListener('click',()=>{
    selectPicture(square);
    i=1;
    colorBlock(i);
});
firstImage.addEventListener('click',()=>{
    removeImageActiveClass();
    firstImage.classList.add('select-block-item-image-active');
    designImage.src="img/design-constructor/design-image1.jpg";
})
secondImage.addEventListener('click',()=>{
    removeImageActiveClass();
    secondImage.classList.add('select-block-item-image-active')
    designImage.src="img/design-constructor/design-image2.jpg";
})
thirdImage.addEventListener('click',()=>{
    removeImageActiveClass();
    thirdImage.classList.add('select-block-item-image-active');
    designImage.src="img/design-constructor/design-image3.jpg";
})
forthImage.addEventListener('click',()=>{
    removeImageActiveClass();
    forthImage.classList.add('select-block-item-image-active');
    designImage.src="img/design-constructor/design-image4.jpg";
})
fifthImage.addEventListener('click',()=>{
    removeImageActiveClass();
    fifthImage.classList.add('select-block-item-image-active');
    designImage.src="img/design-constructor/design-image5.jpg";
})
sixthImage.addEventListener('click',()=>{
    removeImageActiveClass();
    sixthImage.classList.add('select-block-item-image-active');
    designImage.src="img/design-constructor/design-image6.jpg";
})
seventhImage.addEventListener('click',()=>{
    removeImageActiveClass();
    seventhImage.classList.add('select-block-item-image-active');
    designImage.src="img/design-constructor/design-image7.jpg";
})
eighthImage.addEventListener('click',()=>{
    removeImageActiveClass();
    eighthImage.classList.add('select-block-item-image-active');
    designImage.src="img/design-constructor/design-image8.jpg";
})
ninethImage.addEventListener('click',()=>{
    removeImageActiveClass();
    ninethImage.classList.add('select-block-item-image-active');
    designImage.src="img/design-constructor/design-image9.jpg";
})
tenthImage.addEventListener('click',()=>{
    removeImageActiveClass();
    tenthImage.classList.add('select-block-item-image-active');
    designImage.src="img/design-constructor/design-image10.jpg";
})
eleventhImage.addEventListener('click',()=>{
    removeImageActiveClass();
    eleventhImage.classList.add('select-block-item-image-active');
    designImage.src="img/design-constructor/design-image11.jpg";
})
tvelvethImage.addEventListener('click',()=>{
    removeImageActiveClass();
    tvelvethImage.classList.add('select-block-item-image-active');
    designImage.src="img/design-constructor/design-image12.jpg";
})
thirtinthImage.addEventListener('click',()=>{
    removeImageActiveClass();
    thirtinthImage.classList.add('select-block-item-image-active');
    designImage.src="img/design-constructor/design-image13.jpg";
})
fortynthImage.addEventListener('click',()=>{
    removeImageActiveClass();
    fortynthImage.classList.add('select-block-item-image-active');
    designImage.src="img/design-constructor/design-image14.jpg";
})
fiftinthImage.addEventListener('click',()=>{
    removeImageActiveClass();
    fiftinthImage.classList.add('select-block-item-image-active');
    designImage.src="img/design-constructor/design-image15.jpg";
})
sixtinthImage.addEventListener('click',()=>{
    removeImageActiveClass();
    sixtinthImage.classList.add('select-block-item-image-active');
    designImage.src="img/design-constructor/design-image16.jpg";
})
seventinthImage.addEventListener('click',()=>{
    removeInsertActiveClass();
    seventinthImage.classList.add('select-block-item-image-active');
    insertImage.style.display="block";
    insertImage.src="img/design-constructor/insert-image1.png"
})
eightinthImage.addEventListener('click',()=>{
    removeInsertActiveClass();
    eightinthImage.classList.add('select-block-item-image-active');
    insertImage.style.display="block";
    insertImage.src="img/design-constructor/insert-image2.png"
})
ninetinthImage.addEventListener('click',()=>{
    removeInsertActiveClass();
    ninetinthImage.classList.add('select-block-item-image-active');
    insertImage.style.display="block";
    insertImage.src="img/design-constructor/insert-image3.png"
})
twelvethImage.addEventListener('click',()=>{
    removeInsertActiveClass();
    twelvethImage.classList.add('select-block-item-image-active');
    insertImage.style.display="block";
    insertImage.src="img/design-constructor/insert-image4.png"
})



