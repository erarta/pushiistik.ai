'use client'

import { useState, useEffect } from 'react'

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      id: 1,
      title: "Ребенок говорит",
      description: "Малыш задает вопрос или начинает разговор с игрушкой",
      icon: "👶",
      position: { x: 10, y: 50 },
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 2,
      title: "Игрушка слушает",
      description: "SmartToy записывает голос и передает в приложение",
      icon: "🧸",
      position: { x: 30, y: 30 },
      color: "from-purple-400 to-purple-600"
    },
    {
      id: 3,
      title: "Приложение обрабатывает",
      description: "Мобильное приложение отправляет запрос в облачный AI",
      icon: "📱",
      position: { x: 50, y: 50 },
      color: "from-green-400 to-green-600"
    },
    {
      id: 4,
      title: "AI думает",
      description: "Искусственный интеллект анализирует и формирует ответ",
      icon: "🤖",
      position: { x: 70, y: 30 },
      color: "from-orange-400 to-orange-600"
    },
    {
      id: 5,
      title: "Игрушка отвечает",
      description: "Персонализированный ответ воспроизводится через игрушку",
      icon: "💬",
      position: { x: 90, y: 50 },
      color: "from-pink-400 to-pink-600"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [steps.length])

  return (
    <section className="py-24 px-8 bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden" id="how-it-works">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-pink-100/20"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Как это работает
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Простая технология, которая создает магию персонального общения между ребенком и игрушкой
          </p>
        </div>

        {/* Interactive Diagram */}
        <div className="relative h-96 mb-16">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {steps.slice(0, -1).map((step, index) => {
              const nextStep = steps[index + 1]
              return (
                <line
                  key={index}
                  x1={step.position.x}
                  y1={step.position.y}
                  x2={nextStep.position.x}
                  y2={nextStep.position.y}
                  stroke="url(#gradient)"
                  strokeWidth="0.5"
                  className={`transition-all duration-1000 ${
                    activeStep > index ? 'opacity-100' : 'opacity-30'
                  }`}
                  strokeDasharray="2,2"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="4;0"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </line>
              )
            })}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>

          {/* Step Nodes */}
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
                activeStep === index ? 'scale-125 z-20' : 'scale-100 z-10'
              }`}
              style={{
                left: `${step.position.x}%`,
                top: `${step.position.y}%`,
              }}
              onClick={() => setActiveStep(index)}
            >
              <div
                className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-700 ease-in-out ${
                  activeStep === index ? 'shadow-2xl ring-4 ring-white ring-opacity-80 scale-110' : 'scale-100'
                }`}
              >
                <span className={`transition-all duration-500 ${activeStep === index ? 'animate-bounce text-3xl' : 'text-2xl'}`}>
                  {step.icon}
                </span>
              </div>

              <div className={`absolute top-24 left-1/2 transform -translate-x-1/2 bg-white rounded-xl p-4 shadow-xl border border-gray-100 min-w-64 transition-all duration-500 ease-in-out ${
                activeStep === index
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
              }`}>
                <h4 className="font-semibold text-gray-800 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`text-center p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                activeStep === index
                  ? 'bg-white shadow-xl border-purple-200 scale-105'
                  : 'bg-white/70 border-gray-100 hover:bg-white hover:shadow-lg'
              }`}
              onClick={() => setActiveStep(index)}
            >
              <div className={`text-4xl mb-4 ${activeStep === index ? 'animate-bounce' : ''}`}>
                {step.icon}
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Demo Chat */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Пример разговора</h3>
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-4xl mb-4 mx-auto animate-pulse">
                👶
              </div>
              <div className="bg-blue-100 rounded-2xl p-4 max-w-xs">
                <p className="text-blue-800">"Привет! Расскажи мне сказку про космос!"</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-2xl animate-bounce">💫</div>
              <div className="text-sm text-gray-500 mt-2">2 секунды</div>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-4xl mb-4 mx-auto animate-pulse">
                🧸
              </div>
              <div className="bg-purple-100 rounded-2xl p-4 max-w-xs">
                <p className="text-purple-800">"Жил-был маленький астронавт по имени Звездочка..."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}