export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Lost Keepers</h1>
          <div className="flex space-x-6 text-white/80">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#gallery" className="hover:text-white transition-colors">
              Gallery
            </a>
            <a href="#info" className="hover:text-white transition-colors">
              Game Info
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
