// Mobile nav toggle
const toggle = document.querySelector(".nav__toggle");
const menu = document.querySelector("#navMenu");
if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

// Year in footer
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Simple stats you can edit later (or wire to a real backend)
const stats = {
  dropsCompleted: 40,   // change these anytime
  winners: 40,
  totalCash: 5000,
};

const statDrops = document.getElementById("statDrops");
const statWinners = document.getElementById("statWinners");
const statTotal = document.getElementById("statTotal");

if (statDrops) statDrops.textContent = stats.dropsCompleted;
if (statWinners) statWinners.textContent = stats.winners;
if (statTotal) statTotal.textContent = `$${stats.totalCash}+`;

// Drop card defaults (edit)
const dropStatus = document.getElementById("dropStatus");
const dropTime = document.getElementById("dropTime");
if (dropStatus) dropStatus.textContent = "Follow for live clues";
if (dropTime) dropTime.textContent = "Times vary — posted on IG/TikTok";
