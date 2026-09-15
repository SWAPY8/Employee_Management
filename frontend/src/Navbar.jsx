import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Employee Management System</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/register">Add Employee</Link>
        <Link to="/allemployees">All Employees</Link>
        <Link to="/update">Update</Link>
        <Link to="/delete">Delete</Link>
      </div>
    </nav>
  );
}

export default Navbar;
