// hamburger 

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#Navbar-menu');

hamburger.addEventListener('click', function (){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})


window.addEventListener('scroll', function(){
    var navbar = document.querySelector('header')
    navbar.classList.toggle('navbar-blur', window.scrollY > 0)
})