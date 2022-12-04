import axios from "axios";
import { serialize } from "cookie";
import { sign } from "jsonwebtoken";

const COOKIE_OPTIONS = {
  secure: process.env.NODE_ENV !== "development",
  httpOnly: true,
  signed: true,
  maxAge: 60 * 60 * 24,
  sameSite: "Strict",
  path: "/",
};

const authenticate = async (email, password) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data.find((user) => {
    if (user.email === email && user.website === password) {
      return user;
    }
  });
};

// api login
export default async function handler(req, res) {
  const { email, password } = req.body;

  if (req.method === "POST") {
    const user = await authenticate(email, password);

    if (user) {
      // generates JWT token
      const token = sign(
        {
          accessToken: "2433fvervwf24tgerfwrfvwrvi34k54",
          username: user.name,
          email: user.email,
          exp: Math.floor(Date.now() / 1000) * 60 * 60 * 24 * 30, // 30 days validity
        },
        process.env.JWT_SECRET
      );

      res.setHeader(
        "Set-Cookie",
        serialize("codesandbox__jwt", token, COOKIE_OPTIONS)
      );
      res.status(200).json({
        user: user.name,
        email: user.email,
        status: "authenticated",
      });
    } else {
      res.status(404).send("Invalid email or password");
    }
  }
}
