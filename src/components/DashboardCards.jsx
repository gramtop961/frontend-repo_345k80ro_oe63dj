import { Wallet, ArrowUpRight, ArrowDownRight, PieChart } from 'lucide-react'

function StatCard({ label, value, trend, positive }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-slate-500">{label}</span>
        <div className={`rounded-full p-1.5 ${positive ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
          {positive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
        </div>
      </div>
      <div className="mt-2 text-2xl font-semibold text-slate-900">{value}</div>
      <div className={`mt-1 text-xs ${positive ? 'text-emerald-600' : 'text-rose-600'}`}>{trend}</div>
    </div>
  )
}

export default function DashboardCards() {
  return (
    <section className="bg-[#F9FAFB]">
      <div className="mx-auto max-w-md px-4 pb-10">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Halo, Rina 👋</h3>
            <p className="text-sm text-slate-500">Ringkasan bulan ini</p>
          </div>
          <div className="rounded-xl bg-indigo-600/10 p-2 ring-1 ring-indigo-600/20">
            <Wallet className="h-5 w-5 text-indigo-600" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <StatCard label="Pemasukan" value="Rp 8.500.000" trend="+4.2%" positive />
          <StatCard label="Pengeluaran" value="Rp 5.120.000" trend="-3.1%" />
          <div className="col-span-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Saldo</span>
              <PieChart className="h-4 w-4 text-slate-400" />
            </div>
            <div className="mt-2 text-2xl font-semibold text-slate-900">Rp 3.380.000</div>
            <div className="mt-4 grid grid-cols-6 gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-16 w-full overflow-hidden rounded-lg bg-gradient-to-t from-indigo-100 to-cyan-100">
                  <div
                    className="h-full w-full rounded-b-lg bg-gradient-to-t from-indigo-600 to-cyan-400"
                    style={{ height: `${20 + (i % 6) * 12}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
