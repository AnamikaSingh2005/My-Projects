import axios from 'axios'
import React, { useState, useEffect } from 'react'

export const Registration = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    college: "",
    course: "",
    branch: "",
    session: "",
    phone: ""
  })

  const [data, setData] = useState([]) 

  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/api/examinee', form)
      alert("Registered Successfully ")
      window.location.href='/userDashBoard'
      setForm({
        name: "",
        email: "",
        password: "",
        college: "",
        course: "",
        branch: "",
        session: "",
        phone: ""
      })
    } catch (er) {
      console.log(er.response?.data || er.message)
      alert(" Sorry, try again later")
    }
  }

  
  const handlefetch = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/sessions')
      setData(res.data)
    } catch (er) {
      console.log(er)
    }
  }

  useEffect(() => {
    handlefetch()
  }, [])

  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-md-6 mx-auto bg-primary">
          <div className="card shadow p-4 " style={{backgroundColor:"pink"}}>
            <h2 className="text-center mb-4 " style={{color:"blue"}}><b>Registration Form</b></h2>

            <form onSubmit={handleSubmit} method='POST' >
              <div className="mb-3">
                <label className="form-label"><b>Full Name</b></label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label"><b>
                    Email</b></label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label"><b>Password</b></label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter password"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label"><b>College</b></label>
                <input
                  type="text"
                  name="college"
                  value={form.college}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your college"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label"><b>Course</b></label>
                <input
                  type="text"
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your course"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label"><b>Branch</b></label>
                <input
                  type="text"
                  name="branch"
                  value={form.branch}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your branch"
                  required
                />
              </div>

               <div className="mb-3">
                <label className="form-label"><b>Session</b></label>
                <select
                  name="session"
                  value={form.session}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                    <option value="">Select session</option>
                  {data.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label"><b>Phone</b></label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter phone number"
                  required
                />
              </div>

              <button type="submit" className="btn btn-warning w-100">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Registration;