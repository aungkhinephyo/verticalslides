// console.log('hi')

const slideContainer = document.querySelector(".slide-container");
const leftSlide = document.querySelector(".left-slide");
const rightSlide = document.querySelector(".right-slide");
const downButton = document.querySelector(".down-button");
const upButton = document.querySelector(".up-button");
const slidesLength = rightSlide.querySelectorAll("div").length;

let activeSlideIndex = 0;

leftSlide.style.top = `-${(slidesLength-1)*100}vh`;

upButton.addEventListener("click", () => changeSlide('ArrowUp'));
downButton.addEventListener("click", () => changeSlide('ArrowDown'));
document.addEventListener("keydown", (e) => changeSlide(e.key));


const changeSlide = (direction) => {
    const slideHeight = slideContainer.clientHeight;
    if (direction === 'ArrowUp') {
        activeSlideIndex++;
        if(activeSlideIndex > slidesLength-1){
            activeSlideIndex = 0;
        }
    }else if(direction === 'ArrowDown'){
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength -1;
        }
    }
    
    rightSlide.style.transform = `translateY(-${activeSlideIndex * slideHeight}px)`;
    leftSlide.style.transform =`translateY(${activeSlideIndex * slideHeight}px)`;
}

