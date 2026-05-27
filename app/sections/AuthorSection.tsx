"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { FadeIn } from "../components/FadeIn"

export function AuthorSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 0.75, 0.75, 0.3])

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-midnight overflow-hidden">
      {/* Background room image */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY, opacity: bgOpacity }}
      >
        <Image
          src="/images/wide-room.png"
          alt=""
          fill
          className="object-cover"
          style={{ filter: "brightness(0.6) blur(2px)" }}
          unoptimized
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-midnight/20" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-8">
        <div className="max-w-lg text-center">
          <FadeIn delay={0}>
            <span className="font-sans text-amber text-xs uppercase tracking-[0.2em]">
              A Note
            </span>
          </FadeIn>

          <FadeIn delay={0.3}>
            <blockquote className="mt-10">
              <p className="font-serif italic text-paper text-2xl md:text-3xl leading-relaxed">
                "I write because some feelings arrive more honestly on paper. Because midnight knows things the daylight forgets. Because some goodbyes need more than silence."
              </p>
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="mt-8 font-sans text-paper/60 text-sm">
              — Nisha
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
