import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-120 bg-[#181A1C] px-5 py-5 md:px-20 md:py-6 flex items-center justify-between">
      {/* Kiri: Logo & Navigasi */}
      <div className="flex items-center">
        <Link to="/home">
          <img src="/assets/logo-icon.png" alt="Chill" className="w-5 h-4 md:hidden block" />
          <img src="/assets/logo.png" alt="Chill Logo" className="hidden md:block w-[105px] h-auto" />
        </Link>
        <nav className="ml-3 md:ml-20">
          <ul className="flex items-center gap-3 md:gap-20 list-none">
            {/* Ubah to="/" menjadi to="/home" */}
            <li><Link to="/home" className="text-white text-[10px] md:text-lg font-bold">Series</Link></li>
            <li><Link to="/home" className="text-[#9d9ea1] hover:text-white text-[10px] md:text-lg font-medium">Film</Link></li>
            <li><Link to="/home" className="text-[#9d9ea1] hover:text-white text-[10px] md:text-lg font-medium">Daftar Saya</Link></li>
          </ul>
        </nav>
      </div>

      {/* Kanan: Profil & Dropdown */}
      <div className="relative">
        <div
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-1 md:gap-2 cursor-pointer"
        >
          <img src="/assets/avatar.png" alt="Avatar" className="w-5 h-5 md:w-10 md:h-10 rounded-full object-cover border border-[#3d4043]" />
          <img src="/assets/drop-down.png" alt="Down" className="w-4 h-4 md:w-7 md:h-7" />
        </div>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <ul className="absolute right-0 top-full mt-2 bg-[#181a1c] border border-[#282a2c] rounded-md shadow-2xl min-w-[158px] py-1 list-none z-50">
            <li>
              <Link to="#" className="flex items-center gap-3 px-3 py-2 text-xs md:text-sm text-[#3254ff] hover:bg-[#282a2c]">
                <img src="/assets/profile.png" alt="Profile" className="w-4 md:w-6 h-auto" />
                <span>Profil Saya</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="flex items-center gap-3 px-3 py-2 text-xs md:text-sm text-white hover:bg-[#282a2c]">
                <img src="/assets/star.png" alt="Star" className="w-4 md:w-6 h-auto" />
                <span>Ubah Premium</span>
              </Link>
            </li>
            <li>
              <Link to="/login" className="flex items-center gap-3 px-3 py-2 text-xs md:text-sm text-white hover:bg-[#282a2c]">
                <img src="/assets/logout.png" alt="Logout" className="w-4 md:w-6 h-auto" />
                <span>Keluar</span>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}