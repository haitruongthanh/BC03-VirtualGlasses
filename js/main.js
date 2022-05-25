import { renderGlasses } from "./glassesController.js";

renderGlasses();

function removeGlasses(isPutOn) {
  isPutOn
    ? (document.getElementById("avatarHasGlass").style.display = "block")
    : (document.getElementById("avatarHasGlass").style.display = "none");
}

window.removeGlasses = removeGlasses;
