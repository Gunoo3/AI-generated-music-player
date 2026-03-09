const state = {
  playlist: [],
  currentIndex: 0,
  isPlaying: false,
  isListOpen: false
};

const audio = document.getElementById("audio");
const titleText = document.getElementById("title-text");
const playlistPanel = document.getElementById("playlist-panel");

async function loadPlaylist() {
  const list = await window.playlistAPI.load();
  state.playlist = list || [];
  if (state.playlist.length) {
    state.currentIndex = 0;
    loadCurrentTrack(false);
  }
  renderPlaylist();
}

function savePlaylist() {
  window.playlistAPI.save(state.playlist);
}

function addTrackFromFile(file) {
  if (file.size > 3 * 1024 * 1024 * 1024) return;

  state.playlist.push({
    id: crypto.randomUUID(),
    filePath: file.path,
    title: file.name
  });

  savePlaylist();
  renderPlaylist();

  if (state.playlist.length === 1) {
    state.currentIndex = 0;
    loadCurrentTrack(true);
  }
}

function loadCurrentTrack(autoplay = false) {
  const track = state.playlist[state.currentIndex];
  if (!track) return;

  audio.src = track.filePath;
  titleText.textContent = track.title;

  if (autoplay) {
    audio.play();
    state.isPlaying = true;
    updatePlayPauseIcon();
  }
}

function updatePlayPauseIcon() {
  document.getElementById("btn-playpause").textContent = state.isPlaying ? "⏸" : "▶";
}

audio.addEventListener("ended", () => {
  if (!state.playlist.length) return;
  state.currentIndex = (state.currentIndex + 1) % state.playlist.length;
  loadCurrentTrack(true);
});

document.getElementById("btn-playpause").onclick = () => {
  if (!state.playlist.length) return;
  if (state.isPlaying) {
    audio.pause();
    state.isPlaying = false;
  } else {
    audio.play();
    state.isPlaying = true;
  }
  updatePlayPauseIcon();
};

document.getElementById("btn-next").onclick = () => {
  if (!state.playlist.length) return;
  state.currentIndex = (state.currentIndex + 1) % state.playlist.length;
  loadCurrentTrack(true);
};

document.getElementById("btn-prev").onclick = () => {
  if (!state.playlist.length) return;
  state.currentIndex = (state.currentIndex - 1 + state.playlist.length) % state.playlist.length;
  loadCurrentTrack(true);
};

function renderPlaylist() {
  playlistPanel.innerHTML = "";
  state.playlist.forEach((track, index) => {
    const row = document.createElement("div");
    row.className = "track-row";

    const label = document.createElement("span");
    label.textContent = track.title;

    const del = document.createElement("button");
    del.textContent = "×";
    del.onclick = () => deleteTrack(index);

    row.appendChild(label);
    row.appendChild(del);
    playlistPanel.appendChild(row);
  });
}

function deleteTrack(index) {
  if (index === state.currentIndex) {
    audio.pause();
    state.isPlaying = false;
  }

  state.playlist.splice(index, 1);

  if (state.currentIndex >= state.playlist.length) {
    state.currentIndex = state.playlist.length - 1;
  }

  savePlaylist();
  renderPlaylist();

  if (state.playlist.length > 0) {
    loadCurrentTrack(false);
  } else {
    titleText.textContent = "";
    audio.removeAttribute("src");
  }
}

document.getElementById("playlist-tab").onclick = () => {
  state.isListOpen = !state.isListOpen;
  playlistPanel.classList.toggle("collapsed", !state.isListOpen);
};

document.body.addEventListener("dragover", e => e.preventDefault());
document.body.addEventListener("drop", e => {
  e.preventDefault();
  const files = [...e.dataTransfer.files];
  const audioFiles = files.filter(f =>
    ["audio/mpeg", "audio/wav"].includes(f.type)
  );
  audioFiles.forEach(addTrackFromFile);
});

loadPlaylist();
