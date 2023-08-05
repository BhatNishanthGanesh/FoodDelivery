import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom'

function Login() {
  const [credential, setcredential] = useState({ email: '', password: '' });
  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({
      name: credential.name, email: credential.email, password: credential.password, 
    }));
    const response = await fetch('http://localhost:5000/api/loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credential.email, password: credential.password })
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert('Enter valid credentials');
    }
    if (json.success){
      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"));
      navigate("/")      
    }
  };
  
  const onChange = (event) => {
    setcredential({ ...credential, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" name='email' value={credential.email} onChange={onChange} id="exampleInputEmail1" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" name='password' value={credential.password} onChange={onChange} id="exampleInputPassword1" placeholder="Password" />
        </div>
        <button type="submit" className="m-3 btn btn-success">Submit</button>
        <Link to="/createuser" className="m-3 btn btn-danger">I'm a new User</Link>
      </form>
    </div>
  );
}

export default Login;
