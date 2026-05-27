"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FadeIn } from "../components/FadeIn"

export function FooterSection() {
  return (
    <footer className="relative min-h-[60vh] bg-midnight overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-[0.45]">
          <Image
            src="/images/cozy-bed.png"
            alt=""
            fill
            className="object-cover"
            style={{ filter: "blur(6px) brightness(0.6)" }}
            unoptimized
          />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-midnight/35" />

      {/* Star dust particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-amber/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[60vh] flex flex-col items-center justify-center px-8">
        <FadeIn delay={0}>
          <blockquote className="text-center max-w-lg">
            <p className="font-serif italic text-paper/80 text-2xl md:text-3xl lg:text-4xl leading-relaxed">
              "Some feelings never become conversations. They become poems."
            </p>
          </blockquote>
        </FadeIn>

        {/* Footer links */}
        <FadeIn delay={0.5}>
          <div className="mt-20 flex items-center gap-8">
            <a 
              href="#" 
              className="font-sans text-rain text-xs tracking-wide hover:text-paper transition-colors duration-300"
            >
              Instagram
            </a>
            <a 
              href="#" 
              className="font-sans text-rain text-xs tracking-wide hover:text-paper transition-colors duration-300"
            >
              Contact
            </a>
            <a 
              href="#" 
              className="font-sans text-rain text-xs tracking-wide hover:text-paper transition-colors duration-300"
            >
              Newsletter
            </a>
          </div>
        </FadeIn>

        {/* Copyright */}
        <FadeIn delay={0.7}>
          <p className="mt-8 font-sans text-rain/50 text-[10px] tracking-wider">
            © 2024 Nisha. All rights reserved.
          </p>
        </FadeIn>
      </div>
    </footer>
  )
}
