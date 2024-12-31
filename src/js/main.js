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


// FAQ section
const faqSection = document.querySelector('[data-faq="faq"]');
const faqItem = faqSection.querySelectorAll('[data-faq="item"]');
const faqBody = faqSection.querySelectorAll('[data-faq="body"]');
const faqIcon = faqSection.querySelectorAll('i');

faqItem.forEach((item, index)=>{

    item.addEventListener('click', ()=>{
        faqItem.forEach(item=>{item.classList.remove('active')});
        faqBody.forEach(item=>{item.classList.remove('active')});
        faqIcon.forEach(item=>{item.classList.remove('active')});

        faqItem[index].classList.add('active');
        faqBody[index].classList.add('active');
        faqIcon[index].classList.add('active');
    });
})
 


// Scroll to top arrow
const scrollBtn = document.querySelector('.arrow__up');
scrollBtn.addEventListener('click', ()=>{
    window.scroll({ top: 0, behavior: "smooth" });
});



