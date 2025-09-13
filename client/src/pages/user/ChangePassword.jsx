import axios from 'axios';
import React, { useState } from 'react';

export const ChangePassword = () => {
    const id = localStorage.getItem('userId');
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
  try{
     const res = await axios.put(`http://localhost:5000/api/examinee/change/${id}`,form)
     alert(res.data.message)
  }  
  catch(er){
    console.log(er)
   // alert(res.data.message)
  }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h3 className="text-center mb-4">Change Password</h3>
            <form onSubmit={handleSubmit} method='POST'>
              
              <div className="mb-3">
                <label className="form-label">Old Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="oldPassword"
                  value={form.oldPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="newPassword"
                  value={form.newPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Confirm New Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Change 
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChangePassword;