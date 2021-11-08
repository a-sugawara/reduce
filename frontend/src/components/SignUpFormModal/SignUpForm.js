import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import {signup} from "../../store/session";

import './SignupForm.css'

function SignupForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      const user ={
        email,
        username,
        password,
      }

      return dispatch(signup(user))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  let errorRender

  if(errors.length > 0) {
    errorRender = <ul>
    {errors.map((error, idx) => (
      <li key={idx}>{error}</li>
    ))}
  </ul>
  }else{
    errorRender = null
  }

  return (
    <>
      {errorRender}
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}
      className="form">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder= 'Email'
          className="form-input"
          required
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder= 'User Name'
          className="form-input"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder= 'Password'
          className="form-input"
          required
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder= 'Confirm Password'
          className="form-input"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

export default SignupForm;
