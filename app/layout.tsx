import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Neo Power | Engenharia Fotovoltaica de Alta Complexidade',
  description: 'Engenharia fotovoltaica de alta complexidade em Petrópolis, RJ. Sistemas de Média e Baixa Tensão com supervisão e assinatura de diretoria. Tolerância zero a falhas.',
  keywords: ['energia solar petrópolis', 'engenharia fotovoltaica', 'sistema fotovoltaico alto padrão', 'média tensão solar', 'neo power'],
  alternates: { canonical: 'https://neopowerenergia.com.br' },
  openGraph: {
    title: 'Neo Power | Engenharia Fotovoltaica de Alta Complexidade',
    description: 'Sistemas fotovoltaicos de alta potência com rigor industrial. Petrópolis, RJ.',
    url: 'https://neopowerenergia.com.br',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
