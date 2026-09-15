import { useState } from "react";
import axios from "axios";

// Leave API empty so you can add your endpoint later
// Example: "http://127.0.0.1:8000/add_employee"
const API_URL = "https://employee-management-prdm.onrender.com/add_employee";

function Register() {
  const [e_id, setEId] = useState("");
  const [e_name, setEName] = useState("");
  const [e_dept, setEDept] = useState("");
  const [e_email, setEEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!API_URL) {
      alert("API URL is empty. Please configure your create employee API URL in Register.jsx");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(API_URL, {
        e_id: Number(e_id),
        e_name: e_name.trim(),
        e_dept: e_dept.trim(),
        e_email: e_email.trim(),
      });

      console.log(response.data);
      alert("Employee Created Successfully!");

      // Clear form
      setEId("");
      setEName("");
      setEDept("");
      setEEmail("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong while registering employee!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page-container">
      <h1>Add New Employee</h1>

      {!API_URL && (
        <div className="api-notice">
          <strong>Notice:</strong> API URL is currently empty. Add your endpoint in <code>Register.jsx</code> when ready.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee ID</label>
          <input
            type="number"
            value={e_id}
            onChange={(e) => setEId(e.target.value)}
            placeholder="Enter employee ID (e.g. 101)"
            required
          />
        </div>

        <div>
          <label>Full Name</label>
          <input
            type="text"
            value={e_name}
            onChange={(e) => setEName(e.target.value)}
            placeholder="Enter employee name"
            required
          />
        </div>

        <div>
          <label>Department</label>
          <input
            type="text"
            value={e_dept}
            onChange={(e) => setEDept(e.target.value)}
            placeholder="Enter department (e.g. IT, HR, Marketing)"
            required
          />
        </div>

        <div>
          <label>Email Address</label>
          <input
            type="email"
            value={e_email}
            onChange={(e) => setEEmail(e.target.value)}
            placeholder="Enter employee email"
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Employee"}
        </button>
      </form>
    </div>
  );
}

export default Register;
