import axios from "axios";

//TODO: Maybe use ngrok http 3000
export default axios.create({
  baseURL: 'http://05cdaa932035.ngrok.io',
});
