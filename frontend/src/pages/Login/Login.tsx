import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:9000/auth/login", {
                username,
                password,
            });
            localStorage.setItem("token", res.data.token);
            navigate("/");
        } catch (error) {
            alert("Login failed, please enter correct credentials!");
            console.log(error)
        }
    };

    return (
        <div
            className="flex justify-center items-center bg-cover bg-center w-screen h-screen">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 bg-white bg-opacity-70 shadow-lg p-6 rounded-lg w-full max-w-sm text-center"
            >
                <span className="flex flex-col gap-2 w-full">
                    <label
                        htmlFor="username"
                        className="flex justify-start font-semibold text-green-700"
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        name="username"
                        className="bg-white bg-opacity-80 p-4 rounded-lg w-full focus:outline-green-500 outline-gray-700"
                    />
                </span>
                <span className="flex flex-col gap-2 w-full">
                    <label
                        htmlFor="password"
                        className="flex justify-start font-semibold text-green-700"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-white bg-opacity-80 p-4 rounded-lg w-full focus:outline-green-500 outline-gray-700"
                    />
                </span>
                <span className="text-gray-700">
                    <Link to="/forgot-password" className="text-green-800">
                        Forgot password?
                    </Link>
                </span>
                <button
                    type="submit"
                    className="flex justify-center items-center bg-gray-700 hover:bg-green-500 p-4 rounded-full w-full font-semibold text-gray-100 text-sm hover:text-gray-700 transition-all cursor-pointer"
                >
                    Log In
                </button>
                <span className="text-gray-900">
                    Haven't Joined the contest ?{" "}
                    <a href="https://instagram.com/rotaractsiet" className="text-green-800">
                        Contact Rotaract SIET
                    </a>
                </span>
            </form>
        </div>
    );
};

export default Login;