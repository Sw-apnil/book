"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function HeroToQuoteTransition() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0])
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0])
  const textFilter = useTransform(scrollYProgress, 
    [0.2, 0.4, 0.6, 0.8], 
    ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]
  )
  const imgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.1, 0.4, 0.4, 0.1])

  return (
    <div ref={ref} className="relative h-[80vh] bg-midnight overflow-hidden flex items-center justify-center">
      {/* Background image */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity: imgOpacity }}
      >
        <Image
          src="/images/midnight-thoughts.png"
          alt=""
          fill
          className="object-cover"
          style={{ filter: "blur(4px) brightness(0.5)" }}
          unoptimized
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-midnight/40"
        style={{ opacity }}
      />
      <motion.p
        className="relative z-10 font-serif italic text-paper/80 text-xl md:text-2xl text-center px-8"
        style={{ opacity: textOpacity, filter: textFilter }}
      >
        "My eyes found only him."
      </motion.p>
    </div>
  )
}
