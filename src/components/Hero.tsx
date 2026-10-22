import React from "react";
import { ArrowRightIcon, GlobeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/velora/blur-fade";
import {
  Globe,
  type GlobeArc,
  type GlobeMarker,
} from "@/components/velora/globe";
import { NumberTicker } from "@/components/velora/number-ticker";

/**
 * Centros operativos, sedes corporativas y nodos de vinculación de Grupo Afiansur
 */
const REGIONS: GlobeMarker[] = [
  { lat: -34.6, lng: -58.38, label: "Buenos Aires" },
  { lat: -25.26, lng: -57.57, label: "Asunción" },
  { lat: 40.42, lng: -3.7, label: "Madrid" },
  { lat: -23.55, lng: -46.63, label: "São Paulo" },
  { lat: -33.45, lng: -70.67, label: "Santiago" },
  { lat: -34.9, lng: -56.16, label: "Montevideo" },
  { lat: 25.76, lng: -80.19, label: "Miami" },
  { lat: 19.43, lng: -99.13 },
];

/**
 * Rutas de articulación institucional y expansión internacional
 */
const ROUTES: GlobeArc[] = [
  { from: [-34.6, -58.38], to: [-25.26, -57.57] },
  { from: [-34.6, -58.38], to: [-23.55, -46.63] },
  { from: [-34.6, -58.38], to: [-33.45, -70.67] },
  { from: [-34.6, -58.38], to: [-34.9, -56.16] },
  { from: [-34.6, -58.38], to: [40.42, -3.7] },
  { from: [-23.55, -46.63], to: [40.42, -3.7] },
  { from: [40.42, -3.7], to: [25.76, -80.19] },
];

const STATS = [
  { value: 5, prefix: "", suffix: "", label: "áreas de negocio" },
  { value: 12, prefix: "", suffix: "", label: "marcas y empresas" },
  { value: 140, prefix: "+", suffix: "", label: "proyectos e iniciativas" },
];

export interface HeroProps {
  onOpenArchitecture?: () => void;
}

/**
 * Split hero institucional para Grupo Afiansur:
 * Titular institucional, manifiesto corporativo y métricas a la izquierda,
 * y globo interactivo punteado con rutas de presencia regional e internacional a la derecha.
 */
export function HeroGlobe({ onOpenArchitecture }: HeroProps = {}) {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden px-6 py-12 sm:py-20 lg:px-12 bg-white"
    >
      {/* Soft brand wash behind the globe side */}
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 -z-10 w-full bg-radial-[at_75%_50%] from-neutral-200/40 via-transparent to-transparent to-60% lg:w-2/3 pointer-events-none"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-xl">
          <BlurFade>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-neutral-50/80 py-1 pr-3.5 pl-2 text-xs text-[#5f5d59] backdrop-blur">
              <span className="w-1.5 h-1.5 rounded-full bg-[#121313]"></span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#5f5d59] font-bold">
                SOCIEDAD DE PARTICIPACIONES Y NEGOCIOS
              </span>
            </div>
          </BlurFade>

          {/* Master Brand Headline */}
          <h1 className="mt-6 font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-[#121313] tracking-tight leading-[1.02] uppercase mb-3">
            GRUPO AFIANSUR
          </h1>

          {/* Subordinate Institutional Manifesto / Claim */}
          <p className="font-sans font-extrabold text-xl sm:text-2xl lg:text-[27px] tracking-tight leading-[1.16] uppercase mb-6 max-w-xl">
            <span className="text-[#121313]">NEGOCIOS DISTINTOS.</span>{" "}
            <span className="bg-gradient-to-r from-[#121313] via-[#44413c] to-[#7b766f] bg-clip-text text-transparent block sm:inline">
              UNA VISIÓN COMPARTIDA.
            </span>
          </p>

          {/* Paragraph description */}
          <p className="text-base sm:text-lg text-pretty text-[#5f5d59] font-normal leading-relaxed max-w-lg mb-8">
            Reunimos y desarrollamos empresas en tecnología, comunicación, talento, medios y educación. Cada una con su propia identidad, capacidades y oportunidades de crecimiento.
          </p>

          <BlurFade delay={0.3}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" className="h-11 rounded-full px-6 bg-[#121313] text-white hover:bg-neutral-800" asChild>
                <a href="#el-grupo">
                  Conocer el grupo <ArrowRightIcon className="size-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-11 rounded-full px-6 border-neutral-300 text-[#121313] hover:bg-neutral-100"
                asChild
              >
                <a href="#empresas">
                  <GlobeIcon className="size-4" /> Empresas del grupo
                </a>
              </Button>
            </div>
          </BlurFade>

          <BlurFade delay={0.4}>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-neutral-100 pt-8">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col-reverse justify-end gap-1.5"
                >
                  <dt className="text-xs uppercase tracking-wider text-[#7b766f] font-semibold sm:text-[13px]">
                    {s.label}
                  </dt>
                  <dd className="text-3xl font-black tracking-tight text-[#121313] sm:text-4xl">
                    <NumberTicker
                      value={s.value}
                      prefix={s.prefix}
                      suffix={s.suffix}
                    />
                  </dd>
                </div>
              ))}
            </dl>
          </BlurFade>
        </div>

        <BlurFade
          delay={0.2}
          direction="none"
          className="relative flex justify-center items-center"
        >
          <div className="relative w-full max-w-[min(100%,32rem)] aspect-square flex items-center justify-center">
            {/* Subtle floating badge atop globe */}
            <div className="absolute top-2 left-4 sm:top-4 sm:left-6 z-20 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-neutral-200/60 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#121313]"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#121313]">
                Red & Presencia Regional
              </span>
            </div>

            <Globe
              markers={REGIONS}
              arcs={ROUTES}
              center={[-12, -45]}
              speed={4.5}
              dotColor="var(--muted-foreground, #7b766f)"
              accentColor="var(--brand, #121313)"
              className="w-full max-w-[min(100%,32rem)]"
              label="Globo interactivo mostrando la presencia regional e internacional de Grupo Afiansur"
            />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

// Export both Hero and HeroGlobe for compatibility
export const Hero = HeroGlobe;
