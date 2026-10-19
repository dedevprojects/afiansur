import React from 'react';
import { ArrowRight, Building2, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenArchitecture?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative w-full px-6 sm:px-10 md:px-16 pt-10 md:pt-16 pb-20 md:pb-28 bg-white overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Bold Typography & Actions matching reference */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center z-10"
          >
            {/* Tagline micro-label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#121313]"></span>
              <span className="text-xs uppercase tracking-[0.22em] text-[#5f5d59] font-bold">
                SOCIEDAD DE PARTICIPACIONES Y NEGOCIOS
              </span>
            </div>

            {/* Master Brand Headline: Dominant Primary Hierarchy (Balanced scale) */}
            <h1 className="font-sans font-black text-[36px] sm:text-[46px] md:text-[54px] lg:text-[62px] text-[#121313] tracking-tight leading-[1.02] uppercase mb-4">
              GRUPO AFIANSUR
            </h1>

            {/* Subordinate Institutional Manifesto / Claim */}
            <p className="font-sans font-extrabold text-[18px] sm:text-[21px] md:text-[24px] lg:text-[27px] tracking-tight leading-[1.16] uppercase text-[#5f5d59] mb-6 max-w-xl">
              <span className="text-[#121313]">NEGOCIOS DISTINTOS.</span> <br />
              <span>UNA VISIÓN COMPARTIDA.</span>
            </p>

            {/* Paragraph description */}
            <p className="text-[16px] sm:text-[18px] text-[#5f5d59] leading-relaxed max-w-lg mb-8 font-normal">
              Reunimos y desarrollamos empresas en tecnología, comunicación, talento, medios y educación. Cada una con su propia identidad, capacidades y oportunidades de crecimiento.
            </p>

            {/* Signature Pill Button with circular arrow */}
            <div className="flex flex-wrap items-center gap-5">
              <a href="#el-grupo" className="pill-action-btn">
                <span>Conocer el grupo</span>
                <span className="pill-action-btn-circle">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>

              <a
                href="#empresas"
                className="text-xs uppercase font-bold tracking-[0.16em] text-[#5f5d59] hover:text-[#121313] transition-colors py-2.5 px-3"
              >
                Empresas del grupo →
              </a>
            </div>

            {/* Micro value badges */}
            <div className="mt-12 pt-6 border-t border-neutral-100 flex items-center gap-6 text-[#7b766f] text-xs uppercase tracking-widest font-semibold">
              <span>RIGOR</span>
              <span>•</span>
              <span>INNOVACIÓN</span>
              <span>•</span>
              <span>GOBIERNO AUTÓNOMO</span>
            </div>
          </motion.div>

          {/* Right Column: Animated Team Working in Office Photo with Geometric Curved Mask */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Geometric Mask Image Container */}
            <div
              className="relative hero-geometric-mask aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/12] w-full overflow-hidden bg-neutral-100 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.18)]"
            >
              {/* Animated Team Office Photography with Ken Burns effect */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85"
                alt="Grupo de personas trabajando en una oficina moderna en Grupo Afiansur"
                className="w-full h-full object-cover animate-ken-burns filter contrast-[1.03]"
              />

              {/* Gradient lighting overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>

              {/* Floating Headquarters Badge with gentle float & beacon animation */}
              <div className="absolute top-5 left-5 z-10 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2.5 animate-float-slow">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#121313]">
                  SEDE CENTRAL CORPORATIVA
                </span>
              </div>
            </div>

            {/* Floating Structure Card with authentic group data and smooth floating animation */}
            <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-neutral-100 max-w-[270px] sm:max-w-[300px] animate-float-slow hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-neutral-100 text-[#121313] border border-neutral-200">
                  ESTRUCTURA DEL GRUPO
                </span>
              </div>
              <p className="font-sans font-black text-2xl text-[#121313] leading-none mb-1">
                5 Áreas · 12 Marcas
              </p>
              <p className="text-xs text-[#5f5d59]">
                Presencia y alcance regional
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
