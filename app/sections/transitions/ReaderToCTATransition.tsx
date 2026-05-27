"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function ReaderToCTATransition() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const glowOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <div ref={ref} className="relative h-[50vh] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0D1230 0%, #1A1020 50%, #0B1028 100%)",
          opacity: glowOpacity,
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(229, 154, 92, 0.1) 0%, transparent 70%)",
          opacity: glowOpacity,
        }}
      />
    </div>
  )
}
