// Componente de Gráfico Simple
interface ChartData {
  label: string
  value: number
  color?: string
}

interface SimpleChartProps {
  title: string
  data: ChartData[]
  type?: 'bar' | 'line'
}

export default function SimpleChart({
  title,
  data,
  type = 'bar',
}: SimpleChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value))

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">{title}</h3>

      {type === 'bar' ? (
        <div className="space-y-4">
          {data.map((item, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">{item.label}</span>
                <span className="text-sm font-semibold text-gray-900">{item.value}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    item.color || 'bg-blue-500'
                  }`}
                  style={{ width: `${(item.value / maxValue) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
              <span className="text-lg font-bold text-gray-900">{item.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
