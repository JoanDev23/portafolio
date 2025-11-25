
export function buttonChangeBg() {
    document.addEventListener('DOMContentLoaded', () => {
        const btnModeDark = document.getElementById('btnModeDark');
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