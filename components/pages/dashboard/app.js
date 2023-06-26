const btn = document.querySelector('.navbar_btn');
const navbar = document.querySelector('.navbar')
btn.addEventListener('click', () => {
    navbar.classList.toggle("activeNav")

})