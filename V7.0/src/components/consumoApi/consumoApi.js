import axios from "axios";

const consumoApi = axios.create({
  baseURL: "http://172.29.176.1:3001",
});

export default consumoApi;