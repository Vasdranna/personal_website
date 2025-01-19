/* ———————————————————————————————————————————————————————————————————————————————————— */
/*                                     OBFUSCATE EMAIL                                  */
/* ———————————————————————————————————————————————————————————————————————————————————— */
const u = atob("aW5mbw==");
const d = atob("Z2l1ZGFuLmNj");
const a = document.querySelector(".emailLink");
a.href = "mailto:" + u + "@" + d;

/* ———————————————————————————————————————————————————————————————————————————————————— */
/*                                    ABOUT ME MODAL                                    */
/* ———————————————————————————————————————————————————————————————————————————————————— */
const openModal = document.querySelector(".openModal");
const closeModal = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");

// Show modal
openModal.addEventListener("click", () => {
  modal.classList.remove("modal-close");
  modal.classList.add("modal-show");
});

// Close modal with click in close button
closeModal.addEventListener("click", () => {
  closeModalFn();
});

// Close modal with Esc key
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" || e.key === "Esc") {
    closeModalFn();
  }
});

// Close modal with click outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModalFn();
  }
});

function closeModalFn() {
  modal.classList.remove("modal-show");
  modal.classList.add("modal-close");
}
