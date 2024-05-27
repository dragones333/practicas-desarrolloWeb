document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.interactive-button');
    let clickCount = 0;

    button.addEventListener('click', () => {
        clickCount++;
        
        document.body.classList.toggle('dark-mode');

        if (clickCount === 10) {
            showFullscreenVideo('shinGod.mp4');
        }
    });
});

function showFullscreenVideo(videoUrl) {
    const videoContainer = document.createElement('div');
    videoContainer.classList.add('fullscreen-video');
    
    const videoElement = document.createElement('video');
    videoElement.src = videoUrl;
    videoElement.autoplay = true;
    videoElement.controls = true;
    
    videoContainer.appendChild(videoElement);
    document.body.appendChild(videoContainer);

    videoElement.addEventListener('ended', () => {
        document.body.removeChild(videoContainer);
    });
}
