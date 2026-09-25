"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AnimatedTooltip = ({ item, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: -40, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-[-20px] left-1/2 -translate-x-1/2 z-50 flex items-center justify-center rounded-md bg-neutral-900 px-3 py-1 text-xs font-medium text-white shadow-xl dark:bg-white dark:text-neutral-900 pointer-events-none whitespace-nowrap border border-neutral-700 dark:border-neutral-200"
          >
            {item}
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};
