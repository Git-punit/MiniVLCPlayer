const fileInput = document.getElementById("fileInput");
const mediaPlayer = document.getElementById("mediaPlayer");

// Load selected file
fileInput.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
        const fileURL = URL.createObjectURL(file);
        mediaPlayer.src = fileURL;
        mediaPlayer.load();
        mediaPlayer.play();
    }
});

// Play media
function playMedia() {
    mediaPlayer.play();
}

// Pause media
function pauseMedia() {
    mediaPlayer.pause();
}

// Stop media
function stopMedia() {
    mediaPlayer.pause();
    mediaPlayer.currentTime = 0;
}
