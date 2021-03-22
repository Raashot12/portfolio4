// responsive menu when on small devices to show the menus
var domreyBars = document.getElementById("domrey-bars");
var domreyMenu = document.getElementById("domrey-menu");
var bodyChange = document.querySelector("body");
domreyBars.addEventListener("click", () => {
  domreyBars.classList.toggle("rotate-domrey-bars");
  domreyMenu.classList.toggle("show-domrey-menu");
  bodyChange.classList.toggle("hide-on-scroll-page");
});
window.sr = ScrollReveal();

sr.reveal(".animate-left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

sr.reveal(".animate-right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".animate-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});
