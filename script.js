function buscarFilme() {
  const filme = document.getElementById("movieInput").value.trim();
  const url = `https://www.omdbapi.com/?i=tt3896198&apikey=840b8871&s=${encodeURIComponent(
    filme
  )}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const resultado = document.getElementById("resultado");
      resultado.innerHTML = "";

      if (data.Response === "True") {
        data.Search.forEach((filme) => {
          const card = document.createElement("div");
          card.classList.add("card");
          card.innerHTML = `
            <img src="${
              filme.Poster !== "N/A"
                ? filme.Poster
                : "https://via.placeholder.com/200x300"
            }" alt="${filme.Title}">
            <h3>${filme.Title}</h3>
            <p>${filme.Year}</p>
          `;
          resultado.appendChild(card);
        });
      } else {
        resultado.innerHTML = `<p>Filme não encontrado.</p>`;
      }
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
}
