import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../api/api";

function Dashboard() {

    const navigate = useNavigate();

    const [stats, setStats] = useState({
        totalEmployees: 0,
        activeEmployees: 0,
        inactiveEmployees: 0,
        totalDepartments: 0
    });

    useEffect(() => {
        loadStats();
    }, []);

    const loadStats = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await api.get("/dashboard/stats", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setStats(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <>
            <Navbar />

            <div className="container mt-4">

                <h2 className="mb-4">
                    Employee Management Dashboard
                </h2>

                <div className="row">

                    <div className="col-md-3 mb-4">

                        <div className="card text-center shadow border-primary">

                            <div className="card-body">

                                <h5>Total Employees</h5>

                                <h1 className="text-primary">
                                    {stats.totalEmployees}
                                </h1>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-3 mb-4">

                        <div className="card text-center shadow border-success">

                            <div className="card-body">

                                <h5>Active Employees</h5>

                                <h1 className="text-success">
                                    {stats.activeEmployees}
                                </h1>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-3 mb-4">

                        <div className="card text-center shadow border-danger">

                            <div className="card-body">

                                <h5>Inactive Employees</h5>

                                <h1 className="text-danger">
                                    {stats.inactiveEmployees}
                                </h1>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-3 mb-4">

                        <div className="card text-center shadow border-warning">

                            <div className="card-body">

                                <h5>Departments</h5>

                                <h1 className="text-warning">
                                    {stats.totalDepartments}
                                </h1>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="mt-4">

                    <button
                        className="btn btn-primary me-3"
                        onClick={() => navigate("/employees")}
                    >
                        Employee Management
                    </button>

                    <button
                        className="btn btn-success"
                        onClick={() => navigate("/profile")}
                    >
                        My Profile
                    </button>

                </div>

            </div>

        </>

    );

}

export default Dashboard;