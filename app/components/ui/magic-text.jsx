"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const MagicText = ({ text, className }) => {
  return (
    <motion.span
      className={cn(
        "bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500 bg-[200%_auto] bg-clip-text text-transparent font-extrabold inline-block",
        className
      )}
      animate={{ backgroundPosition: ["0% center", "200% center"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    >
      {text}
    </motion.span>
  );
};
