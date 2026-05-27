"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const quotes = [
  "My eyes found only him.",
  "I think of him more when the world sleeps.",
  "Some loves are never meant to be returned.",
]

export function QuoteStripSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.35], [0, 1, 1, 0])
  const opacity2 = useTransform(scrollYProgress, [0.30, 0.40, 0.50, 0.60], [0, 1, 1, 0])
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0])

  const y1 = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.35], [20, 0, 0, -20])
  const y2 = useTransform(scrollYProgress, [0.30, 0.40, 0.50, 0.60], [20, 0, 0, -20])
  const y3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [20, 0, 0, -20])

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-midnight">
      {/* Background image - heavily blurred */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-[0.5]"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/silhouettes.png"
            alt=""
            fill
            className="object-cover"
            style={{ filter: "blur(8px) brightness(0.6)" }}
            unoptimized
          />
        </motion.div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-midnight/35" />

        {/* Quote container */}
        <div className="relative h-full flex items-center justify-center px-8">
          <div className="relative w-full max-w-3xl h-40 flex items-center justify-center">
            {quotes.map((quote, index) => {
              const opacities = [opacity1, opacity2, opacity3]
              const ys = [y1, y2, y3]

              return (
                <motion.blockquote
                  key={index}
                  className="absolute text-center"
                  style={{
                    opacity: opacities[index],
                    y: ys[index],
                  }}
                >
                  <p className="font-serif italic text-paper/90 text-3xl md:text-4xl lg:text-5xl leading-relaxed">
                    {quote}
                  </p>
                </motion.blockquote>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
