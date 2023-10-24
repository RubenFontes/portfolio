// Loop através de todas as figuras e legendas
for (let i = 1; i <= 11; i++) {
    const figure = document.getElementById(`figure-${i}`);
    const figcaption = document.getElementById(`figcaption-${i}`);
  
    // Adicione eventos de mouseover e mouseout a cada figura
    figure.addEventListener("mouseover", () => {
      figcaption.style.display = "none";
    });
    figure.addEventListener("mouseout", () => {
      figcaption.style.display = "block";
    });
  }

// Animação
const elementos = document.querySelectorAll(".animacao");

function handleAnimation() {
  elementos.forEach((elemento) => {
    const rect = elemento.getBoundingClientRect();
    if (elemento.getBoundingClientRect().top < window.innerHeight && rect.bottom >= 0) {
      elemento.classList.add("animated");
    } else {
      elemento.classList.remove("animated");
    }
  });
}

// Adiciona a função de manipulação de eventos para o evento "load"
window.addEventListener("load", handleAnimation);

// Adiciona a mesma função de manipulação de eventos para o evento "scroll"
window.addEventListener("scroll", handleAnimation);
