import { useState } from "react";
import axios from "axios";

// Leave API empty so you can add your endpoint later
// Example: (id) => `http://127.0.0.1:8000/delete_emp/${id}`
const getApiUrl = () => "https://employee-management-prdm.onrender.com/delete_emp/${e_id}";

function Delete() {
  const [e_id, setEId] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleDelete(e) {
    e.preventDefault();

    const confirmDelete = window.confirm(
      `Are you sure you want to delete employee with ID: ${e_id}?`
    );

    if (!confirmDelete) {
      return;
    }

    const API_URL = getApiUrl(e_id);
    if (!API_URL) {
      alert("API URL is empty. Please configure your delete employee API URL in Delete.jsx");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.delete(API_URL);
      console.log(response.data);
      alert("Employee Deleted Successfully!");
      setEId("");
    } catch (error) {
      console.error(error);
      alert("Unable to delete employee");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page-container delete-page">
      <h1>Delete Employee</h1>

      {!getApiUrl(e_id) && (
        <div className="api-notice">
          <strong>Notice:</strong> API URL is currently empty. Add your endpoint in <code>Delete.jsx</code> when ready.
        </div>
      )}

      <form onSubmit={handleDelete}>
        <div>
          <label>Employee ID</label>
          <input
            type="number"
            value={e_id}
            onChange={(e) => setEId(e.target.value)}
            placeholder="Enter employee ID to delete"
            required
          />
        </div>

        <button type="submit" className="delete-btn" disabled={loading}>
          {loading ? "Deleting..." : "Delete Employee"}
        </button>
      </form>
    </div>
  );
}

export default Delete;
