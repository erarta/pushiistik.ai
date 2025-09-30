'use client'

import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Product from './components/Product'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
useEffect(() => {
// Smooth scrolling for anchor links
const handleAnchorClick = (e: Event) => {
  const target = e.target as HTMLAnchorElement
  const href = target.getAttribute('href')
  if (href?.startsWith('#') && href.length > 1) {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
}

document.addEventListener('click', handleAnchorClick)

// Header scroll effect
const handleScroll = () => {
  const header = document.querySelector('.header') as HTMLElement
  if (header) {
    if (window.scrollY > 100) {
      header.style.background = 'linear-gradient(to right, rgba(88, 28, 135, 0.95), rgba(168, 85, 247, 0.85), rgba(236, 72, 153, 0.95))'
      header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)'
    } else {
      header.style.background = 'linear-gradient(to right, rgba(88, 28, 135, 0.2), rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.2))'
      header.style.boxShadow = 'none'
    }
  }
}

window.addEventListener('scroll', handleScroll)

// Scroll animations
const observerOptions: IntersectionObserverInit = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in')
    }
  })
}, observerOptions)

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el)
})

return () => {
  document.removeEventListener('click', handleAnchorClick)
  window.removeEventListener('scroll', handleScroll)
  observer.disconnect()
}
}, [])

return (
<main className="overflow-x-hidden">
  <Header />
  <Hero />
  <HowItWorks />
  <Features />
  <Product />
  <Testimonials />
  <CTA />
  <Footer />
</main>
)
}