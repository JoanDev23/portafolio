
export function buttonDown() {
    document.addEventListener('DOMContentLoaded', () => {
        let currentIndex = 0;
        const sections = [
            document.getElementById('sobre-mi'),
            document.getElementById('habilidades'),
            document.getElementById('proyectos'),
            document.getElementById('contacto')
        ];

        const btnDown = document.getElementById('btnDown');

        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Mostrar botón solo cuando el usuario ha scrolleado lo suficiente (300px) y no está al final
            // Esto mejora UX evitando el botón cuando no hay más contenido abajo
            if (window.scrollY > 950 && window.scrollY < documentHeight - windowHeight - 20) {
                btnDown.style.display = 'block';
            } else {
                btnDown.style.display = 'none';
            }

            // Update currentIndex based on scroll position
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
                    currentIndex = index;
                }
            })

        });

        btnDown.addEventListener('click', () => {
            // Scroll to the next section
            if (currentIndex < sections.length - 1) {
                sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}