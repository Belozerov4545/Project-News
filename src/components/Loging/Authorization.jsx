import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Authorization({ setUser }) {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch('/api/authorization', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .then(() => navigate('/'));
  };

  return (
    <div style={{
      marginTop: '3rem', width: '25rem', textAlign: 'center', borderRadius: '0.375rem', borderColor: 'black', borderStyle: 'solid',
    }}
    className="container">
      <h1 style={{ textAlign: 'center' }}>Authorization</h1>
      {/* <h3>{errorMessage}</h3> */}
      <form onSubmit={submitHandler} style={{ textAlign: 'center' }}>

        <div style={{ textAlign: 'center' }}>
          <label htmlFor="exampleInputEmail1" className="form-label" style={{ textAlign: 'left' }}>
            E-mail:
            <input onChange={inputHandler} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </label>
        </div>
        <div style={{ textAlign: 'center' }}>
          <label htmlFor="exampleInputPassword1" className="form-label" style={{ textAlign: 'left' }}>
            Password:
            <input onChange={inputHandler} name="password" type="password" className="form-control" id="exampleInputPassword1" />
          </label>
        </div>
        <div style={{ textAlign: 'center' }}>
          <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'blue', margin: '1rem' }}>Submit</button>
        </div>
      </form>
    </div>
  );
}
