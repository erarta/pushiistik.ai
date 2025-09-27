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