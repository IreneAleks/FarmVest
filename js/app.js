// Бургер меню
const burgerMenu = document.querySelector('.menu-burger');
if (burgerMenu) {
    const menuBody = document.querySelector('.menu-body');
    burgerMenu.addEventListener("click", function() {
        document.body.classList.toggle('_lock')
        burgerMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    });
}

// Прокрутка
