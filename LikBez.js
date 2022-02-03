const menu =document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})
//modal items
const modals = document.getElementById('email-modals');
const openBtn = document.querySelector('.main-btn');
const closeBtn = document.querySelector('.close-btn');

//click events 
openBtn.addEventListener('click', ()=>{
    modals.style.display = 'block';
});

closeBtn.addEventListener('click', ()=>{
    modals.style.display = 'none';
});

window.addEventListener('click', (e)=>{
    if(e.target === modals){
        modals.style.display= 'none';
    }
});