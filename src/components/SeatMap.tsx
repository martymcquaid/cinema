import React from 'react'

type SeatMapProps = {
  rows: string[]
  cols: number
  booked: string[]
  onChange: (selected: string[]) => void
}

const SeatMap: React.FC<SeatMapProps> = ({ rows, cols, booked, onChange }) => {
  const [selected, setSelected] = React.useState<string[]>([])

  const toggleSeat = (seatId: string) => {
    if (booked.includes(seatId)) return
    setSelected((s) => {
      const exists = s.includes(seatId)
      const next = exists ? s.filter((x) => x !== seatId) : [...s, seatId]
      onChange(next)
      return next
    })
  }

  // simple layout: grid with rows x cols
  return (
    <div className="p-4 bg-slate-900 rounded-xl shadow-inner">
      <div className="grid grid-cols-12 gap-2 mb-4">
        {Array.from({ length: cols }).map((_, c) => (
          <div key={c} className="text-xs text-slate-400 text-center">{c + 1}</div>
        ))}
      </div>
      {rows.map((r) => (
        <div key={r} className="mb-2 flex items-center gap-2">
          <div className="w-6 text-xs text-slate-400">{r}</div>
          {Array.from({ length: cols }).map((_, i) => {
            const seatId = `${r}${i + 1}`
            const isBooked = booked.includes(seatId)
            const isSelected = selected.includes(seatId)
            const cls = [
              'h-7 w-7 rounded-full inline-block',
              isBooked ? 'bg-slate-700 cursor-not-allowed' : isSelected ? 'bg-green-500 ring-2 ring-green-300' : 'bg-slate-800 hover:bg-slate-700 cursor-pointer',
            ].join(' ')
            return (
              <button
                key={seatId}
                aria-label={`Seat ${seatId}`}
                className={cls}
                onClick={() => toggleSeat(seatId)}
                disabled={isBooked}
              />
            )
          })}
        </div>
      ))}
      <div className="text-xs text-slate-400 mt-2">Legend: available (gray), selected (green), booked (blocked)</div>
    </div>
  )
}

export default SeatMap
