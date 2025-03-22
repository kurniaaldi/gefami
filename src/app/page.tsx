"use client";

import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loggedInUser, setLoggedInUser] = useState<string | null>(
    typeof window !== "undefined" ? localStorage.getItem("user") : "",
  );

  const login = (): void => {
    if (username && password) {
      localStorage.setItem("user", username);
      setLoggedInUser(username);
    }
  };

  const logout = (): void => {
    localStorage.removeItem("user");
    setLoggedInUser("");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="w-2xl border rounded p-4">
      {!loggedInUser ? (
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={login}
          >
            Login
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <h2>
            Selamat datang,{" "}
            <span className="font-semibold">{loggedInUser}</span>
          </h2>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
