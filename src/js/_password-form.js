import showAlertMessage from "./_alert-message";
import { passwordForm, modal, fieldSet } from "./_model";

const correctPassword =
  window.location.hostname === "localhost" ? "" : "AngelLongevityExpansion";

passwordForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const password = document.querySelector("#modal-password").value;

  if (password === correctPassword) {
    modal.modal("hide");
    fieldSet.disabled = false;
  } else showAlertMessage("error", "Incorrect password! 😔");
});
