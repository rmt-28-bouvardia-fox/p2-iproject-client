import axios from "axios";

const api = axios.create({
  // baseURL: "https://h8-p2-cms-uniqlo.herokuapp.com/",
  baseURL: "http://localhost:3000/"
});

export default api;
