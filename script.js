document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav-list');

    hamburgerMenu.addEventListener('click', function () {
        navList.classList.toggle('show');
    });

    
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navList.classList.remove('show');
        });
    });
});
