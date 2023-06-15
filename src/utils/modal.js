let overlay = document.querySelector(".modal-overlay")

const Modal = {
  open() {
    overlay.classList.add("active")
  },
  close() {
    overlay.classList.remove("active")
  },
}

export { Modal }
