export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-8 text-center" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">SmartToy AI</h3>
            <p className="text-gray-400">
              Создаем будущее детских игрушек с помощью искусственного интеллекта.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Контакты</h3>
            <p className="text-gray-400">Email: evgeniy@erarta.ai</p>
            <p className="text-gray-400">Telegram: @edubskiy</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Компания</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors no-underline">О нас</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors no-underline">Карьера</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors no-underline">Пресса</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Поддержка</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors no-underline">FAQ</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors no-underline">Техподдержка</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors no-underline">Гарантия</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-500">&copy; 2025 SmartToy AI. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}