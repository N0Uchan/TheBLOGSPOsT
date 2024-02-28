import { Link } from "react-router-dom";
import React from "react";
import GoogleSignIn from "../components/GoogleSignIn";

export default function SignIn() {
  return (
    <main className="pages" >
      <GoogleSignIn />
      <h2>Other Sign In Options...</h2>
      <Link to='/'> Cancel </Link>
    </main>
  );
}
