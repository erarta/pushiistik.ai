#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Название файла с кодом
const SOURCE_FILE = 'nextjs_tailwind_smarttoy.ts';

console.log('🚀 Создаем структуру проекта SmartToy AI...\n');

// Проверяем существование исходного файла
if (!fs.existsSync(SOURCE_FILE)) {
  console.error(`❌ Файл ${SOURCE_FILE} не найден!`);
  console.log('Убедись, что файл находится в корне проекта');
  process.exit(1);
}

// Читаем содержимое файла
const content = fs.readFileSync(SOURCE_FILE, 'utf8');

// Функция для создания директорий
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`📁 Создана папка: ${dirPath}`);
  }
}

// Функция для записи файла
function writeFile(filePath, content, description) {
  ensureDir(path.dirname(filePath));
  
  // Если файл существует, создаем бэкап
  if (fs.existsSync(filePath)) {
    const backupPath = `${filePath}.backup`;
    fs.copyFileSync(filePath, backupPath);
    console.log(`💾 Создан бэкап: ${backupPath}`);
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`✅ Создан файл: ${filePath} - ${description}`);
}

// Паттерны для извлечения файлов
const filePatterns = [
  {
    pattern: /\/\/ src\/app\/layout\.tsx\n([\s\S]*?)(?=\n\/\/ src\/app\/page\.tsx)/,
    path: 'src/app/layout.tsx',
    description: 'Root Layout'
  },
  {
    pattern: /\/\/ src\/app\/page\.tsx\n([\s\S]*?)(?=\n\/\/ src\/app\/components\/Header\.tsx)/,
    path: 'src/app/page.tsx',
    description: 'Main Page'
  },
  {
    pattern: /\/\/ src\/app\/components\/Header\.tsx\n([\s\S]*?)(?=\n\/\/ src\/app\/components\/Hero\.tsx)/,
    path: 'src/app/components/Header.tsx',
    description: 'Header Component'
  },
  {
    pattern: /\/\/ src\/app\/components\/Hero\.tsx\n([\s\S]*?)(?=\n\/\/ src\/app\/components\/Features\.tsx)/,
    path: 'src/app/components/Hero.tsx',
    description: 'Hero Component'
  },
  {
    pattern: /\/\/ src\/app\/components\/Features\.tsx\n([\s\S]*?)(?=\n\/\/ src\/app\/components\/Product\.tsx)/,
    path: 'src/app/components/Features.tsx',
    description: 'Features Component'
  },
  {
    pattern: /\/\/ src\/app\/components\/Product\.tsx\n([\s\S]*?)(?=\n\/\/ src\/app\/components\/CTA\.tsx)/,
    path: 'src/app/components/Product.tsx',
    description: 'Product Component'
  },
  {
    pattern: /\/\/ src\/app\/components\/CTA\.tsx\n([\s\S]*?)(?=\n\/\/ src\/app\/components\/Footer\.tsx)/,
    path: 'src/app/components/CTA.tsx',
    description: 'CTA Component'
  },
  {
    pattern: /\/\/ src\/app\/components\/Footer\.tsx\n([\s\S]*?)(?=\n\/\/ src\/app\/globals\.css)/,
    path: 'src/app/components/Footer.tsx',
    description: 'Footer Component'
  },
  {
    pattern: /\/\/ src\/app\/globals\.css\n([\s\S]*?)(?=\n\/\/ tailwind\.config\.ts)/,
    path: 'src/app/globals.css',
    description: 'Global CSS'
  },
  {
    pattern: /\/\/ tailwind\.config\.ts\n([\s\S]*?)(?=\n\/\/ next\.config\.js)/,
    path: 'tailwind.config.ts',
    description: 'Tailwind Config'
  },
  {
    pattern: /\/\/ next\.config\.js\n([\s\S]*?)(?=\n\/\/ package\.json)/,
    path: 'next.config.js',
    description: 'Next.js Config'
  },
  {
    pattern: /\/\/ package\.json \(обнови существующий\)\n([\s\S]*?)(?=\n\/\/ README\.md)/,
    path: 'package.json.new',
    description: 'Updated Package.json'
  },
  {
    pattern: /\/\/ README\.md\n([\s\S]*?)$/,
    path: 'README.md.new',
    description: 'Project README'
  }
];

// Создаем необходимые директории
ensureDir('src/app/components');

console.log('\n📂 Извлекаем файлы...\n');

// Обрабатываем каждый паттерн
filePatterns.forEach(({ pattern, path: filePath, description }) => {
  const match = content.match(pattern);
  if (match) {
    let fileContent = match[1].trim();
    
    // Убираем лишние пробелы в начале каждой строки
    fileContent = fileContent.replace(/^[ ]{0,4}/gm, '');
    
    writeFile(filePath, fileContent, description);
  } else {
    console.log(`⚠️  Не найден контент для: ${filePath}`);
  }
});

console.log('\n🎉 Структура проекта создана успешно!');
console.log('\n📋 Следующие шаги:');
console.log('1. npm install                    # установить зависимости');
console.log('2. npm run dev                    # запустить в режиме разработки');
console.log('3. Открой http://localhost:3000   # посмотреть результат');

console.log('\n📝 Дополнительные файлы:');
console.log('• package.json.new - новая версия package.json');
console.log('• *.backup - резервные копии замененных файлов');

console.log('\n🚀 Готов к запуску!');
