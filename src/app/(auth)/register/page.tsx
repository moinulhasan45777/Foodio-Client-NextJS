"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      // 1️⃣ Register user
      const registerRes = await fetch("http://localhost:3000/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const registerData = await registerRes.json();

      if (!registerRes.ok) {
        setError(registerData.message || "Registration failed");
        return;
      }

      // 2️⃣ Auto-login after registration
      const loginRes = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const loginData = await loginRes.json();

      if (!loginRes.ok) {
        setError(loginData.message || "Login failed after registration");
        return;
      }

      console.log("Logged in user:", loginData);
      router.push("/"); // redirect to home page
    } catch (err) {
      setError("Something went wrong");
      console.error(err);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col justify-center">
      <div className="w-md px-6 pt-11 pb-6 border border-[#e6e2d8] mx-auto rounded-xl shadow-md mb-3.5">
        {/* Logo & title */}
        <svg className="h-6.5 mb-3 mx-auto" width="107" height="26">
          {/* SVG paths */}
        </svg>
        <p className="text-center text-sm font-medium mb-2.5 text-[#7a7a7a]">
          Premium flavors, delivered.
        </p>

        {/* Tabs */}
        <div className="bg-[#f2efe9] w-full h-9 rounded-2xl grid grid-cols-2 p-1 mb-8">
          <Link
            href="/sign-in"
            className="h-full w-full flex items-center justify-center font-medium text-sm leading-5"
          >
            Sign in
          </Link>
          <button className="h-full w-full font-medium text-sm leading-5 bg-white rounded-full">
            Register
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <div className="flex flex-col gap-2 mb-4">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="px-3 py-2 border rounded-md"
            />
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="px-3 py-2 border rounded-md"
            />
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label>Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="House:23, Road:23, Jamaica, USA"
              className="px-3 py-2 border rounded-md"
            />
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="px-3 py-2 border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="bg-[#1a3c34] text-white w-full py-2 rounded-full"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
