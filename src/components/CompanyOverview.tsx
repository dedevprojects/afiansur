import React from 'react';
import { ArrowRight, Layers, ShieldCheck, Globe } from 'lucide-react';
import { motion } from 'motion/react';

interface CompanyOverviewProps {
  onOpenReport: () => void;
}

export const CompanyOverview: React.FC<CompanyOverviewProps> = ({ onOpenReport }) => {
  return (
    <section className="w-full px-6 sm:px-10 md:px-16 py-20 md:py-28 bg-[#fafafa]" id="el-grupo">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Signature Anchor Tile + Photo Grid (matching ABOUT US composition in reference) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col gap-4"
          >
            {/* Top row: Solid Anchor Tile + Vertical photo */}
            <div className="grid grid-cols-12 gap-4">
              {/* Solid Anchor Tile */}
              <div className="col-span-6 section-anchor-tile aspect-square min-h-[190px] sm:min-h-[220px]">
                <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold mb-auto">
                  01 // PERFIL
                </span>
                <span className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-wider text-white leading-tight">
                  EL<br />GRUPO
                </span>
              </div>

              {/* Top Vertical Image Card */}
              <div className="col-span-6 rounded-3xl overflow-hidden shadow-md bg-neutral-200">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                  alt="Arquitectura corporativa"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Bottom row: Horizontal wide photo */}
            <div className="w-full h-44 sm:h-52 rounded-3xl overflow-hidden shadow-md bg-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="Espacios de trabajo colaborativo"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Right Column: Typographic Narrative & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-block">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#7b766f]">
                IDENTIDAD Y ESTRUCTURA
              </span>
            </div>

            <h2 className="font-sans font-black text-[32px] sm:text-[42px] text-[#121313] tracking-tight leading-[1.12]">
              Distintas especialidades. <br />
              <span className="text-[#5f5d59]">Una estructura común.</span>
            </h2>

            <p className="text-[16px] text-[#5f5d59] leading-relaxed">
              Grupo Afiansur reúne negocios con identidades y especialidades propias bajo una visión empresarial compartida. Nuestra estructura combina desarrollo tecnológico, producción creativa, gestión del talento, contenidos y formación.
            </p>

            <p className="text-[15px] text-[#7b766f] leading-relaxed">
              Una diversidad de actividades que permite abordar distintos mercados y desarrollar nuevas iniciativas, conservando al mismo tiempo el estándar de precisión y solidez institucional que distingue a nuestras marcas.
            </p>

            {/* 3 Pillars in clean interactive micro-cards with movement */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="bg-white p-4 rounded-2xl shadow-xs hover:shadow-md border border-neutral-100 hover:border-neutral-300 hover:-translate-y-1.5 transition-all duration-300 cursor-default group">
                <div className="w-8 h-8 rounded-xl bg-neutral-100 group-hover:bg-[#121313] group-hover:text-white flex items-center justify-center text-[#121313] mb-2.5 transition-colors">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#121313] mb-1">Autonomía</h4>
                <p className="text-[11px] text-[#5f5d59] leading-snug">Cada subsidiaria gestiona su equipo y producto con identidad propia.</p>
              </div>

              <div className="bg-white p-4 rounded-2xl shadow-xs hover:shadow-md border border-neutral-100 hover:border-neutral-300 hover:-translate-y-1.5 transition-all duration-300 cursor-default group">
                <div className="w-8 h-8 rounded-xl bg-neutral-100 group-hover:bg-[#121313] group-hover:text-white flex items-center justify-center text-[#121313] mb-2.5 transition-colors">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#121313] mb-1">Gobernanza</h4>
                <p className="text-[11px] text-[#5f5d59] leading-snug">Rigor metodológico y auditoría legal y financiera unificada.</p>
              </div>

              <div className="bg-white p-4 rounded-2xl shadow-xs hover:shadow-md border border-neutral-100 hover:border-neutral-300 hover:-translate-y-1.5 transition-all duration-300 cursor-default group">
                <div className="w-8 h-8 rounded-xl bg-neutral-100 group-hover:bg-[#121313] group-hover:text-white flex items-center justify-center text-[#121313] mb-2.5 transition-colors">
                  <Globe className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#121313] mb-1">Región</h4>
                <p className="text-[11px] text-[#5f5d59] leading-snug">Operaciones coordinadas en Argentina, Paraguay y España.</p>
              </div>
            </div>

            {/* Signature Pill Button */}
            <div className="pt-4">
              <button onClick={onOpenReport} className="pill-action-btn">
                <span>Memoria Institucional 2025</span>
                <span className="pill-action-btn-circle">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
