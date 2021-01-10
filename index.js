const doc = document.body;
const arrow = document.getElementById("arrow");
const chevron = document.getElementById("chevron");

window.onscroll = () => handleScroll();

function handleScroll() {
  doc.scrollTop < 100
    ? (chevron.style.opacity = "0")
    : (chevron.style.opacity = "1");

  doc.scrollTop > 1000 && doc.scrollTop < 1500
    ? (arrow.style.display = "block")
    : (arrow.style.display = "none");
}

window.onload = () => {
  document.getElementById("sobre").onclick = () => {
    window.scrollTo({ top: 600, behavior: "smooth" });
  };

  document.getElementById("projetos").onclick = () => {
    window.scrollTo({ top: 1250, behavior: "smooth" });
  };

  document.getElementById("chevron").onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
};
