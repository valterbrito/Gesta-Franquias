// Metadata do aplicativo Next.js
export const metadata = {
  title: 'Gestão SaaS - Dashboard',
  description: 'Sistema de gestão financeira multitenant com layout responsivo e profissional',
}


import './globals.css';

// Layout raiz do aplicativo
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gray-50 text-gray-900">{children}</body>
    </html>
  )
}
