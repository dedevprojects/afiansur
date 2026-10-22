import React, { useEffect, useId, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";

interface TextHoverEffectProps
  extends Omit<React.SVGAttributes<SVGSVGElement>, "children"> {
  /** The word or short phrase to draw */
  text: string;
  /** Outline width in SVG units (the glyphs are 100 units tall) */
  strokeWidth?: number;
  /** Radius of the pointer reveal, as a percentage of the drawing's size */
  revealRadius?: number;
  /** Seconds the outline takes to draw itself in on mount */
  drawDuration?: number;
}

const PAD = 4;

/**
 * Oversized outlined text that draws itself in, then reveals a brand-gradient
 * version of the word inside a soft spotlight that follows the pointer.
 * Size it with a width class (`w-full`); the height follows the text. Weight
 * and font come from the className, e.g. `font-black`.
 */
export function TextHoverEffect({
  text,
  strokeWidth = 0.75,
  revealRadius = 28,
  drawDuration = 2.5,
  className,
  onPointerMove,
  ...props
}: TextHoverEffectProps) {
  const id = useId();
  const outlineRef = useRef<SVGTextElement>(null);
  const reducedMotion = useReducedMotion();
  // A rough first guess so the server render has sensible proportions; the
  // real glyph box is measured once the font has loaded.
  const [box, setBox] = useState({
    w: text.length * 64 + PAD * 2,
    h: 80,
    x: PAD,
    y: 76,
  });

  const px = useMotionValue(50);
  const py = useMotionValue(50);
  const spring = { stiffness: 260, damping: 32, mass: 0.6 };
  const cx = useMotionTemplate`${useSpring(px, spring)}%`;
  const cy = useMotionTemplate`${useSpring(py, spring)}%`;

  useEffect(() => {
    let live = true;
    document.fonts.ready.then(() => {
      const el = outlineRef.current;
      if (!live || !el) return;
      const bb = el.getBBox();
      const css = getComputedStyle(el);
      const ctx = document.createElement("canvas").getContext("2d");
      if (!ctx) return;
      ctx.font = `${css.fontStyle} ${css.fontWeight} 100px ${css.fontFamily}`;
      const ink = ctx.measureText(text);
      const top = ink.actualBoundingBoxAscent || 75;
      const bottom = ink.actualBoundingBoxDescent || 20;
      setBox({
        w: Math.max(bb.width + PAD * 2, ink.width + PAD * 4),
        h: top + bottom + PAD * 2,
        x: PAD - bb.x,
        y: PAD + top,
      });
    });
    return () => {
      live = false;
    };
  }, [text]);

  useEffect(() => {
    const el = outlineRef.current;
    if (!el) return;
    void getComputedStyle(el).strokeDashoffset;
    el.style.strokeDashoffset = "0";
  }, []);

  const frame = {
    maskUnits: "userSpaceOnUse",
    x: 0,
    y: 0,
    width: "100%",
    height: "100%",
  } as const;

  const word = (attrs: React.SVGProps<SVGTextElement>) => (
    <text
      transform={`translate(${box.x} ${box.y})`}
      fontSize={100}
      fontFamily="inherit"
      fontWeight="inherit"
      letterSpacing="-0.03em"
      {...attrs}
    >
      {text}
    </text>
  );

  return (
    <svg
      role="img"
      aria-label={text}
      viewBox={`0 0 ${box.w} ${box.h}`}
      data-slot="text-hover-effect"
      className={cn(
        "group/text-hover h-auto w-full select-none font-black cursor-pointer",
        className
      )}
      onPointerMove={(event) => {
        onPointerMove?.(event);
        if (reducedMotion) return;
        const rect = event.currentTarget.getBoundingClientRect();
        px.set(((event.clientX - rect.left) / rect.width) * 100);
        py.set(((event.clientY - rect.top) / rect.height) * 100);
      }}
      {...props}
    >
      <defs>
        <linearGradient id={`${id}-ink`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#121313" />
          <stop offset="50%" stopColor="#373634" />
          <stop offset="100%" stopColor="#6e6a64" />
        </linearGradient>
        <motion.radialGradient
          id={`${id}-spot`}
          gradientUnits="userSpaceOnUse"
          cx={cx}
          cy={cy}
          r={`${revealRadius}%`}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="55%" stopColor="white" stopOpacity={0.65} />
          <stop offset="100%" stopColor="white" stopOpacity={0} />
        </motion.radialGradient>
        <mask id={`${id}-spot-mask`} {...frame}>
          <rect width="100%" height="100%" fill={`url(#${id}-spot)`} />
        </mask>
        <mask id={`${id}-outside`} {...frame}>
          <rect width="100%" height="100%" fill="white" />
          {word({ fill: "black" })}
        </mask>
      </defs>

      {/* Persistent subtle base fill so the headline remains legible at all times */}
      <g>
        {word({
          fill: "#121313",
          fillOpacity: 0.08,
        })}
      </g>

      {/* Animated drawing outline */}
      <g mask={`url(#${id}-outside)`}>
        {word({
          ref: outlineRef,
          strokeWidth: strokeWidth * 2.5,
          style: { transitionDuration: `${drawDuration}s` },
          className:
            "fill-none stroke-[#121313]/60 transition-[stroke-dashoffset] ease-in-out [stroke-dasharray:1000] motion-safe:[stroke-dashoffset:1000] motion-reduce:transition-none",
          onTransitionEnd: (event) => {
            event.currentTarget.style.strokeDasharray = "none";
          },
        })}
      </g>

      {/* Spotlight reveal on hover */}
      <g
        mask={`url(#${id}-spot-mask)`}
        className="opacity-0 transition-opacity duration-300 group-hover/text-hover:opacity-100 motion-reduce:duration-150"
      >
        {word({ fill: `url(#${id}-ink)`, fillOpacity: 0.95 })}
        <g mask={`url(#${id}-outside)`}>
          {word({
            fill: "none",
            stroke: `url(#${id}-ink)`,
            strokeWidth: strokeWidth * 3.5,
          })}
        </g>
      </g>
    </svg>
  );
}
