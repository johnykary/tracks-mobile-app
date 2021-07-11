import axios from "axios";

//cmd: ngrok http 3000
export default axios.create({
  baseURL: 'http://b734c88fa04e.ngrok.io',
});
