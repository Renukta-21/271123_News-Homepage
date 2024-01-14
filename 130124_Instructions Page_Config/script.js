const steps = document.querySelectorAll('.step');
const img = document.querySelectorAll('.step img');
const backLayer = document.querySelector('.back-layer');
const backLayerContainer = document.querySelector('.back-layer-container');
const sliderNext = document.querySelector('.slider-next');
const sliderPrev = document.querySelector('.slider-prev');
const SliderBtn = [sliderNext, sliderPrev];
const menuToggle = document.querySelector('.menuToggle');
const peer = document.querySelector('.peer');


menuToggle.addEventListener('click', function(){
    if(!peer.checked){
        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else{
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }  
})
let actualIndex = 1;
const updateSliderImage = function(idx){
    if(idx===0){
        actualIndex++;
    }else if(idx===1){
        actualIndex--;
    }
    
    backLayerContainer.src = `assets/img-ruta/IIS_${actualIndex}.png`
    
    if(actualIndex===2){
        SliderBtn[1].classList.remove('hidden');
    }
    if(actualIndex===1){
        SliderBtn[1].classList.add('hidden')
    }
    if(actualIndex>=11){
        SliderBtn[0].classList.add('hidden');
    }
    if(actualIndex===10){
        SliderBtn[0].classList.remove('hidden');
    }

}

SliderBtn.forEach((btn, idx)=>{
    btn.addEventListener('click', function(event){
        event.stopPropagation();
        updateSliderImage(idx);
    })
})


steps.forEach((step, idx)=>{
    step.addEventListener('click', function(event){
        backLayer.classList.remove('hidden');
        backLayerContainer.src = `assets/img-ruta/IIS_${actualIndex}.png`
            SliderBtn[1].classList.add('hidden');
    })
})

backLayerContainer.addEventListener('click', (e) => e.stopPropagation());
backLayer.addEventListener('click', function(event){
    backLayer.classList.add('hidden');
    actualIndex=1;
})



