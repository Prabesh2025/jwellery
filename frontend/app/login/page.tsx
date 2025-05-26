
import React from "react";

export default function Page() {
  return (
    <form>
      

      <div className="w-4/12 mx-auto mt-10 shadow-lg border rounded-md py-10 px-4">
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
      </div>
    </form>
  );
}
