function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            alert(`Error attempting to enter fullscreen mode: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

window.addEventListener("resize", () => {
    document.getElementById('app-container').style.width = window.innerWidth + 'px';
    document.getElementById('app-container').style.height = window.innerHeight + 'px';
});
