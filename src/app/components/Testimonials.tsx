'use client'

import { useState } from 'react'

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Анна Смирнова",
      role: "Мама двух детей",
      avatar: "👩‍💼",
      text: "Моя дочка Софья влюбилась в SmartToy с первого дня! Игрушка стала её лучшим другом. Она рассказывает ей о школе, а игрушка всегда находит правильные слова поддержки.",
      rating: 5,
      children: "Софья, 6 лет"
    },
    {
      id: 2,
      name: "Дмитрий Петров",
      role: "Папа и IT-специалист",
      avatar: "👨‍💻",
      text: "Как технический специалист, я впечатлен качеством AI. Игрушка действительно адаптируется под интересы ребенка и помогает в обучении. Мой сын стал лучше говорить!",
      rating: 5,
      children: "Максим, 4 года"
    },
    {
      id: 3,
      name: "Елена Волкова",
      role: "Детский психолог",
      avatar: "👩‍⚕️",
      text: "Профессионально рекомендую SmartToy. Это не просто игрушка - это инструмент развития эмоционального интеллекта. Дети учатся выражать чувства и развивают эмпатию.",
      rating: 5,
      children: "Эксперт по детскому развитию"
    }
  ]

  const stats = [
    { number: "10,000+", label: "Довольных семей", icon: "👨‍👩‍👧‍👦" },
    { number: "98%", label: "Положительных отзывов", icon: "⭐" },
    { number: "24/7", label: "Поддержка ИИ", icon: "🤖" },
    { number: "15+", label: "Языков обучения", icon: "🌍" }
  ]

  return (
    <section className="py-24 px-8 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 to-pink-100/30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Stats Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Нам доверяют тысячи семей
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-3 group-hover:animate-bounce">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-black text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Что говорят родители
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer border-2 ${
                  activeTestimonial === index
                    ? 'border-purple-300 scale-105'
                    : 'border-transparent hover:border-purple-200'
                }`}
                onClick={() => setActiveTestimonial(index)}
              >
                {/* Rating Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 italic text-center mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* User Info */}
                <div className="text-center">
                  <div className="text-4xl mb-3">{testimonial.avatar}</div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-purple-600 text-sm font-medium">{testimonial.role}</p>
                  <p className="text-gray-500 text-xs mt-1">{testimonial.children}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Присоединяйтесь к сообществу SmartToy
            </h3>
            <p className="text-gray-600">
              Тысячи родителей уже выбрали умное будущее для своих детей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Achievement 1 */}
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <div className="text-3xl mb-3">🏆</div>
              <h4 className="font-semibold text-gray-800 mb-2">Премия "Игрушка года"</h4>
              <p className="text-sm text-gray-600">Международное признание в области образовательных технологий</p>
            </div>

            {/* Achievement 2 */}
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div className="text-3xl mb-3">🔒</div>
              <h4 className="font-semibold text-gray-800 mb-2">100% Безопасность</h4>
              <p className="text-sm text-gray-600">Сертификация CE, соответствие всем стандартам детской безопасности</p>
            </div>

            {/* Achievement 3 */}
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <div className="text-3xl mb-3">🌟</div>
              <h4 className="font-semibold text-gray-800 mb-2">AI от экспертов</h4>
              <p className="text-sm text-gray-600">Разработано ведущими специалистами в области детской психологии</p>
            </div>
          </div>
        </div>

        {/* User Generated Content */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">
            Делитесь моментами с #SmartToyAI
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '💬', text: 'Разговоры с ИИ', gradient: 'from-blue-100 to-blue-200' },
              { icon: '🎙️', text: 'Записи голоса', gradient: 'from-purple-100 to-purple-200' },
              { icon: '🧸', text: 'Любимые моменты', gradient: 'from-pink-100 to-pink-200' },
              { icon: '👶', text: 'Счастливые дети', gradient: 'from-green-100 to-green-200' },
              { icon: '🎵', text: 'Поющие песенки', gradient: 'from-yellow-100 to-yellow-200' },
              { icon: '📚', text: 'Время сказок', gradient: 'from-indigo-100 to-indigo-200' },
              { icon: '🎨', text: 'Творческие игры', gradient: 'from-orange-100 to-orange-200' },
              { icon: '❤️', text: 'Особые моменты', gradient: 'from-red-100 to-red-200' }
            ].map((item, index) => (
              <div
                key={index}
                className={`aspect-square bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer shadow-sm hover:shadow-md`}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">
                    {item.icon}
                  </div>
                  <p className="text-xs text-gray-600 font-medium">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}