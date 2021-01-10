const doc = document.body;
const chevron = document.getElementById("chevron");

window.onscroll = () => handleScroll();

function handleScroll() {
  doc.scrollTop > 1000 && doc.scrollTop < 1500
    ? (chevron.style.display = "block")
    : (chevron.style.display = "none");
}

window.onload = () => {
  document.getElementById("sobre").onclick = () => {
    window.scrollTo({ top: 560, behavior: "smooth" });
  };

  document.getElementById("projetos").onclick = () => {
    window.scrollTo({ top: 1200, behavior: "smooth" });
  };
};
