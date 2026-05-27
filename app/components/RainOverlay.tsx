"use client"

import { motion } from "framer-motion"

export function RainOverlay({ intensity = "normal" }: { intensity?: "light" | "normal" | "heavy" }) {
  const dropCount = intensity === "light" ? 30 : intensity === "heavy" ? 80 : 50

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {Array.from({ length: dropCount }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            height: `${Math.random() * 60 + 40}px`,
          }}
          initial={{ y: "-10%", opacity: 0 }}
          animate={{
            y: "110%",
            opacity: [0, 0.3, 0.3, 0],
          }}
          transition={{
            duration: Math.random() * 0.8 + 0.4,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}
