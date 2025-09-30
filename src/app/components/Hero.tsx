'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [currentDemo, setCurrentDemo] = useState(0)

  const demoConversations = [
    {
      child: "Привет! Как дела?",
      toy: "Привет, малыш! У меня отличное настроение! А у тебя как дела?",
      emoji: "😊"
    },
    {
      child: "Расскажи сказку про космос!",
      toy: "Жил-был маленький астронавт Звездочка, который путешествовал по галактикам...",
      emoji: "🚀"
    },
    {
      child: "Что такое дружба?",
      toy: "Дружба - это когда мы заботимся друг о друге и всегда готовы помочь!",
      emoji: "❤️"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demoConversations.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [demoConversations.length])

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-800 to-pink-500 flex items-center justify-center text-center text-white relative overflow-hidden">
      {/* Background pattern with 3D depth */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.3)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.2)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
      </div>

      {/* Enhanced floating particles with 3D effect */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute bg-white rounded-full animate-float-slow`}
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              filter: `blur(${Math.random() * 2}px)`
            }}
          ></div>
        ))}
      </div>

      {/* 3D Grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: 'perspective(1000px) rotateX(60deg)',
          transformOrigin: 'center bottom'
        }}></div>
      </div>

      <div className="max-w-7xl px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Main content */}
        <div className="text-left lg:text-left">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-white via-white to-purple-100 bg-clip-text text-transparent leading-none tracking-tight drop-shadow-2xl">
              SmartToy AI
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-purple-200 mb-6 rounded-full"></div>
          </div>

          <p className="text-lg md:text-2xl mb-8 opacity-95 leading-relaxed font-light drop-shadow-lg">
            Первая в мире умная игрушка с искусственным интеллектом,<br className="hidden sm:block" />
            <span className="font-medium bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
              которая растет и развивается вместе с вашим ребенком
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="#how-it-works" className="group bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/40 backdrop-blur-xl hover:bg-white/30 hover:border-white/60 transition-all duration-300 hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-white/20 no-underline min-w-[200px] relative overflow-hidden">
              <span className="relative z-10">Узнать больше</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </a>
            <a href="#cta" className="group bg-white/95 text-purple-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-800 transition-all duration-300 hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-purple-500/30 no-underline min-w-[200px] relative overflow-hidden">
              <span className="relative z-10">Предзаказ • 9 990 ₽</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 opacity-80">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Безопасно для детей</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>Сертифицировано CE</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span>Гарантия 2 года</span>
            </div>
          </div>
        </div>

        {/* Right side - Interactive Demo */}
        <div className="relative">
          <div className="relative z-10">
            {/* 3D Toy Mockup */}
            <div className="relative mx-auto w-80 h-80 mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-full border border-white/30 shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-700 animate-pulse-glow">
                <div className="absolute inset-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-8xl shadow-inner">
                  <span className="animate-bounce">🧸</span>
                </div>

                {/* Floating elements around toy */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg animate-float">
                  📱
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center text-xl shadow-lg animate-float-fast">
                  ☁️
                </div>
                <div className="absolute top-8 -left-8 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-sm shadow-lg animate-pulse">
                  ✨
                </div>
              </div>
            </div>

            {/* Live Demo Conversation */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl">
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold mb-2">Живая демонстрация</h3>
                <div className="flex justify-center space-x-2">
                  {demoConversations.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentDemo === index ? 'bg-white' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {/* Child message */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-lg">
                    👶
                  </div>
                  <div className="bg-blue-500/20 backdrop-blur-sm rounded-2xl rounded-tl-sm p-3 max-w-xs">
                    <p className="text-sm text-blue-100">{demoConversations[currentDemo].child}</p>
                  </div>
                </div>

                {/* Thinking animation */}
                <div className="flex justify-center">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>

                {/* Toy response */}
                <div className="flex items-start space-x-3 flex-row-reverse">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-lg">
                    🧸
                  </div>
                  <div className="bg-purple-500/20 backdrop-blur-sm rounded-2xl rounded-tr-sm p-3 max-w-xs">
                    <p className="text-sm text-purple-100">{demoConversations[currentDemo].toy}</p>
                    <div className="text-right mt-2">{demoConversations[currentDemo].emoji}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}