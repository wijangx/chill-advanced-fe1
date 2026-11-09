import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [openGenre, setOpenGenre] = useState(false);
  const [openBantuan, setOpenBantuan] = useState(false);

  return (
    <footer className="bg-[#181A1C] border-t border-[#282A2E] px-6 py-8 md:px-20 md:py-16 mt-10 text-white w-full">
      {/* DESKTOP FOOTER */}
      <div className="hidden md:flex w-full justify-between items-start gap-12">
        {/* Kolom Brand Kiri */}
        <div className="flex flex-col gap-4 max-w-xs shrink-0">
          <Link to="/" className="inline-block">
            <img
              src="/logo.png"
              alt="CHILL Logo"
              className="h-9 w-auto object-contain"
            />
          </Link>
          <p className="text-xs text-[#9D9EA1]">
            @2026 Chill All Rights Reserved.
          </p>
        </div>

        {/* Frame Grup Genre & Bantuan */}
        <div className="flex gap-16 lg:gap-24 text-xs lg:text-sm text-[#C1C2C4]">
          {/* Sektor Genre */}
          <div className="flex flex-col">
            <span className="font-bold text-white mb-4">Genre</span>
            <div className="grid grid-cols-4 gap-8 lg:gap-14">
              <div className="flex flex-col gap-3">
                <a href="#" className="hover:text-white transition">
                  Aksi
                </a>
                <a href="#" className="hover:text-white transition">
                  Anak-anak
                </a>
                <a href="#" className="hover:text-white transition">
                  Anime
                </a>
                <a href="#" className="hover:text-white transition">
                  Britania
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <a href="#" className="hover:text-white transition">
                  Drama
                </a>
                <a href="#" className="hover:text-white transition">
                  Fantasi Ilmiah & Fantasi
                </a>
                <a href="#" className="hover:text-white transition">
                  Kejahatan
                </a>
                <a href="#" className="hover:text-white transition">
                  KDrama
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <a href="#" className="hover:text-white transition">
                  Komedi
                </a>
                <a href="#" className="hover:text-white transition">
                  Petualangan
                </a>
                <a href="#" className="hover:text-white transition">
                  Perang
                </a>
                <a href="#" className="hover:text-white transition">
                  Romantis
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <a href="#" className="hover:text-white transition">
                  Sains & Alam
                </a>
                <a href="#" className="hover:text-white transition">
                  Thriller
                </a>
              </div>
            </div>
          </div>

          {/* Sektor Bantuan */}
          <div className="flex flex-col shrink-0">
            <span className="font-bold text-white mb-4">Bantuan</span>
            <div className="flex flex-col gap-3">
              <a href="#" className="hover:text-white transition">
                FAQ
              </a>
              <a href="#" className="hover:text-white transition">
                Kontak Kami
              </a>
              <a href="#" className="hover:text-white transition">
                Privasi
              </a>
              <a href="#" className="hover:text-white transition">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE ACCORDION FOOTER */}
      <div className="md:hidden flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <img
            src="/logo.png"
            alt="CHILL Logo"
            className="h-7 w-auto object-contain self-start"
          />
          <p className="text-[11px] text-[#9D9EA1]">
            @2026 Chill All Rights Reserved.
          </p>
        </div>

        <div className="flex flex-col text-sm ">
          <button
            onClick={() => setOpenGenre(!openGenre)}
            className="flex items-center justify-between py-3.5  text-left text-white font-medium"
          >
            <span>Genre</span>
            <span
              className={`text-xs text-[#9D9EA1] transition-transform duration-200 ${openGenre ? "rotate-90" : ""}`}
            >
              ❯
            </span>
          </button>
          {openGenre && (
            <div className="flex flex-col gap-2 py-2.5 pl-3 text-xs text-[#9D9EA1]-[#282A2E]">
              <a href="#" className="hover:text-white">
                Aksi
              </a>
              <a href="#" className="hover:text-white">
                Drama
              </a>
              <a href="#" className="hover:text-white">
                Komedi
              </a>
              <a href="#" className="hover:text-white">
                Sains & Alam
              </a>
            </div>
          )}

          <button
            onClick={() => setOpenBantuan(!openBantuan)}
            className="flex items-center justify-between py-3.5 text-left text-white font-medium"
          >
            <span>Bantuan</span>
            <span
              className={`text-xs text-[#9D9EA1] transition-transform duration-200 ${openBantuan ? "rotate-90" : ""}`}
            >
              ❯
            </span>
          </button>
          {openBantuan && (
            <div className="flex flex-col gap-2 py-2.5 pl-3 text-xs text-[#9D9EA1]">
              <a href="#" className="hover:text-white">
                FAQ
              </a>
              <a href="#" className="hover:text-white">
                Kontak Kami
              </a>
              <a href="#" className="hover:text-white">
                Privasi
              </a>
              <a href="#" className="hover:text-white">
                Syarat & Ketentuan
              </a>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
