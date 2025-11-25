
export function navBarScroll() {
    document.addEventListener('DOMContentLoaded', () => {
        const navBar = document.querySelector('.header-barra-navegacion');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 890) {
                navBar.classList.add('is-fixed');
                document.body.classList.add('nav-fixed');
            } else {
                navBar.classList.remove('is-fixed');
                document.body.classList.remove('nav-fixed');
            }

            console.log(window.scrollY);
        });

        
    });
}