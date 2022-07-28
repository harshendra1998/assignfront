import axios from "axios";
import React, { useState } from "react";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(false);
  const [create, setcreate] = useState(false);
  const onsubmit = () => {
    seterror(false);
    if(create){
      axios
      .post("http://localhost:8000/createid", {
        email,
        password: password,
      })
      .then(({ data }) => {
          window.location.href = '/'
      }).catch(e=>seterror(true));;
    }
    else{
    axios
      .post("http://localhost:8000/login", {
        email,
        password: password,
      })
      .then(({ data }) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          window.location.href = '/'
        } else {
          seterror(true);
        }
      }).catch(e=>seterror(true));
    }
  };
  return (
    <div className="centerinchild flexcol">
      <h2>{create ? 'Create Account':'Login'}</h2>
      <button onClick={()=>setcreate(!create)}>Switch to {!create ? 'Create Account':'Login'}</button>
      <p>email:</p>
      <input value={email} onChange={(e) => setemail(e.target.value)}></input>
      <p>password:</p>
      <input
        value={password}
        type={"password"}
        onChange={(e) => setpassword(e.target.value)}
      ></input>
      {error && (
        <p style={{ fontSize: "0.9rem", color: "red" }}>
          * Check Password or email
        </p>
      )}
      <button className='button' onClick={() => onsubmit()} style={{ margin: 10 }}>
      {create ? 'Create Account':'Login'}
      </button>
    </div>
  );
}
