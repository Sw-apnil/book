"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { RainOverlay } from "../components/RainOverlay"
import { Vignette } from "../components/Vignette"
import { FloatingParticles } from "../components/FloatingParticles"

export function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-midnight">
      {/* Background Image with Ken Burns */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.03 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
      >
        <Image
          src="/images/hero-desk.png"
          alt="Midnight desk by rainy window"
          fill
          className="object-cover image-cinematic"
          priority
          quality={90}
          unoptimized
        />
      </motion.div>

      {/* Darkening overlay */}
      <div className="absolute inset-0 bg-midnight/40" />

      {/* Rain overlay */}
      <RainOverlay intensity="normal" />

      {/* Vignette */}
      <Vignette />

      {/* Floating particles */}
      <FloatingParticles count={12} />

      {/* Warm glow pulse */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(229, 154, 92, 0.12) 0%, rgba(229, 154, 92, 0.04) 45%, transparent 70%)",
        }}
        animate={{
          opacity: [0.05, 0.08, 0.05],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-end pb-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          {/* Title */}
          <motion.h1
            className="font-serif text-paper text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tighter"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              i wrote you
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 1.2 }}
            >
              like a love letter
            </motion.span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            className="mt-6 font-sans text-paper/60 text-base md:text-lg font-light tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8, ease: [0.4, 0, 0.2, 1] }}
          >
            some moments are meant to be felt, not spoken.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <button 
              className="btn-primary"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Open the Diary
            </button>
            <button 
              className="btn-secondary"
              onClick={() => document.getElementById('poetry')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Read a Fragment
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight to-transparent z-10" />
    </section>
  )
}
