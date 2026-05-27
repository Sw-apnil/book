import type { Metadata } from "next"
import { GrainOverlay } from "./components/GrainOverlay"
import "./globals.css"

export const metadata: Metadata = {
  title: "I Wrote You Like A Love Letter | Nisha",
  description: "A poetry collection born from midnight thoughts, rain-soaked evenings, and feelings too fragile to speak aloud.",
  keywords: ["poetry", "love letter", "midnight", "rain", "longing", "Nisha"],
  authors: [{ name: "Nisha" }],
  openGraph: {
    title: "I Wrote You Like A Love Letter",
    description: "Some moments are meant to be felt, not spoken.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <GrainOverlay />
        {children}
      </body>
    </html>
  )
}
