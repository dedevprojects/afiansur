import React from 'react';
import { ArrowRight, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface InstitutionalClosingProps {
  onOpenContact: () => void;
}

export const InstitutionalClosing: React.FC<InstitutionalClosingProps> = ({ onOpenContact }) => {
  return (
    <section className="relative w-full px-6 sm:px-10 md:px-16 py-20 md:py-28 bg-[#f5f4ef] border-t border-[#e8e6e1]/80" id="contacto-cierre">
      <div className="max-w-7xl mx-auto">
        {/* Contact Section Layout matching CONTACT block in reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Solid Left Anchor Tile matching CONTACT tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 section-anchor-tile flex flex-col justify-between min-h-[280px]"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
              05 // RELACIONES
            </span>
            <div>
              <span className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-wider text-white leading-none block mb-2 whitespace-nowrap">
                CONTACTO
              </span>
              <p className="text-xs text-neutral-400">
                Atención institucional y nuevos negocios
              </p>
            </div>
          </motion.div>

          {/* Center Column: Floating Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 floating-card p-8 sm:p-10 flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Relaciones Institucionales */}
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#121313] block mb-3">
                  Relaciones Institucionales
                </span>
                <div className="space-y-2 text-sm text-[#5f5d59]">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#121313]" />
                    <span className="font-medium text-[#121313]">contacto@grupoafiansur.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#7b766f]" />
                    <span>Lunes a Viernes · 09:00 a 18:00 (GMT-3)</span>
                  </div>
                </div>
              </div>

              {/* Sedes y Región */}
              <div className="pt-4 border-t border-neutral-100">
                <span className="text-xs uppercase tracking-wider font-bold text-[#121313] block mb-3">
                  Presencia Regional
                </span>
                <div className="space-y-2 text-sm text-[#5f5d59]">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#121313]" />
                    <span>Presencia y alcance regional e internacional</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pill Action Button */}
            <div className="pt-8">
              <button
                onClick={onOpenContact}
                className="pill-action-btn w-full justify-between"
              >
                <span>Enviar consulta al grupo</span>
                <span className="pill-action-btn-circle">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Stylized Minimalist Map Graphic Card matching reference */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 rounded-3xl overflow-hidden shadow-md border border-neutral-100 relative min-h-[300px] bg-[#eef1f5]"
          >
            {/* Minimalist Map Visual */}
            <div className="absolute inset-0 opacity-80 mix-blend-multiply bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            {/* SVG Map Lines */}
            <svg className="absolute inset-0 w-full h-full text-slate-300 opacity-60" fill="none" viewBox="0 0 400 400">
              <path d="M50,100 C150,80 200,200 350,180" stroke="currentColor" strokeWidth="3" />
              <path d="M80,300 C180,250 220,120 320,60" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
              <path d="M0,220 C120,240 280,220 400,280" stroke="currentColor" strokeWidth="2" />
            </svg>

            {/* Central Pin with Radar Beacon animation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="relative">
                <div className="w-11 h-11 rounded-full bg-[#121313] text-white flex items-center justify-center shadow-xl z-10 relative">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="absolute inset-0 rounded-full bg-[#121313] animate-pulse-beacon pointer-events-none"></div>
              </div>
              <div className="mt-2.5 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full shadow-md text-[11px] font-bold text-[#121313] uppercase tracking-wider whitespace-nowrap">
                SEDE CENTRAL
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl text-[11px] text-[#5f5d59] flex items-center justify-between">
              <span className="font-semibold text-[#121313]">Sede Central Corporativa</span>
              <span className="font-mono text-[#7b766f]">CONO SUR</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
