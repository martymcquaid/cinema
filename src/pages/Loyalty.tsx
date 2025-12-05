export default function Loyalty() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Loyalty & Membership</h2>
      <p className="text-slate-300">Join Cinema X Rewards to earn points, unlock exclusive benefits, and enjoy member-only offers across all screens and experiences.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {[
          { tier: 'Silver', desc: 'Entry-level benefits, points accrual' },
          { tier: 'Gold', desc: 'Priority seating, free drinks on select nights' },
          { tier: 'Platinum', desc: 'Private lounge access, early screenings' },
        ].map((t) => (
          <div key={t.tier} className="p-4 bg-slate-900 rounded-xl">
            <h3 className="font-semibold mb-1">{t.tier}</h3>
            <p className="text-sm text-slate-300">{t.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
