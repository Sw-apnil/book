"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import { CinematicStory } from "./sections/CinematicStory"

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
      <CinematicStory />
    </main>
  )
}
