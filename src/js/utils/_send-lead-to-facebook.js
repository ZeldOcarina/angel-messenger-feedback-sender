const axios = require("axios");

export default class ConnectWithFacebook {
    constructor({ endpoint, email, phone, domain="https://monarchy.io/", purchase_value, purchase_item }) {
        this.endpoint = endpoint;
        this.email = email;
        this.phone = phone;
        this.domain = domain;
        this.purchase_value = purchase_value;
        this.purchase_item = purchase_item;
    }

    async connectWithFacebook() {
        try {
            const baseUrl = `${this.domain}api/v1/facebook/${this.endpoint}`;
        
            const firstResponse = await axios.get("https://api.ipify.org?format=json");
            const ip = firstResponse.data.ip;
            const userAgent = navigator.userAgent;
            const url = window.location.href;

            const requestBody = {
              ip,
              userAgent,
              url,
              email: this.email,
              phone: this.phone,
            }

            this.purchase_item  ? requestBody.purchase_item = this.purchase_item : null;
            this.purchase_value ? requestBody.purchase_value = this.purchase_value : null;
        
            const secondResponse = await axios.post(baseUrl, requestBody);
        
            console.log(secondResponse.data);
            return secondResponse;
        } catch (err) {
          console.dir(err);
        }
    }
}
  