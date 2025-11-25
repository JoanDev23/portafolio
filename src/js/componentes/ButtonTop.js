
export function buttonTop() {
    document.addEventListener('DOMContentLoaded', () => {
        const btn = document.getElementById('btnTop');

        // Mostrar u ocultar el botón según la posición del scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 1800) {
                btn.style.display = 'block';
            } else {
                btn.style.display = 'none';
            }
        });

        // Al hacer clic en el botón, desplazarse suavemente hacia arriba
        btn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
}