import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
  onOpenReport?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'El grupo', href: '#el-grupo' },
    { label: 'Unidades de negocio', href: '#unidades' },
    { label: 'Nuestros negocios', href: '#nuestros-negocios' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'subtle-glass border-b border-[#d3cfc8]/60 shadow-xs'
            : 'bg-[#f9f9f8]/95 border-b border-[#d3cfc8]/40'
        }`}
      >
        {/* Subtle scroll progress line */}
        <div
          className="absolute top-0 left-0 h-[2px] bg-[#191b1b]/80 transition-all duration-100 ease-out z-50"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="h-24 md:h-28 w-full px-6 md:px-16 flex items-center justify-between max-w-7xl mx-auto">
          {/* Official Logo: Isotype 'A' */}
          <div className="flex items-center">
            <a
              href="#"
              className="flex items-center group py-1.5 focus:outline-hidden"
              aria-label="Grupo Afiansur - Inicio"
            >
              <div className="relative w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 flex items-center justify-center shrink-0">
                <img
                  src="/A.png"
                  alt="Isotipo Grupo Afiansur"
                  className="w-full h-full object-contain scale-125 mix-blend-multiply transition-transform duration-300 group-hover:scale-135"
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[12px] uppercase tracking-[0.18em] font-semibold text-[#5f5d59] hover:text-[#121313] transition-colors py-1 nav-link-indicator"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions: Clean Contact Button */}
          <div className="flex items-center gap-3.5">
            <button
              onClick={onOpenContact}
              className="pill-action-btn"
            >
              <span>Contacto</span>
              <span className="pill-action-btn-circle">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#191b1b] hover:text-black focus:outline-hidden"
              aria-label="Menú principal"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#d3cfc8]/60 bg-[#f9f9f8] px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs uppercase tracking-[0.18em] font-medium text-[#191b1b] py-1 border-b border-[#d3cfc8]/30 pb-2"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
