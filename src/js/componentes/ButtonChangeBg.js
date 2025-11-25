
export function buttonChangeBg() {
    document.addEventListener('DOMContentLoaded', () => {
        const btnModeDark = document.getElementById('btnModeDark');
        
        // Toggle dark mode para mejorar accesibilidad y preferencias del usuario
        // El texto del botón se actualiza para indicar la acción disponible (no el estado actual)
        btnModeDark.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                btnModeDark.textContent = 'Light Mode';
            }
            else {
                btnModeDark.textContent = 'Dark Mode';
            }
        });
    });
}