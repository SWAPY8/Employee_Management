import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <div className="badge">HR & Workforce Portal</div>
        <h1>Employee Management System</h1>
        <p>
          A centralized platform to manage employee records efficiently. Easily
          register new hires, view full staff directories, update information,
          and maintain company records.
        </p>

        <div className="features-grid">
          <Link to="/register" className="feature-card">
            <div className="feature-icon">+</div>
            <h3>Add Employee</h3>
            <p>Register new staff members with ID, department, and contact info.</p>
          </Link>

          <Link to="/allemployees" className="feature-card">
            <div className="feature-icon">&#9776;</div>
            <h3>All Employees</h3>
            <p>View, search, and manage complete employee records.</p>
          </Link>

          <Link to="/update" className="feature-card">
            <div className="feature-icon">&#9998;</div>
            <h3>Update Details</h3>
            <p>Modify department, name, and contact details seamlessly.</p>
          </Link>

          <Link to="/delete" className="feature-card danger-card">
            <div className="feature-icon">&#128465;</div>
            <h3>Delete Record</h3>
            <p>Safely remove employee records from the organization database.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
