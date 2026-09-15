import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Leave API empty so you can add your endpoint later
// Example: "http://127.0.0.1:8000/all_employee"
const API_URL = "https://employee-management-prdm.onrender.com";

function AllEmployees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(Boolean(API_URL));
  const [search, setSearch] = useState("");

  useEffect(() => {
    let ignore = false;

    async function fetchEmployees() {
      if (!API_URL) {
        console.log("API URL is empty. Configure API_URL in AllEmployees.jsx to fetch real employees.");
        return;
      }

      try {
        const response = await axios.get(API_URL);
        if (!ignore) {
          console.log(response.data);
          setEmployees(Array.isArray(response.data) ? response.data : []);
        }
      } catch (error) {
        if (!ignore) {
          console.error(error);
          alert("Unable to fetch employees");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    fetchEmployees();

    return () => {
      ignore = true;
    };
  }, []);

  const filteredEmployees = employees.filter((emp) => {
    const term = search.toLowerCase();
    return (
      (emp.e_name && emp.e_name.toLowerCase().includes(term)) ||
      (emp.e_dept && emp.e_dept.toLowerCase().includes(term)) ||
      (emp.e_email && emp.e_email.toLowerCase().includes(term)) ||
      (emp.e_id !== undefined && String(emp.e_id).includes(term))
    );
  });

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>All Employees</h1>
        <Link to="/register" className="btn-link">
          + Add Employee
        </Link>
      </div>

      {!API_URL && (
        <div className="api-notice">
          <strong>Notice:</strong> API URL is currently empty. Add your endpoint in <code>AllEmployees.jsx</code> when ready.
        </div>
      )}

      {employees.length > 0 && (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by ID, name, department, or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}

      {loading ? (
        <h2>Loading employees...</h2>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.length === 0 ? (
                <tr>
                  <td colSpan="4" style={{ textAlign: "center", padding: "30px" }}>
                    {!API_URL
                      ? "No API URL configured yet. Add your backend URL in AllEmployees.jsx to load data."
                      : "No employees found."}
                  </td>
                </tr>
              ) : (
                filteredEmployees.map((emp, index) => (
                  <tr key={emp.e_id ?? index}>
                    <td><strong>#{emp.e_id}</strong></td>
                    <td>{emp.e_name}</td>
                    <td><span className="badge-dept">{emp.e_dept}</span></td>
                    <td>{emp.e_email}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AllEmployees;
