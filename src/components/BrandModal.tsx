import React from 'react';
import { X, ArrowUpRight, Building2, Calendar, UserCheck, Shield } from 'lucide-react';
import { Brand } from '../data/afiansurData';

interface BrandModalProps {
  brand: Brand | null;
  onClose: () => void;
  onContactBrand: (brand: Brand) => void;
}

export const BrandModal: React.FC<BrandModalProps> = ({ brand, onClose, onContactBrand }) => {
  if (!brand) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs animate-fade-in-up">
      <div
        className="relative w-full max-w-2xl bg-[#f9f9f8] border border-[#d3cfc8] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Architectural Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#d3cfc8]/50 bg-[#f4f3f1]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#121313]"></span>
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#191b1b]">
              DOSSIER CORPORATIVO · {brand.categoryLabel}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#7b766f] hover:text-[#191b1b] transition-colors"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-6">
          {/* Headline & Tagline */}
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="font-serif text-[32px] md:text-[38px] text-[#191b1b] leading-tight">
                {brand.name}
              </h3>
              <span className="text-xs font-mono uppercase tracking-widest text-[#7b766f]">
                DESDE {brand.founded}
              </span>
            </div>
            <p className="text-[13px] uppercase tracking-wider text-[#5f5d59] font-medium">
              {brand.tagline}
            </p>
          </div>

          {/* Optional Image */}
          {brand.imageUrl && (
            <div className="aspect-[16/9] w-full overflow-hidden bg-[#edebe7] border border-[#d3cfc8]/40">
              <img
                src={brand.imageUrl}
                alt={brand.name}
                className="w-full h-full object-cover filter contrast-[1.02]"
              />
            </div>
          )}

          {/* Narrative Overview */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#191b1b] border-b border-[#d3cfc8]/30 pb-1">
              Propuesta & Alcance Operativo
            </h4>
            <p className="text-[15px] text-[#44413c] leading-relaxed">
              {brand.fullDescription}
            </p>
          </div>

          {/* Key Metrics */}
          {brand.keyMetrics && brand.keyMetrics.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#191b1b] border-b border-[#d3cfc8]/30 pb-1">
                Indicadores de Operación
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {brand.keyMetrics.map((metric, i) => (
                  <div key={i} className="p-3.5 bg-[#f4f3f1] border border-[#d3cfc8]/40">
                    <span className="font-serif text-2xl text-[#191b1b] block mb-0.5">
                      {metric.value}
                    </span>
                    <span className="text-[11px] text-[#5f5d59] uppercase tracking-wider leading-tight block">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Governance & Location Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#d3cfc8]/30 text-xs text-[#5f5d59]">
            <div className="flex items-start gap-2.5">
              <Building2 className="w-4 h-4 text-[#7b766f] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#191b1b] block">Sede Operativa:</span>
                <span>{brand.headquarters}</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <UserCheck className="w-4 h-4 text-[#7b766f] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#191b1b] block">Gobernanza / Liderazgo:</span>
                <span>{brand.leadership}</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="pt-2">
            <div className="flex flex-wrap gap-1.5">
              {brand.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-[11px] uppercase tracking-wider bg-[#edebe7] text-[#191b1b] border border-[#d3cfc8]/60"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-4 md:px-8 bg-[#f4f3f1] border-t border-[#d3cfc8]/50 flex flex-wrap items-center justify-between gap-3">
          <a
            href={brand.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#191b1b] hover:text-[#5f5d59] transition-colors"
          >
            <span>Ir al sitio web oficial</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onContactBrand(brand)}
              className="px-5 py-2.5 bg-[#121313] text-white text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-black transition-colors cursor-pointer"
            >
              Contactar a esta unidad
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 border border-[#d3cfc8] text-[#5f5d59] text-[11px] uppercase tracking-[0.18em] hover:bg-[#edebe7] transition-colors cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
