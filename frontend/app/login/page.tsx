"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";



export default function LoginPage() {
  const [fullName, setFullName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<number>(9848888888);
  const [password, setPassword] = useState<string>("");

  const registerUser = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://jwellery-m76u.onrender.com/api/users/register" ,{
        fullName: fullName,
        userName: username,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        role:"user"
      });
      toast.success("Registration successful! Please login to continue.");
      console.log("Registration response:", response.data);

      // Reset form fields after successful registration
       setFullName("");
      setUsername("");
      setEmail("");
      setPhoneNumber(9848888888);
      setPassword("");

    } catch (error: any) {
      toast.error(error.response.data.msg);
      console.error("Error during registration:", error.response.data.msg);    

    }
  }

  return (
    <form onSubmit={registerUser} className="w-4/12 mx-auto my-15 shadow-lg border rounded-md py-10 px-4 flex flex-col gap-4 ">

      <input value={fullName} onChange={(e)=> setFullName(e.target.value)} required type="text" placeholder="Enter your full name" className="border border-gray-200 outline-none rounded-md p-2 w-full"/>

      <input value={username} onChange={(e)=> setUsername(e.target.value)} required type="text" placeholder="Enter your username" className="border border-gray-200 outline-none rounded-md p-2 w-full"/>

      <input value={email} onChange={(e)=> setEmail(e.target.value)} required type="email" placeholder="Enter your email" className="border border-gray-200 outline-none rounded-md p-2 w-full"/>

      <input value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.valueAsNumber)} required type="number" placeholder="Enter your phonenumber" className="border border-gray-200 outline-none rounded-md p-2 w-full"/>

      <input value={password} onChange={(e)=> setPassword(e.target.value)} required type="password" placeholder="Enter your password" className="border border-gray-200 outline-none rounded-md p-2 w-full"/>

     <div className="flex justify-end">
       <button type="submit" className="bg-blue-500 text-white rounded-md px-6 py-2 hover:bg-blue-600  ">
        Signup </button>
     </div>




      

      {/* <div className="w-4/12 mx-auto mt-10 shadow-lg border rounded-md py-10 px-4">
        <h1 className="text-2xl font-semibold text-center">Login</h1>

        <div className="flex flex-col justify-center gap-4">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            className="border rounded-md px-2 py-1 w-80"
            required
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            className="border rounded-md px-2 py-1 w-80"
            required
          />

          <button
            type="submit"
            className="bg-blue-500 w-50 text-white rounded-md px-4 py-2 hover:bg-blue-600 "
          >
            Login
          </button>
        </div>
      </div> */}
    </form>
  );
}
