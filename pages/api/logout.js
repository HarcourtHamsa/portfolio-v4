import { serialize } from "cookie";

const COOKIE_OPTIONS = {
  secure: process.env.NODE_ENV !== "development",
  httpOnly: true,
  signed: true,
  maxAge: -1,
  sameSite: "Strict",
  path: "/",
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    res.setHeader(
      "Set-Cookie",
      serialize("codesandbox__jwt", null, COOKIE_OPTIONS)
    );

    res.status(200).json({
      message: "log out",
    });
  }
}
