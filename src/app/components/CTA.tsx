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