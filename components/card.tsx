"use client";

import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "section" | "article";
  glow?: boolean;
};

export function Card({ as: Component = "article", glow, className, ...rest }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="relative"
    >
      {glow ? (
        <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-xl" aria-hidden />
      ) : null}
      <Component
        className={cn(
          "relative rounded-2xl border border-muted bg-card/80 p-6 shadow-lg backdrop-blur-sm",
          "dark:border-muted/60 dark:bg-card/50",
          className
        )}
        {...rest}
      />
    </motion.div>
  );
}
