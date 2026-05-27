"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const readerQuotes = [
  {
    text: "It felt like reading my own thoughts.",
  },
  {
    text: "This book stayed with me long after I finished it.",
  },
  {
    text: "Every page felt painfully personal.",
  },
]

export function ReaderSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.28, 0.38], [0, 1, 1, 0])
  const opacity2 = useTransform(scrollYProgress, [0.33, 0.48, 0.61, 0.71], [0, 1, 1, 0])
  const opacity3 = useTransform(scrollYProgress, [0.66, 0.81, 0.94, 1], [0, 1, 1, 0])

  const y1 = useTransform(scrollYProgress, [0, 0.15, 0.28, 0.38], [20, 0, 0, -20])
  const y2 = useTransform(scrollYProgress, [0.33, 0.48, 0.61, 0.71], [20, 0, 0, -20])
  const y3 = useTransform(scrollYProgress, [0.66, 0.81, 0.94, 1], [20, 0, 0, -20])

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#0D1230]">
      {/* Subtle shifting gradient background */}
      <motion.div
        className="sticky top-0 h-screen overflow-hidden"
        animate={{
          background: [
            "radial-gradient(ellipse at 50% 50%, #0F1535 0%, #0D1230 100%)",
            "radial-gradient(ellipse at 50% 50%, #0D1230 0%, #0F1535 100%)",
            "radial-gradient(ellipse at 50% 50%, #0F1535 0%, #0D1230 100%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative h-full flex items-center justify-center px-8">
          <div className="relative w-full max-w-2xl h-48 flex items-center justify-center">
            {readerQuotes.map((quote, index) => {
              const opacities = [opacity1, opacity2, opacity3]
              const ys = [y1, y2, y3]

              return (
                <motion.div
                  key={index}
                  className="absolute text-center"
                  style={{
                    opacity: opacities[index],
                    y: ys[index],
                  }}
                >
                  <blockquote>
                    <p className="font-serif text-paper/85 text-xl md:text-2xl lg:text-3xl leading-relaxed">
                      "{quote.text}"
                    </p>
                  </blockquote>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
