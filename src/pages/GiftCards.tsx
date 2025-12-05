export default function GiftCards() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Gift Cards</h2>
      <p className="text-slate-300">Share the cinema experience with friends and family. Gift cards available in multiple denominations and digital delivery.</p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[25, 50, 100].map((n) => (
          <div key={n} className="p-4 bg-slate-900 rounded-xl">${n} Gift Card</div>
        ))}
      </div>
    </section>
  )
}
