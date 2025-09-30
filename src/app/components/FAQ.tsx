'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: "Безопасно ли SmartToy AI для моего ребенка?",
      answer: "Абсолютно! SmartToy AI разработан с соблюдением всех международных стандартов безопасности. Все материалы гипоаллергенны, устройство имеет сертификат CE, а AI-контент проходит модерацию экспертов по детской психологии. Все данные шифруются и хранятся в соответствии с GDPR.",
      icon: "🔒",
      category: "Безопасность"
    },
    {
      question: "Как SmartToy подключается к интернету?",
      answer: "SmartToy подключается к Wi-Fi через мобильное приложение родителей. Соединение защищено, а вся обработка речи происходит в облаке с использованием передовых технологий шифрования. Игрушка также может работать офлайн с базовым набором ответов.",
      icon: "📡",
      category: "Технологии"
    },
    {
      question: "Подходит ли игрушка для детей разного возраста?",
      answer: "Да! SmartToy AI адаптируется под возраст ребенка от 3 до 12 лет. AI анализирует словарный запас, интересы и уровень развития, подстраивая сложность разговоров и контент. Для малышей - простые песенки, для школьников - образовательные игры.",
      icon: "👶",
      category: "Возраст"
    },
    {
      question: "Какой контент доступен для SmartToy?",
      answer: "Библиотека включает более 1000 сказок, 500 песен, 200 обучающих игр и постоянно пополняется. Контент охватывает математику, языки, науки, творчество и эмоциональное развитие. Родители могут настраивать доступный контент через приложение.",
      icon: "📚",
      category: "Контент"
    },
    {
      question: "Сколько времени работает батарея?",
      answer: "SmartToy работает до 8 часов активного общения или до 3 дней в режиме ожидания. Зарядка происходит через USB-C кабель за 2 часа. Игрушка автоматически переходит в энергосберегающий режим, когда ребенок не играет.",
      icon: "🔋",
      category: "Батарея"
    },
    {
      question: "Можно ли использовать SmartToy без интернета?",
      answer: "Да! SmartToy имеет базовый офлайн-режим с набором из 100+ заготовленных ответов, песен и игр. Однако для полной функциональности AI и доступа к обширной библиотеке контента требуется интернет-соединение.",
      icon: "📱",
      category: "Офлайн"
    },
    {
      question: "Как происходит обновление игрушки?",
      answer: "Обновления загружаются автоматически через Wi-Fi и не требуют действий от родителей. Мы регулярно добавляем новый контент, улучшаем AI и исправляем ошибки. Все обновления бесплатны в течение гарантийного срока.",
      icon: "🔄",
      category: "Обновления"
    },
    {
      question: "Что делать, если игрушка сломается?",
      answer: "На SmartToy действует 2-летняя гарантия с бесплатным ремонтом или заменой. Наша служба поддержки работает 24/7 через приложение или email. Для мелких проблем доступна удаленная диагностика через приложение.",
      icon: "🛠️",
      category: "Гарантия"
    }
  ]

  const categories = ["Все", ...Array.from(new Set(faqs.map(faq => faq.category)))]
  const [activeCategory, setActiveCategory] = useState("Все")

  const filteredFAQs = activeCategory === "Все"
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory)

  return (
    <section className="py-24 px-8 bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-pink-100/20"></div>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-200/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Частые вопросы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о SmartToy AI от наших экспертов
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-purple-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">{faq.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {faq.question}
                    </h3>
                    <span className="text-sm text-purple-600 font-medium">
                      {faq.category}
                    </span>
                  </div>
                </div>
                <div className={`transform transition-transform duration-300 ${
                  openFAQ === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${
                openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-6">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-400">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact support */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Не нашли ответ на свой вопрос?
            </h3>
            <p className="text-gray-600 mb-6">
              Наша команда поддержки готова помочь вам 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:evgeniy@erarta.ai"
                className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg no-underline"
              >
                📧 Написать в поддержку
              </a>
              <a
                href="https://t.me/edubskiy"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg no-underline"
              >
                💬 Telegram чат
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}