import axios from "axios";

//0ea67a497ffebe053cd5a9426663a69a08805c15
//https://api-ssl.bitly.com/v4/shorten

export const key = "0ea67a497ffebe053cd5a9426663a69a08805c15";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default api;
