const modalCloseBtn = document.getElementById("modal-close-btn");
const modalOpenBtn = document.getElementById("open-modal");
const modalBackground = document.getElementById("modal-bg");
const modal = document.getElementById("modal");

modalCloseBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
});

modalOpenBtn.addEventListener("click", () => {
  modal.style.display = "block";
  setTimeout(() => {
    modal.classList.add("active");
  }, 10);
});

modalBackground.addEventListener("click", () => {
  modal.classList.remove("active");
  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
});
