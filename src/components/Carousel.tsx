import React from 'react'

type Props = {
  items: React.ReactNode[]
}

const Carousel: React.FC<Props> = ({ items }) => {
  // Simple manual carousel placeholder (no external deps)
  const [index, setIndex] = React.useState(0)
  React.useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 3500)
    return () => clearInterval(t)
  }, [items.length])
  return (
    <div className="w-full h-60 rounded-xl overflow-hidden bg-slate-800">
      {items[index]}
    </div>
  )
}

export default Carousel
