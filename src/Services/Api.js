import axios from "axios";

// baseURL: "https://api.fcaexpress.com.br",

const Api = axios.create({
  baseURL: "https://localhost:5001",
  responseType: "json",
  auth: {
    username: "",
    password: "",
  },
});

export default Api;
