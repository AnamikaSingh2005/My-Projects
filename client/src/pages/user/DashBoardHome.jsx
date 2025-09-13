import React from "react";

const DashBoardHome = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Dashboard Overview</h2>

      {/* Cards Row */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <div style={cardStyle}>
          <h3>Exam Completion</h3>
          <ProgressBar value={71} color="#007bff" />
          <p>71% completed</p>
        </div>

        <div style={cardStyle}>
          <h3>Pass Percentage</h3>
          <ProgressBar value={54} color="#28a745" />
          <p>54% achieved</p>
        </div>

        <div style={cardStyle}>
          <h3>Preparation Progress</h3>
          <ProgressBar value={32} color="#ffc107" />
          <p>32% syllabus covered</p>
        </div>

        <div style={cardStyle}>
          <h3>Overall Target</h3>
          <ProgressBar value={89} color="#17a2b8" />
          <p>89% Goal Achieved</p>
        </div>
      </div>

      {/* Table Section */}
      <div style={{ marginTop: "30px" }}>
        <h3>Attempted Exams</h3>
        <table style={tableStyle}>
          <thead>
            <tr style={{backgroundColor:"rgb(195, 188, 221)", color:"blue"}}>
              <th>SUBJECT</th>
              <th>DATE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{backgroundColor:"rgb(195, 188, 221)"}}>
              <td>HTML</td>
              <td>15 Aug 2025</td>
              <td style={{ color: "green" }}>Passed</td>
            </tr>
            <tr style={{backgroundColor:"rgb(195, 188, 221)"}}>
              <td>English</td>
              <td>17 Aug 2025</td>
              <td style={{ color: "red" }}>Failed</td>
            </tr>
            <tr style={{backgroundColor:"rgb(195, 188, 221)"}}>
              <td>C++</td>
              <td>19 Aug 2025</td>
              <td style={{ color: "green" }}>Passed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Progress Bar Component
const ProgressBar = ({ value, color }) => {
  return (
    <div style={{ height: "12px", background: "#e9ecef", borderRadius: "8px", marginBottom: "10px" }}>
      <div
        style={{
          height: "100%",
          width: `${value}%`,
          background: color,
          borderRadius: "8px",
          transition: "width 0.5s ease-in-out",
        }}
      ></div>
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
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "15px",
};

export default DashBoardHome;
