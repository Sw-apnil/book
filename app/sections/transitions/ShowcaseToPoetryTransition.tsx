"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function ShowcaseToPoetryTransition() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const inkPath = useTransform(scrollYProgress, [0.3, 0.7], [0, 1])

  return (
    <div ref={ref} className="relative h-[30vh] bg-midnight overflow-hidden">
      <motion.div
        className="absolute inset-0 backdrop-blur-sm"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0, 1]) }}
      />
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 0 150 Q 300 100 600 150 T 1200 150"
          fill="none"
          stroke="rgba(89, 106, 146, 0.2)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ pathLength: inkPath }}
        />
      </svg>
    </div>
  )
}
