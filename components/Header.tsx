"use client"

import { useState, useEffect } from "react"

const navItems = [
  { label: "Story", href: "#story" },
  { label: "Work", href: "#work" },
  { label: "Writing", href: "#writing" },
  { label: "List 100", href: "/list-100" },
  { label: "Contact", href: "#contact" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isOverBlack, setIsOverBlack] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Check if header is over the black VoiceNote section
      const voiceNoteSection = document.querySelector('.voice-note-section')
      if (voiceNoteSection) {
        const rect = voiceNoteSection.getBoundingClientRect()
        const headerHeight = 80 // approximate header height
        setIsOverBlack(rect.top < headerHeight && rect.bottom > 0)
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    // Check if it's an external link or page
    if (href.startsWith('/')) {
      window.location.href = href
      return
    }
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isOverBlack
          ? "bg-black/90 backdrop-blur-sm"
          : scrolled
          ? "bg-white/90 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-3xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollTo("#story")}
            className={`text-base font-medium transition-all ${
              isOverBlack
                ? "text-white hover:opacity-60"
                : "text-black hover:opacity-60"
            }`}
          >
            Anmol Rathi
          </button>
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`text-sm transition-all ${
                  isOverBlack
                    ? "text-white hover:opacity-60"
                    : "text-black hover:opacity-60"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
