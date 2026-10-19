import React from 'react';

interface FooterProps {
  onOpenContact: () => void;
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onOpenTerms, onOpenPrivacy }) => {
  return (
    <footer className="w-full bg-white border-t border-neutral-100">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-14 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-neutral-100">
          {/* Logo & Tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <a href="#" className="flex items-center gap-3.5 group focus:outline-hidden" aria-label="Grupo Afiansur">
              <div className="relative w-11 sm:w-12 h-11 sm:h-12 flex items-center justify-center shrink-0">
                <img
                  src="/A.png"
                  alt="Isotipo Grupo Afiansur"
                  className="w-full h-full object-contain scale-125 mix-blend-multiply transition-transform duration-200 group-hover:scale-135"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-black text-lg sm:text-xl tracking-[0.03em] text-[#121313] leading-none">
                  GRUPO AFIANSUR
                </span>
                <span className="text-[9px] uppercase tracking-[0.22em] font-semibold text-[#7b766f] mt-1">
                  Sociedad de Participaciones
                </span>
              </div>
            </a>
            <span className="text-xs text-[#7b766f] border-t sm:border-t-0 sm:border-l border-neutral-200 pt-2 sm:pt-0 sm:pl-5 text-center sm:text-left">
              Sociedad de Participaciones y Negocios
            </span>
          </div>

          {/* Navigation Links matching reference footer */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs uppercase tracking-wider font-semibold text-[#5f5d59]">
            <a href="#el-grupo" className="hover:text-[#121313] transition-colors">
              El Grupo
            </a>
            <a href="#unidades" className="hover:text-[#121313] transition-colors">
              Unidades
            </a>
            <a href="#tecnologia" className="hover:text-[#121313] transition-colors">
              Tecnología
            </a>
            <a href="#empresas" className="hover:text-[#121313] transition-colors">
              Empresas
            </a>
            <button onClick={onOpenContact} className="hover:text-[#121313] transition-colors cursor-pointer">
              Contacto
            </button>
          </nav>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7b766f] gap-4">
          <p>© 2025 Grupo Afiansur S.A. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <button onClick={onOpenTerms} className="hover:text-[#121313] transition-colors cursor-pointer">
              Términos
            </button>
            <button onClick={onOpenPrivacy} className="hover:text-[#121313] transition-colors cursor-pointer">
              Privacidad
            </button>
            <span className="font-mono text-[11px] text-[#a19d95]">
              HOLDING REGIONAL · RED DE EMPRESAS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
