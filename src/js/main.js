// Open/close mobile menu
 let hamburgerIcon = document.querySelector('[data-key="hamburger"]');
 let mobileMenu = document.querySelector('[data-key="mobile-menu"]');
 let closeMobileMenu = document.querySelector('[data-key="close"]'); 

hamburgerIcon.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('active');
})

closeMobileMenu.addEventListener('click', ()=>{
    mobileMenu.classList.remove('active');
});

// Close mobile menu on screen > 1200px
window.addEventListener('resize', ()=>{
    if(window.innerWidth > 1200){
        mobileMenu.classList.remove('active');
    }
});


// Change bg color of NAV section when it scroll
const nav = document.querySelector('.nav');

document.addEventListener('scroll', ()=>{
    if(window.scrollY > 50){
        nav.classList.add('scrolled')
    }
    else{
        nav.classList.remove('scrolled')
    }
});





// Arrow up icons
const arrowUp = document.querySelector('.arrow__up');

document.addEventListener('scroll', ()=>{
    if(window.scrollY > 100){
        arrowUp.classList.add('active')
    }
    else{
        arrowUp.classList.remove('active')
    }
});




// Scroll to top arrow
const scrollBtn = document.querySelector('.arrow__up');

scrollBtn.addEventListener('click', ()=>{
    window.scroll({ top: 0, behavior: "smooth" });
});





// FAQ section
const faqItems = document.querySelectorAll('[data-key="faq-item"]');

faqItems.forEach(item=>{

    item.addEventListener('click', ()=>{
        const answer = item.querySelector('[data-key="faq-body"]');
        const arrowIcon = item.querySelector('i');
      
        const isActive = item.classList.contains('active');
    
        // Remove ACTIVE class with all relevant elements
        faqItems.forEach(item=>{
            item.classList.remove('active');
            item.querySelector('[data-key="faq-body"]').classList.remove('active');
            item.querySelector('i').classList.remove('active');
        });

        if(!isActive){
            item.classList.add('active');
            answer.classList.add('active');
            arrowIcon.classList.add('active');
        }
    });
});


// Counter
try {
    
    const numbers = document.querySelectorAll('[data-key="number"]');
let countingStarted  = false;

function counting(number) {
    let target = parseInt(number.getAttribute('data-target'));
    let count = 0;
    let speed = 15;

    let counting = setInterval(()=>{
        if(count <= target){
            count += Math.ceil(target / 100);;
            number.innerHTML = count;
        }else{
            number.innerHTML = `${target}+`;
            clearInterval(counting);
        }
    }, speed)
}

window.addEventListener('scroll', ()=>{
    let sectionPosition = numbers[0].closest('section').getBoundingClientRect().top*1.3;
    let screenHeight = window.innerHeight;

    if(sectionPosition < screenHeight && !countingStarted ){
        numbers.forEach(number => counting(number));
        countingStarted  = true;
    }
});
    
} catch (e) {
    console.log(e);
}


 // Slider on projects page
let slideIndices = {
    slider1: 0,
    slider2: 0,
    slider3: 0,
    slider4: 0,
    slider5: 0,
    slider6: 0

};

function moveSlide(step, sliderId) {
    const slider = document.querySelector(`#${sliderId} .projects__slides`);
    const totalSlides = slider.children.length;
    
    slideIndices[sliderId] += step;
    
    if (slideIndices[sliderId] >= totalSlides) {
        slideIndices[sliderId] = 0;
    } else if (slideIndices[sliderId] < 0) {
        slideIndices[sliderId] = totalSlides - 1;
    }
    
    slider.style.transform = `translateX(-${slideIndices[sliderId] * 100}%)`;
}






