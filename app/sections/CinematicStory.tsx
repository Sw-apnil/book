"use client"

import Image from "next/image"
import { motion, type MotionValue, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { RainOverlay } from "../components/RainOverlay"
import { Vignette } from "../components/Vignette"

const fragments = [
  {
    line: "My eyes found only him.",
    className: "md:ml-[8vw]",
  },
  {
    line: "I think of him more when the world sleeps.",
    className: "md:ml-[42vw]",
  },
  {
    line: "There are rooms in me still lit by what we never said.",
    className: "md:ml-[18vw]",
  },
  {
    line: "Some names do not leave. They learn to become silence.",
    className: "md:ml-[52vw]",
  },
]

const imageWash = [
  "/images/hero-alt-1.png",
  "/images/woman-man-window.png",
  "/images/diary-rose.png",
]

function ScrollImage({
  src,
  alt,
  className = "",
  imageClassName = "",
  strength = 80,
  floating = false,
}: {
  src: string
  alt: string
  className?: string
  imageClassName?: string
  strength?: number
  floating?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength])
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1])

  return (
    <motion.div ref={ref} className={`${floating ? "" : "relative"} overflow-hidden ${className}`} style={{ y }}>
      <motion.div className="absolute inset-0" style={{ scale }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 90vw, 44vw"
          className={`object-cover ${imageClassName}`}
          quality={92}
          unoptimized
        />
      </motion.div>
      <div className="absolute inset-0 bg-midnight/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-midnight/30" />
    </motion.div>
  )
}

function ChapterLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      className="font-sans text-[11px] uppercase tracking-[0.28em] text-amber/70"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.p>
  )
}

function SoftReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-14%" }}
      transition={{ duration: 1.25, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function TheNight() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -90])
  const fade = useTransform(scrollYProgress, [0, 0.72, 1], [1, 0.7, 0])

  return (
    <section ref={ref} className="relative min-h-[118svh] overflow-hidden bg-midnight">
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image
          src="/images/hero-desk.png"
          alt="A midnight writing desk beside a rainy window"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={95}
          unoptimized
        />
      </motion.div>
      <motion.div className="absolute inset-0" style={{ opacity: fade }}>
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/55 via-midnight/30 to-midnight" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_78%,rgba(229,154,92,0.22),transparent_34%),radial-gradient(circle_at_76%_18%,rgba(35,58,117,0.36),transparent_42%)]" />
      </motion.div>
      <RainOverlay intensity="normal" />
      <Vignette />

      <motion.div
        className="absolute left-[9vw] top-[16vh] hidden h-36 w-px bg-gradient-to-b from-transparent via-paper/25 to-transparent md:block"
        animate={{ opacity: [0.25, 0.55, 0.25], y: [0, 18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-20 flex min-h-[100svh] items-end px-6 pb-24 pt-32 sm:px-10 md:px-16 lg:px-24"
        style={{ y: textY, opacity: fade }}
      >
        <div className="max-w-5xl">
          <motion.p
            className="mb-8 font-sans text-[11px] uppercase tracking-[0.32em] text-paper/55"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            midnight, rain, and everything left unsaid
          </motion.p>
          <motion.h1
            className="max-w-4xl font-serif text-[4rem] font-light leading-[0.9] text-paper sm:text-[5.6rem] md:text-[7.4rem] lg:text-[9rem]"
            initial={{ opacity: 0, y: 44, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.8, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            i wrote you like a love letter
          </motion.h1>
          <motion.p
            className="mt-9 max-w-xl font-sans text-base font-light leading-8 text-paper/68 md:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 1.55, ease: [0.22, 1, 0.36, 1] }}
          >
            A poetry collection for the hour when the city softens, the window turns silver, and the heart finally tells the truth.
          </motion.p>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 z-20 h-48 bg-gradient-to-b from-transparent to-midnight" />
    </section>
  )
}

function HowItBegan() {
  return (
    <section className="relative overflow-hidden bg-midnight px-6 py-28 sm:px-10 md:px-16 lg:px-24">
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-midnight to-transparent" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-[0.9fr_1.1fr] md:gap-24">
        <div className="relative order-2 md:order-1">
          <ScrollImage
            src="/images/woman-window.png"
            alt="A quiet silhouette near a rain-lit window"
            className="h-[68vh] min-h-[460px] max-h-[760px]"
            strength={60}
          />
          <ScrollImage
            src="/images/poem-closeup.png"
            alt="Close detail of written poetry on paper"
            className="absolute -bottom-14 right-0 h-48 w-[58%] border-l border-t border-paper/10 md:-right-12 md:h-64 md:w-[48%]"
            imageClassName="brightness-90"
            strength={28}
            floating
          />
        </div>

        <div className="order-1 md:order-2 md:pt-24">
          <ChapterLabel>Chapter 2 — How This Book Began</ChapterLabel>
          <SoftReveal>
            <h2 className="mt-7 max-w-2xl font-serif text-4xl font-light leading-tight text-paper sm:text-5xl md:text-6xl">
              Some feelings never become conversations.
            </h2>
          </SoftReveal>
          <SoftReveal delay={0.12}>
            <p className="mt-9 max-w-xl font-sans text-lg font-light leading-9 text-paper/68">
              They wait in the throat. They sit beside the lamp. They become dates written in margins, folded pages, small storms no one else can hear.
            </p>
          </SoftReveal>
          <SoftReveal delay={0.22}>
            <p className="mt-7 max-w-lg font-serif text-3xl font-light italic leading-snug text-amber/90">
              They become poems.
            </p>
          </SoftReveal>
        </div>
      </div>
    </section>
  )
}

function FragmentMoment({
  line,
  className,
  index,
  total,
  progress,
}: {
  line: string
  className?: string
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const step = 1 / total
  const center = index * step + step / 2
  const start = Math.max(0, center - step * 0.72)
  const holdStart = Math.max(0, center - step * 0.16)
  const holdEnd = Math.min(1, center + step * 0.16)
  const end = Math.min(1, center + step * 0.72)
  const opacity = useTransform(progress, [start, holdStart, holdEnd, end], [0, 1, 1, 0])
  const y = useTransform(progress, [start, holdStart, holdEnd, end], [44, 0, 0, -44])
  const blur = useTransform(progress, [start, holdStart, holdEnd, end], ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"])

  return (
    <motion.p
      className={`absolute left-0 top-1/2 max-w-3xl -translate-y-1/2 font-serif text-4xl font-light italic leading-tight text-paper sm:text-5xl md:text-6xl lg:text-7xl ${className ?? ""}`}
      style={{ opacity, y, filter: blur }}
    >
      {line}
    </motion.p>
  )
}

function Fragments() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], [45, -45])
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.08, 1])
  const introOpacity = useTransform(scrollYProgress, [0, 0.1, 0.24], [1, 1, 0.38])
  const introY = useTransform(scrollYProgress, [0, 0.24], [0, -18])

  return (
    <section ref={ref} className="relative h-[430svh] overflow-visible bg-[#070a1b]">
      <div className="sticky top-0 h-screen overflow-hidden px-6 py-24 sm:px-10 md:px-16 lg:px-24">
        <motion.div className="absolute inset-0 opacity-70" style={{ y: backgroundY, scale: backgroundScale }}>
          <Image
            src="/images/midnight-thoughts.png"
            alt="A quiet midnight writing scene behind the poetry fragments"
            fill
            sizes="100vw"
            className="object-cover brightness-[0.78] saturate-[0.9]"
            quality={92}
            unoptimized
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-midnight/58 to-midnight/84" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_44%,rgba(35,58,117,0.08),transparent_34%),radial-gradient(circle_at_22%_76%,rgba(229,154,92,0.12),transparent_32%)]" />
        <RainOverlay intensity="light" />

        <div className="relative z-10 mx-auto h-full max-w-7xl">
          <motion.div style={{ opacity: introOpacity, y: introY }}>
            <ChapterLabel>Chapter 3 — Fragments</ChapterLabel>
            <p className="mt-7 max-w-2xl font-sans text-base font-light leading-8 text-paper/56">
              The book moves in small flashes: a look, a room, a remembered sentence, a love that still has weather.
            </p>
          </motion.div>

          <div className="absolute inset-x-0 bottom-20 top-40 md:bottom-24 md:top-44">
            {fragments.map((fragment, index) => (
              <FragmentMoment
                key={fragment.line}
                line={fragment.line}
                className={fragment.className}
                index={index}
                total={fragments.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutNisha() {
  return (
    <section className="relative overflow-hidden bg-midnight px-6 py-28 sm:px-10 md:px-16 lg:px-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(89,106,146,0.2),transparent_34%),radial-gradient(circle_at_22%_76%,rgba(229,154,92,0.1),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-16 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
        <div className="flex min-h-[70vh] items-center">
          <div>
            <ChapterLabel>Chapter 4 — About Nisha</ChapterLabel>
            <SoftReveal>
              <h2 className="mt-7 max-w-3xl font-serif text-4xl font-light leading-tight text-paper sm:text-5xl md:text-7xl">
                I write because some feelings arrive more honestly on paper.
              </h2>
            </SoftReveal>
            <SoftReveal delay={0.15}>
              <p className="mt-10 max-w-xl font-sans text-lg font-light leading-9 text-paper/66">
                Not to explain them away. Not to make them smaller. Only to sit with them long enough that they become gentle.
              </p>
            </SoftReveal>
          </div>
        </div>

        <div className="relative min-h-[72vh]">
          <ScrollImage
            src="/images/wide-room.png"
            alt="A quiet writing room with warm midnight light"
            className="absolute left-0 top-8 h-[58vh] w-[82%]"
            imageClassName="brightness-90"
            strength={50}
            floating
          />
          <ScrollImage
            src="/images/silhouettes.png"
            alt="Two silhouettes in a cinematic night scene"
            className="absolute bottom-0 right-0 h-[42vh] w-[64%] border-l border-t border-paper/10"
            imageClassName="brightness-75"
            strength={24}
            floating
          />
        </div>
      </div>
    </section>
  )
}

function BookInvitation() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1])
  const warm = useTransform(scrollYProgress, [0, 0.55, 1], [0.08, 0.2, 0.14])

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-midnight px-6 py-28 sm:px-10 md:px-16 lg:px-24">
      <motion.div className="absolute inset-0" style={{ scale }}>
        <Image
          src="/images/grand-finale.png"
          alt="A warm intimate room with the book's emotional atmosphere"
          fill
          sizes="100vw"
          className="object-cover"
          quality={92}
          unoptimized
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/70 to-[#120d1b]" />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_72%,rgba(229,154,92,0.58),transparent_36%)]"
        style={{ opacity: warm }}
      />

      <div className="relative z-10 mx-auto grid min-h-[78vh] max-w-7xl items-end gap-16 md:grid-cols-[0.95fr_1.05fr]">
        <div className="relative hidden h-[68vh] md:block">
          {imageWash.map((src, index) => (
            <motion.div
              key={src}
              className="absolute overflow-hidden border border-paper/10"
              style={{
                left: `${index * 16}%`,
                top: `${index * 12}%`,
                width: index === 1 ? "54%" : "48%",
                height: index === 1 ? "54%" : "46%",
              }}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: [0, 0.52, 0.32], y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image src={src} alt="" fill sizes="28vw" className="object-cover" quality={82} unoptimized />
              <div className="absolute inset-0 bg-midnight/35" />
            </motion.div>
          ))}
        </div>

        <div className="pb-4 md:pb-16">
          <ChapterLabel>Chapter 5 — Book Invitation</ChapterLabel>
          <SoftReveal>
            <h2 className="mt-7 max-w-2xl font-serif text-4xl font-light leading-tight text-paper sm:text-5xl md:text-7xl">
              Keep this night somewhere you can return to.
            </h2>
          </SoftReveal>
          <SoftReveal delay={0.12}>
            <p className="mt-8 max-w-xl font-sans text-lg font-light leading-9 text-paper/72">
              For the pages you read slowly. For the feeling that finds you after midnight. For the love letter you never sent.
            </p>
          </SoftReveal>
          <SoftReveal delay={0.22}>
            <div className="mt-11 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <a
                href="https://amzn.in/d/02ygNUwO"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-14 items-center justify-center border border-amber/80 px-8 font-sans text-[12px] uppercase tracking-[0.24em] text-paper transition duration-500 hover:bg-amber hover:text-midnight"
              >
                Bring the book home
              </a>
              <button
                className="font-sans text-sm font-light text-paper/70 transition duration-500 hover:text-paper"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                begin again in the rain
              </button>
            </div>
          </SoftReveal>
        </div>
      </div>
    </section>
  )
}

function Closing() {
  return (
    <footer className="relative overflow-hidden bg-[#070a1b] px-6 py-20 sm:px-10 md:px-16 lg:px-24">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/cozy-bed.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          quality={80}
          unoptimized
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#120d1b] via-midnight/90 to-[#070a1b]" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10 border-t border-paper/10 pt-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-3xl font-light text-paper md:text-4xl">I Wrote You Like A Love Letter</p>
          <p className="mt-3 font-sans text-sm font-light text-paper/48">Nisha</p>
        </div>
        <p className="max-w-sm font-sans text-sm font-light leading-7 text-paper/46 md:text-right">
          Some books do not end. They just lower their voice.
        </p>
      </div>
    </footer>
  )
}

export function CinematicStory() {
  return (
    <div className="relative bg-midnight text-paper">
      <div className="pointer-events-none fixed inset-0 z-40 bg-[radial-gradient(ellipse_at_center,transparent_44%,rgba(5,7,18,0.58)_100%)]" />
      <TheNight />
      <HowItBegan />
      <Fragments />
      <AboutNisha />
      <BookInvitation />
      <Closing />
    </div>
  )
}
