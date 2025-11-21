import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#050806] text-white">
      {/* Subtle emerald grain backdrop */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.07] mix-blend-soft-light" style={{ backgroundImage: "url('data:image/svg+xml;utf8,\
      <svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'>\
        <filter id=\'n\'>\
          <feTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'2\' stitchTiles=\'stitch\'/>\
          <feColorMatrix type=\'saturate\' values=\'0\'/>\
        </filter>\
        <rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\'/>\
      </svg>") }} />

      {/* Floating green glows */}
      <div className="pointer-events-none fixed -top-28 left-10 h-80 w-80 rounded-full bg-emerald-500/15 blur-[120px]" />
      <div className="pointer-events-none fixed bottom-10 right-10 h-72 w-72 rounded-full bg-emerald-400/15 blur-[120px]" />

      <Navbar />
      <Hero />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
