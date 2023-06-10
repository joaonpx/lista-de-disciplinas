let disciplines = document.querySelectorAll(".discipline")
let overlay = document.querySelector(".overlay")
let card = document.querySelector(".card")

// utilizando forEach para adicionar o evento de click em cada elemento que contenha a classe discipline
disciplines.forEach((discipline) => {
  discipline.addEventListener("click", openOverlay)

  function openOverlay() {
    overlay.classList.add("opened")

    if (discipline.classList.contains("1")) {
      card.innerHTML = `<h2 >Lógica com Java</h2>`

      card.style.display = "block"
    }
  }
})

overlay.addEventListener("click", closeOverlay)

function closeOverlay(event) {
  if (event.target !== card) {
    overlay.classList.remove("opened")

    card.style.display = "none"
  }
}
