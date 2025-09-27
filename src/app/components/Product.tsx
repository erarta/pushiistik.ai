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