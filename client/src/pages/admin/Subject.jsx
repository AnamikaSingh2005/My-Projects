import React, { useState, useEffect } from "react";
import "./subject.css";
import axios from "axios";

const subject = () => {
  const [form, setForm] = useState({ name: "", description: "" });
  const [id, setId] = useState("");
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (edit) {
        await axios.put(`http://localhost:5000/api/subjects/${id}`, form); // ✅ fixed
        alert("Updated Successfully");
        setEdit(false);
        setId("");
      } else {
        await axios.post("http://localhost:5000/api/subjects", form); // ✅ correct
        alert("Added Successfully");
      }
      setForm({ name: "", description: "" });
      handleFetch();
    } catch (error) {
      alert("subject not added");
      console.log(error.response?.data || error.message);
    }
  };

  const handleFetch = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/subjects"); // ✅ fixed
      setData(res.data);
    } catch (err) {
      console.log("Error fetching subjects", err);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/subjects/${id}`); // ✅ fixed
      alert("subject Deleted Successfully");
      handleFetch();
    } catch (er) {
      alert("Sorry, Try Again Later");
      console.log(er);
    }
  };

  const handleEdit = (item) => {
    setForm({
      name: item.name,
      description: item.description,
    });
    setEdit(true);
    setId(item._id);
  };

  return (
    <div className="subject-container">
      {/* Form */}
      <form method="post" onSubmit={handleSubmit} className="subject-form">
        <h2 style={{marginTop:"4px"}}>{edit ? "Edit subject" : "Add subject"}</h2>
        <label htmlFor="subject"><b>Enter subject :</b></label>
        <input
          type="text"
          placeholder="Enter subject"
          className="input-field"
          id="subject"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="textarea"><b>Enter Description :</b></label>
        <textarea
          placeholder="Enter subject Description"
          className="input-field"
          id="textarea"
          name="description"
          value={form.description}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="submit-btn">
          {edit ? "Update" : "Submit"}
        </button>
      </form>

      {/* Table */}
      <div className="subject-table">
        <h3 style={{marginTop:"4px"}}>Subjects</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={item._id}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default subject;
