import axios from "axios";
import { API_URL } from "../env";

export const options = {
  method: "GET",
  mode: "cors",
  cache: "default",
  "Content-Type": "application/json",
};

export const getGreetings = (name) =>
  axios
    .get(`${API_URL}/api`, { params: { name: name } }, options)
    .then((resp) => {
      const response = resp.data;
      console.log(response);
      return response;
    })
    .catch((err) => console.log(err));
