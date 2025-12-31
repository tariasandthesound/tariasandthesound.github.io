// STEP 1: Replace the placeholder links + cover filenames with your real releases.
const RELEASES = [
  {
    title: "Release 1",
    year: "2025",
    cover: "assets/img/album-1.jpg",
    links: {
      spotify: "https://open.spotify.com/",
      apple: "https://music.apple.com/",
      youtube: "https://music.youtube.com/",
      bandcamp: "https://tariasandthesound.bandcamp.com/"
    }
  },
  {
    title: "Release 2",
    year: "2024",
    cover: "assets/img/album-2.jpg",
    links: {
      spotify: "https://open.spotify.com/",
      apple: "https://music.apple.com/",
      youtube: "https://music.youtube.com/",
      bandcamp: "https://tariasandthesound.bandcamp.com/"
    }
  }
];

let selectedPlatform = "spotify";

function renderGrid() {
  const grid = document.getElementById("releaseGrid");
  grid.innerHTML = "";

  RELEASES.forEach(r => {
    const url = r.links[selectedPlatform] || r.links.spotify;

    const a = document.createElement("a");
    a.className = "album";
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";

    const img = document.createElement("img");
    img.src = r.cover;
    img.alt = `${r.title} cover art`;

    const meta = document.createElement("div");
    meta.className = "meta";

    const t = document.createElement("div");
    t.className = "title";
    t.textContent = r.title;

    const y = document.createElement("div");
    y.className = "year";
    y.textContent = r.year;

    meta.appendChild(t);
    meta.appendChild(y);

    a.appendChild(img);
    a.appendChild(meta);

    grid.appendChild(a);
  });
}

function setActiveButton(platform) {
  document.querySelectorAll("[data-platform]").forEach(btn => {
    const isActive = btn.getAttribute("data-platform") === platform;
    btn.style.textDecoration = isActive ? "underline" : "none";
  });
}

document.querySelectorAll("[data-platform]").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedPlatform = btn.getAttribute("data-platform");
    setActiveButton(selectedPlatform);
    renderGrid();
  });
});

// Initial render
setActiveButton(selectedPlatform);
renderGrid();
