import { Disciplines } from "./utils/disciplines.js"
import { Modal } from "./utils/modal.js"

let disciplines = document.querySelectorAll(".discipline")
let modal = document.querySelector(".modal")

// percorrendo por todas as disciplinas presentes no html
disciplines.forEach((discipline) => {
  discipline.addEventListener("click", (event) => {
    // armazenando o nome da disciplina clicada
    let disciplineName = event.currentTarget.className.split(" ")[1]

    // armazenando a informação da disciplina clicada
    let disciplineInfo = Disciplines[disciplineName]

    // verificando se existe informação da disciplina clicada
    if (disciplineInfo) {
      // armazenando as informações em variaveis
      const { name, lessons, tasks, credits } = disciplineInfo

      // abrindo o modal
      Modal.open()

      // adicionando informações no modal
      modal.innerHTML = `
      <header>
        <h2>${name}</h2>

        <a href="#" class="close-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="hsl(175, 40%, 28%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </a>
      </header>

      <div class="discipline-info">
        <div>
          <p>Quantidade de aulas</p> <span>${lessons}</span>
        </div>
        <div>
          <p>Quantidade de tarefas</p> <span>${tasks}</span>
        </div>
        <div>
          <p>Número de créditos</p> <span>${credits}</span>
        </div>
      </div>
      `
      let closeBtn = document.querySelector(".close-btn")

      closeBtn.addEventListener("click", () => {
        Modal.close()
      })
    }
  })
})
