"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function AuthorToReaderTransition() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const clipTop = useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"])
  const lineOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [0, 1, 0])

  return (
    <div ref={ref} className="relative h-[30vh] overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 right-0 bg-midnight"
        style={{ height: clipTop }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-[#0D1230]"
        style={{ height: useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"]) }}
      />
      <motion.div
        className="absolute left-0 right-0 top-1/2 h-px bg-amber/20"
        style={{ 
          opacity: lineOpacity,
          transform: "translateY(-50%)",
        }}
      />
    </div>
  )
}
