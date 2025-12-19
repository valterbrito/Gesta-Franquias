'use client'

import { useState } from 'react'
import MetricCard from '@/components/cards/metric-card'
import SimpleChart from '@/components/charts/simple-chart'
import Link from 'next/link'

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState('month')

  const metrics = [
    { title: 'Total de Transações', value: '1.234', change: 12, icon: '💳', color: 'blue' as const },
    { title: 'Receita Total', value: 'R$ 45.234', change: 8, icon: '💰', color: 'green' as const },
    { title: 'Unidades Ativas', value: '24', change: 2, icon: '🏢', color: 'purple' as const },
    { title: 'Usuários', value: '156', change: 5, icon: '👥', color: 'orange' as const },
  ]

  const recentTransactions = [
    { label: 'Café Central', value: 156 },
    { label: 'Loja Norte', value: 248 },
    { label: 'Unidade Sul', value: 189 },
    { label: 'Café Premium', value: 267 },
    { label: 'Loja Leste', value: 134 },
  ]

  const performanceData = [
    { label: 'Janeiro', value: 1200 },
    { label: 'Fevereiro', value: 1900 },
    { label: 'Março', value: 1500 },
    { label: 'Abril', value: 2200 },
    { label: 'Maio', value: 2800 },
    { label: 'Junho', value: 3200 },
  ]

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Bem-vindo de volta! Aqui está o resumo do seu negócio.</p>
        </div>
        <div className="flex gap-2">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="week">Última Semana</option>
            <option value="month">Último Mês</option>
            <option value="quarter">Último Trimestre</option>
            <option value="year">Último Ano</option>
          </select>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
            Exportar
          </button>
        </div>
      </div>

      {/* Métricas principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, idx) => (
          <MetricCard key={idx} {...metric} />
        ))}
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SimpleChart
            title="Receita Mensal"
            data={performanceData}
            type="bar"
          />
        </div>
        <div>
          <SimpleChart
            title="Top 5 Unidades"
            data={recentTransactions}
            type="line"
          />
        </div>
      </div>

      {/* Ações rápidas */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Ações Rápidas</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Link
            href="/dashboard/reports"
            className="p-4 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition group"
          >
            <div className="text-2xl mb-2">📋</div>
            <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">Ver Relatórios</h4>
            <p className="text-sm text-gray-600">Análise detalhada</p>
          </Link>
          <button className="p-4 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition group">
            <div className="text-2xl mb-2">➕</div>
            <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">Nova Transação</h4>
            <p className="text-sm text-gray-600">Registrar transação</p>
          </button>
          <button className="p-4 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition group">
            <div className="text-2xl mb-2">👤</div>
            <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">Novo Usuário</h4>
            <p className="text-sm text-gray-600">Adicionar usuário</p>
          </button>
          <button className="p-4 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition group">
            <div className="text-2xl mb-2">📊</div>
            <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">Exportar Dados</h4>
            <p className="text-sm text-gray-600">Baixar relatório</p>
          </button>
        </div>
      </div>
    </div>
  )
}
