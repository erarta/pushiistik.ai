export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-800 to-pink-500 flex items-center justify-center text-center text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.2)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
      </div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-1 h-1 bg-white rounded-full animate-float" style={{ top: '10%', left: '15%', animationDelay: '0s' }}></div>
        <div className="absolute w-2 h-2 bg-white rounded-full animate-float" style={{ top: '20%', left: '85%', animationDelay: '1s' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-white rounded-full animate-float" style={{ top: '30%', left: '25%', animationDelay: '2s' }}></div>
        <div className="absolute w-3 h-3 bg-white rounded-full animate-float" style={{ top: '45%', left: '80%', animationDelay: '3s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-float" style={{ top: '55%', left: '10%', animationDelay: '4s' }}></div>
        <div className="absolute w-2 h-2 bg-white rounded-full animate-float" style={{ top: '70%', left: '90%', animationDelay: '5s' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-white rounded-full animate-float" style={{ top: '80%', left: '35%', animationDelay: '6s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-float" style={{ top: '90%', left: '75%', animationDelay: '7s' }}></div>

        {/* Additional scattered particles */}
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ top: '15%', left: '45%', animationDelay: '1.5s' }}></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ top: '35%', left: '65%', animationDelay: '3.5s' }}></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ top: '65%', left: '15%', animationDelay: '5.5s' }}></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-purple-700/20"></div>

      <div className="max-w-5xl px-8 relative z-10">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-white via-white to-purple-100 bg-clip-text text-transparent leading-none tracking-tight drop-shadow-2xl">
            SmartToy AI
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-purple-200 mx-auto mb-8 rounded-full"></div>
        </div>

        <p className="text-xl md:text-3xl mb-12 opacity-95 leading-relaxed font-light max-w-4xl mx-auto drop-shadow-lg">
          Первая в мире умная игрушка с искусственным интеллектом,<br className="hidden sm:block" />
          <span className="font-medium bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
            которая растет и развивается вместе с вашим ребенком
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="#product" className="group bg-white/20 text-white px-10 py-5 rounded-full font-semibold text-lg border-2 border-white/40 backdrop-blur-xl hover:bg-white/30 hover:border-white/60 transition-all duration-300 hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-white/20 no-underline min-w-[200px] relative overflow-hidden">
            <span className="relative z-10">Узнать больше</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </a>
          <a href="#cta" className="group bg-white/95 text-purple-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-purple-800 transition-all duration-300 hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-purple-500/30 no-underline min-w-[200px] relative overflow-hidden">
            <span className="relative z-10">Предзаказ • 9 990 ₽</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 opacity-80">
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
    </section>
  )
}