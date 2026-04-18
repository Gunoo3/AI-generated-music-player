// ===============================
// CONFIG: CHANGE ASSETS HERE
// ===============================

const backgrounds = [
  { id: "high-rise", name: "High Rise", css: "linear-gradient(135deg, rgba(255,79,216,0.22), rgba(70,243,255,0.18)), url('assets/bg/neon-city.jpg')" },
  { id: "mall", name: "Dead Mall", css: "linear-gradient(135deg, rgba(169,139,255,0.22), rgba(255,79,216,0.16)), url('assets/bg/deadmall.jpg')" },
  { id: "sunset", name: "Down under", css: "linear-gradient(180deg, rgba(255,79,216,0.20), rgba(169,139,255,0.16)), url('assets/bg/sunset.jpg')" },
  { id: "space", name: "Space", css: "linear-gradient(180deg, rgba(255,79,216,0.20), rgba(169,139,255,0.16)), url('assets/bg/space.png')" },
  { id: "waiting", name: "Waiting Room", css: "linear-gradient(180deg, rgba(255,79,216,0.20), rgba(169,139,255,0.16)), url('assets/bg/waiting room.jpg')" },
  { id: "arcade", name: "Arcade", css: "linear-gradient(180deg, rgba(255,79,216,0.20), rgba(169,139,255,0.16)), url('assets/bg/arcade.jpg')" },
  { id: "spaceship", name: "Spaceship", css: "linear-gradient(180deg, rgba(255,79,216,0.20), rgba(169,139,255,0.16)), url('assets/bg/spaceship.jpg')" },
  { id: "silicone", name: "Silicone", css: "linear-gradient(180deg, rgba(255,79,216,0.20), rgba(169,139,255,0.16)), url('assets/bg/silicone.jpg')" },
  { id: "grid", name: "The Grid", css: "linear-gradient(180deg, rgba(255,79,216,0.20), rgba(169,139,255,0.16)), url('assets/bg/The grid.jpg')" },
  { id: "fast", name: "Fast Food", css: "linear-gradient(180deg, rgba(255,79,216,0.20), rgba(169,139,255,0.16)), url('assets/bg/fast food.jpg')" },
  { id: "frutiger", name: "Frutiger", css: "linear-gradient(180deg, rgba(255,79,216,0.20), rgba(169,139,255,0.16)), url('assets/bg/frutiger.jpg')" },
];

const fishTypes = [
  { id: "pink", name: "Gold", img: "assets/fish/goldfish.png" },
  { id: "cyan", name: "Koi", img: "assets/fish/koi.png" },
  { id: "lilac", name: "Arizona", img: "assets/fish/arizona.png" },
  { id: "lion", name: "Lion", img: "assets/fish/lion.png" },
  { id: "3D", name: "3D", img: "assets/fish/3d.png" },
  { id: "bottle", name: "Refreshing", img: "assets/fish/bottle.png" },
  { id: "heels", name: "High heel", img: "assets/fish/heels.png" },
  { id: "memphis", name: "Memphis", img: "assets/fish/memphis.png" },
  { id: "noodle1", name: "Neon Noodle P", img: "assets/fish/noodle1.png" },
  { id: "noodle2", name: "Neon Noodle B", img: "assets/fish/noodle2.png" },
  { id: "noodle3", name: "Neon Noodle Y", img: "assets/fish/noodle3.png" },
  { id: "nyan", name: "Nyan", img: "assets/fish/nyan.png" },
  { id: "tiger", name: "Tiger", img: "assets/fish/tiger.png" },
  { id: "tv", name: "TV", img: "assets/fish/tv.png" },
  { id: "wire", name: "Wire Frame", img: "assets/fish/wire.png" },
  { id: "missing", name: "TEXTURE MISSING", img: "assets/fish/missing.png" },
  { id: "star", name: "Star", img: "assets/fish/star.png" },
  { id: "moon", name: "Moon", img: "assets/fish/moon.png" },
  { id: "shoe", name: "Shoe", img: "assets/fish/shoe.png" },
];

const playlist = [
  { title: "MACINTOSH PLUS - FLORAL SHOPPE", src: "assets/music/MACINTOSH PLUS - FLORAL SHOPPE - 02 リサフランク420 - 現代のコンピュ.mp3" },
  { title: "Hit the Spot · Surfing", src: "assets/music/Hit the Spot · Surfing.mp3" },
  { title: "HOME - Resonance", src: "assets/music/HOME - Resonance.mp3" },
  { title: "Luxury elite - cold", src: "assets/music/Luxury elite - cold.mp3" },
  { title: "憂鬱 - Sun", src: "assets/music/憂鬱 - Sun.mp3" },
  { title: "scizzie - aquatic ambience", src: "assets/music/scizzie - aquatic ambience.mp3" },
  { title: "luxury elite - S.W.A.K", src: "assets/music/Luxury elite - swak.mp3" },
  { title: "憂鬱 - Slow", src: "assets/music/憂鬱 - Slow.mp3" },
  { title: "so be it - glhf", src: "assets/music/so be it - glhf.mp3" },
  { title: "LÜNE - Rêve Lucide", src: "assets/music/LÜNE - Rêve Lucide.mp3" },
  { title: "Whitewoods - Beach Walk", src: "assets/music/Whitewoods - Beach Walk.mp3" },
  { title: "Home - We're Finally Landing", src: "assets/music/Home - We're Finally Landing.mp3" },
  { title: "Unknown Caller - Beautiful Night", src: "assets/music/Unknown Caller - Beautiful Night.mp3" },
  { title: "Unknown Caller - Leisure", src: "assets/music/Unknown Caller - Leisure.mp3" },
  { title: " waterfront dining & 猫 シ Corp. - Moonlit Walk", src: "assets/music/waterfront dining & 猫 シ Corp. - Moonlit Walk - DMT•TV.mp3" }, 
  { title: "Luxury Elite - Late Night TV", src: "assets/music/luxury elite - late night TV.mp3" },
  { title: "Cosmic Cycler - Good night", src: "assets/music/COSMIC CYCLER - Good Night.mp3" }
];

// PNG paths for icons (normal / pressed / active)
// Put your images in `assets/ui/`.
const uiIcons = {
  dockFish: { normal: "assets/ui/fish.png", pressed: "assets/ui/fish-pressed.png", active: "assets/ui/fish-active.png" },
  dockBg: { normal: "assets/ui/bg.png", pressed: "assets/ui/bg-pressed.png", active: "assets/ui/bg-active.png" },
  dockMusic: { normal: "assets/ui/music.png", pressed: "assets/ui/music-pressed.png", active: "assets/ui/music-active.png" },
  dockInfo: { normal: "assets/ui/info.png", pressed: "assets/ui/info-pressed.png", active: "assets/ui/info-active.png" },
  dockNote: { normal: "assets/ui/note.png", pressed: "assets/ui/note-pressed.png", active: "assets/ui/note-active.png" },
  feed: { normal: "assets/ui/feed.png", pressed: "assets/ui/feed-pressed.png", active: "assets/ui/feed-active.png" },
  trash: { normal: "assets/ui/trash.png", pressed: "assets/ui/trash-pressed.png", active: "assets/ui/trash-active.png" },
  spawn: { normal: "assets/ui/spawn.png", pressed: "assets/ui/spawn-pressed.png", active: "assets/ui/spawn-active.png" },
  close: { normal: "assets/ui/close.png", pressed: "assets/ui/close-pressed.png", active: "assets/ui/close-active.png" },
  musicPrev: { normal: "assets/ui/prev.png", pressed: "assets/ui/prev-pressed.png", active: "assets/ui/prev-active.png" },
  musicNext: { normal: "assets/ui/next.png", pressed: "assets/ui/next-pressed.png", active: "assets/ui/next-active.png" },
  musicPlay: { normal: "assets/ui/play.png", pressed: "assets/ui/play-pressed.png", active: "assets/ui/play-active.png" },
  musicPause: { normal: "assets/ui/pause.png", pressed: "assets/ui/pause-pressed.png", active: "assets/ui/pause-active.png" },
};

/** Full-size PNG shown on the Info overlay (also referenced in index.html). */
const INFO_PAGE_PNG = "assets/ui/info-page.png";

// ===============================
// STATE
// ===============================

const STORAGE_KEY = "aquariumOverlay_v4";

const defaultState = {
  backgroundId: backgrounds[0]?.id ?? "sunset",
  trackIndex: 0,
  spawnEnabled: true,
  openPage: "info", // 'fish' | 'bg' | 'music' | 'info' | 'note' | null
  notes: "",
  speciesInPool: Object.fromEntries(fishTypes.map(f => [f.id, true])),
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(defaultState);
    const parsed = JSON.parse(raw);
    if (parsed.openPage === "add") parsed.openPage = "info";
    delete parsed.unlockedSpecies;
    return { ...structuredClone(defaultState), ...parsed };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState();

// ===============================
// DOM
// ===============================

const tankRoot = document.getElementById("tank");
const aquarium = document.getElementById("aquarium");
const tankContent = document.getElementById("tankContent");
const tankOverlay = document.getElementById("tankOverlay");
const overlayFish = document.getElementById("overlayFish");
const overlayBg = document.getElementById("overlayBg");
const overlayMusic = document.getElementById("overlayMusic");
const overlayInfo = document.getElementById("overlayInfo");
const overlayNote = document.getElementById("overlayNote");

const fishGrid = document.getElementById("fishGrid");
const bgGrid = document.getElementById("bgGrid");
const trackList = document.getElementById("trackList");
const noteEditor = document.getElementById("noteEditor");
const infoPageImg = document.getElementById("infoPageImg");

const dockFishBtn = document.getElementById("dockFishBtn");
const dockBgBtn = document.getElementById("dockBgBtn");
const dockMusicBtn = document.getElementById("dockMusicBtn");
const dockInfoBtn = document.getElementById("dockInfoBtn");
const dockNoteBtn = document.getElementById("dockNoteBtn");
const dockFishIcon = document.getElementById("dockFishIcon");
const dockBgIcon = document.getElementById("dockBgIcon");
const dockMusicIcon = document.getElementById("dockMusicIcon");
const dockInfoIcon = document.getElementById("dockInfoIcon");
const dockNoteIcon = document.getElementById("dockNoteIcon");

const feedBtn = document.getElementById("feedBtn");
const trashBtn = document.getElementById("trashBtn");
const spawnToggleBtn = document.getElementById("spawnToggleBtn");
const closeBtn = document.getElementById("closeBtn");

const feedIcon = document.getElementById("feedIcon");
const trashIcon = document.getElementById("trashIcon");
const spawnIcon = document.getElementById("spawnIcon");
const closeIcon = document.getElementById("closeIcon");

const vizCanvas = document.getElementById("viz");
const seekArc = document.getElementById("seekArc");

const audio = document.getElementById("audio");
const nowTitle = document.getElementById("nowTitle");
const nowTitleDup = document.getElementById("nowTitleDup");
const nowTitleTrack = document.getElementById("nowTitleTrack");
const nowTitleViewport = document.querySelector(".nowTitleViewport");
const playPauseBtn = document.getElementById("playPauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const prevIcon = document.getElementById("prevIcon");
const playPauseIcon = document.getElementById("playPauseIcon");
const nextIcon = document.getElementById("nextIcon");

// ===============================
// HELPERS
// ===============================

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function setImg(el, src) {
  if (!el) return;
  el.src = src;
}

function bindPressImage(button, imgEl, iconDef, isActiveFn) {
  setImg(imgEl, iconDef.normal);
  button.addEventListener("pointerdown", () => setImg(imgEl, iconDef.pressed));
  const reset = () => setImg(imgEl, isActiveFn() ? iconDef.active : iconDef.normal);
  button.addEventListener("pointerup", reset);
  button.addEventListener("pointercancel", reset);
  button.addEventListener("pointerleave", reset);
}

// ===============================
// OVERLAY PAGES (only one at a time)
// ===============================

function updateDockIcons() {
  dockFishBtn.classList.toggle("is-active", state.openPage === "fish");
  dockBgBtn.classList.toggle("is-active", state.openPage === "bg");
  dockMusicBtn.classList.toggle("is-active", state.openPage === "music");
  dockInfoBtn.classList.toggle("is-active", state.openPage === "info");
  dockNoteBtn.classList.toggle("is-active", state.openPage === "note");

  setImg(dockFishIcon, state.openPage === "fish" ? uiIcons.dockFish.active : uiIcons.dockFish.normal);
  setImg(dockBgIcon, state.openPage === "bg" ? uiIcons.dockBg.active : uiIcons.dockBg.normal);
  setImg(dockMusicIcon, state.openPage === "music" ? uiIcons.dockMusic.active : uiIcons.dockMusic.normal);
  setImg(dockInfoIcon, state.openPage === "info" ? uiIcons.dockInfo.active : uiIcons.dockInfo.normal);
  setImg(dockNoteIcon, state.openPage === "note" ? uiIcons.dockNote.active : uiIcons.dockNote.normal);
}

function showOverlay(page) {
  state.openPage = page;
  saveState();

  const visible = !!page;
  tankOverlay.classList.toggle("is-visible", visible);
  tankOverlay.classList.toggle("is-hidden", !visible);

  // When any page is open, visually disable wave filters so the content reads clearly.
  document.body.classList.toggle("overlay-open", visible);

  overlayFish.classList.toggle("is-active", page === "fish");
  overlayBg.classList.toggle("is-active", page === "bg");
  overlayMusic.classList.toggle("is-active", page === "music");
  overlayInfo.classList.toggle("is-active", page === "info");
  overlayNote.classList.toggle("is-active", page === "note");

  if (page === "note" && noteEditor) {
    noteEditor.value = state.notes ?? "";
    noteEditor.focus();
  }
  if (infoPageImg) infoPageImg.src = INFO_PAGE_PNG;

  // #region agent log
  requestAnimationFrame(() => {
    const overlayMusicEl = document.getElementById("overlayMusic");
    const musicTitleEl = overlayMusicEl ? overlayMusicEl.querySelector(".overlayTitle") : null;
    const trackListEl = document.getElementById("trackList");
    const infoWrapEl = document.querySelector(".overlayPage--info .infoPanelWrap");
    const infoImgEl = document.getElementById("infoPageImg");
    const ovRect = tankOverlay?.getBoundingClientRect?.();
    const musicRect = overlayMusicEl?.getBoundingClientRect?.();
    const titleRect = musicTitleEl?.getBoundingClientRect?.();
    const listRect = trackListEl?.getBoundingClientRect?.();
    const infoWrapRect = infoWrapEl?.getBoundingClientRect?.();
    const infoImgRect = infoImgEl?.getBoundingClientRect?.();
    fetch('http://127.0.0.1:7890/ingest/490685db-3668-4064-9751-f8db57d64648',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'4cbcd5'},body:JSON.stringify({sessionId:'4cbcd5',runId:'run1',hypothesisId:'H_UI_LAYOUT',location:'app.js:showOverlay',message:'overlay layout snapshot',data:{page,overlayVisible:!!page,overlay:{w:ovRect?.width,h:ovRect?.height},music:{h:musicRect?.height,titleH:titleRect?.height,listH:listRect?.height,listTop:listRect?.top,musicTop:musicRect?.top},info:{wrapW:infoWrapRect?.width,wrapH:infoWrapRect?.height,imgW:infoImgRect?.width,imgH:infoImgRect?.height}},timestamp:Date.now()})}).catch(()=>{});
  });
  // #endregion

  updateDockIcons();
}

function toggleOverlay(page) {
  showOverlay(state.openPage === page ? null : page);
}

dockFishBtn.addEventListener("click", () => toggleOverlay("fish"));
dockBgBtn.addEventListener("click", () => toggleOverlay("bg"));
dockMusicBtn.addEventListener("click", () => toggleOverlay("music"));
dockInfoBtn.addEventListener("click", () => toggleOverlay("info"));
dockNoteBtn.addEventListener("click", () => toggleOverlay("note"));

if (noteEditor) {
  noteEditor.addEventListener("input", () => {
    state.notes = noteEditor.value;
    saveState();
  });
}

// ===============================
// BACKGROUNDS
// ===============================

function applyBackground() {
  const bg = backgrounds.find(b => b.id === state.backgroundId) ?? backgrounds[0];
  document.documentElement.style.setProperty("--tank-bg-image", bg ? bg.css : "none");
}

function renderBackgroundPicker() {
  bgGrid.innerHTML = "";
  backgrounds.forEach(bg => {
    const card = document.createElement("div");
    card.className = "overlayCard";
    if (bg.id === state.backgroundId) card.classList.add("overlayGlow");

    const thumb = document.createElement("div");
    thumb.className = "overlayThumb";
    thumb.style.backgroundImage = bg.css;
    thumb.style.backgroundSize = "cover";
    thumb.style.backgroundPosition = "center";

    const title = document.createElement("div");
    title.className = "overlayCardTitle";
    title.innerHTML = `<strong>${bg.name}</strong>`;

    card.addEventListener("click", () => {
      state.backgroundId = bg.id;
      saveState();
      applyBackground();
      renderBackgroundPicker();
    });

    card.appendChild(thumb);
    card.appendChild(title);
    bgGrid.appendChild(card);
  });
}

// ===============================
// FISH COLLECTION
// ===============================

function toggleSpeciesInPool(id) {
  state.speciesInPool[id] = !state.speciesInPool[id];
  saveState();
  renderFishCollection();
}

function renderFishCollection() {
  fishGrid.innerHTML = "";
  fishTypes.forEach(f => {
    const inPool = !!state.speciesInPool[f.id];

    const card = document.createElement("div");
    card.className = "overlayCard";
    if (!inPool) card.classList.add("is-off");

    const thumb = document.createElement("img");
    thumb.className = "overlayThumb";
    thumb.src = f.img ?? "";
    thumb.alt = f.name;

    const title = document.createElement("div");
    title.className = "overlayCardTitle";
    title.innerHTML = `<strong>${f.name}</strong><span>${inPool ? "On" : "Off"}</span>`;

    card.addEventListener("click", () => {
      toggleSpeciesInPool(f.id);
    });

    card.appendChild(thumb);
    card.appendChild(title);
    fishGrid.appendChild(card);
  });
}

// ===============================
// TOOLS (feed / trash / spawn)
// ===============================

let cursorMode = "normal"; // normal | feeding | trash

function syncTankToolPassthrough() {
  tankRoot?.classList.toggle("tank-tool-mode", cursorMode === "feeding" || cursorMode === "trash");
}

feedBtn.addEventListener("click", () => {
  cursorMode = cursorMode === "feeding" ? "normal" : "feeding";
  aquarium.classList.toggle("is-feeding", cursorMode === "feeding");
  aquarium.classList.remove("is-trash");
  trashBtn.classList.remove("is-active");
  feedBtn.classList.toggle("is-active", cursorMode === "feeding");
  syncTankToolPassthrough();
});

trashBtn.addEventListener("click", () => {
  cursorMode = cursorMode === "trash" ? "normal" : "trash";
  aquarium.classList.toggle("is-trash", cursorMode === "trash");
  aquarium.classList.remove("is-feeding");
  feedBtn.classList.remove("is-active");
  trashBtn.classList.toggle("is-active", cursorMode === "trash");
  syncTankToolPassthrough();
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (cursorMode !== "feeding" && cursorMode !== "trash") return;
  cursorMode = "normal";
  aquarium.classList.remove("is-feeding", "is-trash");
  feedBtn.classList.remove("is-active");
  trashBtn.classList.remove("is-active");
  syncTankToolPassthrough();
});

spawnToggleBtn.addEventListener("click", () => {
  state.spawnEnabled = !state.spawnEnabled;
  spawnToggleBtn.classList.toggle("is-active", state.spawnEnabled);
  saveState();
});

// Close (Electron IPC)
closeBtn.addEventListener("click", () => {
  try {
    const { ipcRenderer } = require("electron");
    ipcRenderer.send("close-window");
  } catch (err) {
    console.error("Could not close window:", err);
  }
});

// ===============================
// FISH SYSTEM
// ===============================

let fishNodes = [];
let flakes = [];
let bubbles = [];

let animStart = performance.now();
let lastFishTime = performance.now();
let nextSpawnAt = 0;

const SPAWN_INTERVAL_MIN_MS = 8000;
const SPAWN_INTERVAL_MAX_MS = 18000;

function getTankRect() {
  const r = aquarium.getBoundingClientRect();
  const size = Math.min(r.width, r.height);
  return {
    width: size * 1.3 * 1.05, // +5% horizontal swim space (tweak multipliers here)
    height: size * 1.5, // +50% vertical swim space
  };
}

function getEligibleSpawnTypes() {
  return fishTypes.filter(f => state.speciesInPool[f.id]);
}

function spawnFish() {
  const types = getEligibleSpawnTypes();
  if (types.length === 0) return;
  const f = types[Math.floor(Math.random() * types.length)];
  const rect = getTankRect();
  const margin = 56;
  const startX = Math.random() * (rect.width - margin * 2) + margin / 2;
  const startY = Math.random() * (rect.height - margin * 2) + margin / 2;
  addFishNode(f, startX, startY);
}

function addFishNode(f, x, y) {
  const el = document.createElement("img");
  el.className = "fish";
  el.src = f.img ?? "";
  el.alt = f.name;
  el.dataset.typeId = f.id;
  tankContent.appendChild(el);

  const dx = Math.random() < 0.5 ? -1 : 1;
  const node = {
    el,
    typeId: f.id,
    x,
    y,
    dirX: dx,
    targetDirX: dx,
    turnStartTime: 0,
    turnDuration: 0.35,
    swimSpeed: 28 + Math.random() * 42,
    waveAmplitude: 10 + Math.random() * 16,
    waveSpeed: 0.5 + Math.random() * 0.8,
    phase: Math.random() * Math.PI * 2,
    nextTurnTime: 2 + Math.random() * 5,
    startledUntil: 0,
    startledDirX: 1,
    sizeScale: 1, // grows when fed; max 200% (see MAX_FISH_SCALE)
    feedCooldownUntil: 0, // seconds (same clock as anim `t`); no growth until this time
  };

  fishNodes.push(node);
  return node;
}

function removeFishNode(node) {
  const idx = fishNodes.indexOf(node);
  if (idx >= 0) fishNodes.splice(idx, 1);
  node.el.remove();
}

function startleFish(node) {
  node.startledUntil = performance.now() / 1000 + 0.7 + Math.random() * 0.7;
  node.startledDirX = Math.random() < 0.35 ? -node.dirX : node.dirX;
}

function spawnFlake(x, y) {
  const el = document.createElement("div");
  el.className = "flake";
  tankContent.appendChild(el);
  const flake = { el, x, y };
  flakes.push(flake);
  setTimeout(() => {
    el.remove();
    const i = flakes.indexOf(flake);
    if (i >= 0) flakes.splice(i, 1);
  }, 5000);
}

function spawnBubble(x, y) {
  const el = document.createElement("div");
  el.className = "bubble";
  tankContent.appendChild(el);
  const bubble = { el, x, y, vy: -38 };
  bubbles.push(bubble);
  setTimeout(() => {
    el.remove();
    const i = bubbles.indexOf(bubble);
    if (i >= 0) bubbles.splice(i, 1);
  }, 2200);
}

// Feeding click in tank
aquarium.addEventListener("click", (e) => {
  if (cursorMode !== "feeding") return;
  if (state.openPage) return; // pages cover the tank
  if (e.target.closest(".fish")) return;
  const rect = aquarium.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  spawnFlake(x, y);
});

// Fish click/drag or trash remove
aquarium.addEventListener("mousedown", (e) => {
  const target = e.target.closest(".fish");
  if (!target) return;
  if (state.openPage) return;

  const node = fishNodes.find(n => n.el === target);
  if (!node) return;

  if (cursorMode === "trash") {
    e.preventDefault();
    e.stopPropagation();
    removeFishNode(node);
    return;
  }

  /* No grab/startle while feeding — only flake drops (empty water) apply */
  if (cursorMode === "feeding") return;

  startleFish(node);
  const start = { x: node.x, y: node.y, mx: e.clientX, my: e.clientY };

  const onMove = (ev) => {
    const rect = getTankRect();
    const dx = ev.clientX - start.mx;
    const dy = ev.clientY - start.my;
    const eff = 52 * node.sizeScale;
    node.x = clamp(start.x + dx, 4, rect.width - eff);
    node.y = clamp(start.y + dy, 4, rect.height - eff);
  };

  const onUp = () => {
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", onUp);
    startleFish(node);
  };

  document.addEventListener("mousemove", onMove);
  document.addEventListener("mouseup", onUp);
});

/* Do not clear feeding/trash on mouseleave — the pointer often exits the circle
   toward the bottom/music UI while still “in” the visual tank; use feed/trash buttons to exit. */

function animateFish(now) {
  const t = (now - animStart) / 1000;
  const dt = Math.min(1 / 15, (now - lastFishTime) / 1000);
  lastFishTime = now;

  const rect = getTankRect();
  const FISH_BASE = 52;
  const MAX_FISH_SCALE = 2; // 200% max size
  const FEED_COOLDOWN_SEC = 10;

  // Spawn timer (FIXED: nextSpawnAt timestamp)
  if (state.spawnEnabled && getEligibleSpawnTypes().length > 0) {
    if (!nextSpawnAt) nextSpawnAt = now + 1200;
    if (now >= nextSpawnAt) {
      spawnFish();
      const interval = SPAWN_INTERVAL_MIN_MS + Math.random() * (SPAWN_INTERVAL_MAX_MS - SPAWN_INTERVAL_MIN_MS);
      nextSpawnAt = now + interval;
    }
  } else {
    nextSpawnAt = now + 2000;
  }

  fishNodes.forEach((f) => {
    // Desired direction — use targetDirX (not dirX) so we don't overwrite a wall turn while scaleX is still animating
    let desiredDirX = f.targetDirX;
    let speed = f.swimSpeed;

    if (f.startledUntil > t) {
      speed *= 2.3;
      desiredDirX = f.startledDirX;
    } else {
      // Attract to nearest flake (with hysteresis to prevent rapid flipping)
      let best = null;
      for (const fl of flakes) {
        const d = Math.hypot(fl.x - f.x, fl.y - f.y);
        if (!best || d < best.d) best = { fl, d };
      }
      if (best && best.d < 120) {
        const fx = best.fl.x - f.x;
        const fy = best.fl.y - f.y;
        const mag = Math.hypot(fx, fy) || 1;
        f.x += (fx / mag) * 45 * dt;
        f.y += (fy / mag) * 45 * dt;
        if (Math.abs(fx) > 12) desiredDirX = fx > 0 ? 1 : -1;
      }
    }

    if (desiredDirX !== f.targetDirX) {
      f.targetDirX = desiredDirX;
      f.turnStartTime = t;
    }

    const eff = FISH_BASE * f.sizeScale;
    let proposedX = f.x + f.dirX * speed * dt;
    if (proposedX <= 4) {
      f.x = 4;
      if (f.dirX < 0 && f.targetDirX !== 1) {
        f.targetDirX = 1;
        f.turnStartTime = t;
        f.nextTurnTime = t + 2 + Math.random() * 5;
      }
    } else if (proposedX >= rect.width - eff) {
      f.x = rect.width - eff;
      if (f.dirX > 0 && f.targetDirX !== -1) {
        f.targetDirX = -1;
        f.turnStartTime = t;
        f.nextTurnTime = t + 2 + Math.random() * 5;
      }
    } else {
      f.x = proposedX;
      if (t >= f.nextTurnTime) {
        f.targetDirX *= -1;
        f.turnStartTime = t;
        f.nextTurnTime = t + 2 + Math.random() * 5;
      }
    }

    const waveY = Math.sin(t * f.waveSpeed + f.phase) * f.waveAmplitude;
    f.y += waveY * 0.02;

    // Smooth scaleX flip (same easing as grab/startle — border uses targetDirX + turnStartTime only)
    const turnProgress = Math.min(1, (t - f.turnStartTime) / f.turnDuration);
    const eased = turnProgress * (2 - turnProgress);
    const currentScale = f.dirX === -1 ? -1 : 1;
    const targetScale = f.targetDirX === -1 ? -1 : 1;
    const smoothScale = currentScale + (targetScale - currentScale) * eased;
    if (turnProgress >= 1) f.dirX = f.targetDirX;

    // #region agent log
    if (f.x <= 5 && f.dirX < 0 && turnProgress > 0.15 && turnProgress < 0.95 && (globalThis.__wallVrfLogs || 0) < 4) {
      globalThis.__wallVrfLogs = (globalThis.__wallVrfLogs || 0) + 1;
      fetch('http://127.0.0.1:7890/ingest/490685db-3668-4064-9751-f8db57d64648',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'4cbcd5'},body:JSON.stringify({sessionId:'4cbcd5',runId:'post-fix',hypothesisId:'H1_verify_turn_animates',location:'app.js:animateFish',message:'wall turn mid progress',data:{turnProgress,dirX:f.dirX,targetDirX:f.targetDirX},timestamp:Date.now()})}).catch(()=>{});
    }
    // #endregion

    f.x = clamp(f.x, 4, rect.width - eff);
    f.y = clamp(f.y, 4, rect.height - eff);
    f.el.style.transform = `translate(${f.x}px, ${f.y}px) scale(${f.sizeScale}) scaleX(${smoothScale})`;

    if (Math.random() < 0.0018) spawnBubble(f.x + 20, f.y + 30);
  });

  /* Fish eats flake: +10% size when off cooldown, cap 200% base */
  for (let i = flakes.length - 1; i >= 0; i--) {
    const fl = flakes[i];
    for (const f of fishNodes) {
      const eff = FISH_BASE * f.sizeScale;
      if (Math.hypot(fl.x - f.x, fl.y - f.y) < eff * 0.55) {
        if (t >= f.feedCooldownUntil && f.sizeScale < MAX_FISH_SCALE) {
          f.sizeScale = Math.min(MAX_FISH_SCALE, f.sizeScale * 1.1);
          f.feedCooldownUntil = t + FEED_COOLDOWN_SEC;
        }
        fl.el.remove();
        flakes.splice(i, 1);
        break;
      }
    }
  }

  flakes.forEach(fl => {
    fl.y += 15 * dt;
    fl.el.style.transform = `translate(${fl.x}px, ${fl.y}px)`;
  });

  bubbles.forEach(b => {
    b.y += b.vy * dt;
    b.vy *= 0.985;
    b.el.style.transform = `translate(${b.x}px, ${b.y}px)`;
  });

  requestAnimationFrame(animateFish);
}

// ===============================
// MUSIC + DISTORTION + VISUALIZER
// ===============================

/** Long titles scroll horizontally in a slow loop; short titles stay centered. */
let lastNowPlayingTitle = "—";
function updateNowPlayingTitle(raw) {
  const text = raw && String(raw).trim() ? String(raw).trim() : "—";
  lastNowPlayingTitle = text;
  if (!nowTitle || !nowTitleTrack || !nowTitleViewport) return;

  nowTitle.textContent = text;
  nowTitleDup.textContent = text;
  nowTitleDup.hidden = false;

  const applyMarquee = () => {
    nowTitleDup.textContent = text;
    nowTitleDup.hidden = false;
    const half = nowTitleTrack.scrollWidth / 2;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const need = !reduceMotion && half > nowTitleViewport.clientWidth + 2;
    nowTitleTrack.classList.toggle("is-marquee", need);
    if (need) {
      const pxPerSec = 22;
      const dur = Math.max(14, Math.min(48, half / pxPerSec));
      nowTitleTrack.style.animationDuration = `${dur}s`;
    } else {
      nowTitleTrack.style.animationDuration = "";
      nowTitleDup.textContent = "";
      nowTitleDup.hidden = true;
    }
  };

  requestAnimationFrame(() => requestAnimationFrame(applyMarquee));
}

window.addEventListener("resize", () => updateNowPlayingTitle(lastNowPlayingTitle));

function loadTrack(index, autoplay = false) {
  state.trackIndex = (index + playlist.length) % playlist.length;
  saveState();
  const track = playlist[state.trackIndex];
  audio.src = track.src;
  updateNowPlayingTitle(track.title);
  renderTrackList();
  if (autoplay) audio.play();
}

function renderTrackList() {
  trackList.innerHTML = "";
  playlist.forEach((t, i) => {
    const li = document.createElement("li");
    li.classList.toggle("is-active", i === state.trackIndex);
    li.textContent = t.title;
    li.addEventListener("click", () => loadTrack(i, true));
    trackList.appendChild(li);
  });
}

playPauseBtn.addEventListener("click", async () => {
  setupAudioFx();
  if (audioCtx?.state === "suspended") await audioCtx.resume();
  if (audio.paused) await audio.play();
  else audio.pause();
});

prevBtn.addEventListener("click", () => loadTrack(state.trackIndex - 1, true));
nextBtn.addEventListener("click", () => loadTrack(state.trackIndex + 1, true));

function updatePlayPauseIcon() {
  if (!playPauseIcon) return;
  const def = audio.paused ? uiIcons.musicPlay : uiIcons.musicPause;
  setImg(playPauseIcon, def.normal);
}

audio.addEventListener("pause", updatePlayPauseIcon);
audio.addEventListener("ended", () => loadTrack(state.trackIndex + 1, true));
audio.addEventListener("timeupdate", () => drawSeekArc());

// WebAudio chain
let audioCtx = null;
let analyser = null;
let analyserData = null;
let sourceNode = null;

function setupAudioFx() {
  if (audioCtx) return;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  sourceNode = audioCtx.createMediaElementSource(audio);

  const shaper = audioCtx.createWaveShaper();
  const curve = new Float32Array(2048);
  for (let i = 0; i < curve.length; i++) {
    const x = (i / (curve.length - 1)) * 2 - 1;
    curve[i] = Math.tanh(1.6 * x);
  }
  shaper.curve = curve;

  const lowpass = audioCtx.createBiquadFilter();
  lowpass.type = "lowpass";
  lowpass.frequency.value = 9500;

  const delay = audioCtx.createDelay(0.05);
  delay.delayTime.value = 0.015;
  const lfo = audioCtx.createOscillator();
  lfo.frequency.value = 0.25;
  const lfoGain = audioCtx.createGain();
  lfoGain.gain.value = 0.004;
  lfo.connect(lfoGain).connect(delay.delayTime);
  lfo.start();

  const dry = audioCtx.createGain();
  dry.gain.value = 0.86;
  const wet = audioCtx.createGain();
  wet.gain.value = 0.14;

  analyser = audioCtx.createAnalyser();
  analyser.fftSize = 256;
  analyserData = new Uint8Array(analyser.frequencyBinCount);

  sourceNode.connect(shaper).connect(lowpass);
  lowpass.connect(dry);
  lowpass.connect(delay).connect(wet);

  const mix = audioCtx.createGain();
  dry.connect(mix);
  wet.connect(mix);
  mix.connect(analyser).connect(audioCtx.destination);
}

function drawVisualizer() {
  if (!analyser || !vizCanvas) return;
  const ctx = vizCanvas.getContext("2d");
  if (!ctx) return;

  // Vertical waveform: time-domain data mapped as horizontal offset along Y.
  if (!analyserData || analyserData.length === 0) return;
  analyser.getByteTimeDomainData(analyserData);

  const w = vizCanvas.width;
  const h = vizCanvas.height;
  ctx.clearRect(0, 0, w, h);

  ctx.lineWidth = 2;
  ctx.strokeStyle = "rgba(70,243,255,0.7)";
  ctx.beginPath();

  const len = analyserData.length;
  for (let i = 0; i < len; i++) {
    const t = i / (len - 1);
    const y = t * h;
    const v = analyserData[i] / 128.0 - 1.0; // -1..1
    const x = (v * 0.5 + 0.5) * w; // map to 0..w, stay mostly inside tube
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }

  ctx.stroke();
  requestAnimationFrame(drawVisualizer);
}

function drawSeekArc() {
  if (!seekArc) return;
  const ctx = seekArc.getContext("2d");
  if (!ctx) return;
  const w = seekArc.width;
  const h = seekArc.height;
  ctx.clearRect(0, 0, w, h);

  /* Arc geometry (also adjust the whole bar position in styles.css: .arc-bottom --bottom) */
  const cx = w / 2;
  const cy = h * 1.05; /* circle center Y in math space before Y-flip; raise/lower to reshape curve */
  const r = w * 0.42; /* arc radius */
  const start = Math.PI * 1.15;
  const end = Math.PI * 1.85; /* arc endpoints (radians); tweak span vs tank */
  const dur = audio.duration || 0;
  const pct = dur ? audio.currentTime / dur : 0;
  const mid = start + (end - start) * pct;

  ctx.lineWidth = 6;
  ctx.lineCap = "round";

  /* Flip Y so the same geometry reads as an upward arch (toward the tank) instead of a downward bulge. */
  ctx.save();
  ctx.translate(0, h);
  ctx.scale(1, -1);

  ctx.strokeStyle = "rgba(255,255,255,0.16)";
  ctx.beginPath();
  ctx.arc(cx, cy, r, start, end);
  ctx.stroke();

  ctx.strokeStyle = "rgba(70,243,255,0.55)";
  ctx.beginPath();
  ctx.arc(cx, cy, r, start, mid);
  ctx.stroke();

  ctx.restore();
}

seekArc.addEventListener("click", (e) => {
  if (!audio.duration) return;
  const rect = seekArc.getBoundingClientRect();
  const bw = seekArc.width;
  const bh = seekArc.height;
  const mx = (e.clientX - rect.left) * (bw / rect.width);
  const my = (e.clientY - rect.top) * (bh / rect.height);
  const x = mx;
  const y = bh - my; /* same flipped space as drawSeekArc */
  const cx = bw / 2;
  const cy = bh * 1.05;
  const dx = x - cx;
  const dy = y - cy;
  const ang = Math.atan2(dy, dx);
  const start = Math.PI * 1.15;
  const end = Math.PI * 1.85;
  let norm = (ang - start) / (end - start);
  norm = Math.max(0, Math.min(1, norm));
  const pct = 1 - norm; /* horizontal mapping (matches pre-invert timeline) */
  audio.currentTime = pct * audio.duration;
});

audio.addEventListener("play", () => {
  updatePlayPauseIcon();
  setupAudioFx();
  if (audioCtx?.state === "suspended") audioCtx.resume();
  requestAnimationFrame(drawVisualizer);
});

// ===============================
// INIT
// ===============================

applyBackground();
renderBackgroundPicker();
renderFishCollection();
renderTrackList();
loadTrack(state.trackIndex, false);

spawnToggleBtn.classList.toggle("is-active", state.spawnEnabled);
if (noteEditor) noteEditor.value = state.notes ?? "";
showOverlay(state.openPage);

bindPressImage(dockFishBtn, dockFishIcon, uiIcons.dockFish, () => state.openPage === "fish");
bindPressImage(dockBgBtn, dockBgIcon, uiIcons.dockBg, () => state.openPage === "bg");
bindPressImage(dockMusicBtn, dockMusicIcon, uiIcons.dockMusic, () => state.openPage === "music");
bindPressImage(dockInfoBtn, dockInfoIcon, uiIcons.dockInfo, () => state.openPage === "info");
bindPressImage(dockNoteBtn, dockNoteIcon, uiIcons.dockNote, () => state.openPage === "note");
bindPressImage(feedBtn, feedIcon, uiIcons.feed, () => cursorMode === "feeding");
bindPressImage(trashBtn, trashIcon, uiIcons.trash, () => cursorMode === "trash");
bindPressImage(spawnToggleBtn, spawnIcon, uiIcons.spawn, () => state.spawnEnabled);
bindPressImage(closeBtn, closeIcon, uiIcons.close, () => false);

bindPressImage(prevBtn, prevIcon, uiIcons.musicPrev, () => false);
bindPressImage(nextBtn, nextIcon, uiIcons.musicNext, () => false);
playPauseBtn.addEventListener("pointerdown", () => {
  setImg(playPauseIcon, audio.paused ? uiIcons.musicPlay.pressed : uiIcons.musicPause.pressed);
});
playPauseBtn.addEventListener("pointerup", updatePlayPauseIcon);
playPauseBtn.addEventListener("pointercancel", updatePlayPauseIcon);
playPauseBtn.addEventListener("pointerleave", updatePlayPauseIcon);
updatePlayPauseIcon();

requestAnimationFrame(animateFish);
