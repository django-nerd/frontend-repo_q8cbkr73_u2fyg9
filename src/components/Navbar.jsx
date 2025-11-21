import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "backdrop-blur-xl bg-black/30 border-b border-emerald-400/10" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold text-white">Elite AVision</a>
        <nav className="hidden gap-6 text-sm text-emerald-100/80 md:flex">
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="#booking" className="hover:text-white">Booking</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-emerald-400/10 bg-black/50 px-6 py-4 md:hidden">
          <a href="#contact" className="block py-2 text-emerald-100">Contact</a>
          <a href="#booking" className="block py-2 text-emerald-100">Booking</a>
        </div>
      )}
    </header>
  );
}
