import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <>
        <ul className="errors-list">
            {errors.map((error, id) => <li key={id}>{error}</li>)}
        </ul>
        <form onSubmit={handleSubmit}
         className="form">

            <input
                type="text"
                onChange={(e) => setCredential(e.target.value)}
                required
                value={credential}
                placeholder= 'User Name or Email'
                className="form-input"
            />


            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                value={password}
                placeholder= 'Password'
                className="form-input"
            />

            <button type="submit">Log In</button>
        </form>
    </>
  );
}

export default LoginFormPage;
