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