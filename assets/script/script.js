

let navbar = document.querySelector('nav');
let button = document.querySelector('.getStarted');

window.onscroll = () => {
    if (window.scrollY > 170 && window.scrollY != 0) {
        navbar.classList.toggle('active');
        button.classList.toggle('active2');
    }
};