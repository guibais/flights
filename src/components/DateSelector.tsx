import { Calendar } from 'lucide-react'

type DateSelectorProps = {
  value: string
  onChange: (date: string) => void
  minDate?: string
}

export function DateSelector({ value, onChange, minDate }: DateSelectorProps) {
  const today = new Date().toISOString().split('T')[0]
  const minimumDate = minDate || today

  const formatDateForDisplay = (dateString: string) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <div className="relative">
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={minimumDate}
        className="w-full px-4 py-3 pl-10 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none appearance-none cursor-pointer"
      />
      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      
      {value && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-300 pointer-events-none">
          {formatDateForDisplay(value)}
        </div>
      )}
    </div>
  )
}
