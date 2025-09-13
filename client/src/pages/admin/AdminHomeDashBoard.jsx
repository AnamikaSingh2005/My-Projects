import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminHomeDashBoard = () => {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({}); // backend dashboard data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resExams = await axios.get("http://localhost:5000/api/exams/exams");
        const resDashboard = await axios.get("http://localhost:5000/api/admindashboard/");
        setExams(resExams.data);
        setData(resDashboard.data);
        console.log(resDashboard.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const cards = [
    {
      title: "Total Examinee",
      description: "Schedule and manage exams",
      button: "Start",
      count: data.totalExaminees,
    },
    {
      title: "Total Subject",
      description: "Prepare and publish results",
      button: "Generate",
      count: data.totalSubject,
    },
    {
      title: "Total Exams",
      description: "Exams scheduled",
      count: data.totalExams,
    },
    {
      title: "Total Questions",
      description: "Send notifications or updates",
      button: "Message",
      count: data.totalQuestions,
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h3>
        <b>Admin Dashboard</b>
      </h3>

      {/* Cards Row */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {cards.map((card, index) => (
          <div key={index} style={cardStyle}>
            <h3>{card.title}</h3>
            {card.count !== undefined ? (
              <h1 style={{ color: "#6f1ad1ff" }}>{card.count}</h1>
            ) : null}
            <p>{card.description}</p>
            {card.button && (
              <button style={btnStyle} onClick={card.action}>
                {card.button}
              </button>
            )}
          </div>
        ))}
      </div>

      
    <div style={{ marginTop: "30px" }}>
        <h3>Scheduled Exams</h3>
        {loading ? (
          <p>Loading exams...</p>
        ) : exams.length === 0 ? (
          <p>No exams scheduled</p>
        ) : (
          <table style={tableStyle}>
            <thead>
              <tr>
                <th>Exam</th>
                <th>Date</th>
                <th>Duration</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {exams.map((exam) => (
                <tr
                  key={exam._id}
                  style={{ backgroundColor: "rgba(216, 211, 233, 1)" }}
                >
                  <td>{exam.title}</td>
                  <td>{new Date(exam.date).toLocaleDateString()}</td>
                  <td>{exam.duration}</td>
                  <td
                    style={{
                      color: exam.status === "Scheduled" ? "red" : "green",
                    }}
                  >
                    {exam.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

// Styles
const cardStyle = {
  flex: "1",
  minWidth: "220px",
  padding: "20px",
  background: "rgb(195, 188, 221)",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  textAlign: "center",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",
};

const btnStyle = {
  marginTop: "10px",
  padding: "8px 15px",
  border: "none",
  borderRadius: "5px",
  background: "#6f1ad1ff",
  color: "white",
  cursor: "pointer",
  width: "220px",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "15px",
};

export default AdminHomeDashBoard;
