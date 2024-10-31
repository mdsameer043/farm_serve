import React, { useState } from "react";
import "../css/signin.css";
import { Link, useNavigate } from "react-router-dom";
// import {setCurrentUser} from "../App"


export const Signin = ()=>  {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    } else {
      try {
        const response = await fetch("http://localhost:5000/api/signin", {
          // Use your API endpoint
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            action:"changeUser",
          }),
        });

        const data = await response.json();
        console.log(data)
        if (data.data[0].password === password) {
          console.log(data.data[0].password);
          // console.log(data)
          // setCurrentUser(data.data[0].name,data.data[0].email,data.data[0].phone,data.data[0].password,"address");
          navigate('/', { replace: true });
        }else{
          alert("email or password is incorrect")
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Account doesn't exist");
      }
    }
  };

  return (
    <div className="body1">
      <main className="form-signup w-100 m-auto">
        <form onSubmit={submit}>
          <div className="col-sm-12">
            <a className="btn btn-primary" href="/">
              Back
            </a>
          </div>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <h1 id="invalid_notification"></h1>
          <div className="link-signin">
            <h6>
              Don't have a account? <Link to="/signup">sign up</Link>
            </h6>
          </div>
          <button className="btn btn-primary w-100 py-2" id="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
}

