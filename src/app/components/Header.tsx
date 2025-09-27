export default function Header() {
  return (
    <header className="header fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-white/20 z-50 py-4 transition-all duration-300">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-8">
        <a href="#" className="flex items-center gap-3 text-2xl font-bold text-purple-600 no-underline">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-purple-800 to-pink-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg shadow-purple-600/30">
            🧸
          </div>
          SmartToy AI
        </a>

        <ul className="hidden md:flex gap-8 list-none">
          <li><a href="#features" className="text-gray-700 font-medium hover:text-purple-600 transition-colors no-underline">Возможности</a></li>
          <li><a href="#product" className="text-gray-700 font-medium hover:text-purple-600 transition-colors no-underline">Продукт</a></li>
          <li><a href="#contact" className="text-gray-700 font-medium hover:text-purple-600 transition-colors no-underline">Контакты</a></li>
        </ul>

        <a href="#cta" className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-purple-900 transition-all hover:-translate-y-0.5 shadow-lg shadow-purple-600/30 no-underline">
          Предзаказ
        </a>
      </nav>
    </header>
  )
}