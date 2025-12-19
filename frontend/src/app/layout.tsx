import type { Metadata } from "next"
import Navbar from "@/components/layout/navbar"
import Sidebar from "@/components/layout/sidebar"
import "./globals.css"

export const metadata: Metadata = {
  title: "Gestão Franquias",
  description: "Sistema de gestão de franquias moderno e profissional",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
