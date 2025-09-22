const favList = document.getElementById("favoritosList");
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
let currentIndex = 0;

// 🔹 Inicializar favoritos al cargar
renderFavoritos();
updateCards();

// Ajustar al redimensionar
window.addEventListener("resize", updateCards);

// -------------------
// 📌 Función: mover tarjetas
// -------------------
function updateCards() {
  const cards = document.querySelector(".cards");
  const card = document.querySelector(".card");

  if (!cards || !card) return; // seguridad si no hay tarjetas

  const cardWidth = card.offsetWidth + 20; // ancho + margen
  const containerWidth = document.querySelector(".cards-container").offsetWidth;

  // Calcular desplazamiento para centrar la tarjeta actual
  const offset = (containerWidth / 2) - (cardWidth / 2) - currentIndex * cardWidth;
  cards.style.transform = `translateX(${offset}px)`;
}

function moveLeft() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCards();
  }
}

function moveRight() {
  const totalCards = document.querySelectorAll(".card").length;
  if (currentIndex < totalCards - 1) {
    currentIndex++;
    updateCards();
  }
}

// -------------------
// 📌 Favoritos
// -------------------
document.querySelectorAll(".fav-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    const title = card.querySelector(".card-title").textContent;
    const img = btn.querySelector("img");

    if (!favoritos.includes(title)) {
      // agregar a favoritos
      favoritos.push(title);
      img.src = "../src/img/favorito.png";
    } else {
      // quitar de favoritos
      favoritos = favoritos.filter((juego) => juego !== title);
      img.src = "../src/img/corazon.png";
    }

    // guardar cambios
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    renderFavoritos();
  });
});

// Renderizar lista de favoritos
function renderFavoritos() {
  favList.innerHTML = "";
  if (favoritos.length === 0) {
    favList.innerHTML = `<li class="list-group-item text-center">Aún no tienes juegos en favoritos</li>`;
  } else {
    favoritos.forEach((juego) => {
      const li = document.createElement("li");
      li.classList.add("list-group-item");
      li.textContent = juego;
      favList.appendChild(li);
    });
  }

};
