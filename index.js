const confirmButton = document.querySelector('button');
const modal = document.querySelector("basic-modal");

confirmButton.addEventListener("click", () => {
  modal.setAttribute("opened", "");
});
