import React from "react";
import { useNavigate } from "react-router-dom";

const Logout: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <span
            onClick={handleLogout}
            // className="bg-purple-300 px-2 py-1 rounded text-black"
        >
            Logout
        </span>
    );
};

export default Logout;
