import { alertMessage } from './_model';

export default function showAlertMessage(type, message) {
    alertMessage.textContent = message;
    type === 'success' ? alertMessage.classList.add("bg-success", "text-light") : alertMessage.classList.add("bg-danger", "text-light")
    alertMessage.classList.remove("translated");
    
    setTimeout(() => {
      alertMessage.classList.add("translated");
    }, 5000)
}