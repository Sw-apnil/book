"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { FadeIn } from "../components/FadeIn"

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"])

  return (
    <section id="about" ref={sectionRef} className="relative min-h-screen bg-midnight overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Image side - 50% */}
        <div className="relative w-full lg:w-[50%] h-[60vh] lg:h-auto overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{ y: imageY, height: "120%", top: "-10%" }}
          >
            <Image
              src="/images/woman-window.png"
              alt="Woman looking out rainy window"
              fill
              className="object-cover image-cinematic"
              unoptimized
            />
          </motion.div>
          {/* Soft edge fade on right */}
          <div 
            className="absolute top-0 right-0 bottom-0 w-20 lg:w-32 hidden lg:block"
            style={{
              background: "linear-gradient(to right, transparent, #0B1028)",
            }}
          />
        </div>

        {/* Text side - overlapped */}
        <div className="relative w-full lg:w-[60%] lg:-ml-[10%] flex items-center px-8 md:px-12 lg:px-16 py-20 lg:py-0 z-10">
          <div className="relative w-full max-w-2xl bg-midnight/40 backdrop-blur-xl p-8 lg:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.6)] rounded-sm border border-white/5">
            {/* Lamp glow behind text */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(229, 154, 92, 0.08) 0%, transparent 70%)",
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative z-10 max-w-xl">
              <FadeIn delay={0}>
                <span className="font-sans text-amber text-xs uppercase tracking-[0.3em]">
                  About
                </span>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="mt-8 font-serif text-paper text-3xl md:text-4xl leading-snug tracking-wide">
                  This book was born from the moments that never became conversations.
                </h2>
              </FadeIn>

              <FadeIn delay={0.4}>
                <p className="mt-8 font-sans text-paper/75 text-base md:text-lg font-light leading-relaxed max-w-md tracking-wide">
                  From rain-soaked evenings, unanswered thoughts, and feelings too fragile to speak aloud.
                  These poems are not loud confessions. They are quiet memories left between pages.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
