import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Search, X, Sparkles, TrendingUp, Building } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Brand } from '../data/afiansurData';

interface BrandDirectoryProps {
  brands: Brand[];
  onSelectBrand: (brand: Brand) => void;
}

const BRAND_IMAGES: Record<string, string> = {
  'agencia-gol': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=700&q=80',
  'agroconexiones': 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=700&q=80',
  'reservaclick': 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=700&q=80',
  'inmobiliosis': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80',
  'krafyx': 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=700&q=80',
  'hatrixa': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80',
  'mandel-producciones': 'https://images.unsplash.com/photo-1579965342575-16428a7c8881?auto=format&fit=crop&w=700&q=80',
  'consultora-contraluz': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80',
  'grupo-mastech': 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80',
  'historias-narradas': 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=700&q=80',
  'guia-sabor': 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=80',
  'escuela-online': 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=700&q=80',
};

const CATEGORY_STYLES: Record<string, { bg: string; text: string; dot: string }> = {
  tecnologia: { bg: 'bg-neutral-900', text: 'text-white', dot: 'bg-emerald-400' },
  comunicacion: { bg: 'bg-indigo-50', text: 'text-indigo-900', dot: 'bg-indigo-600' },
  talento: { bg: 'bg-sky-50', text: 'text-sky-900', dot: 'bg-sky-600' },
  medios: { bg: 'bg-amber-50', text: 'text-amber-900', dot: 'bg-amber-600' },
  educacion: { bg: 'bg-emerald-50', text: 'text-emerald-900', dot: 'bg-emerald-600' },
};

export const BrandDirectory: React.FC<BrandDirectoryProps> = ({ brands, onSelectBrand }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterOptions = [
    { id: 'all', label: 'Todas las áreas' },
    { id: 'tecnologia', label: 'Tecnología' },
    { id: 'comunicacion', label: 'Comunicación' },
    { id: 'talento', label: 'Talento Humano' },
    { id: 'medios', label: 'Medios & Contenidos' },
    { id: 'educacion', label: 'Educación' },
  ];

  const filteredBrands = brands.filter((brand) => {
    const matchesFilter = selectedFilter === 'all' || brand.category === selectedFilter;
    const matchesSearch =
      brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      brand.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      brand.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      brand.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const featuredBrand = brands.find((b) => b.id === 'agencia-gol') || brands[0];

  return (
    <section className="w-full px-6 sm:px-10 md:px-16 py-20 md:py-28 bg-[#fbfbfa]" id="nuestros-negocios">
      <div className="max-w-7xl mx-auto">
        {/* Continuous Animated Marquee for all 12 Group Brands */}
        <div className="mb-20 pb-12 border-b border-neutral-200/80 overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 px-1">
            <p className="text-xs uppercase tracking-[0.22em] font-bold text-[#7b766f]">
              12 EMPRESAS Y PLATAFORMAS CONSOLIDADAS DEL GRUPO
            </p>
            <span className="text-[11px] font-mono text-[#a19d95]">
              Carrusel continuo · Clic para explorar
            </span>
          </div>

          <div className="relative w-full overflow-hidden py-2">
            {/* Left and right fade gradient edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#fbfbfa] via-[#fbfbfa]/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#fbfbfa] via-[#fbfbfa]/80 to-transparent z-10 pointer-events-none"></div>

            <div className="animate-marquee flex items-center gap-4 sm:gap-6">
              {[...brands, ...brands].map((b, i) => (
                <button
                  key={`${b.id}-${i}`}
                  onClick={() => onSelectBrand(b)}
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs hover:shadow-lg hover:border-black hover:-translate-y-1 transition-all duration-300 cursor-pointer shrink-0 group"
                  title={`Ver expediente de ${b.name}`}
                >
                  <span className="w-2 h-2 rounded-full bg-[#121313] group-hover:scale-150 transition-transform"></span>
                  <span className="font-sans font-black text-lg sm:text-xl text-[#121313] tracking-tight group-hover:text-black">
                    {b.name}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#7b766f] bg-neutral-100 group-hover:bg-neutral-200/70 px-2.5 py-0.5 rounded-md transition-colors">
                    {b.categoryLabel.split('&')[0].trim()}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 mb-10 gap-6 border-b border-neutral-200/80">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#7b766f] block mb-2">
              PORTFOLIO CORPORATIVO
            </span>
            <h2 className="font-sans font-black text-[34px] sm:text-[46px] text-[#121313] tracking-tight leading-[1.06]">
              Cada negocio, su identidad.
            </h2>
          </div>
          <p className="text-[15px] sm:text-[16px] text-[#5f5d59] max-w-md leading-relaxed">
            Las marcas de Grupo Afiansur operan con propuestas y equipos especializados bajo una gobernanza común de solidez financiera y tecnológica.
          </p>
        </div>

        {/* Spotlight Featured Card (When 'all' filter is active and no search) */}
        {selectedFilter === 'all' && !searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => onSelectBrand(featuredBrand)}
            className="mb-12 bg-white rounded-3xl p-6 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-neutral-100 hover:shadow-[0_25px_50px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Image side with live badge */}
              <div className="lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-100 shadow-sm">
                <img
                  src={BRAND_IMAGES[featuredBrand.id]}
                  alt={featuredBrand.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  PLATAFORMA DESTACADA
                </div>
              </div>

              {/* Text & Key Stats side */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#7b766f] font-bold">
                      {featuredBrand.categoryLabel}
                    </span>
                    <span className="text-neutral-300">•</span>
                    <span className="text-xs font-mono text-[#7b766f]">Est. {featuredBrand.founded}</span>
                  </div>
                  <h3 className="font-sans font-black text-3xl sm:text-4xl text-[#121313] mb-3 group-hover:text-black">
                    {featuredBrand.name}
                  </h3>
                  <p className="text-[15px] text-[#5f5d59] leading-relaxed mb-6">
                    {featuredBrand.fullDescription}
                  </p>

                  {/* Highlights Metric Strip */}
                  <div className="grid grid-cols-3 gap-4 py-4 border-y border-neutral-100 mb-2">
                    {featuredBrand.keyMetrics.map((km) => (
                      <div key={km.label}>
                        <span className="font-sans font-black text-2xl text-[#121313] block">
                          {km.value}
                        </span>
                        <span className="text-[11px] text-[#7b766f] font-medium leading-tight block">
                          {km.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#121313] flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    Explorar expediente institucional →
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#121313] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filter Pills & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          {/* Category Tabs in pill style */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedFilter(opt.id)}
                className={`text-xs uppercase tracking-wider font-bold px-4 py-2 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  selectedFilter === opt.id
                    ? 'bg-[#121313] text-white shadow-sm'
                    : 'bg-white text-[#5f5d59] border border-neutral-200/80 hover:bg-neutral-100 hover:text-[#121313]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Search Input in rounded pill style */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-[#7b766f] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar marcas o capacidades..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-neutral-200/90 rounded-full pl-9 pr-8 py-2 text-xs text-[#121313] placeholder:text-[#7b766f] focus:outline-hidden focus:border-[#121313] shadow-2xs transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7b766f] hover:text-[#121313]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Brand Grid: Rich Visual Cards with distinct Photography & Metrics */}
        {filteredBrands.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-3xl p-8 border border-neutral-100 shadow-sm">
            <p className="font-sans font-bold text-xl text-[#121313] mb-2">No se encontraron marcas</p>
            <p className="text-sm text-[#5f5d59]">Intente con otros términos o seleccione otra categoría.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredBrands.map((brand, idx) => {
              const imgUrl = BRAND_IMAGES[brand.id] || BRAND_IMAGES['agencia-gol'];
              const catStyle = CATEGORY_STYLES[brand.category] || CATEGORY_STYLES.tecnologia;
              const primaryMetric = brand.keyMetrics && brand.keyMetrics[0];

              return (
                <motion.div
                  key={brand.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.04 }}
                  onClick={() => onSelectBrand(brand)}
                  className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.1)] border border-neutral-100 hover:border-neutral-200/90 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    {/* Brand Photography Visual with Category Badge */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
                      <img
                        src={imgUrl}
                        alt={brand.name}
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-600 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

                      {/* Top Category Badge */}
                      <div className="absolute top-3.5 left-3.5">
                        <span className={`inline-flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-xs ${catStyle.bg} ${catStyle.text}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${catStyle.dot}`}></span>
                          {brand.categoryLabel.split('&')[0].trim()}
                        </span>
                      </div>

                      {/* Founded Year Tag */}
                      <div className="absolute top-3.5 right-3.5 bg-black/75 backdrop-blur-md text-white text-[10px] font-mono px-2 py-0.5 rounded-md">
                        {brand.founded}
                      </div>

                      {/* Floating Key Metric Preview */}
                      {primaryMetric && (
                        <div className="absolute bottom-3 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-xl shadow-md">
                          <span className="font-sans font-black text-sm text-[#121313] mr-1.5">
                            {primaryMetric.value}
                          </span>
                          <span className="text-[10px] text-[#5f5d59] uppercase tracking-wider font-semibold">
                            {primaryMetric.label.split(' ')[0]}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex items-baseline justify-between mb-2">
                        <h3 className="font-sans font-black text-2xl text-[#121313] group-hover:text-black leading-tight">
                          {brand.name}
                        </h3>
                        <a
                          href={brand.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-[#121313] hover:text-white flex items-center justify-center text-[#7b766f] transition-colors shrink-0"
                          title="Visitar sitio oficial"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#7b766f] mb-3 line-clamp-1">
                        {brand.tagline}
                      </p>

                      <p className="text-xs text-[#5f5d59] leading-relaxed mb-4 line-clamp-2">
                        {brand.summary}
                      </p>

                      {/* Micro Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {brand.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] text-[#5f5d59] bg-neutral-100 px-2 py-0.5 rounded-md font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Pill Action */}
                  <div className="px-6 pb-6 pt-2 border-t border-neutral-100/70">
                    <span className="pill-action-btn w-full justify-between">
                      <span>Ver ficha técnica</span>
                      <span className="pill-action-btn-circle">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
