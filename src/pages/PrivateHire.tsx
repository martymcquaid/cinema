export default function PrivateHire() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Private Hire & Corporate Bookings</h2>
      <p className="text-slate-300">Plan a premium screening with tailored menus, private lounges, and dedicated staff. Ideal for product launches, corporate events, and celebrations.</p>
      <div className="mt-4 p-4 bg-slate-900 rounded-xl">
        <h3 className="font-semibold mb-2">Sample Packages</h3>
        <ul className="list-disc pl-6 text-sm text-slate-300">
          <li>Exclusive screening for up to 350 guests</li>
          <li>Custom concessions and beverage pairing</li>
        </ul>
      </div>
      <div className="mt-4">
        <button className="px-6 py-3 bg-blue-600 rounded-xl">Request a Proposal</button>
      </div>
    </section>
  )
}
