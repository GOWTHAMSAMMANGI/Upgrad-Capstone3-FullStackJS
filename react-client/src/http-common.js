import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-3-208-24-48.compute-1.amazonaws.com:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});
