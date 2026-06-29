import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Admin() {

    const navigate = useNavigate();

    return (

        <>
            <Navbar />

            <div className="container mt-5">

                <div className="text-center mb-5">

                    <h1 className="fw-bold text-primary">
                        Admin Dashboard
                    </h1>

                    <p className="text-muted">
                        Welcome, Administrator
                    </p>

                </div>

                <div className="row">

                    <div className="col-md-4 mb-4">

                        <div className="card shadow h-100">

                            <div className="card-body text-center">

                                <h3>👨‍💼</h3>

                                <h5 className="mt-3">
                                    Employee Management
                                </h5>

                                <p>
                                    Add, edit, delete and manage all employees.
                                </p>

                                <button
                                    className="btn btn-primary"
                                    onClick={() => navigate("/employees")}
                                >
                                    Manage Employees
                                </button>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4 mb-4">

                        <div className="card shadow h-100">

                            <div className="card-body text-center">

                                <h3>📊</h3>

                                <h5 className="mt-3">
                                    Dashboard
                                </h5>

                                <p>
                                    View employee statistics and system overview.
                                </p>

                                <button
                                    className="btn btn-success"
                                    onClick={() => navigate("/dashboard")}
                                >
                                    View Dashboard
                                </button>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4 mb-4">

                        <div className="card shadow h-100">

                            <div className="card-body text-center">

                                <h3>👤</h3>

                                <h5 className="mt-3">
                                    My Profile
                                </h5>

                                <p>
                                    View your profile information.
                                </p>

                                <button
                                    className="btn btn-warning"
                                    onClick={() => navigate("/profile")}
                                >
                                    View Profile
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="card shadow mt-4">

                    <div className="card-body">

                        <h4>Administrator Permissions</h4>

                        <hr />

                        <ul className="list-group">

                            <li className="list-group-item">
                                ✅ Add Employees
                            </li>

                            <li className="list-group-item">
                                ✅ Edit Employee Details
                            </li>

                            <li className="list-group-item">
                                ✅ Delete Employees
                            </li>

                            <li className="list-group-item">
                                ✅ View Employee Records
                            </li>

                            <li className="list-group-item">
                                ✅ Access Dashboard Statistics
                            </li>

                        </ul>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Admin;