import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../api/api";

function AddEmployee() {

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
        status: "ACTIVE"
    });

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const saveEmployee = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem("token");

            await api.post("/employees", employee, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            alert("Employee Added Successfully");

            navigate("/employees");

        } catch (error) {
            console.log(error);
            alert("Failed to Add Employee");
        }

    };

    return (

        <>
            <Navbar />

            <div className="container mt-4">

                <div className="card shadow">

                    <div className="card-body">

                        <h2 className="mb-4">
                            Add Employee
                        </h2>

                        <form onSubmit={saveEmployee}>

                            <div className="row">

                                <div className="col-md-6 mb-3">
                                    <input
                                        className="form-control"
                                        placeholder="Employee ID"
                                        name="employeeId"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <input
                                        className="form-control"
                                        placeholder="First Name"
                                        name="firstName"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <input
                                        className="form-control"
                                        placeholder="Last Name"
                                        name="lastName"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        name="email"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <input
                                        className="form-control"
                                        placeholder="Phone"
                                        name="phone"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <input
                                        className="form-control"
                                        placeholder="Department"
                                        name="department"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <input
                                        className="form-control"
                                        placeholder="Designation"
                                        name="designation"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Salary"
                                        name="salary"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="joiningDate"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="col-md-6 mb-3">

                                    <select
                                        className="form-select"
                                        name="status"
                                        onChange={handleChange}
                                    >

                                        <option value="ACTIVE">ACTIVE</option>
                                        <option value="INACTIVE">INACTIVE</option>
                                        <option value="ON_LEAVE">ON LEAVE</option>

                                    </select>

                                </div>

                            </div>

                            <button className="btn btn-success">
                                Save Employee
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </>

    );

}

export default AddEmployee;