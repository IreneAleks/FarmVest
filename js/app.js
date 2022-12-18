// Бургер меню
const burgerMenu = document.querySelector('.menu-burger');
const menuBody = document.querySelector('.menu-body');
if (burgerMenu) {
    burgerMenu.addEventListener("click", function() {
        document.body.classList.toggle('_lock')
        burgerMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    });
}

// Скрол 
const menuLinks = document.querySelectorAll('.menu-link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - 30 - document.querySelector('.header').offsetHeight;

            if(burgerMenu.classList.contains('active')) {
                document.body.classList.remove('_lock')
                burgerMenu.classList.remove('active');
                menuBody.classList.remove('active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

// Зміна меню при скролі
window.addEventListener('scroll', e => {
    let header = document.getElementById('header').classList;
    let activeClass = "header-scroll";

    if (pageYOffset > 100) {
        header.add(activeClass);
    } else {
        header.remove(activeClass);
    }
});


// Акордеон 
document.querySelectorAll('.future-accordion-button').forEach((el) => {
    el.addEventListener('click', () => {
        let  accordionContent = el.nextElementSibling;

        if (accordionContent.style.maxHeight) {
            document.querySelectorAll('.future-accordion-content').forEach((el) => el.style.maxHeight = null)
        } else {
            document.querySelectorAll('.future-accordion-content').forEach((el) => el.style.maxHeight = null)
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
        }
    });
});
