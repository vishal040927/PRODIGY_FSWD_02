import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });

    };

    const registerUser = async (e) => {

        e.preventDefault();

        try {

            await api.post("/auth/register", user);

            alert("Registration Successful!");

            navigate("/");

        } catch (error) {

            console.log(error);

            if (error.response?.data) {
                alert(error.response.data);
            } else {
                alert("Registration Failed");
            }

        }

    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow">

                        <div className="card-body">

                            <h2 className="text-center mb-4">
                                Register
                            </h2>

                            <form onSubmit={registerUser}>

                                <div className="mb-3">

                                    <label>Name</label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={user.name}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label>Email</label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={user.email}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label>Password</label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={user.password}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <button
                                    className="btn btn-success w-100"
                                >
                                    Register
                                </button>

                            </form>

                            <div className="text-center mt-3">

                                Already have an account?

                                <Link to="/" className="ms-2">
                                    Login
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Register;