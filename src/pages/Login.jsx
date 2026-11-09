import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Berhasil login -> arahkan ke Beranda / Homepage
    navigate("/home");
  };

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center px-4 py-10 relative"
      style={{ backgroundImage: "url('/assets/bg.jpg')" }}
    >
      {/* Card Login */}
      <div className="relative z-10 w-full max-w-[480px] bg-[#181A1C]/80 rounded-[16px] p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-md">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-6 text-center">
          <img
            src="/assets/logo.png"
            alt="CHILL Logo"
            className="h-7 md:h-8 mb-5 object-contain"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
            Masuk
          </h1>
          <p className="text-xs md:text-sm text-white mt-1">
            Selamat datang kembali!
          </p>
        </div>

        {/* Form Login */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            label="Username/Email"
            type="text"
            name="username"
            placeholder="Masukkan username/email"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <Input
            label="Kata Sandi"
            type="password"
            name="password"
            placeholder="Masukkan kata sandi"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {/* Baris Link Navigasi: Daftar & Lupa Kata Sandi */}
          <div className="flex items-center justify-between text-xs md:text-sm text-[#C1C2C4] mb-2.5">
            <div>
              Belum punya akun?{" "}
              <Link to="/register" className="text-white font-normal hover:underline">
                Daftar
              </Link>
            </div>
            <a href="#" className="text-white hover:text-white hover:underline transition">
              Lupa kata sandi?
            </a>
          </div>

          <div className="mt-2 flex flex-col gap-3">
            <Button type="submit" variant="primary">
              Masuk
            </Button>

            {/* Teks Atau */}
            <div className="text-center py-0.5 text-sm text-[#9D9EA1]">
              Atau
            </div>

            {/* Tombol SSO Google */}
            <Button type="button" variant="outline">
              <svg className="w-4 h-4 md:w-5 md:h-5 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.3 8.9 5 12 5z"
                />
                <path
                  fill="#4285F4"
                  d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.3 14.7c-.2-.7-.4-1.6-.4-2.7s.2-2 .4-2.7L1.6 6.4C.6 8.3 0 10.1 0 12s.6 3.7 1.6 5.6l3.7-2.9z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.3-6.7-5.3L1.6 15.9C3.5 19.8 7.4 23 12 23z"
                />
              </svg>
              Masuk dengan Google
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}