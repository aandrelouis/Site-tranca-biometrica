import axios from "axios";

const apilogin = axios.create({
  baseURL: process.env.API_URL
});

export default apilogin;

