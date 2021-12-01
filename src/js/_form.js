import { messengerConnectorForm } from "./_model";
import showAlertMessage from "./_alert-message";
import { showSpinner, hideSpinner } from "./_spinner-controller";
import { ConfettiLauncher } from "./utils/_confetti-launcher";

import SalesjetConnector from "./utils/_salesjet-connector";

const API_KEY = process.env.SALES_JET_API_KEY;
const SALES_JET_ENDPOINT = "https://sj-api.com/externalapp/track";

export default function formHandler() {
  function resetForm() {
    const inputs = document.getElementsByTagName("input");
    const selects = document.getElementsByTagName("select");

    for (const input of inputs) input.value = "";
    for (const select of selects) {
      select.querySelector("option").selected = true;
    }
  }

  messengerConnectorForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    showSpinner();

    const formData = new FormData(messengerConnectorForm);

    const requestBody = {
      email: "",
      first_name: "",
      last_name: "",
      phone_number: "",
      custom_attributes: {},
    };

    for (var [name, value] of formData.entries()) {
      if (name == "email") requestBody.email = value;
      else if (name == "first_name") requestBody.first_name = value;
      else if (name == "last_name") requestBody.last_name = value;
      else if (name == "phone_number") requestBody.phone_number = value;
      else requestBody.custom_attributes[name] = value;
    }

    try {
      const salesjetConnector = new SalesjetConnector({
        event_name: "angel_messenger_feedback",
        requestBody,
        url: SALES_JET_ENDPOINT,
        api_key: API_KEY,
      });

      const response = await salesjetConnector.sendDataToSalesJet();

      console.dir(response);

      if (response instanceof Error || (response.stack && response.message))
        throw new Error(response.message);

      showAlertMessage(
        "success",
        "The request to send a message has been correctly sent to Sales Jet! 🎉"
      );
      setTimeout(() => {
        new ConfettiLauncher().shootConfetti(4000);
      }, 1000);

      resetForm();
      hideSpinner();
    } catch (err) {
      hideSpinner();
      showAlertMessage("fail", err.message);
      console.dir(err);
    }
  });
}
