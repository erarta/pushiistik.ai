'use client'

import { useState } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="header fixed top-0 left-0 right-0 bg-gradient-to-r from-purple-900/20 via-purple-600/10 to-pink-500/20 backdrop-blur-2xl border-b border-white/10 z-50 py-4 transition-all duration-300">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-8">
        <a href="#" className="group flex items-center gap-3 text-2xl font-bold text-white no-underline">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-purple-800 to-pink-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg shadow-purple-600/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            🧸
          </div>
          <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            SmartToy AI
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 list-none">
          <li>
            <a href="#features" className="relative text-white/90 font-medium hover:text-white transition-all duration-300 no-underline group">
              Возможности
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#product" className="relative text-white/90 font-medium hover:text-white transition-all duration-300 no-underline group">
              Продукт
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#contact" className="relative text-white/90 font-medium hover:text-white transition-all duration-300 no-underline group">
              Контакты
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        </ul>

        {/* Desktop CTA Button */}
        <a href="#cta" className="hidden md:block group relative bg-gradient-to-r from-white/20 to-white/10 text-white border border-white/30 px-8 py-3 rounded-full font-semibold hover:from-white/30 hover:to-white/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 shadow-lg shadow-black/20 no-underline overflow-hidden backdrop-blur-sm">
          <span className="relative z-10">Предзаказ</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 text-white hover:bg-white/10 rounded-lg transition-all duration-300"
          aria-label="Toggle mobile menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-purple-900/95 to-purple-800/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="px-8 py-6 space-y-4">
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="block text-white/90 font-medium hover:text-white transition-all duration-300 no-underline py-2">
            Возможности
          </a>
          <a href="#product" onClick={() => setIsMobileMenuOpen(false)} className="block text-white/90 font-medium hover:text-white transition-all duration-300 no-underline py-2">
            Продукт
          </a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-white/90 font-medium hover:text-white transition-all duration-300 no-underline py-2">
            Контакты
          </a>
          <a href="#cta" onClick={() => setIsMobileMenuOpen(false)} className="block mt-4 w-full text-center bg-gradient-to-r from-white/20 to-white/10 text-white border border-white/30 px-6 py-3 rounded-full font-semibold hover:from-white/30 hover:to-white/20 transition-all duration-300 no-underline backdrop-blur-sm">
            Предзаказ
          </a>
        </div>
      </div>
    </header>
  )
}