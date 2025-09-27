// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'SmartToy AI - Умная игрушка будущего',
  description: 'Первая в мире умная игрушка с искусственным интеллектом, которая растет и развивается вместе с вашим ребенком',
  keywords: 'умная игрушка, ИИ, дети, развитие, SmartToy AI',
  openGraph: {
    title: 'SmartToy AI - Умная игрушка будущего',
    description: 'Первая в мире умная игрушка с искусственным интеллектом',
    url: 'https://pushiistik.ai',
    siteName: 'SmartToy AI',
    locale: 'ru_RU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

// src/app/page.tsx
'use client'

import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Product from './components/Product'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const element = document.querySelector(target.getAttribute('href')!)
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
          header.style.background = 'rgba(255, 255, 255, 0.98)'
          header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)'
        } else {
          header.style.background = 'rgba(255, 255, 255, 0.95)'
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
      <Features />
      <Product />
      <CTA />
      <Footer />
    </main>
  )
}

// src/app/components/Header.tsx
export default function Header() {
  return (
    <header className="header fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-white/20 z-50 py-4 transition-all duration-300">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-8">
        <a href="#" className="flex items-center gap-3 text-2xl font-bold text-purple-600 no-underline">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-purple-800 to-pink-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg shadow-purple-600/30">
            🧸
          </div>
          SmartToy AI
        </a>
        
        <ul className="hidden md:flex gap-8 list-none">
          <li><a href="#features" className="text-gray-700 font-medium hover:text-purple-600 transition-colors no-underline">Возможности</a></li>
          <li><a href="#product" className="text-gray-700 font-medium hover:text-purple-600 transition-colors no-underline">Продукт</a></li>
          <li><a href="#contact" className="text-gray-700 font-medium hover:text-purple-600 transition-colors no-underline">Контакты</a></li>
        </ul>
        
        <a href="#cta" className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-purple-900 transition-all hover:-translate-y-0.5 shadow-lg shadow-purple-600/30 no-underline">
          Предзаказ
        </a>
      </nav>
    </header>
  )
}

// src/app/components/Hero.tsx
export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-800 to-pink-500 flex items-center justify-center text-center text-white relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-2 h-2 bg-white rounded-full animate-float" style={{ top: '20%', left: '20%', animationDelay: '0s' }}></div>
        <div className="absolute w-3 h-3 bg-white rounded-full animate-float" style={{ top: '40%', left: '80%', animationDelay: '2s' }}></div>
        <div className="absolute w-2 h-2 bg-white rounded-full animate-float" style={{ top: '80%', left: '40%', animationDelay: '4s' }}></div>
        <div className="absolute w-2 h-2 bg-white rounded-full animate-float" style={{ top: '90%', left: '90%', animationDelay: '6s' }}></div>
      </div>
      
      <div className="max-w-4xl px-8 relative z-10">
        <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent leading-tight">
          SmartToy AI
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
          Первая в мире умная игрушка с искусственным интеллектом, которая растет и развивается вместе с вашим ребенком
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#product" className="bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 backdrop-blur-xl hover:bg-white/30 transition-all hover:-translate-y-1 shadow-lg no-underline">
            Узнать больше
          </a>
          <a href="#cta" className="bg-white/95 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-all hover:-translate-y-1 shadow-lg no-underline">
            Предзаказ • 9 990 ₽
          </a>
        </div>
      </div>
    </section>
  )
}

// src/app/components/Features.tsx
export default function Features() {
  const features = [
    {
      icon: "🧠",
      title: "Искусственный интеллект",
      description: "Облачный ИИ обеспечивает естественное общение и персонализированные ответы для каждого ребенка"
    },
    {
      icon: "💭",
      title: "Долговременная память",
      description: "Игрушка помнит предпочтения ребенка, его интересы и продолжает разговор с того места, где остановились"
    },
    {
      icon: "📚",
      title: "Обучающий контент",
      description: "Интерактивные уроки, развивающие игры и персонализированные сказки для всестороннего развития"
    },
    {
      icon: "🎵",
      title: "Музыка и песни",
      description: "Колыбельные, детские песни и звуки природы для создания уютной атмосферы"
    },
    {
      icon: "📱",
      title: "Родительский контроль",
      description: "Мобильное приложение для настройки, мониторинга и управления взаимодействием ребенка с игрушкой"
    },
    {
      icon: "🔄",
      title: "Постоянные обновления",
      description: "Новые функции, игры и образовательный контент добавляются регулярно через интернет"
    }
  ]

  return (
    <section className="py-24 px-8 bg-white" id="features">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            Революционные возможности
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            SmartToy AI объединяет передовые технологии с традиционной теплотой детской игрушки
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-on-scroll bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl text-center border border-purple-100 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2">
              <span className="text-5xl mb-6 block">{feature.icon}</span>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// src/app/components/Product.tsx
export default function Product() {
  return (
    <section className="py-24 px-8 bg-gradient-to-br from-purple-50 to-pink-50" id="product">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Будущее детских игрушек уже здесь
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              SmartToy AI – это не просто игрушка, это умный спутник для развития вашего ребенка. 
              Благодаря передовым технологиям искусственного интеллекта, игрушка адаптируется 
              под индивидуальные потребности каждого малыша.
            </p>
            
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-8 rounded-3xl text-center mb-8">
              <div className="text-5xl font-black mb-2">9 990 ₽</div>
              <div className="text-lg opacity-90">+ подписка от 399 ₽/мес</div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Предзаказ уже открыт! Первые 1000 покупателей получат скидку 20% 
              и бесплатную подписку на 3 месяца.
            </p>
          </div>
          
          <div className="animate-on-scroll bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-16 flex items-center justify-center min-h-96 relative overflow-hidden">
            <div className="text-8xl animate-bounce">🧸</div>
          </div>
        </div>
      </div>
    </section>
  )
}

// src/app/components/CTA.tsx
export default function CTA() {
  return (
    <section className="py-24 px-8 bg-gradient-to-br from-purple-600 via-purple-800 to-pink-500 text-white text-center" id="cta">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Готовы изменить будущее игр?
        </h2>
        <p className="text-xl mb-8 opacity-90 leading-relaxed">
          Присоединяйтесь к революции в мире детских игрушек. Предзаказывайте SmartToy AI уже сегодня 
          и подарите своему ребенку умного друга на всю жизнь.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" className="bg-white/95 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-all hover:-translate-y-1 shadow-lg no-underline">
            Оформить предзаказ
          </a>
          <a href="#" className="bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 backdrop-blur-xl hover:bg-white/30 transition-all hover:-translate-y-1 shadow-lg no-underline">
            Связаться с нами
          </a>
        </div>
      </div>
    </section>
  )
}

// src/app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-8 text-center" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">SmartToy AI</h3>
            <p className="text-gray-400">
              Создаем будущее детских игрушек с помощью искусственного интеллекта.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Контакты</h3>
            <p className="text-gray-400">Email: hello@smarttoy.ai</p>
            <p className="text-gray-400">Telegram: @smarttoyai</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Компания</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors no-underline">О нас</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors no-underline">Карьера</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors no-underline">Пресса</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Поддержка</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors no-underline">FAQ</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors no-underline">Техподдержка</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors no-underline">Гарантия</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-500">&copy; 2025 SmartToy AI. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

// src/app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Scroll animations */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.animate-on-scroll.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom bounce animation for toy */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.animate-bounce {
  animation: bounce 2s infinite ease-in-out;
}

// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
export default config

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig

// package.json (обнови существующий)
{
  "name": "smarttoy-landing",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "15.5.4",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "@tailwindcss/postcss": "^4",
    "eslint": "^8",
    "eslint-config-next": "15.5.4",
    "postcss": "^8",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

// README.md
# 🧸 SmartToy AI - Landing Page

Современный landing page для умной игрушки SmartToy AI, построенный на Next.js 15 с Tailwind CSS.

## 🚀 Быстрый старт

```bash
# Установка зависимостей (если еще не установлены)
npm install

# Запуск в режиме разработки
npm run dev

# Открой http://localhost:3000
```

## 🛠 Технологии

- **Next.js 15** с App Router
- **TypeScript** для типизации
- **Tailwind CSS** для стилизации  
- **Responsive Design** - адаптивный дизайн
- **Scroll Animations** - анимации при скролле

## 📦 Деплой на Vercel

```bash
# Через Vercel CLI
npm i -g vercel
vercel --prod

# Или push в GitHub и импортируй на vercel.com
```

## ✨ Особенности

- 🎨 Современный дизайн с градиентами
- 📱 Полностью адаптивный
- ⚡ Оптимизирован для производительности
- 🚀 SEO-friendly
- 🎯 TypeScript для надежности

## 📁 Структура

```
src/
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Product.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
```

## 🎯 Использование

1. **Замени файлы** - скопируй содержимое файлов из этого артефакта
2. **Запусти проект** - `npm run dev`
3. **Кастомизируй** - измени цвета, текст, изображения
4. **Деплой** - `vercel --prod`

## 🛠 Кастомизация

### Цвета
Измени в `tailwind.config.ts` или используй готовые Tailwind классы:
- `from-purple-600` → `from-blue-600`
- `to-pink-500` → `to-green-500`

### Контент  
Отредактируй текст в соответствующих компонентах в папке `components/`

### Анимации
Добавь новые анимации в `globals.css` или используй Tailwind утилиты

Готов к запуску! 🚀
