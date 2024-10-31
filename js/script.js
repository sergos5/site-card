const sliderBlock = document.querySelector('.work-block')
const slideItems = sliderBlock.querySelectorAll('.work-img')
const dotsBlock = sliderBlock.querySelector('.work-dots')

let dots
let counter = 0;

const addDots = () => {
    for (let i = 0; i < slideItems.length; i++) {
        const li = document.createElement('li');
        li.classList.add('dot');
        dotsBlock.append(li);
    }
    dots = dotsBlock.querySelectorAll('.dot');
    dots[0].classList.add('dot-active');
};

const autoSlide = () => {
    slideItems[counter].classList.remove('work-img-active')
    dots[counter].classList.remove('dot-active')
    counter++
    if(counter>=slideItems.length) {
        counter=0        
    }  
    slideItems[counter].classList.add('work-img-active')
    dots[counter].classList.add('dot-active')
}

addDots()
setInterval(()=>{
    autoSlide()      
}, 5000)

