import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://realestate2-0-xhgp.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
