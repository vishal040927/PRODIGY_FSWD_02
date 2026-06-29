import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../api/api";

function ViewEmployee() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        loadEmployee();
    }, []);

    const loadEmployee = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await api.get(`/employees/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setEmployee(response.data);

        } catch (error) {
            console.log(error);
            alert("Failed to load employee details");
        }

    };

    if (!employee) {
        return (
            <>
                <Navbar />
                <div className="container mt-5 text-center">
                    <h4>Loading...</h4>
                </div>
            </>
        );
    }

    return (

        <>
            <Navbar />

            <div className="container mt-4">

                <div className="card shadow">

                    <div className="card-header bg-primary text-white">
                        <h3>Employee Details</h3>
                    </div>

                    <div className="card-body">

                        <table className="table table-bordered">

                            <tbody>

                                <tr>
                                    <th>ID</th>
                                    <td>{employee.id}</td>
                                </tr>

                                <tr>
                                    <th>Employee ID</th>
                                    <td>{employee.employeeId}</td>
                                </tr>

                                <tr>
                                    <th>Name</th>
                                    <td>{employee.firstName} {employee.lastName}</td>
                                </tr>

                                <tr>
                                    <th>Email</th>
                                    <td>{employee.email}</td>
                                </tr>

                                <tr>
                                    <th>Phone</th>
                                    <td>{employee.phone}</td>
                                </tr>

                                <tr>
                                    <th>Department</th>
                                    <td>{employee.department}</td>
                                </tr>

                                <tr>
                                    <th>Designation</th>
                                    <td>{employee.designation}</td>
                                </tr>

                                <tr>
                                    <th>Salary</th>
                                    <td>₹ {employee.salary}</td>
                                </tr>

                                <tr>
                                    <th>Joining Date</th>
                                    <td>{employee.joiningDate}</td>
                                </tr>

                                <tr>
                                    <th>Status</th>
                                    <td>{employee.status}</td>
                                </tr>

                            </tbody>

                        </table>

                        <button
                            className="btn btn-secondary"
                            onClick={() => navigate("/employees")}
                        >
                            Back
                        </button>

                    </div>

                </div>

            </div>

        </>

    );

}

export default ViewEmployee;