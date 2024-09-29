const songs = ["songs/song1.mp3", "songs/song2.mp3", "songs/song3.mp3"];
const songTitles = ["Song 1", "Song 2", "Song 3"];
let songIndex = 0;

const audioPlayer = document.getElementById("audio-player");
const playPauseBtn = document.getElementById("play-pause");
const songTitle = document.getElementById("song-title");

function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = "Pause";
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = "Play";
    }
}

function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songIndex);
    audioPlayer.play();
    playPauseBtn.textContent = "Pause";
}

function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songIndex);
    audioPlayer.play();
    playPauseBtn.textContent = "Pause";
}

function loadSong(index) {
    audioPlayer.src = songs[index];
    songTitle.textContent = songTitles[index];
}

// Load initial song
loadSong(songIndex);