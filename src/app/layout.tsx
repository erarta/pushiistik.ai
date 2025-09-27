import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
title: 'SmartToy AI - Умная игрушка будущего',
description: 'Первая в мире умная игрушка с искусственным интеллектом, которая растет и развивается вместе с вашим ребенком',
keywords: 'умная игрушка, ИИ, дети, развитие, SmartToy AI',
openGraph: {
title: 'SmartToy AI - Умная игрушка будущего',
description: 'Первая в мире умная игрушка с искусственным интеллектом',
url: 'https://pushiistik.ai',
siteName: 'SmartToy AI',
locale: 'ru_RU',
type: 'website',
},
}

export default function RootLayout({
children,
}: {
children: React.ReactNode
}) {
return (
<html lang="ru">
  <body className={inter.className}>{children}</body>
</html>
)
}