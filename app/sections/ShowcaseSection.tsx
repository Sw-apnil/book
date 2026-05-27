"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const showcaseImages = [
  {
    src: "/images/empire-state.png",
    alt: "Desk with Empire State view",
    className: "w-full md:w-[85%] mx-auto aspect-[16/9]",
    parallaxSpeed: 1.1,
  },
  {
    src: "/images/scattered-papers.png",
    alt: "Scattered papers and ink bottle",
    className: "w-full md:w-[45%] ml-auto md:mr-16 aspect-[3/4] md:mt-32 relative z-10",
    parallaxSpeed: 0.9,
  },
  {
    src: "/images/dried-rose.png",
    alt: "Dried rose and old letter",
    className: "w-[85%] md:w-[40%] mr-auto md:ml-16 aspect-[4/5] -mt-16 md:-mt-32",
    parallaxSpeed: 1.2,
  },
]

function ShowcaseImage({ 
  src, 
  alt, 
  className, 
  parallaxSpeed,
  index 
}: { 
  src: string
  alt: string
  className: string
  parallaxSpeed: number
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${(parallaxSpeed - 1) * 30}%`])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.div
        className="relative w-full h-full overflow-hidden group cursor-default"
        style={{ y }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover image-cinematic transition-transform duration-[800ms] ease-out group-hover:scale-[1.02]"
          unoptimized
        />
        {/* Warm hover overlay */}
        <div className="absolute inset-0 bg-amber/0 group-hover:bg-amber/5 transition-colors duration-500" />
      </motion.div>
    </motion.div>
  )
}

export function ShowcaseSection() {
  return (
    <section className="relative py-32 md:py-40 bg-midnight overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 md:px-16">
        {/* Section header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-sans text-amber text-xs uppercase tracking-[0.2em]">
            The World Inside
          </span>
        </motion.div>

        {/* Editorial Layout */}
        <div className="flex flex-col space-y-24 md:space-y-0">
          <ShowcaseImage {...showcaseImages[0]} index={0} />
          
          <div className="flex flex-col md:flex-row w-full justify-between items-start md:px-12">
            <ShowcaseImage {...showcaseImages[1]} index={1} />
            <ShowcaseImage {...showcaseImages[2]} index={2} />
          </div>
        </div>
      </div>
    </section>
  )
}
