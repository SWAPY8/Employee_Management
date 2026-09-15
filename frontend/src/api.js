/**
 * API Configuration for Employee Management System
 *
 * When you are ready to connect to your deployed backend, you can set the URLs below
 * or directly inside each component (Register.jsx, AllEmployees.jsx, Update.jsx, Delete.jsx).
 *
 * Example FastAPI endpoints:
 * - Base URL: "http://127.0.0.1:8000" or "https://your-backend.onrender.com"
 * - Create Employee (POST): `${API_BASE_URL}/add_employee`
 * - Get All Employees (GET): `${API_BASE_URL}/all_employee`
 * - Update Employee (PUT): (id) => `${API_BASE_URL}/edit_emp/${id}`
 * - Delete Employee (DELETE): (id) => `${API_BASE_URL}/delete_emp/${id}`
 */

export const API_BASE_URL = "https://employee-management-prdm.onrender.com";

export const API_ENDPOINTS = {
  CREATE_EMPLOYEE: `${API_BASE_URL}/add_employee`,
  GET_ALL_EMPLOYEES: `${API_BASE_URL}/all_employee`,
  UPDATE_EMPLOYEE: (id) => `${API_BASE_URL}/edit_emp/${id}`,
  DELETE_EMPLOYEE: (id) => `${API_BASE_URL}/delete_emp/${id}`,
};
