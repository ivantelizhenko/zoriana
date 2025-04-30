// Show Dialog

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#mobile--header__button");
const closeButton = document.querySelector("#close-dialog");

showButton.addEventListener("click", () => {
  dialog.showModal();
  dialog.style.display = "grid";
});

closeButton.addEventListener("click", () => {
  dialog.close();
  dialog.style.display = "none";
});
