import axios from "axios";

const app = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
});

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};

export default http;
