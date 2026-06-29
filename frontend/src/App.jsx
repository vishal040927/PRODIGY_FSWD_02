import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import EmployeeList from "./pages/EmployeeList";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import ViewEmployee from "./pages/ViewEmployee";
import Profile from "./pages/Profile";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* Public Routes */}

                <Route path="/" element={<Login />} />

                <Route path="/register" element={<Register />} />

                {/* User & Admin */}

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />

                {/* Employee List - User & Admin */}

                <Route
                    path="/employees"
                    element={
                        <ProtectedRoute>
                            <EmployeeList />
                        </ProtectedRoute>
                    }
                />

                {/* Admin Only */}

                <Route
                    path="/admin"
                    element={
                        <AdminRoute>
                            <Admin />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/employees/add"
                    element={
                        <AdminRoute>
                            <AddEmployee />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/employees/edit/:id"
                    element={
                        <AdminRoute>
                            <EditEmployee />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/employees/view/:id"
                    element={
                        <AdminRoute>
                            <ViewEmployee />
                        </AdminRoute>
                    }
                />

                {/* 404 */}

                <Route path="*" element={<NotFound />} />

            </Routes>

        </BrowserRouter>

    );

}

export default App;