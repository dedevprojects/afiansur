import React from 'react';
import { ArrowUpRight, Cpu, Megaphone, Users, Radio, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_UNITS } from '../data/afiansurData';

interface BusinessUnitsProps {
  onSelectBrandName: (brandName: string) => void;
}

export const BusinessUnits: React.FC<BusinessUnitsProps> = ({ onSelectBrandName }) => {
  const getUnitIcon = (category: string) => {
    switch (category) {
      case 'tecnologia': return Cpu;
      case 'comunicacion': return Megaphone;
      case 'talento': return Users;
      case 'medios': return Radio;
      case 'educacion': return GraduationCap;
      default: return Cpu;
    }
  };

  return (
    <section className="w-full px-6 sm:px-10 md:px-16 py-20 md:py-28 bg-white" id="unidades">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 mb-8 gap-6 border-b border-neutral-100">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#7b766f] block mb-2">
              ÁREAS DE ACTIVIDAD
            </span>
            <h2 className="font-sans font-black text-[34px] sm:text-[44px] text-[#121313] tracking-tight leading-[1.08]">
              Cinco áreas de especialización.
            </h2>
          </div>
          <p className="text-[15px] sm:text-[16px] text-[#5f5d59] max-w-md leading-relaxed">
            Cada unidad responde a una actividad específica y reúne marcas que comparten capacidades, infraestructura y mercados consolidados.
          </p>
        </div>

        {/* Layout matching PRODUCTS section in reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Solid Left Anchor Tile matching PRODUCTS tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 section-anchor-tile flex flex-col justify-between min-h-[280px]"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
              02 // ESTRUCTURA
            </span>
            <div>
              <span className="font-sans font-black text-3xl uppercase tracking-wider text-white leading-tight block mb-2">
                ÁREAS<br />DE<br />NEGOCIO
              </span>
              <p className="text-xs text-neutral-400">
                5 divisiones estratégicas transversales
              </p>
            </div>
          </motion.div>

          {/* Floating Product Cards matching reference */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6">
            {BUSINESS_UNITS.slice(0, 3).map((unit, idx) => {
              const Icon = getUnitIcon(unit.category);
              return (
                <motion.div
                  key={unit.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="floating-card p-7 sm:p-8 flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.09)] transition-all duration-300 group"
                >
                  <div>
                    {/* Top Icon & Category */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-100">
                      <div className="w-10 h-10 rounded-2xl bg-[#fafafa] border border-neutral-100 flex items-center justify-center text-[#121313] group-hover:bg-[#121313] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs text-[#7b766f] font-bold group-hover:text-[#121313] transition-colors">
                        {unit.number}
                      </span>
                    </div>

                    <h3 className="font-sans font-black text-2xl text-[#121313] mb-1">
                      {unit.title}
                    </h3>
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-[#7b766f] mb-3">
                      {unit.subtitle}
                    </p>

                    <p className="text-xs text-[#5f5d59] leading-relaxed mb-6">
                      {unit.description}
                    </p>
                  </div>

                  {/* Brand chips & Action */}
                  <div className="pt-4 border-t border-neutral-100/80">
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {unit.brands.map((b) => (
                        <button
                          key={b}
                          onClick={() => onSelectBrandName(b)}
                          className="px-2.5 py-1 bg-neutral-100 hover:bg-[#121313] hover:text-white text-[11px] font-semibold text-[#121313] rounded-lg transition-colors cursor-pointer"
                        >
                          {b}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => onSelectBrandName(unit.brands[0])}
                      className="pill-action-btn w-full justify-between"
                    >
                      <span>Ver marcas</span>
                      <span className="pill-action-btn-circle">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Second Row for remaining 2 units (Medios & Educación) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {BUSINESS_UNITS.slice(3, 5).map((unit, idx) => {
            const Icon = getUnitIcon(unit.category);
            return (
              <motion.div
                key={unit.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="floating-card p-7 sm:p-8 flex flex-col md:flex-row justify-between gap-6 items-start hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.09)] transition-all duration-300 group"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#fafafa] border border-neutral-100 flex items-center justify-center text-[#121313] group-hover:bg-[#121313] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-[#7b766f] font-bold block">
                        {unit.number} // {unit.subtitle}
                      </span>
                      <h3 className="font-sans font-black text-2xl text-[#121313]">
                        {unit.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-[#5f5d59] leading-relaxed mb-4">
                    {unit.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {unit.brands.map((b) => (
                      <button
                        key={b}
                        onClick={() => onSelectBrandName(b)}
                        className="px-2.5 py-1 bg-neutral-100 hover:bg-[#121313] hover:text-white text-[11px] font-semibold text-[#121313] rounded-lg transition-colors cursor-pointer"
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 md:pt-4 self-end md:self-center">
                  <button
                    onClick={() => onSelectBrandName(unit.brands[0])}
                    className="pill-action-btn"
                  >
                    <span>Explorar</span>
                    <span className="pill-action-btn-circle">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
