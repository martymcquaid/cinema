import React from 'react'

type Props = {
  times: string[]
}

const Showtimes: React.FC<Props> = ({ times }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {times.map((t) => (
        <div key={t} className="p-2 bg-slate-800 text-center rounded">
          {t}
        </div>
      ))}
    </div>
  )
}

export default Showtimes
