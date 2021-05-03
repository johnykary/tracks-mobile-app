import axios from "axios";

//cmd: ngrok http 3000
export default axios.create({
  baseURL: 'http://7dab7087219e.ngrok.io',
});
