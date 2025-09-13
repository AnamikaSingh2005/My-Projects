import React from "react";
import "./UserDashboard.css"; // CSS file
import { href, Link, Outlet } from "react-router";


function UserDashboard() {

const role = localStorage.getItem('userRole')
if(role=="user"){
  var email = localStorage.getItem('userEmail')
}
else{
  window.location.href = '/'
}
const getGreeting = () => {
  const hour = new Data().getHours();
  if(hour < 12) return 'Good Morning';
  if(hour < 18) return 'Good Afternoon';
  return 'Good Evening';
}
const handlelogout = () =>{
  localStorage.removeItem('userEmail')
   localStorage.removeItem('userRole')
 localStorage.removeItem('userId')
window.location.href='/'

}

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
        <h2>User</h2>
        <ul>
          <li>
            <Link to="myexams" style={{ textDecoration: "none", color: "white" }}>
              My Exams
            </Link>
          </li>
          <li>
           <Link to="myresult" style={{ textDecoration: "none", color: "white" }}>
              My Result
            </Link>
            </li>
          <li> <Link to="changepassword" style={{ textDecoration: "none", color: "white" }}>
              Change Password
            </Link></li>
          <li>
            <Link to="message" style={{ textDecoration: "none", color: "white" }}>
              Message
            </Link>
            </li>
          <li>
            <Link onClick={()=>{handlelogout()}} style={{ textDecoration: "none", color: "white" }}>
              Logout
            </Link>
          </li>
          
        </ul>
      </aside>
      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <button>Hi User!</button>
        <h3 style={{float:"right", marginTop:"8px"}}><b>User Dashboard</b></h3>
        </header>
        <Outlet/>
      </main>
    </div>
  );
}

export default UserDashboard;
