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
  
