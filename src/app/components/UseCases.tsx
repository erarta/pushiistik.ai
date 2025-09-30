'use client'

import { useState } from 'react'

export default function UseCases() {
  const [activeCase, setActiveCase] = useState(0)

  const useCases = [
    {
      id: 1,
      title: "Время сказок",
      description: "SmartToy создает персонализированные сказки на основе интересов ребенка",
      scenario: "Перед сном",
      age: "3-8 лет",
      benefit: "Развитие воображения",
      icon: "📚",
      color: "from-blue-400 to-blue-600",
      dialogues: [
        { child: "Расскажи сказку про принцессу-космонавта!", time: "20:30" },
        { toy: "Жила-была принцесса Стелла, которая мечтала о звездах...", time: "20:31" }
      ]
    },
    {
      id: 2,
      title: "Обучение и игры",
      description: "Интерактивные уроки математики, языков и наук в игровой форме",
      scenario: "После школы",
      age: "5-12 лет",
      benefit: "Образование через игру",
      icon: "🎓",
      color: "from-green-400 to-green-600",
      dialogues: [
        { child: "Давай посчитаем до 10 на английском!", time: "16:15" },
        { toy: "One, two, three... А теперь ты попробуй!", time: "16:16" }
      ]
    },
    {
      id: 3,
      title: "Эмоциональная поддержка",
      description: "Игрушка помогает ребенку выражать чувства и справляться с эмоциями",
      scenario: "Сложный день",
      age: "4-10 лет",
      benefit: "Эмоциональный интеллект",
      icon: "💝",
      color: "from-pink-400 to-pink-600",
      dialogues: [
        { child: "Мне сегодня грустно в школе...", time: "15:45" },
        { toy: "Расскажи мне, что случилось. Я тебя слушаю ❤️", time: "15:46" }
      ]
    }
  ]

  const appScreens = [
    {
      title: "Родительская панель",
      description: "Отслеживайте прогресс и настраивайте контент",
      screenType: "dashboard",
      stats: [
        { label: "Время общения сегодня", value: "2ч 15м", color: "bg-blue-500" },
        { label: "Новых слов изучено", value: "12", color: "bg-green-500" },
        { label: "Уровень эмоций", value: "😊 Радость", color: "bg-yellow-500" }
      ]
    },
    {
      title: "Библиотека контента",
      description: "Тысячи сказок, песен и обучающих материалов",
      screenType: "library",
      categories: [
        { name: "Сказки", count: "1,200+", icon: "📚", color: "from-purple-400 to-purple-600" },
        { name: "Песни", count: "500+", icon: "🎵", color: "from-pink-400 to-pink-600" },
        { name: "Игры", count: "200+", icon: "🧩", color: "from-blue-400 to-blue-600" }
      ]
    },
    {
      title: "Мониторинг общения",
      description: "Безопасное и контролируемое взаимодействие",
      screenType: "monitoring",
      activities: [
        { time: "14:30", activity: "Сказка про космос", duration: "15 мин", type: "story" },
        { time: "15:45", activity: "Изучение цифр", duration: "8 мин", type: "learning" },
        { time: "16:20", activity: "Эмоциональный разговор", duration: "12 мин", type: "emotion" }
      ]
    }
  ]

  return (
    <section className="py-24 px-8 bg-gradient-to-br from-white to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-pink-50/50"></div>
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Use Cases Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Как дети используют SmartToy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Реальные сценарии использования от тысяч семей по всему миру
          </p>
        </div>

        {/* Interactive Use Cases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left side - Case selector */}
          <div className="space-y-6">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.id}
                className={`p-6 rounded-3xl cursor-pointer transition-all duration-500 ${
                  activeCase === index
                    ? 'bg-white shadow-xl scale-105 border-2 border-purple-200'
                    : 'bg-white/70 hover:bg-white hover:shadow-lg border-2 border-transparent'
                }`}
                onClick={() => setActiveCase(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.color} flex items-center justify-center text-2xl shadow-lg ${activeCase === index ? 'animate-bounce' : ''}`}>
                    {useCase.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{useCase.title}</h3>
                    <p className="text-gray-600 mb-3">{useCase.description}</p>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                        {useCase.scenario}
                      </span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        {useCase.age}
                      </span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        {useCase.benefit}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Interactive demo */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Phone mockup header */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4 text-white">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="flex-1 text-center">
                    <span className="text-sm">SmartToy App</span>
                  </div>
                </div>
              </div>

              {/* Chat interface */}
              <div className="p-6 h-96 bg-gradient-to-b from-purple-50 to-white">
                <div className="text-center mb-4">
                  <h4 className="font-semibold text-gray-800">{useCases[activeCase].title}</h4>
                  <p className="text-sm text-gray-500">{useCases[activeCase].scenario}</p>
                </div>

                <div className="space-y-4">
                  {useCases[activeCase].dialogues.map((message, index) => (
                    <div key={index} className={`flex ${message.child ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs p-3 rounded-2xl ${
                        message.child
                          ? 'bg-blue-500 text-white rounded-tr-sm'
                          : 'bg-white border border-gray-200 text-gray-800 rounded-tl-sm'
                      }`}>
                        <p className="text-sm">{message.child || message.toy}</p>
                        <p className="text-xs opacity-70 mt-1">{message.time}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Live indicator */}
                <div className="flex justify-center mt-6">
                  <div className="flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Активный разговор</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center text-2xl shadow-lg animate-float">
              🧸
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl flex items-center justify-center text-xl shadow-lg animate-float-fast">
              📱
            </div>
          </div>
        </div>

        {/* Mobile App Features */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Мобильное приложение для родителей
            </h3>
            <p className="text-gray-600">
              Полный контроль и мониторинг развития вашего ребенка
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {appScreens.map((screen, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                {/* Mock phone screen */}
                <div className="w-48 h-80 bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl mx-auto mb-6 p-2 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-b from-slate-50 to-white rounded-2xl p-3 flex flex-col">
                    {/* Status bar */}
                    <div className="flex justify-between items-center mb-3">
                      <div className="w-8 h-1 bg-gray-400 rounded-full"></div>
                      <div className="text-xs font-medium text-gray-800">9:41</div>
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                        <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                        <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                      </div>
                    </div>

                    {/* Header */}
                    <div className="text-xs font-bold text-gray-800 mb-3 text-left">{screen.title}</div>

                    {/* Content based on screen type */}
                    <div className="flex-1 space-y-2">
                      {screen.screenType === 'dashboard' && screen.stats && (
                        <>
                          {screen.stats.map((stat, statIndex) => (
                            <div key={statIndex} className="bg-white rounded-lg p-2 shadow-sm">
                              <div className="flex items-center space-x-2">
                                <div className={`w-2 h-2 rounded-full ${stat.color}`}></div>
                                <div className="flex-1">
                                  <div className="text-xs text-gray-600">{stat.label}</div>
                                  <div className="text-xs font-semibold text-gray-800">{stat.value}</div>
                                </div>
                              </div>
                            </div>
                          ))}
                          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-2 mt-3">
                            <div className="text-xs font-medium text-purple-800">📊 Еженедельный отчет</div>
                          </div>
                        </>
                      )}

                      {screen.screenType === 'library' && screen.categories && (
                        <>
                          {screen.categories.map((category, catIndex) => (
                            <div key={catIndex} className={`bg-gradient-to-r ${category.color} rounded-lg p-2 text-white`}>
                              <div className="flex items-center space-x-2">
                                <span className="text-sm">{category.icon}</span>
                                <div className="flex-1">
                                  <div className="text-xs font-semibold">{category.name}</div>
                                  <div className="text-xs opacity-90">{category.count}</div>
                                </div>
                              </div>
                            </div>
                          ))}
                          <div className="bg-yellow-100 rounded-lg p-2 mt-2">
                            <div className="text-xs text-yellow-800 font-medium">✨ Новинки недели</div>
                          </div>
                        </>
                      )}

                      {screen.screenType === 'monitoring' && screen.activities && (
                        <>
                          {screen.activities.map((activity, actIndex) => (
                            <div key={actIndex} className="bg-white rounded-lg p-2 shadow-sm border-l-2 border-blue-300">
                              <div className="flex justify-between items-start">
                                <div className="flex-1">
                                  <div className="text-xs font-medium text-gray-800">{activity.activity}</div>
                                  <div className="text-xs text-gray-500">{activity.duration}</div>
                                </div>
                                <div className="text-xs text-gray-400">{activity.time}</div>
                              </div>
                            </div>
                          ))}
                          <div className="bg-green-100 rounded-lg p-2 mt-2">
                            <div className="text-xs text-green-800 font-medium">✅ Все безопасно</div>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Bottom navigation */}
                    <div className="flex justify-around mt-3 pt-2 border-t border-gray-200">
                      <div className="w-4 h-4 bg-purple-400 rounded-sm"></div>
                      <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
                      <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold text-gray-800 mb-2">{screen.title}</h4>
                <p className="text-sm text-gray-600">{screen.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group">
              <div className="text-4xl mb-3 group-hover:animate-bounce">👶</div>
              <div className="text-2xl font-bold text-gray-800">50,000+</div>
              <div className="text-sm text-gray-600">Часов общения</div>
            </div>
            <div className="group">
              <div className="text-4xl mb-3 group-hover:animate-bounce">📚</div>
              <div className="text-2xl font-bold text-gray-800">1,000+</div>
              <div className="text-sm text-gray-600">Уникальных сказок</div>
            </div>
            <div className="group">
              <div className="text-4xl mb-3 group-hover:animate-bounce">🎓</div>
              <div className="text-2xl font-bold text-gray-800">200+</div>
              <div className="text-sm text-gray-600">Обучающих игр</div>
            </div>
            <div className="group">
              <div className="text-4xl mb-3 group-hover:animate-bounce">❤️</div>
              <div className="text-2xl font-bold text-gray-800">99%</div>
              <div className="text-sm text-gray-600">Довольных детей</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}