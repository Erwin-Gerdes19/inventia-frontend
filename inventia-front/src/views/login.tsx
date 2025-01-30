import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [remember, setRemember] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember:", remember);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-300">
      {/* Left: Image */}
      <div className="w-full">
        <img
          src="../../public/Logo-inventia.jpg"
          alt="Logo Inventia"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right: Login Form */}
      <div className="w-full p-4 ">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          {/* Username Input */}
          <div className="mb-4 ">
            <label htmlFor="username" className="block text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-800">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="text-red-500"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            <label htmlFor="remember" className="text-green-700 ml-2">
              Remember Me
            </label>
          </div>

          {/* Forgot Password Link */}
          <div className="mb-6 text-blue-800">
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Login
          </button>

          {/* Sign up Link */}
          <div className="mt-6 text-green-700 text-center">
            <a href="#" className="hover:underline">
              Sign up Here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
