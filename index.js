const button = document.querySelector(".primary-button");
const backdrop = document.querySelector(".modal-backdrop");

button.addEventListener("click", toggleModal);

backdrop.addEventListener("click", (e) => {
  const target = e.target.closest(".close-modal-window");

  if (!target) {
    return;
  }
  toggleModal();
});

function toggleModal() {
  backdrop.classList.toggle("is-open");
}