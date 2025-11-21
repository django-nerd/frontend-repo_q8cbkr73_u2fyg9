export default function Footer(){
  return (
    <footer className="relative bg-[#060807] py-10 text-center text-emerald-100/70">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm">© {new Date().getFullYear()} Elite AVision — All rights reserved.</p>
      </div>
    </footer>
  );
}
