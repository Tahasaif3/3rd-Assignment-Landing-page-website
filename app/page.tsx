'use client'

import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

export default function Home() {
  useEffect(() => {
    // Animation for text elements
    const animateText = () => {
      const textElements = document.querySelectorAll('.animate-text')
      textElements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('opacity-100', 'translate-y-0')
        }, index * 200)
      })
    }

    animateText()
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}
