import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0c29]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-white font-bold text-xl">DocuShield</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors text-sm">How It Works</a>
            <a href="#solutions" className="text-gray-300 hover:text-white transition-colors text-sm">Solutions</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors text-sm">Testimonials</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm px-4 py-2">
              Sign In
            </a>
            <a href="#" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm px-5 py-2 rounded-full hover:opacity-90 transition-opacity">
              Get Started Free
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-white/10 mt-2 pt-4">
            <nav className="flex flex-col gap-3">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm py-1">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors text-sm py-1">How It Works</a>
              <a href="#solutions" className="text-gray-300 hover:text-white transition-colors text-sm py-1">Solutions</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors text-sm py-1">Testimonials</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm py-1">Contact</a>
              <a href="#" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm px-5 py-2 rounded-full text-center mt-2">
                Get Started Free
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
