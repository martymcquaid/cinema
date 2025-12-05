import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { MOVIES } from '../data/movies'
import SeatMap from '../components/SeatMap'

type AddOn = { id: string; name: string; price: number }

export default function Booking() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const movie = MOVIES.find((m) => m.id === id)
  const rows = ['A','B','C','D','E','F']
  const [selectedSeats, setSelectedSeats] = React.useState<string[]>([])
  const [showtime, setShowtime] = React.useState<string>(movie?.showtimes[0] ?? '')
  const addons: AddOn[] = [
    { id: 'popcorn', name: 'Popcorn', price: 5 },
    { id: 'drink', name: 'Soft Drink', price: 3 },
    { id: 'nachos', name: 'Nachos', price: 4 }
  ]
  const [selectedAddOns, setSelectedAddOns] = React.useState<string[]>([])
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [step, setStep] = React.useState<'booking'|'confirm'>('booking')

  const priceForSeat = (seatId: string) => {
    const seatNum = parseInt(seatId.slice(1), 10)
    // Left 6 seats per row: Standard; Right 6 seats per row: Premium (conceptual)
    // Since we have 12 seats per row in UI, first 6 = Standard, last 6 = Premium
    return seatNum <= 6 ? 12 : 18
  }
  const totalSeatPrice = selectedSeats.reduce((acc, s) => acc + priceForSeat(s), 0)
  const totalAddons = selectedAddOns.reduce((acc, a) => {
    const addon = addons.find((x) => x.id === a)
    return addon ? acc + addon.price : acc
  }, 0)
  const total = totalSeatPrice + totalAddons

  const onSeatChange = (seats: string[]) => {
    setSelectedSeats(seats)
  }

  const confirmBooking = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email) return
    setStep('confirm')
  }

  if (!movie) {
    return <div className="p-6">Movie not found.</div>
  }

  return (
    <section className="space-y-6">
      <div className="flex gap-6 items-start">
        <img src={movie.poster} alt={movie.title} className="w-48 rounded-xl object-cover" />
        <div>
          <h2 className="text-2xl font-semibold mb-1">Book Tickets — {movie.title}</h2>
          <p className="text-slate-300">Choose showtime, seats, and snacks.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div>
          <h3 className="text-xl font-semibold mb-3">Showtime</h3>
          <select
            className="bg-slate-900 border border-slate-700 rounded p-2"
            value={showtime}
            onChange={(e) => setShowtime(e.target.value)}
          >
            {movie.showtimes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>

          <h3 className="text-xl font-semibold mt-6 mb-3">Seat Map</h3>
          <SeatMap rows={rows} cols={12} booked={["A3","B5","D7"]} onChange={onSeatChange} />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Summary</h3>
          <div className="p-4 bg-slate-900 rounded-xl">
            <div className="mb-2"><strong>Selected seats:</strong> {selectedSeats.length ? selectedSeats.join(', ') : 'None'}</div>
            <div className="mb-2"><strong>Showtime:</strong> {showtime}</div>
            <div className="mb-2"><strong>Add-ons:</strong> {selectedAddOns.length ? selectedAddOns.map((a)=>a).join(', ') : 'None'}</div>
            <div className="flex gap-2 mt-2">
              {addons.map((a) => (
                <label key={a.id} className="inline-flex items-center space-x-2 text-sm">
                  <input type="checkbox" onChange={(e)=>{
                    setSelectedAddOns((cur)=> e.target.checked ? [...cur, a.id] : cur.filter(x=>x!==a.id))
                  }}/>
                  <span>{a.name} (+${a.price})</span>
                </label>
              ))}
            </div>
            <div className="mt-3"><strong>Seats subtotal:</strong> ${totalSeatPrice}</div>
            <div className="mt-1"><strong>Add-ons:</strong> ${totalAddons}</div>
            <div className="mt-2 text-lg"><strong>Total:</strong> ${total}</div>
          </div>
          {step === 'booking' && (
            <form className="mt-4 bg-slate-900 p-4 rounded-xl" onSubmit={confirmBooking}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="bg-slate-800 border border-slate-700 rounded p-2" placeholder="Full name" value={name} onChange={(e)=>setName(e.target.value)} />
                <input className="bg-slate-800 border border-slate-700 rounded p-2" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <button className="mt-3 px-6 py-2 bg-blue-600 rounded" type="submit">Proceed to Confirmation</button>
            </form>
          )}
          {step === 'confirm' && (
            <div className="mt-4 p-4 bg-slate-900 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Booking Confirmed</h3>
              <p className="text-slate-300">Thank you, {name}. A confirmation has been sent to {email}.</p>
              <p className="mt-2 text-slate-300">Reference: BX-{Date.now().toString().slice(-6)}</p>
              <div className="mt-3">
                <button className="px-6 py-2 bg-green-600 rounded" onClick={()=>navigate('/')}>Back to Home</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
