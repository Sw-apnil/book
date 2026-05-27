"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function AboutToShowcaseTransition() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const rainIntensity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <div ref={ref} className="relative h-[40vh] bg-midnight overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ opacity: rainIntensity }}
      >
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${Math.random() * 80 + 40}px`,
              top: "-10%",
            }}
            animate={{
              y: ["0%", "300%"],
            }}
            transition={{
              duration: Math.random() * 0.5 + 0.3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-[#090D22]"
        style={{ opacity: useTransform(scrollYProgress, [0, 1], [0, 1]) }}
      />
    </div>
  )
}
