"use client";

import React, { useRef, useState, useEffect } from "react";

export const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(139, 92, 246, 0.15)",
  borderColor = "rgba(255, 255, 255, 0.1)",
  hoverBorderColor = "rgba(139, 92, 246, 0.5)",
}) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl border bg-neutral-950/80 backdrop-blur-xl overflow-hidden transition-colors duration-300 ${className}`}
      style={{
        borderColor: opacity > 0 ? hoverBorderColor : borderColor,
      }}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export const GridBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-violet-600/15 via-pink-500/10 to-blue-500/10 blur-[120px] rounded-full" />
    </div>
  );
};

export const GlowingBadge = ({ children, icon: Icon, className = "" }) => {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-xs font-medium text-violet-300 shadow-[0_0_15px_rgba(139,92,246,0.2)] backdrop-blur-md ${className}`}>
      {Icon && <Icon className="w-3.5 h-3.5 text-violet-400 animate-pulse" />}
      <span>{children}</span>
    </div>
  );
};
