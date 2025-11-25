
export function navBarScroll() {
    document.addEventListener('DOMContentLoaded', () => {
        const navBar = document.querySelector('.header-barra-navegacion');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 1000) {
                navBar.classList.add('is-fixed');
            }
            else {
                navBar.classList.remove('is-fixed');
            }
        });
    });
}