import axios from "axios";
import React, { useState , useEffect} from "react";
import {Link} from 'react-router'

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
   
  });

  
       useEffect(() => {
      // Set body background color
      document.body.style.backgroundColor = "#c799d3ff"; 
   }, []);
  

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const res = await axios.post('http://localhost:5000/api/examinee/login',form)
      if(res.data.message=="Login Successfully"){
        localStorage.setItem('userEmail',res.data.user.email);
        localStorage.setItem('userId',res.data.user.id);
        localStorage.setItem('userRole',res.data.user.role);
        window.location.href = '/userDashboard';
      }
    }
  catch(er){
    console.log(er)
    alert("Sorry Try Again")
  }
    
  };

  return (
    <div className="container-fluid mt-5" >
      <div className="row" style={{marginTop:"100px"}}>
        <div className="col-sm-6 mx-auto">
          <div className="card shadow p-4">
<div className="logo" style={{ marginTop: "20px", textAlign: "center" }}>
    <img
      src="https://softprofullstackacademy.in/images/Spi%20logo.png"
      alt="Logo"
      height="70"
      width="115"
    
    />
  </div>

            <h3 className="text-center mb-4"><b>User Login</b></h3>

            <form onSubmit={handleSubmit} method="POST">
              
            
              
              <div className="mb-3">
                <label className="form-label"><b>Your Email</b></label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label className="form-label"><b>Your Password</b></label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <button type="submit" className="btn btn-primary w-25">
                Login
              </button>
              <p>Are you have an account ? <a href="/registration">Click here</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
