"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import { HeroSection } from "./sections/HeroSection"
import { HeroToQuoteTransition } from "./sections/transitions/HeroToQuoteTransition"
import { QuoteStripSection } from "./sections/QuoteStripSection"
import { QuoteToAboutTransition } from "./sections/transitions/QuoteToAboutTransition"
import { AboutSection } from "./sections/AboutSection"
import { AboutToShowcaseTransition } from "./sections/transitions/AboutToShowcaseTransition"
import { ShowcaseSection } from "./sections/ShowcaseSection"
import { ShowcaseToPoetryTransition } from "./sections/transitions/ShowcaseToPoetryTransition"
import { PoetrySection } from "./sections/PoetrySection"
import { PoetryToAuthorTransition } from "./sections/transitions/PoetryToAuthorTransition"
import { AuthorSection } from "./sections/AuthorSection"
import { AuthorToReaderTransition } from "./sections/transitions/AuthorToReaderTransition"
import { ReaderSection } from "./sections/ReaderSection"
import { ReaderToCTATransition } from "./sections/transitions/ReaderToCTATransition"
import { CTASection } from "./sections/CTASection"
import { CTAToFooterTransition } from "./sections/transitions/CTAToFooterTransition"
import { FooterSection } from "./sections/FooterSection"

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 0.8,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main className="relative bg-midnight">
      {/* Scene 1: Hero */}
      <HeroSection />

      {/* Transition 1→2: Fade to black */}
      <HeroToQuoteTransition />

      {/* Scene 2: Quote Strip */}
      <QuoteStripSection />

      {/* Transition 2→3: Page turn */}
      <QuoteToAboutTransition />

      {/* Scene 3: About the Book */}
      <AboutSection />

      {/* Transition 3→4: Rain intensifies */}
      <AboutToShowcaseTransition />

      {/* Scene 4: Cinematic Showcase */}
      <ShowcaseSection />

      {/* Transition 4→5: Grid blur + ink stroke */}
      <ShowcaseToPoetryTransition />

      {/* Scene 5: Poetry Fragments */}
      <PoetrySection />

      {/* Transition 5→6: Silhouette */}
      <PoetryToAuthorTransition />

      {/* Scene 6: Author Note */}
      <AuthorSection />

      {/* Transition 6→7: Horizontal split */}
      <AuthorToReaderTransition />

      {/* Scene 7: Reader Emotions */}
      <ReaderSection />

      {/* Transition 7→8: Warm gradient bloom */}
      <ReaderToCTATransition />

      {/* Scene 8: CTA / Buy */}
      <CTASection />

      {/* Transition 8→9: Cool to dark */}
      <CTAToFooterTransition />

      {/* Scene 9: Footer */}
      <FooterSection />
    </main>
  )
}
