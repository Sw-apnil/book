"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"

export function RainOverlay({ intensity = "normal" }: { intensity?: "light" | "normal" | "heavy" }) {
  const dropCount = intensity === "light" ? 30 : intensity === "heavy" ? 80 : 50
  const drops = useMemo(
    () =>
      Array.from({ length: dropCount }).map((_, i) => {
        const seed = (i + 1) * 37
        return {
          left: `${seed % 100}%`,
          height: `${(seed * 11) % 60 + 40}px`,
          duration: ((seed * 7) % 80) / 100 + 0.55,
          delay: ((seed * 13) % 180) / 100,
          opacity: ((seed * 5) % 12) / 100 + 0.16,
        }
      }),
    [dropCount]
  )

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {drops.map((drop, i) => (
        <motion.div
          key={i}
          className="absolute w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"
          style={{
            left: drop.left,
            height: drop.height,
          }}
          initial={{ y: "-10%", opacity: 0 }}
          animate={{
            y: "110%",
            opacity: [0, drop.opacity, drop.opacity, 0],
          }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}
