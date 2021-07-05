import axios from "axios";

//cmd: ngrok http 3000
export default axios.create({
  baseURL: 'http://990c4a136448.ngrok.io',
});
