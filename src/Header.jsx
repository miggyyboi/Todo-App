function Header() {
  return (
    <section className="relative h-48 overflow-hidden">
      <img
        src="/website-bg.jpg"
        alt="Website BG"
        className="h-full w-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-purple-500 opacity-50"></div>
    </section>
  );
}

export default Header;
