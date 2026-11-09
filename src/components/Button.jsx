export default function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
}) {
  const baseStyles =
    "w-full py-3 md:py-3.5 px-6 rounded-[24px] transition duration-200 flex items-center justify-center gap-3 text-xs md:text-sm cursor-pointer";

  const variants = {
    // Tombol utama
    primary: "bg-[#3D4142] hover:bg-[#4B5052] text-white border border-gray-500 shadow",
    // Tombol outline
    outline: "bg-transparent border border-[#3F4346] hover:border-gray-400 text-white font-medium",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
    >
      {children}
    </button>
  );
}