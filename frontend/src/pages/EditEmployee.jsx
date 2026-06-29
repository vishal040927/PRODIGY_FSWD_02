import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../api/api";

function EditEmployee() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        employeeId: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        department: "",
        designation: "",
        salary: "",
        joiningDate: "",
        status: ""
    });

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
        }

    };

    const handleChange = (e) => {

        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });

    };

    const updateEmployee = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem("token");

            await api.put(`/employees/${id}`, employee, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            alert("Employee Updated Successfully");

            navigate("/employees");

        } catch (error) {

            console.log(error);
            alert("Update Failed");

        }

    };

    return (

        <>
            <Navbar />

            <div className="container mt-4">

                <div className="card shadow">

                    <div className="card-body">

                        <h2>Edit Employee</h2>

                        <form onSubmit={updateEmployee}>

                            <div className="row">

                                <div className="col-md-6 mb-3">
                                    <input
                                        className="form-control"
                                        name="employeeId"
                                        value={employee.employeeId}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <input
                                        className="form-control"
                                        name="firstName"
                                        value={employee.firstName}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <input
                                        className="form-control"
                                        name="lastName"
                                        value={employee.lastName}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <input
                                        className="form-control"
                                        name="email"
                                        value={employee.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <input
                                        className="form-control"
                                        name="phone"
                                        value={employee.phone}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <input
                                        className="form-control"
                                        name="department"
                                        value={employee.department}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <input
                                        className="form-control"
                                        name="designation"
                                        value={employee.designation}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="salary"
                                        value={employee.salary}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="joiningDate"
                                        value={employee.joiningDate}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-md-6 mb-3">

                                    <select
                                        className="form-select"
                                        name="status"
                                        value={employee.status}
                                        onChange={handleChange}
                                    >
                                        <option value="ACTIVE">ACTIVE</option>
                                        <option value="INACTIVE">INACTIVE</option>
                                        <option value="ON_LEAVE">ON LEAVE</option>
                                    </select>

                                </div>

                            </div>

                            <button className="btn btn-primary">
                                Update Employee
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </>

    );

}

export default EditEmployee;