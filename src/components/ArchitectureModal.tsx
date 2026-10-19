import React, { useState } from 'react';
import { X, Building2, MapPin, Maximize2, Compass } from 'lucide-react';
import { ARCHITECTURAL_SPACES } from '../data/afiansurData';

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ isOpen, onClose }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!isOpen) return null;

  const currentSpace = ARCHITECTURAL_SPACES[selectedIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fade-in-up">
      <div
        className="relative w-full max-w-4xl bg-[#f9f9f8] border border-[#d3cfc8] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#d3cfc8]/50 bg-[#f4f3f1]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#191b1b]">
              MEMORIA ARQUITECTÓNICA Y ESPACIOS CORPORATIVOS
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#7b766f] hover:text-[#191b1b] transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-6">
          {/* Main Visual Display */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#edebe7] border border-[#d3cfc8]">
            <img
              src={currentSpace.imageUrl}
              alt={currentSpace.title}
              className="w-full h-full object-cover filter contrast-[1.03]"
            />
            <div className="absolute top-4 left-4 subtle-glass px-3 py-1.5 border border-white/70 shadow-xs flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-[#191b1b]">{currentSpace.code}</span>
              <span className="text-[#d3cfc8]">|</span>
              <span className="text-[10px] tracking-widest uppercase text-[#5f5d59]">
                {currentSpace.location}
              </span>
            </div>
          </div>

          {/* Description & Technical Sheet */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-8 space-y-3">
              <h3 className="font-serif text-[28px] md:text-[32px] text-[#191b1b] leading-tight">
                {currentSpace.title}
              </h3>
              <p className="text-[15px] text-[#44413c] leading-relaxed">
                {currentSpace.description}
              </p>
            </div>

            {/* Technical Metadata Box */}
            <div className="md:col-span-4 p-4 bg-[#f4f3f1] border border-[#d3cfc8]/60 space-y-2.5 text-xs">
              <span className="text-[10px] uppercase tracking-widest text-[#7b766f] font-semibold block border-b border-[#d3cfc8]/40 pb-1">
                Ficha Técnica
              </span>
              <div className="flex justify-between py-1 border-b border-[#d3cfc8]/20">
                <span className="text-[#5f5d59]">Superficie:</span>
                <span className="font-mono font-medium text-[#191b1b]">{currentSpace.surface}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#d3cfc8]/20">
                <span className="text-[#5f5d59]">Año de Apertura:</span>
                <span className="font-mono font-medium text-[#191b1b]">{currentSpace.year}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#5f5d59]">Proyecto:</span>
                <span className="font-medium text-[#191b1b] text-right">{currentSpace.architects}</span>
              </div>
            </div>
          </div>

          {/* Space Selector Tabs */}
          <div className="pt-4 border-t border-[#d3cfc8]/40">
            <span className="text-[10px] uppercase tracking-widest text-[#7b766f] font-semibold block mb-3">
              Seleccionar Espacio Arquitectónico
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {ARCHITECTURAL_SPACES.map((space, idx) => (
                <button
                  key={space.id}
                  onClick={() => setSelectedIndex(idx)}
                  className={`p-3 text-left transition-all border cursor-pointer ${
                    selectedIndex === idx
                      ? 'bg-[#121313] text-white border-[#121313]'
                      : 'bg-[#f4f3f1] text-[#191b1b] border-[#d3cfc8]/60 hover:bg-[#edebe7]'
                  }`}
                >
                  <span className={`text-[10px] font-mono block ${selectedIndex === idx ? 'text-gray-400' : 'text-[#7b766f]'}`}>
                    {space.code}
                  </span>
                  <span className="text-xs font-semibold block leading-tight mt-1">
                    {space.title.split('·')[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 px-6 bg-[#f4f3f1] border-t border-[#d3cfc8]/50 flex items-center justify-between">
          <span className="text-[11px] text-[#5f5d59] uppercase tracking-wider">
            Patrimonio e Infraestructura · Grupo Afiansur S.A.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#121313] text-white text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-black transition-colors cursor-pointer"
          >
            Cerrar Vista
          </button>
        </div>
      </div>
    </div>
  );
};
