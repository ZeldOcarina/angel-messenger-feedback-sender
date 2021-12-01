import axios from "axios";

export default class SalesjetConnector {
    constructor({ event_name, requestBody, url, api_key }) {
        this.event_name = event_name;
        this.requestBody = requestBody;
        this.url = url;
        this.api_key = api_key;
    }

    async sendDataToSalesJet() {
        const response = await axios({
          url: this.url,
          headers: {
            Authorization: this.api_key
          },
          method: "POST",
          data: {
            event_name: this.event_name,
            contact: this.requestBody
          }
        });
        
        console.dir(response);
    
        if(response.status !== 200) return new Error("An unexpected error has occurred 😭, please tell Mattia immediately!");
        return response;
      }
}