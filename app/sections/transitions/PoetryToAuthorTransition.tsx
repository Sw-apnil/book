"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function PoetryToAuthorTransition() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const silhouetteOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.15, 0.65, 0.15])
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0])

  return (
    <div ref={ref} className="relative h-[40vh] bg-[#060918] overflow-hidden flex items-center justify-center">
      <motion.div
        className="absolute inset-0"
        style={{ opacity: silhouetteOpacity }}
      >
        <Image
          src="/images/woman-man-window.png"
          alt=""
          fill
          className="object-cover"
          style={{ 
            filter: "brightness(0.5) contrast(1.1) blur(2px)",
            objectPosition: "30% center",
          }}
          unoptimized
        />
      </motion.div>
      <motion.p
        className="relative z-10 font-serif italic text-paper/70 text-lg md:text-xl text-center px-8 max-w-md"
        style={{ opacity: textOpacity }}
      >
        "I write because some feelings arrive more honestly on paper."
      </motion.p>
    </div>
  )
}
