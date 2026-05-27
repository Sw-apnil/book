"use client"

export function Vignette() {
  return (
    <div 
      className="absolute inset-0 pointer-events-none z-10"
      style={{
        background: "radial-gradient(ellipse at center, transparent 40%, rgba(11, 16, 40, 0.5) 100%)",
      }}
    />
  )
}
