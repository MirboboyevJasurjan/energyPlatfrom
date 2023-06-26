const btn = document.getElementById('navbar_column_btn');
const navbar = document.getElementsByClassName('navbar')
btn.addEventListener('click', () => {
    navbar.classList.toggle("activeNav")

})