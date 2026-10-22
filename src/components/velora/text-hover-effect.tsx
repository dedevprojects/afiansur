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
}

const PAD = 4;

/**
 * Text component with solid dark base for instant legibility,
 * that clarifies / illuminates into a lighter refined tone under the pointer spotlight.
 */
export function TextHoverEffect({
  text,
  strokeWidth = 0.75,
  revealRadius = 24,
  className,
  onPointerMove,
  ...props
}: TextHoverEffectProps) {
  const id = useId();
  const outlineRef = useRef<SVGTextElement>(null);
  const reducedMotion = useReducedMotion();

  const [box, setBox] = useState({
    w: text.length * 64 + PAD * 2,
    h: 80,
    x: PAD,
    y: 76,
  });

  const px = useMotionValue(50);
  const py = useMotionValue(50);
  const spring = { stiffness: 280, damping: 28, mass: 0.5 };
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
        {/* Lightened, clarifying gradient under the spotlight */}
        <linearGradient id={`${id}-light`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#8a857e" />
          <stop offset="50%" stopColor="#c8c4bc" />
          <stop offset="100%" stopColor="#8a857e" />
        </linearGradient>

        {/* Dynamic pointer spotlight mask */}
        <motion.radialGradient
          id={`${id}-spot`}
          gradientUnits="userSpaceOnUse"
          cx={cx}
          cy={cy}
          r={`${revealRadius}%`}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="60%" stopColor="white" stopOpacity={0.8} />
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

      {/* 1. Base Layer: Solid, 100% black text for perfect immediate readability upon loading */}
      <g>
        {word({
          ref: outlineRef,
          fill: "#121313",
          className: "fill-[#121313]",
        })}
      </g>

      {/* 2. Spotlight Layer: Revealed only where the pointer hovers, clarifying and lightening the letters */}
      <g
        mask={`url(#${id}-spot-mask)`}
        className="opacity-0 transition-opacity duration-200 group-hover/text-hover:opacity-100 motion-reduce:duration-100"
      >
        {word({
          fill: `url(#${id}-light)`,
        })}
        <g mask={`url(#${id}-outside)`}>
          {word({
            fill: "none",
            stroke: "#dedbd5",
            strokeWidth: strokeWidth * 2.5,
          })}
        </g>
      </g>
    </svg>
  );
}
