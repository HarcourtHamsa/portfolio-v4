import axios from "axios";
import { decode } from "jsonwebtoken";

const auth = {};

auth.currentUser = (token) => {
  const userData = decode(token);
  return userData;
};

auth.loginUser = async ({ email, password }) => {
  const { data } = await axios.post("/api/login", { email, password });
  console.log(data);
};

auth.logoutUser = async () => {
  const { data } = await axios.post("/api/logout");
  console.log(data);
};

export default auth;
