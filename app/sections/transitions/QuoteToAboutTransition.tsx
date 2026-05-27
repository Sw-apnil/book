"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function QuoteToAboutTransition() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const sweepX = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"])
  const shadowOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 0.3])

  return (
    <div ref={ref} className="relative h-[30vh] bg-midnight overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-paper/5"
        style={{ x: sweepX }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(11, 16, 40, 0.5) 50%, transparent 100%)",
          opacity: shadowOpacity,
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[#12183A]"
        style={{ opacity: useTransform(scrollYProgress, [0, 1], [0, 1]) }}
      />
    </div>
  )
}
