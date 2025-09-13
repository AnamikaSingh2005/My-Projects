import React, {useState, useEffect} from 'react'
import axios from 'axios';
const AdminLogin = () => {
    const [ form, setForm] = useState({
        email:'',
        password:''
    });

     useEffect(() => {
    // Set body background color
    document.body.style.backgroundColor = "#c799d3ff"; 
 }, []);

    const handleChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const res = await axios.post('http://localhost:5000/api/admin/login', form);
        if(res.data.message=="Login Successfully"){
            alert("Login Successfully");
            localStorage.setItem('adminEmail', res.data.admin.email);
            localStorage.setItem('id', res.data.admin.id);
            localStorage.setItem('role', res.data.admin.role);
            window.location.href='/adminDashBoard'
        }
    }

  return (
    <div className="container border border-5" style={{ maxWidth: "600px", marginTop: "130px", height:"410px", backgroundColor:"white" }}>

           <div className="logo" style={{ marginTop: "20px", textAlign: "center" }}>
    <img
      src="https://softprofullstackacademy.in/images/Spi%20logo.png"
      alt="Logo"
      height="70"
      width="115"
    
    />
  </div>

      <h2 className="mb-4" style={{marginTop:"30px", textAlign:"center"}}><b>Admin Login</b></h2>

     
      <form onSubmit={handleSubmit} method="post">

        
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
           <b>Your Email</b>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter email"
            required
            onChange={handleChange}
          />
        </div>

       
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
           <b>Your Password</b>
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Enter password"
            required
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary me-2">
          Login
        </button>
        
      </form>
    </div>
  );
}
export default AdminLogin;