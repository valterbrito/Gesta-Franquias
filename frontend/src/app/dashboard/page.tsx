'use client'

import { useState } from 'react'

interface ReportRecord {
  nomeCompleto: string
  responsavelCadastro: string
  documentos: string
  data: string
  nomeUsuarioEntrada: string
  horarioEntrada: string
  nomeUsuarioSaida: string
  horarioSaida: string
}

export default function DashboardPage() {
  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Bem-vindo ao painel principal. Acesse <a href="/dashboard/reports" className="text-blue-600 underline">Relatórios</a> para visualizar os dados detalhados.</p>
      </div>
      {/* Adicione aqui cards, gráficos ou métricas do dashboard principal */}
    </div>
  )
}

          {/* Data Inicial */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Data Inicial
            </label>
            <input
              type="date"
              value={filters.dataInicial}
              onChange={(e) =>
                setFilters({ ...filters, dataInicial: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>

          {/* Data Final */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Data Final
            </label>
            <input
              type="date"
              value={filters.dataFinal}
              onChange={(e) =>
                setFilters({ ...filters, dataFinal: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>

          {/* Unidade */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Unidade
            </label>
            <select
              value={filters.unidade}
              onChange={(e) =>
                setFilters({ ...filters, unidade: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
            >
              <option>Todas</option>
              <option>Unidade 1</option>
              <option>Unidade 2</option>
            </select>
          </div>

          {/* Tipo de Ocorrência */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de Ocorrência
            </label>
            <select
              value={filters.tipoOcorrencia}
              onChange={(e) =>
                setFilters({ ...filters, tipoOcorrencia: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
            >
              <option>Ambas</option>
              <option>Entrada</option>
              <option>Saída</option>
            </select>
          </div>

          {/* Modo de Exibição */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Modo de Exibição
            </label>
            <select
              value={filters.modoExibicao}
              onChange={(e) =>
                setFilters({ ...filters, modoExibicao: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
            >
              <option>Sintético</option>
              <option>Detalhado</option>
            </select>
          </div>
        </div>

        {/* Botões de ação */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleClear}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            ✕ Limpar
          </button>
          <button
            onClick={handleSearch}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            🔍 Buscar
          </button>
        </div>
      </div>

      {/* Resultado da Pesquisa */}
      <div className="bg-white rounded-lg shadow-sm">
        {/* Cabeçalho da tabela com opções */}
        <div className="border-b border-gray-200 p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Resultado da pesquisa
            </h2>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleExport('copy')}
                className="px-3 py-2 text-xs md:text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Copiar
              </button>
              <button
                onClick={() => handleExport('excel')}
                className="px-3 py-2 text-xs md:text-sm font-medium text-white bg-green-500 rounded hover:bg-green-600"
              >
                Excel
              </button>
              <button
                onClick={() => handleExport('csv')}
                className="px-3 py-2 text-xs md:text-sm font-medium text-white bg-orange-500 rounded hover:bg-orange-600"
              >
                CSV
              </button>
              <button
                onClick={() => handleExport('pdf')}
                className="px-3 py-2 text-xs md:text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600"
              >
                PDF
              </button>
              <button
                onClick={() => handleExport('extend')}
                className="px-3 py-2 text-xs md:text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
              >
                Estender colunas
              </button>
              <button
                onClick={() => handleExport('group')}
                className="px-3 py-2 text-xs md:text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
              >
                Agrupar
              </button>
            </div>
          </div>
        </div>

        {/* Tabela responsiva */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-4 py-3 md:px-6 text-left font-semibold text-gray-700">
                  Nome Completo
                </th>
                <th className="px-4 py-3 md:px-6 text-left font-semibold text-gray-700">
                  Responsável Cadastro
                </th>
                <th className="px-4 py-3 md:px-6 text-left font-semibold text-gray-700">
                  Documentos
                </th>
                <th className="px-4 py-3 md:px-6 text-left font-semibold text-gray-700">
                  Data
                </th>
                <th className="px-4 py-3 md:px-6 text-left font-semibold text-gray-700">
                  Nome Usuário Registro Entrada
                </th>
                <th className="px-4 py-3 md:px-6 text-left font-semibold text-gray-700">
                  Horário de Entrada
                </th>
                <th className="px-4 py-3 md:px-6 text-left font-semibold text-gray-700">
                  Nome Usuário Registro Saída
                </th>
                <th className="px-4 py-3 md:px-6 text-left font-semibold text-gray-700">
                  Horário de Saída
                </th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((record, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3 md:px-6 text-gray-900">
                    {record.nomeCompleto}
                  </td>
                  <td className="px-4 py-3 md:px-6 text-gray-700">
                    {record.responsavelCadastro}
                  </td>
                  <td className="px-4 py-3 md:px-6 text-gray-700">
                    {record.documentos}
                  </td>
                  <td className="px-4 py-3 md:px-6 text-gray-700">
                    {record.data}
                  </td>
                  <td className="px-4 py-3 md:px-6 text-gray-700">
                    {record.nomeUsuarioEntrada}
                  </td>
                  <td className="px-4 py-3 md:px-6 text-gray-700">
                    {record.horarioEntrada}
                  </td>
                  <td className="px-4 py-3 md:px-6 text-gray-700">
                    {record.nomeUsuarioSaida}
                  </td>
                  <td className="px-4 py-3 md:px-6 text-gray-700">
                    {record.horarioSaida}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginação */}
        <div className="px-4 py-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Mostrando de 1 até 1 de 1 registros
          </p>
          <div className="flex gap-2">
            <button
              disabled
              className="px-3 py-2 text-sm font-medium text-gray-400 bg-gray-100 rounded cursor-not-allowed"
            >
              Anterior
            </button>
            <button className="px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded">
              1
            </button>
            <button
              disabled
              className="px-3 py-2 text-sm font-medium text-gray-400 bg-gray-100 rounded cursor-not-allowed"
            >
              Próxima
            </button>
          </div>
        </div>
          </div>

        </div>
      </div>
    </div>
  )
}
