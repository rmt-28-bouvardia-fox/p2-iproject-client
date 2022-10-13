import axios from "axios";

const api = axios.create({
  baseURL: "https://ygo-bidding.herokuapp.com/",
  // baseURL: "http://localhost:3000/"
});

export default api;
