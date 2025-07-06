function SectionHeader({ text, isLight = false }) {
  return (
    <div
      className={`text-sm tracking-wide uppercase font-semibold ${
        isLight ? "text-[#f4e6d5]" : "text-[#3e3128]"
      }`}
    >
      [ {text} ]
    </div>
  );
}

export default SectionHeader;
