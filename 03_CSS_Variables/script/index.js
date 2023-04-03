document.addEventListener("DOMContentLoaded", ( ) => {
    
    const option = document.querySelectorAll("input");
    
    option.forEach( el => {
        el.addEventListener('input', () => {
            const suffix = el.dataset.sizing || '';
            document.documentElement.style.setProperty(`--${el.name}`, el.value + suffix);
        });
    });
    
});