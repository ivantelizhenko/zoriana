"use strict";

// Show Dialog Menu
const dialogMenu = document.querySelector(".dialog-menu");
const openDialogMenuButton = document.querySelector("#open-dialog-menu");
const closeDialogMenuButton = document.querySelector("#close-dialog-menu");

openDialogMenuButton.addEventListener("click", () => {
  dialogMenu.showModal();
  dialogMenu.style.display = "grid";
});

closeDialogMenuButton.addEventListener("click", () => {
  dialogMenu.close();
  dialogMenu.style.display = "none";
});

// Show Dialog Follow
const dialogFollow = document.querySelector(".dialog-follow");
const openDialogFollowButton = document.querySelectorAll(".open-dialog-follow");
const closeDialogFollowButton = document.querySelector("#close-dialog-follow");

console.log(dialogFollow);
console.log(dialogMenu);

openDialogFollowButton.forEach((button) =>
  button.addEventListener("click", () => {
    if (dialogMenu.open) {
      setTimeout(() => dialogMenu.close(), 0);
      dialogMenu.style.display = "none";
    }
    dialogFollow.showModal();
    dialogFollow.style.display = "grid";
  })
);

closeDialogFollowButton.addEventListener("click", () => {
  dialogFollow.close();
  dialogFollow.style.display = "none";
});
