import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";

const Navbar = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token, navigate]);

    return (
        <div className="flex justify-center gap-4 bg-[#5E2A8C] shadow-lg p-2 text-xl text-yellow-200">
            <a className="hover:text-[#A2A9D3] cursor-pointer">
                History
            </a>
            <a href="#contact" className="hover:text-[#A2A9D3] cursor-pointer">
                Contact
            </a>
            {token && (
                <span className="hover:text-[#A2A9D3] cursor-pointer">
                    <Logout />
                </span>
            )}
        </div>
    );
}

export default Navbar;