"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const poems = [
  {
    lines: [
      "The city sleeps,",
      "but I don't.",
      "It wears a different face",
      "when no one's watching.",
      "A scattered glow,",
      "like memories",
      "that refuse to fade.",
    ],
  },
  {
    lines: [
      "I wonder if you ever",
      "think of me",
      "in the quiet moments",
      "between the noise.",
      "I've learned to love",
      "the sound of rain.",
      "It doesn't ask questions.",
      "It just understands.",
    ],
  },
  {
    lines: [
      "If longing had a home,",
      "it would be here—",
      "in this room,",
      "with these words,",
      "and the ghost of you",
      "in every line.",
    ],
  },
  {
    lines: [
      "Tonight the city wears a hoodie",
      "pulled up against the rain,",
      "And I, a fool for nostalgia,",
      "call your name just the same.",
      "The coffee's gone a little cold,",
      "but I don't mind the chill—",
      "It's easier than admitting",
      "that you're not here still.",
    ],
  },
  {
    lines: [
      "I keep the pages soft with thoughts",
      "I'll never dare to send,",
      "Unsaved drafts of what we were,",
      "and what we'll never mend.",
      "But sometimes, in the quiet hours,",
      "I swear I feel you near—",
      "Like smoke that lingers in the air,",
      "Or raindrops on the window pane.",
    ],
  },
]

function PoemBlock({ poem, index }: { poem: typeof poems[0]; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.3"],
  })

  // Alternate between different background images for each poem
  const bgImages = [
    "/images/midnight-thoughts.png",
    "/images/diary-rose.png",
    "/images/poem-closeup.png",
    "/images/cozy-bed.png",
    "/images/hero-alt-2.png",
  ]

  return (
    <div ref={containerRef} className="min-h-[150vh] flex items-center justify-center px-8 py-32 relative">
      {/* Background image for each poem block */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={bgImages[index % bgImages.length]}
          alt=""
          fill
          className="object-cover"
          style={{ filter: "blur(12px) brightness(0.4) saturate(0.7)" }}
          unoptimized
        />
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(11,16,40,0.7) 0%, rgba(11,16,40,0.35) 50%, rgba(11,16,40,0.7) 100%)",
          }}
        />
      </div>

      <div className="max-w-xl w-full relative z-10">
        {poem.lines.map((line, lineIndex) => {
          const lineProgress = useTransform(
            scrollYProgress,
            [
              lineIndex * (1 / poem.lines.length),
              (lineIndex + 0.5) * (1 / poem.lines.length),
            ],
            [0, 1]
          )

          const lineY = useTransform(
            scrollYProgress,
            [
              lineIndex * (1 / poem.lines.length),
              (lineIndex + 0.5) * (1 / poem.lines.length),
            ],
            [10, 0]
          )

          return (
            <motion.p
              key={lineIndex}
              className="font-serif text-paper/90 text-2xl md:text-3xl lg:text-4xl leading-[2.5] tracking-wide"
              style={{
                opacity: lineProgress,
                y: lineY,
              }}
            >
              {line}
            </motion.p>
          )
        })}
      </div>
    </div>
  )
}

export function PoetrySection() {
  return (
    <section id="poetry" className="relative bg-midnight">
      {/* Subtle warm glow background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(229, 154, 92, 0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Section header */}
        <div className="h-screen flex items-center justify-center relative">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/hero-alt-3.png"
              alt=""
              fill
              className="object-cover"
              style={{ filter: "blur(6px) brightness(0.35) saturate(0.6)" }}
              unoptimized
            />
            <div className="absolute inset-0 bg-midnight/40" />
          </div>
          <motion.div
            className="text-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="font-sans text-amber text-xs uppercase tracking-[0.2em]">
              Fragments
            </span>
            <h2 className="mt-6 font-serif text-paper text-4xl md:text-5xl tracking-wide">
              The Words Themselves
            </h2>
          </motion.div>
        </div>

        {/* Poems */}
        {poems.map((poem, index) => (
          <PoemBlock key={index} poem={poem} index={index} />
        ))}
      </div>
    </section>
  )
}
