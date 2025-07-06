function Button({ text, link, isLight = false }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`group relative inline-block overflow-hidden rounded-md border border-[#e1af87] ${
          isLight ? "border-[#f4e6d5]" : ""
        }`}
      >
        <a
          href={link}
          className={`relative z-10 px-6 py-3 block text-xs whitespace-nowrap leading-6 font-secondary font-semibold tracking-widest uppercase transition-colors duration-300 ${
            isLight
              ? "text-[#f4e6d5] hover:text-[#3e3128] transition"
              : "text-[#3e3128]"
          }`}
        >
          {text}
        </a>
        <span
          className={`absolute inset-0 z-0 bg-[#e1af87] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out ${
            isLight ? "bg-[#f4e6d5]" : ""
          }`}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export default Button;
