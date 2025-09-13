import React from "react";
import "./AdminDashBoard.css"; // CSS file
import { Link, Outlet } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const role = localStorage.getItem('role')
  if(role=='admin'){
    const email =  localStorage.getItem('role')
  }else{
    window.location.href='/'
  }
  const [data,setData] = useState([]);
  const handlefetch = async()=>{
    const res = await axios.get('http://localhost:5000/api/admindashboard/')
    setData(res.data);
  }
  useEffect (()=>{
    handlefetch()
  },[])
  return (
    <div className="dashboard">
      {/* Sidebar */}
    
      <aside className="sidebar">
         <div className="logo">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc6EA-x17wZh_loTowWIrQVPlOczAOO6y5Gw&s"
      alt="Logo"
      height="70"
      width="90"
    />
  </div>

        <h2 style={{marginTop:"20px"}}>Admin</h2>
        <ul>
          <li>
            <Link to="session" style={{ textDecoration: "none", color: "white" }}>
              Session
            </Link>
          </li>
          <li>
           <Link to="subject" style={{ textDecoration: "none", color: "white" }}>
              Subject
            </Link>
            </li>
          <li> <Link to="examinee" style={{ textDecoration: "none", color: "white" }}>
              Examinee
            </Link></li>
          <li>
            <Link to="examination" style={{ textDecoration: "none", color: "white" }}>
              Examination
            </Link>
            </li>
          <li>
            <Link to="question" style={{ textDecoration: "none", color: "white" }}>
              Question Bank
            </Link>
          </li>
         <li>
            <Link to="reportgeneration" style={{ textDecoration: "none", color: "white" }}>
              Report Generation
            </Link>
            </li>
        
          <li>
            <Link to="changepassword" style={{ textDecoration: "none", color: "white" }}>
              Change Password
            </Link>
            </li>
          <li onClick={(()=>{
            localStorage.removeItem('role')
            localStorage.removeItem('adminEmail')
            localStorage.removeItem('id')
            window.location.href='/adminlogin'
          })}>Logout</li>
           <li>
            <Link to="MessageReply" style={{ textDecoration: "none", color: "white" }}>
              Message
            </Link>
            </li>

        </ul>
      </aside>
      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <button>Collapse</button>
        <h3 style={{float:"right", marginTop:"8px"}}><b>Admin Dashboard</b></h3>
        </header>
        <Outlet/>
      </main>
    </div>
  );
}

export default AdminDashboard;
