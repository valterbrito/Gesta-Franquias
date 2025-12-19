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

export default function ReportsPage() {
  const [filters, setFilters] = useState({
    visitante: '',
    dataInicial: '',
    dataFinal: '',
    unidade: 'Todas',
    tipoOcorrencia: 'Ambas',
    modoExibicao: 'Sintético',
  })

  const [currentPage, setCurrentPage] = useState(1)

  // Dados mockados para a tabela
  const mockData: ReportRecord[] = [
    {
      nomeCompleto: 'Aldenor Lemos Silva',
      responsavelCadastro: 'TARCÍSIO PEREIRA DOS SANTOS JUNIOR',
      documentos: 'OAB:',
      data: '14/04/2023',
      nomeUsuarioEntrada: 'AMEDES ELEUTERIO DA COSTA JUNIOR',
      horarioEntrada: '14/04/2023 10:15:57',
      nomeUsuarioSaida: 'AMEDES ELEUTERIO DA COSTA JUNIOR',
      horarioSaida: '14/04/2023 10:16:42',
    },
    {
      nomeCompleto: 'João Silva Santos',
      responsavelCadastro: 'MARIA DOS SANTOS',
      documentos: 'CPF:',
      data: '15/04/2023',
      nomeUsuarioEntrada: 'CARLOS PEREIRA',
      horarioEntrada: '15/04/2023 09:30:00',
      nomeUsuarioSaida: 'CARLOS PEREIRA',
      horarioSaida: '15/04/2023 10:45:30',
    },
    {
      nomeCompleto: 'Maria Oliveira Costa',
      responsavelCadastro: 'FERNANDA SILVA',
      documentos: 'RG:',
      data: '16/04/2023',
      nomeUsuarioEntrada: 'JOÃO SANTOS',
      horarioEntrada: '16/04/2023 08:00:15',
      nomeUsuarioSaida: 'JOÃO SANTOS',
      horarioSaida: '16/04/2023 17:30:45',
    },
  ]

  const handleClear = () => {
    setFilters({
      visitante: '',
      dataInicial: '',
      dataFinal: '',
      unidade: 'Todas',
      tipoOcorrencia: 'Ambas',
      modoExibicao: 'Sintético',
    })
  }

  const handleSearch = () => {
    setCurrentPage(1)
    console.log('Filtros aplicados:', filters)
  }

  const handleExport = (format: string) => {
    console.log(`Exportando em ${format}`)
    // Aqui você implementaria a lógica de exportação real
  }

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      {/* Cabeçalho */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Relatórios</h1>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {/* Visitante */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Visitante
            </label>
            <input
              type="text"
              placeholder="Nome do visitante"
              value={filters.visitante}
              onChange={(e) =>
                setFilters({ ...filters, visitante: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>

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
              <option>Unidade 3</option>
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
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            ✕ Limpar
          </button>
          <button
            onClick={handleSearch}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            🔍 Buscar
          </button>
        </div>
      </div>

      {/* Resultado da Pesquisa */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Cabeçalho da tabela com opções */}
        <div className="border-b border-gray-200 p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Resultado da pesquisa
            </h2>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleExport('copy')}
                title="Copiar dados"
                className="px-3 py-2 text-xs md:text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors"
              >
                Copiar
              </button>
              <button
                onClick={() => handleExport('excel')}
                title="Exportar para Excel"
                className="px-3 py-2 text-xs md:text-sm font-medium text-white bg-green-500 rounded hover:bg-green-600 transition-colors"
              >
                Excel
              </button>
              <button
                onClick={() => handleExport('csv')}
                title="Exportar para CSV"
                className="px-3 py-2 text-xs md:text-sm font-medium text-white bg-orange-500 rounded hover:bg-orange-600 transition-colors"
              >
                CSV
              </button>
              <button
                onClick={() => handleExport('pdf')}
                title="Exportar para PDF"
                className="px-3 py-2 text-xs md:text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600 transition-colors"
              >
                PDF
              </button>
              <button
                onClick={() => handleExport('extend')}
                title="Estender colunas"
                className="px-3 py-2 text-xs md:text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
              >
                Estender colunas
              </button>
              <button
                onClick={() => handleExport('group')}
                title="Agrupar dados"
                className="px-3 py-2 text-xs md:text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
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
                  Nome Usuário Entrada
                </th>
                <th className="px-4 py-3 md:px-6 text-left font-semibold text-gray-700">
                  Horário de Entrada
                </th>
                <th className="px-4 py-3 md:px-6 text-left font-semibold text-gray-700">
                  Nome Usuário Saída
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
                  <td className="px-4 py-3 md:px-6 text-gray-900 font-medium">
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
                  <td className="px-4 py-3 md:px-6 text-gray-700 text-xs">
                    {record.horarioEntrada}
                  </td>
                  <td className="px-4 py-3 md:px-6 text-gray-700">
                    {record.nomeUsuarioSaida}
                  </td>
                  <td className="px-4 py-3 md:px-6 text-gray-700 text-xs">
                    {record.horarioSaida}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginação */}
        <div className="px-4 py-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 bg-gray-50">
          <p className="text-sm text-gray-600">
            Mostrando de 1 até {mockData.length} de {mockData.length} registros
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                currentPage === 1
                  ? 'text-gray-400 bg-gray-100 cursor-not-allowed'
                  : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
              }`}
            >
              ← Anterior
            </button>
            <button className="px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors">
              {currentPage}
            </button>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === 1}
              className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                currentPage === 1
                  ? 'text-gray-400 bg-gray-100 cursor-not-allowed'
                  : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Próxima →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
