import axios from "axios";

//cmd: ngrok http 3000
export default axios.create({
  baseURL: 'http://f65c6150c740.ngrok.io',
});
