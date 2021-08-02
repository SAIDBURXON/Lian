// Variables

let position = 0
const slidesToShow = 1,
      slidesToScroll = 1,
      container = document.querySelector('.slider'),
      track = document.querySelector('.slider__content'),
      btnPrev = document.querySelector('.slider__control-prev'),
      btnNext = document.querySelector('.slider__control-next'),
      items = document.querySelectorAll('.slider__item'),
      sliderIndicators = document.querySelectorAll('.indicator'),
      itemsCount = items.length,
      itemWidth = container.clientWidth / slidesToShow,
      movePosition = slidesToScroll * itemWidth;

// Functions
const setPosition = () => {
              track.style.transform = `translateX(${position}px)`;
};
const checkBtns = (pos) => {
              if(pos === 0){
                  btnPrev.disabled = 'disabled'
              }else if (pos <= -(itemsCount - slidesToShow) * itemWidth){
                  btnNext.disabled = 'disabled'
              }else{
                  btnNext.disabled = ''
                  btnPrev.disabled = ''
              }
};
const checkIndicators = () => {
          if(position === 0){
              for(let i = 0; i < sliderIndicators.length; i++){
                  sliderIndicators[i].style.border = 'none';
                  sliderIndicators[0].style.border = '4px solid black';
              }
          }else if(position === -itemWidth){
              for(let i = 0; i < sliderIndicators.length; i++){
                  sliderIndicators[i].style.border = 'none';
                  sliderIndicators[1].style.border = '4px solid black';
              }
          }else if(position === (-itemWidth*2)){
              for(let i = 0; i < sliderIndicators.length; i++){
                  sliderIndicators[i].style.border = 'none';
                  sliderIndicators[2].style.border = '4px solid black';
              }
          }
}


// Ready
items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`
});
checkBtns(position)
checkIndicators()





// Events
btnNext.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;
    
    position -= itemWidth >= slidesToScroll ? movePosition : itemsLeft *itemWidth;
    
    setPosition();
    checkBtns(position);
    checkIndicators()
});
btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;
    
    position += itemWidth >= slidesToScroll ? movePosition : itemsLeft *itemWidth;
    
    setPosition();
    checkBtns(position);
    checkIndicators()
});
sliderIndicators.forEach((indicator, i)=>{
    indicator.addEventListener('click', function(){
        const indicatNum = indicator.dataset.number;
        if(indicatNum == 1){
            indicator.style.border = 'none';
            position = 0
            setPosition()
            checkIndicators()
        }else if(indicatNum == 2){
            indicator.style.border = 'none';
            position -= position + itemWidth
            setPosition()
            checkIndicators()
        }else if(indicatNum == 3){
            indicator.style.border = 'none';
            position -= position + (itemWidth * 2)
            setPosition()
            checkIndicators()
        }
    })
})

