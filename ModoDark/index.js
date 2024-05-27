document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.interactive-button');
    let clickCount = 0;

    button.addEventListener('click', () => {
        clickCount++;
        
        document.body.classList.toggle('dark-mode');

        if (clickCount === 10) {
            // Crear un iframe para incrustar el video de YouTube
            const iframe = document.createElement('iframe');
            iframe.src = 'https://www.youtube.com/embed/uZLppeRr8V0?autoplay=1';
            iframe.allowFullscreen = true;
            iframe.style.position = 'fixed';
            iframe.style.top = '0';
            iframe.style.left = '0';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = 'none';
            document.body.appendChild(iframe);
        }
    });
});
