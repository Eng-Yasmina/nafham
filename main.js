// change header styles on scroll
/*
window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle('window-scroll', window.scrollY > 100)
})
*/


//show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');
    })
})

//Bodymovin
var animation = lottie.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data.json'
  })

//show/hide nav menu
const menu = document.querySelector(".header__menu")
const menuBtn = document.querySelector("#open-menu-btn")
const closeBtn = document.querySelector("#close-menu-btn")

menuBtn.addEventListener('click', () =>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

closeBtn.addEventListener('click', () =>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
})

