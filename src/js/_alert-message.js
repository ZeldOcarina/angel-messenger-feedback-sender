import { alertMessage } from "./_model";

export default function showAlertMessage(type, message) {
  alertMessage.textContent = message;

  if (type === "success") {
    alertMessage.classList.remove("bg-danger");
    alertMessage.classList.add("bg-success", "text-light");
  } else {
    alertMessage.classList.remove("bg-success");
    alertMessage.classList.add("bg-danger", "text-light");
  }
  alertMessage.classList.remove("translated");

  setTimeout(() => {
    alertMessage.classList.add("translated");
  }, 5000);
}
