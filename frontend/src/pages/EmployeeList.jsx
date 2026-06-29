import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import Navbar from "../components/Navbar";

function EmployeeList() {

    const navigate = useNavigate();

    const role = localStorage.getItem("role");

    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await api.get("/employees", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setEmployees(response.data);

        } catch (error) {

            console.log(error);
            alert("Failed to load employees");

        }

    };

    const deleteEmployee = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this employee?"
        );

        if (!confirmDelete) return;

        try {

            const token = localStorage.getItem("token");

            await api.delete(`/employees/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            alert("Employee deleted successfully.");

            loadEmployees();

        } catch (error) {

            console.log(error);
            alert("Failed to delete employee.");

        }

    };

    const filteredEmployees = employees.filter((employee) => {

        const keyword = search.toLowerCase();

        return (

            employee.employeeId?.toLowerCase().includes(keyword) ||

            employee.firstName?.toLowerCase().includes(keyword) ||

            employee.lastName?.toLowerCase().includes(keyword) ||

            employee.email?.toLowerCase().includes(keyword) ||

            employee.department?.toLowerCase().includes(keyword) ||

            employee.designation?.toLowerCase().includes(keyword)

        );

    });

    return (

        <>

            <Navbar />

            <div className="container mt-4">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <h2>Employee Management</h2>

                    {role === "ADMIN" && (

                        <button
                            className="btn btn-success"
                            onClick={() => navigate("/employees/add")}
                        >
                            + Add Employee
                        </button>

                    )}

                </div>

                <div className="row mb-3">

                    <div className="col-md-6">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by Employee ID, Name, Email, Department..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                    </div>

                </div>

                <table className="table table-bordered table-hover table-striped shadow">

                    <thead className="table-dark">

                        <tr>

                            <th>ID</th>
                            <th>Employee ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Status</th>

                            {role === "ADMIN" && (
                                <th width="230">Actions</th>
                            )}

                        </tr>

                    </thead>

                    <tbody>

                        {filteredEmployees.length > 0 ? (

                            filteredEmployees.map((employee) => (

                                <tr key={employee.id}>

                                    <td>{employee.id}</td>

                                    <td>{employee.employeeId}</td>

                                    <td>
                                        {employee.firstName} {employee.lastName}
                                    </td>

                                    <td>{employee.email}</td>

                                    <td>{employee.department}</td>

                                    <td>{employee.designation}</td>

                                    <td>₹ {employee.salary}</td>

                                    <td>

                                        <span
                                            className={
                                                employee.status === "ACTIVE"
                                                    ? "badge bg-success"
                                                    : employee.status === "INACTIVE"
                                                    ? "badge bg-danger"
                                                    : "badge bg-warning text-dark"
                                            }
                                        >
                                            {employee.status}
                                        </span>

                                    </td>

                                    {role === "ADMIN" && (

                                        <td>

                                            <button
                                                className="btn btn-info btn-sm me-2"
                                                onClick={() =>
                                                    navigate(`/employees/view/${employee.id}`)
                                                }
                                            >
                                                View
                                            </button>

                                            <button
                                                className="btn btn-warning btn-sm me-2"
                                                onClick={() =>
                                                    navigate(`/employees/edit/${employee.id}`)
                                                }
                                            >
                                                Edit
                                            </button>

                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() =>
                                                    deleteEmployee(employee.id)
                                                }
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    )}

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td
                                    colSpan={role === "ADMIN" ? "9" : "8"}
                                    className="text-center"
                                >
                                    No Employees Found
                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </div>

        </>

    );

}

export default EmployeeList;