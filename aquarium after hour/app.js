// ===============================
// CONFIG: CHANGE ASSETS HERE
// - backgrounds: set images or gradients
// - fishTypes: set fish images / names
// - playlist: set audio file paths + titles
// ===============================

// BACKGROUNDS (Page 2)
const backgrounds = [
    {
      id: "neonCity",
      name: "Neon City",
      // CHANGE BACKGROUND HERE (image url or gradient)
      css: "linear-gradient(135deg, rgba(255,79,216,0.22), rgba(70,243,255,0.18)), url('assets/bg/neon-city.jpg')"
    },
    {
      id: "mall",
      name: "Y2K Mall",
      css: "linear-gradient(135deg, rgba(169,139,255,0.22), rgba(255,79,216,0.16)), url('assets/bg/mall.jpg')"
    },
    {
      id: "sunset",
      name: "Vapor Sunset",
      css: "linear-gradient(180deg, rgba(255,79,216,0.20), rgba(169,139,255,0.16))"
    },
  ];
  
  // FISH TYPES (Page 3 + Page 1 spawn)
  const fishTypes = [
    { id: "pink", name: "Pink Fish" /* CHANGE FISH IMAGE HERE if using <img> */ },
    { id: "cyan", name: "Cyan Fish" },
    { id: "lilac", name: "Lilac Fish" },
  ];
  
  // PLAYLIST (Page 4)
  // Put files in something like: assets/music/track01.mp3
  const playlist = [
    { title: "Track 01 — After Hours", src: "assets/music/track01.mp3" },
    { title: "Track 02 — Mallwave",     src: "assets/music/track02.mp3" },
    { title: "Track 03 — Neon Drift",   src: "assets/music/track03.mp3" },
  ];
  
  // ===============================
  // STATE (persisted)
  // ===============================
  const STORAGE_KEY = "aquariumAfterHour_v1";
  
  const defaultState = {
    page: "home",
    backgroundId: backgrounds[0]?.id ?? "sunset",
    fishCounts: Object.fromEntries(fishTypes.map(f => [f.id, 1])),
    trackIndex: 0,
  };
  
  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return structuredClone(defaultState);
      return { ...structuredClone(defaultState), ...JSON.parse(raw) };
    } catch {
      return structuredClone(defaultState);
    }
  }
  
  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }
  
  let state = loadState();
  
  // ===============================
  // PAGE SWITCHING + NAV
  // ===============================
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  
  navToggle.addEventListener("click", () => {
    const collapsed = nav.classList.toggle("is-collapsed");
    navToggle.setAttribute("aria-expanded", String(!collapsed));
  });
  
  document.querySelectorAll(".navItem").forEach(btn => {
    btn.addEventListener("click", () => {
      setPage(btn.dataset.page);
    });
  });
  
  function setPage(pageId) {
    state.page = pageId;
    saveState();
  
    document.querySelectorAll(".page").forEach(p => {
      p.classList.toggle("is-active", p.dataset.page === pageId);
    });
  
    document.querySelectorAll(".navItem").forEach(b => {
      b.classList.toggle("is-active", b.dataset.page === pageId);
    });
  }
  
  // ===============================
  // BACKGROUNDS (Page 2)
  // ===============================
  const bgGrid = document.getElementById("bgGrid");
  
  function applyBackground() {
    const bg = backgrounds.find(b => b.id === state.backgroundId) ?? backgrounds[0];
    // Setting CSS variable used by .tank background
    document.documentElement.style.setProperty("--tank-bg-image", bg ? bg.css : "none");
  }
  
  function renderBackgroundPicker() {
    bgGrid.innerHTML = "";
  
    backgrounds.forEach(bg => {
      const card = document.createElement("div");
      card.className = "card";
  
      const thumb = document.createElement("div");
      thumb.className = "thumb";
      thumb.style.backgroundImage = bg.css;
  
      const title = document.createElement("div");
      title.className = "cardTitle";
      title.innerHTML = `<strong>${bg.name}</strong> <span class="small">${bg.id}</span>`;
  
      const row = document.createElement("div");
      row.className = "row";
  
      const pickBtn = document.createElement("button");
      pickBtn.textContent = (bg.id === state.backgroundId) ? "Selected" : "Select";
      pickBtn.addEventListener("click", () => {
        state.backgroundId = bg.id;
        saveState();
        applyBackground();
        renderBackgroundPicker();
      });
  
      row.appendChild(pickBtn);
      card.appendChild(thumb);
      card.appendChild(title);
      card.appendChild(row);
  
      bgGrid.appendChild(card);
    });
  }
  
  // ===============================
  // FISH COLLECTION (Page 3) + SPAWN IN TANK (Page 1)
  // ===============================
  const fishGrid = document.getElementById("fishGrid");
  const aquarium = document.getElementById("aquarium");
  
  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }
  
  function renderFishCollection() {
    fishGrid.innerHTML = "";
  
    fishTypes.forEach(f => {
      const count = state.fishCounts[f.id] ?? 0;
  
      const card = document.createElement("div");
      card.className = "card";
  
      // Placeholder “fish image block”
      // CHANGE THIS to <img src="..."> if you have sprites/icons.
      const thumb = document.createElement("div");
      thumb.className = "thumb";
      thumb.style.backgroundImage =
        "linear-gradient(135deg, rgba(255,79,216,0.25), rgba(70,243,255,0.20))";
  
      const title = document.createElement("div");
      title.className = "cardTitle";
      title.innerHTML = `<strong>${f.name}</strong> <span class="small">Count: ${count}</span>`;
  
      const row = document.createElement("div");
      row.className = "row";
  
      const dec = document.createElement("button");
      dec.textContent = "◀";
      dec.title = "Decrease";
      dec.addEventListener("click", () => {
        state.fishCounts[f.id] = clamp((state.fishCounts[f.id] ?? 0) - 1, 0, 30);
        saveState();
        renderFishCollection();
        renderAquarium();
      });
  
      const inc = document.createElement("button");
      inc.textContent = "▶";
      inc.title = "Increase";
      inc.addEventListener("click", () => {
        state.fishCounts[f.id] = clamp((state.fishCounts[f.id] ?? 0) + 1, 0, 30);
        saveState();
        renderFishCollection();
        renderAquarium();
      });
  
      row.appendChild(dec);
      row.appendChild(inc);
  
      card.appendChild(thumb);
      card.appendChild(title);
      card.appendChild(row);
  
      fishGrid.appendChild(card);
    });
  }
  
  // Simple idle swim: each fish has a base position + time-based wobble
  let fishNodes = [];
  let animStart = performance.now();
  
  function renderAquarium() {
    aquarium.innerHTML = "";
    fishNodes = [];
  
    const rect = aquarium.getBoundingClientRect();
  
    fishTypes.forEach((f, typeIndex) => {
      const count = state.fishCounts[f.id] ?? 0;
  
      for (let i = 0; i < count; i++) {
        const el = document.createElement("div");
        el.className = "fish";
  
        // CHANGE FISH STYLE PER TYPE HERE (colors, images)
        if (f.id === "cyan") el.style.background = "radial-gradient(circle at 30% 30%, rgba(70,243,255,0.8), rgba(169,139,255,0.35))";
        if (f.id === "lilac") el.style.background = "radial-gradient(circle at 30% 30%, rgba(169,139,255,0.85), rgba(255,79,216,0.25))";
  
        // base positions
        const baseX = Math.random() * (rect.width - 60) + 10;
        const baseY = Math.random() * (rect.height - 60) + 10;
  
        aquarium.appendChild(el);
  
        fishNodes.push({
          el,
          baseX,
          baseY,
          phase: Math.random() * Math.PI * 2,
          speed: 0.6 + Math.random() * 0.8,
          typeIndex,
        });
      }
    });
  }
  
  function animateFish(now) {
    const t = (now - animStart) / 1000;
  
    const rect = aquarium.getBoundingClientRect();
    fishNodes.forEach((f, idx) => {
      const wobbleX = Math.sin(t * f.speed + f.phase) * (10 + (f.typeIndex * 2));
      const wobbleY = Math.cos(t * (f.speed * 0.9) + f.phase) * 8;
  
      let x = f.baseX + wobbleX;
      let y = f.baseY + wobbleY;
  
      // keep inside aquarium
      x = clamp(x, 4, rect.width - 56);
      y = clamp(y, 4, rect.height - 56);
  
      f.el.style.transform = `translate(${x}px, ${y}px)`;
    });
  
    requestAnimationFrame(animateFish);
  }
  
  // ===============================
  // MUSIC PLAYER (Page 4)
  // ===============================
  const audio = document.getElementById("audio");
  const nowTitle = document.getElementById("nowTitle");
  const trackList = document.getElementById("trackList");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const seek = document.getElementById("seek");
  const timeCurrent = document.getElementById("timeCurrent");
  const timeTotal = document.getElementById("timeTotal");
  
  function fmtTime(sec) {
    if (!Number.isFinite(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${String(s).padStart(2, "0")}`;
  }
  
  function loadTrack(index, autoplay = false) {
    state.trackIndex = (index + playlist.length) % playlist.length;
    saveState();
  
    const track = playlist[state.trackIndex];
    audio.src = track.src;
    nowTitle.textContent = track.title;
  
    renderTrackList();
  
    if (autoplay) audio.play();
  }
  
  function renderTrackList() {
    trackList.innerHTML = "";
    playlist.forEach((t, i) => {
      const li = document.createElement("li");
      li.textContent = t.title;
      li.classList.toggle("is-active", i === state.trackIndex);
      li.addEventListener("click", () => loadTrack(i, true));
      trackList.appendChild(li);
    });
  }
  
  playPauseBtn.addEventListener("click", async () => {
    if (audio.paused) {
      await audio.play();
    } else {
      audio.pause();
    }
  });
  
  prevBtn.addEventListener("click", () => loadTrack(state.trackIndex - 1, true));
  nextBtn.addEventListener("click", () => loadTrack(state.trackIndex + 1, true));
  
  audio.addEventListener("play", () => playPauseBtn.textContent = "⏸");
  audio.addEventListener("pause", () => playPauseBtn.textContent = "▶");
  
  audio.addEventListener("timeupdate", () => {
    timeCurrent.textContent = fmtTime(audio.currentTime);
    timeTotal.textContent = fmtTime(audio.duration);
    const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
    seek.value = String(pct);
  });
  
  seek.addEventListener("input", () => {
    if (!audio.duration) return;
    audio.currentTime = (Number(seek.value) / 100) * audio.duration;
  });
  
  audio.addEventListener("ended", () => loadTrack(state.trackIndex + 1, true));
  
  // ===============================
  // INIT
  // ===============================
  applyBackground();
  renderBackgroundPicker();
  renderFishCollection();
  renderAquarium();
  requestAnimationFrame(animateFish);
  
  loadTrack(state.trackIndex, false);
  setPage(state.page);