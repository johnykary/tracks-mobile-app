import axios from "axios";

//cmd: ngrok http 3000
export default axios.create({
  baseURL: 'http://633e7f1b9e13.ngrok.io',
});
