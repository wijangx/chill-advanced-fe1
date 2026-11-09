import { Fragment } from "react";

export default function GlobalHoverCard({
  activeData,
  position,
  scrollContainer,
  onMouseEnter,
  onMouseLeave,
}) {
  if (!activeData || !position) return null;

  const rawGenres = activeData.genres;
  const genresList = Array.isArray(rawGenres)
    ? rawGenres
    : typeof rawGenres === "string"
      ? rawGenres.split(",").map((g) => g.trim())
      : ["Aksi", "Petualangan", "Sains"];

  const hasProgress = typeof activeData.progress === "number";

  // Gesture scroll
  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      if (scrollContainer) {
        scrollContainer.scrollLeft += e.deltaX;
      }
    } else {
      window.scrollBy({ top: e.deltaY, behavior: "auto" });
    }
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onWheel={handleWheel}
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
      className="hidden md:flex absolute z-50 w-[408px] h-[460px] bg-[#181A1C] rounded-[20px] overflow-hidden shadow-[0_20px_48px_rgba(0,0,0,0.85)] border border-[#282A2E] flex-col justify-between transition-all duration-300 ease-out transform scale-100 opacity-100 pointer-events-auto"
    >
      {/* 1. Top Banner Landscape */}
      <div className="relative w-full h-[230px] bg-[#22282A] shrink-0">
        <img
          src={activeData.previewImage || activeData.image}
          alt={activeData.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181A1C]/60 via-transparent to-transparent" />
      </div>

      {/* 2. Konten Informasi */}
      <div className="px-6 pb-6 pt-3 flex flex-col justify-between flex-grow">
        {/* Tombol Aksi */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="w-[48px] h-[48px] rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition shadow"
            >
              <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>

            <button
              type="button"
              className="w-[48px] h-[48px] rounded-full border border-[#787A7C] bg-[#22282A]/60 hover:border-white text-white flex items-center justify-center transition"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
          </div>

          <button
            type="button"
            className="w-[48px] h-[48px] rounded-full border border-[#787A7C] bg-[#22282A]/60 hover:border-white text-white flex items-center justify-center transition"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Melanjutkan Tonton vs Normal */}
        {hasProgress ? (
          <div className="flex flex-col gap-2">
            <div className="w-full bg-[#3A3D42] h-[4px] rounded-full overflow-hidden">
              <div
                className="bg-[#0F1E93] h-full rounded-full"
                style={{ width: `${activeData.progress}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-xs md:text-sm text-[#C1C2C4] font-medium pt-1">
              <span>
                {activeData.episodeTitle || activeData.duration || "Episode 1"}
              </span>
              <span>{activeData.durationRemaining || "2j 33m"}</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <span className="bg-[#3b3f42] text-[#C1C2C4] px-3.5 py-1 rounded-full text-sm font-bold">
              {activeData.ageBadge || "13+"}
            </span>
            <span className="text-white font-bold text-[18px] tracking-tight">
              {activeData.duration || "2j 33m"}
            </span>
          </div>
        )}

        {/* Baris Genre */}
        <div className="w-full flex items-center justify-between text-[16px] text-[#C1C2C4] font-medium pt-1">
          {genresList.map((genre, idx) => (
            <Fragment key={genre}>
              <span className="hover:text-white transition cursor-default">
                {genre}
              </span>
              {idx < genresList.length - 1 && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#787A7C] shrink-0" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
