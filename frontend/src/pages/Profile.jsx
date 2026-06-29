import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Profile() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        role: ""
    });

    useEffect(() => {

        const name = localStorage.getItem("name") || "User";
        const email = localStorage.getItem("email") || "Not Available";
        const role = localStorage.getItem("role") || "USER";

        setUser({
            name,
            email,
            role
        });

    }, []);

    return (

        <>
            <Navbar />

            <div className="container mt-5">

                <div className="row justify-content-center">

                    <div className="col-md-6">

                        <div className="card shadow">

                            <div className="card-header bg-primary text-white">

                                <h3>My Profile</h3>

                            </div>

                            <div className="card-body">

                                <table className="table table-bordered">

                                    <tbody>

                                        <tr>
                                            <th>Name</th>
                                            <td>{user.name}</td>
                                        </tr>

                                        <tr>
                                            <th>Email</th>
                                            <td>{user.email}</td>
                                        </tr>

                                        <tr>
                                            <th>Role</th>
                                            <td>{user.role}</td>
                                        </tr>

                                    </tbody>

                                </table>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Profile;