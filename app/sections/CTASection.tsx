"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { FadeIn } from "../components/FadeIn"

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.02])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.12, 0.12, 0])

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden">
      {/* Warm gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0B1028 0%, #1A1020 50%, #0B1028 100%)",
        }}
      />

      {/* Background image - very faint */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: bgScale, opacity: bgOpacity }}
      >
        <Image
          src="/images/grand-finale.png"
          alt=""
          fill
          className="object-cover"
          style={{ filter: "blur(20px) brightness(0.5)" }}
          unoptimized
        />
      </motion.div>

      {/* Warm glow from bottom */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(229, 154, 92, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-8">
        <div className="max-w-lg text-center">
          <FadeIn delay={0}>
            <h2 className="font-serif text-paper text-3xl md:text-4xl lg:text-5xl leading-tight">
              Some feelings deserve more than a screen.
            </h2>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mt-6 font-sans text-paper/70 text-base md:text-lg font-light leading-relaxed max-w-md mx-auto">
              Hold the book. Turn the pages. Let the rain stay outside while the words stay with you.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://amzn.in/d/02ygNUwO" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary bg-amber text-midnight hover:bg-amber-light"
              >
                Bring the Book Home
              </a>
              <button 
                className="btn-secondary"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Begin Reading Tonight
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
