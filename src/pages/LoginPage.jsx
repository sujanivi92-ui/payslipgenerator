import { useNavigate } from "react-router-dom";
import LogoImage from "../assets/logo.png";
import IllustrationImage from "../assets/illustration.png";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-8">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-center md:items-start mt-6">

          {/* Logo */}
          <img
            src={LogoImage}
            alt="Vetri Logo"
            className="w-40 mb-4"
          />

          {/* Title */}
              <div>
      <h1 className="text-4xl font-bold text-[#2E2A82] tracking-wide">
        VETRI IT SYSTEMS
      </h1>

      <p className="text-xl text-gray-700 font-semibold -mt-1">
        -Employee Payslip-
      </p>
    </div>

          {/* Illustration */}
          <img
            src={IllustrationImage}
            alt="illustration"
            className="w-[480px] mt-10"
          />

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-pale px-10 py-12 rounded-3xl shadow-md border border-gray-200">

          <h2 className="text-3xl font-bold text-primary text-center">
            Hello, Welcome Back!
          </h2>

          <p className="text-xl font-semibold text-primary text-center mt-1 mb-8">
            Login to continue
          </p>

          {/* USERNAME */}
          <input
            type="text"
            placeholder="Username/Email"
            className="w-full bg-white p-4 rounded-full border outline-none mb-5"
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-white p-4 rounded-full border outline-none mb-5"
          />

          {/* REMEMBER + FORGOT */}
          <div className="flex justify-between mb-6 text-sm font-medium">
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Remember me
            </label>

            <span className="text-primary cursor-pointer">
              Forgot Password?
            </span>
          </div>

          {/* LOGIN BUTTON */}
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full bg-primary text-white py-3 rounded-full text-xl hover:opacity-90 transition"
          >
            Login
          </button>

        </div>

      </div>
    </div>
  );
}
