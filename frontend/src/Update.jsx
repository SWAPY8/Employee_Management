import { useState } from "react";
import axios from "axios";

// Leave API empty so you can add your endpoint later
// Example: (id) => `http://127.0.0.1:8000/edit_emp/${id}`
const getApiUrl = (id) => `https://employee-management-prdm.onrender.com/edit_emp/${id}`;

function Update() {
  const [e_id, setEId] = useState("");
  const [e_name, setEName] = useState("");
  const [e_dept, setEDept] = useState("");
  const [e_email, setEEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleUpdate(e) {
    e.preventDefault();

    const API_URL = getApiUrl(e_id);
    if (!API_URL) {
      alert("API URL is empty. Please configure your update employee API URL in Update.jsx");
      return;
    }

    // Create object for update
    const updateData = {};

    if (e_name.trim() !== "") {
      updateData.e_name = e_name.trim();
    }

    if (e_dept.trim() !== "") {
      updateData.e_dept = e_dept.trim();
    }

    if (e_email.trim() !== "") {
      updateData.e_email = e_email.trim();
    }

    // Check if user entered at least one field
    if (Object.keys(updateData).length === 0) {
      alert("Please enter at least one field to update");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.put(API_URL, updateData);
      console.log(response.data);
      alert("Employee Updated Successfully!");

      // Clear form
      setEId("");
      setEName("");
      setEDept("");
      setEEmail("");
    } catch (error) {
      console.error(error);
      alert("Unable to update employee");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page-container">
      <h1>Update Employee</h1>

      {!getApiUrl(e_id) && (
        <div className="api-notice">
          <strong>Notice:</strong> API URL is currently empty. Add your endpoint in <code>Update.jsx</code> when ready.
        </div>
      )}

      <form onSubmit={handleUpdate}>
        <div className="update-roll">
          <label>Employee ID</label>
          <input
            type="number"
            value={e_id}
            onChange={(e) => setEId(e.target.value)}
            placeholder="Enter employee ID to update"
            required
          />
        </div>

        <div>
          <label>New Name (Optional)</label>
          <input
            type="text"
            value={e_name}
            onChange={(e) => setEName(e.target.value)}
            placeholder="Enter new employee name"
          />
        </div>

        <div>
          <label>New Department (Optional)</label>
          <input
            type="text"
            value={e_dept}
            onChange={(e) => setEDept(e.target.value)}
            placeholder="Enter new department"
          />
        </div>

        <div>
          <label>New Email (Optional)</label>
          <input
            type="email"
            value={e_email}
            onChange={(e) => setEEmail(e.target.value)}
            placeholder="Enter new email"
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update Employee"}
        </button>
      </form>
    </div>
  );
}

export default Update;
