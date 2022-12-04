import React from "react";
import Navbar from "../components/Navbar";
import auth from "../lib/auth";

function app({ user }) {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Dashboard</h1>
        <p>Welcome, {user?.email}</p>

        <button onClick={() => auth.logoutUser()}>Log out</button>
      </main>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  const token = req.cookies.codesandbox__jwt;
  const user = auth.currentUser(token) || null;

  //  checks if user is logged in
  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user,
    },
  };
}

export default app;
