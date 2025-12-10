import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://backend1-dzt1.onrender.com/login", {
        name,
        password
      });

      if (res.data.success) navigate("/dashboard");
    } catch {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="h-screen w-full bg-black flex justify-center items-center">
      <div className="bg-gray-900 p-8 rounded-lg w-96 text-white shadow-xl">

        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Username"
            className="p-3 bg-gray-800 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 bg-gray-800 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="bg-red-600 p-3 rounded hover:bg-red-700">
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-gray-400">
          Don't have an account?
          <Link to="/signup" className="text-red-500 ml-1">
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
}