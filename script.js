const WHATSAPP_NUMBER = "5591991266968";

document.querySelectorAll("[data-wa]").forEach((el) => {
  el.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(el.dataset.wa)}`;
  el.target = "_blank";
  el.rel = "noopener noreferrer";
});

document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

document.querySelectorAll(".placeholder-link").forEach(a => a.addEventListener("click", e => {
  e.preventDefault();
  alert("Página institucional a ser criada na próxima etapa.");
}));
