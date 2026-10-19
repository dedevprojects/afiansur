import React from 'react';
import { X, Award, CheckCircle, FileText, Printer } from 'lucide-react';

interface InstitutionalReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstitutionalReportModal: React.FC<InstitutionalReportModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fade-in-up">
      <div
        className="relative w-full max-w-3xl bg-[#f9f9f8] border border-[#d3cfc8] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#d3cfc8]/50 bg-[#f4f3f1]">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#121313]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#191b1b]">
              MEMORIA INSTITUCIONAL · EJERCICIO 2025
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#5f5d59] hover:text-[#191b1b]"
              title="Imprimir documento"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 text-[#7b766f] hover:text-[#191b1b] transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Document Body */}
        <div className="overflow-y-auto p-6 md:p-10 space-y-8 font-sans">
          {/* Document Title Header */}
          <div className="border-b border-[#d3cfc8]/40 pb-6">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#5f5d59] font-semibold block mb-2">
              SOCIEDAD DE PARTICIPACIONES Y NEGOCIOS
            </span>
            <h2 className="font-serif text-[34px] md:text-[40px] text-[#191b1b] leading-tight mb-2">
              Grupo Afiansur S.A.
            </h2>
            <p className="text-sm text-[#5f5d59]">
              Documento de divulgación corporativa, gobierno y consolidación de unidades de negocio para inversores, aliados y directores.
            </p>
          </div>

          {/* Section 1: Governance Framework */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#191b1b] border-b border-[#d3cfc8]/30 pb-1.5">
              01. Marco de Gobernanza y Filosofía de Holding
            </h4>
            <p className="text-[15px] text-[#44413c] leading-relaxed">
              Grupo Afiansur opera como una sociedad de participaciones que combina la solidez institucional de un directorio central con la agilidad y autonomía ejecutiva de cada una de sus unidades de negocio. Este esquema preserva la identidad fundacional de cada marca al tiempo que aprovecha sinergias transversales en infraestructura tecnológica, administración fiduciaria y desarrollo de capital.
            </p>
          </div>

          {/* Section 2: Consolidated Numbers */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#191b1b] border-b border-[#d3cfc8]/30 pb-1.5">
              02. Resumen Consolidado 2025
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-[#f4f3f1] border border-[#d3cfc8]/50">
                <span className="font-serif text-2xl text-[#191b1b] block">5</span>
                <span className="text-[11px] uppercase tracking-wider text-[#5f5d59]">Áreas Estratégicas</span>
              </div>
              <div className="p-4 bg-[#f4f3f1] border border-[#d3cfc8]/50">
                <span className="font-serif text-2xl text-[#191b1b] block">12</span>
                <span className="text-[11px] uppercase tracking-wider text-[#5f5d59]">Marcas y Productos</span>
              </div>
              <div className="p-4 bg-[#f4f3f1] border border-[#d3cfc8]/50">
                <span className="font-serif text-2xl text-[#191b1b] block">3</span>
                <span className="text-[11px] uppercase tracking-wider text-[#5f5d59]">Sedes Internacionales</span>
              </div>
              <div className="p-4 bg-[#f4f3f1] border border-[#d3cfc8]/50">
                <span className="font-serif text-2xl text-[#191b1b] block">100%</span>
                <span className="text-[11px] uppercase tracking-wider text-[#5f5d59]">Capital Autónomo</span>
              </div>
            </div>
          </div>

          {/* Section 3: Strategic Focus */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#191b1b] border-b border-[#d3cfc8]/30 pb-1.5">
              03. Pilares de Inversión y Expansión
            </h4>
            <ul className="space-y-2 text-sm text-[#44413c]">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#121313] mt-2 shrink-0"></span>
                <span>
                  <strong>Escalamiento de Productos Propios:</strong> Consolidación de plataformas transaccionales y de software especializado (Agroconexiones, ReservaClick, Inmobiliosis) desarrolladas sobre la infraestructura de Agencia Gol.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#121313] mt-2 shrink-0"></span>
                <span>
                  <strong>Integración Transfronteriza:</strong> Articulación comercial entre Argentina, Paraguay y España, ofreciendo capacidades híbridas y servicios sin fronteras para el mercado hispanohablante.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#121313] mt-2 shrink-0"></span>
                <span>
                  <strong>Preservación de Rigor Narrativo:</strong> Inversión sostenida en medios de calidad y contenidos de largo aliento con solvencia editorial independiente (Historias Narradas y Guía Sabor).
                </span>
              </li>
            </ul>
          </div>

          {/* Section 4: Fiscal and Compliance Certification */}
          <div className="p-4 bg-[#edebe7] border border-[#d3cfc8] text-xs text-[#5f5d59] space-y-1">
            <div className="flex items-center gap-2 text-[#191b1b] font-semibold uppercase tracking-wider">
              <Award className="w-4 h-4 text-[#121313]" />
              <span>Certificación de Cumplimiento Normativo y Auditoría</span>
            </div>
            <p>
              Grupo Afiansur S.A. mantiene sus estados consolidados y normas de gobernanza bajo supervisión independiente conforme a la normativa societaria de la República Argentina y directrices del Mercosur.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 px-6 bg-[#f4f3f1] border-t border-[#d3cfc8]/50 flex items-center justify-between">
          <span className="text-[11px] text-[#7b766f] font-mono">
            REF: MEM-2025-AFIANSUR-PUB
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#121313] text-white text-xs uppercase tracking-widest font-semibold hover:bg-black transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
