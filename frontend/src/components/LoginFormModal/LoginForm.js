import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginFormModal.css"

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
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
      <h2>Login</h2>
      <form
      onSubmit={handleSubmit}
      className="form"
      >
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            placeholder= 'User Name or Email'
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
        <button type="submit">Log In</button>
      </form>
    </>
  );
}

export default LoginForm;
