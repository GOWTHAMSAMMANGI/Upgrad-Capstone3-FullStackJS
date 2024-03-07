import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-54-227-187-18.compute-1.amazonaws.com:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});
