import { ArrowLeft, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [id, setId] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login ID:", id);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-[#f7f7f5] px-4">

      {/* BACK TO HOME */}
      <Link
        to="/"
        className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1d2733] shadow-sm transition hover:bg-[#1d2733] hover:text-white"
        aria-label="Back to Home"
      >
        <ArrowLeft size={20} />
      </Link>

      {/* LOGIN POPUP */}
      <div className="w-full max-w-md rounded-2xl bg-pink-100 p-8 shadow-[0_15px_40px_rgba(0,0,0,0.10)]">

        {/* ICON */}
        <div className="mb-5 text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#1d2733] shadow-sm">
            <User size={23} strokeWidth={1.7} />
          </div>

          <h1 className="text-2xl font-semibold text-[#1d2733]">
            Welcome Back
          </h1>

          <p className="mt-1 text-xs text-[#777777]">
            Enter your ID to continue
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleLogin}>

          <label className="mb-2 block text-xs font-semibold text-[#1d2733]">
          EMAIL ID
          </label>

          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter your ID"
            className="h-12 w-full rounded-lg border border-white bg-white px-4 text-sm text-[#333] outline-none transition focus:border-[#1d2733]"
            required
          />

          <button
            type="submit"
            className="mt-4 h-12 w-full rounded-lg bg-[#1d2733] text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#2d3b4a]"
          >
            Login
          </button>

        </form>

      </div>

    </main>
  );
}

export default Login;