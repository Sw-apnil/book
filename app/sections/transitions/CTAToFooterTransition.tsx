"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function CTAToFooterTransition() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const darkening = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const rainDropY = useTransform(scrollYProgress, [0.3, 0.7], ["-10%", "110%"])

  return (
    <div ref={ref} className="relative h-[40vh] bg-midnight overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[#060918]"
        style={{ opacity: darkening }}
      />
      <motion.div
        className="absolute left-1/2 w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent"
        style={{ y: rainDropY }}
      />
    </div>
  )
}
