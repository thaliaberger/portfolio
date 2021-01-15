const doc = document.body;
const arrow = document.getElementById("arrow");
const chevron = document.getElementById("chevron");

window.onscroll = () => handleScroll();

function handleScroll() {
  doc.scrollTop < 100
    ? (chevron.style.opacity = "0")
    : (chevron.style.opacity = "1");

  doc.scrollTop > 1100 && doc.scrollTop < 1800
    ? (arrow.style.display = "block")
    : (arrow.style.display = "none");
}

window.onload = () => {
  if (window.matchMedia("(max-width: 340px)").matches) {
    document.getElementById("sobre").onclick = () => {
      window.scrollTo({ top: 100, behavior: "smooth" });
    };
  } else if (window.matchMedia("(max-width: 640px)").matches) {
    document.getElementById("sobre").onclick = () => {
      window.scrollTo({ top: 250, behavior: "smooth" });
    };
  } else {
    document.getElementById("sobre").onclick = () => {
      window.scrollTo({ top: 600, behavior: "smooth" });
    };
  }

  if (window.matchMedia("(max-width: 640px)").matches) {
    document.getElementById("projetos").onclick = () => {
      window.scrollTo({ top: 820, behavior: "smooth" });
    };
  } else {
    document.getElementById("projetos").onclick = () => {
      window.scrollTo({ top: 1250, behavior: "smooth" });
    };
  }

  document.getElementById("chevron").onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
};
