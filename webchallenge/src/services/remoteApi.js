import axios from "axios";

const remoteApi = axios.create({
  baseURL: "http://18.228.153.205"
});

export default remoteApi;
