import React from 'react';
import { ArrowUpRight, ArrowRight, Code2, Sparkles, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { Brand } from '../data/afiansurData';

interface TechnologyShowcaseProps {
  onSelectBrand?: (brand: Brand) => void;
  brands: Brand[];
}

export const TechnologyShowcase: React.FC<TechnologyShowcaseProps> = ({ brands }) => {
  const agenciaGol = brands.find((b) => b.id === 'agencia-gol') || brands[0];
  const agroconexiones = brands.find((b) => b.id === 'agroconexiones');
  const reservaclick = brands.find((b) => b.id === 'reservaclick');
  const inmobiliosis = brands.find((b) => b.id === 'inmobiliosis');

  const products = [agroconexiones, reservaclick, inmobiliosis].filter(Boolean) as Brand[];

  return (
    <section className="w-full px-6 sm:px-10 md:px-16 py-20 md:py-28 bg-[#f4f3ee] border-y border-[#e6e4df]/80" id="tecnologia">
      <div className="max-w-7xl mx-auto">
        {/* Alternating Layout matching the PRESS section in reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative, Products & Pill Action Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-block">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#7b766f]">
                DESARROLLO & PRODUCTOS DIGITALES
              </span>
            </div>

            <h2 className="font-sans font-black text-[32px] sm:text-[42px] text-[#121313] tracking-tight leading-[1.12]">
              De la ingeniería al producto. <br />
              <span className="text-[#5f5d59]">Sistemas propios y escalables.</span>
            </h2>

            <p className="text-[16px] text-[#5f5d59] leading-relaxed">
              A través de <strong className="text-[#121313] font-bold">Agencia Gol</strong> concebimos y construimos soluciones tecnológicas y plataformas digitales de alto impacto. Desarrollamos la infraestructura que potencia a nuestros clientes y a los productos internos del grupo.
            </p>

            {/* 3 Digital Products in sleek cards */}
            <div className="space-y-3 pt-2">
              {products.map((prod) => (
                <a
                  key={prod.id}
                  href={prod.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-4 sm:p-5 rounded-2xl shadow-xs hover:shadow-lg border border-neutral-100 hover:border-neutral-300 hover:-translate-y-1.5 flex items-center justify-between gap-4 transition-all duration-300 group block"
                >
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#7b766f] block">
                      {prod.categoryLabel}
                    </span>
                    <h4 className="font-sans font-bold text-lg text-[#121313] group-hover:text-black">
                      {prod.name}
                    </h4>
                    <p className="text-xs text-[#5f5d59] line-clamp-1 mt-0.5">
                      {prod.summary}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-neutral-100 group-hover:bg-[#121313] group-hover:text-white flex items-center justify-center text-[#121313] group-hover:scale-110 transition-all duration-300 shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href={agenciaGol.url}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-action-btn"
              >
                <span>Conocer Agencia Gol</span>
                <span className="pill-action-btn-circle">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Solid Anchor Tile + Photo Grid (matching the right-side PRESS block in reference) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
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
                  03 // TECNOLOGÍA
                </span>
                <span className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-wider text-white leading-tight">
                  TECH &<br />PRODUCT
                </span>
              </div>

              {/* Vertical Image Card */}
              <div className="col-span-6 rounded-3xl overflow-hidden shadow-md bg-neutral-200">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Desarrollo e ingeniería de software"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Bottom row: Horizontal wide photo */}
            <div className="w-full h-44 sm:h-52 rounded-3xl overflow-hidden shadow-md bg-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
                alt="Laboratorio de tecnología y software"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
