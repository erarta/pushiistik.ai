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
    <section className="py-24 px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden" id="features">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-600/5 to-transparent rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Революционные возможности
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            SmartToy AI объединяет передовые технологии с традиционной теплотой детской игрушки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-on-scroll group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-3xl text-center border border-white/20 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:-translate-y-3 overflow-hidden">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon with enhanced styling */}
              <div className="relative z-10 mb-6">
                <span className="text-5xl block transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-200 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{feature.description}</p>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" style={{padding: '1px'}}>
                <div className="h-full w-full bg-gradient-to-br from-slate-900/90 to-purple-900/90 rounded-3xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}