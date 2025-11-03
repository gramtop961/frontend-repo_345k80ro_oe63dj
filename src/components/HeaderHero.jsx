import Spline from '@splinetool/react-spline'
import { Sparkles } from 'lucide-react'

export default function HeaderHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0F172A] text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 h-96 w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0F172A] to-transparent pointer-events-none" />
      </div>

      <header className="relative z-10 mx-auto max-w-6xl px-4 pt-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-white/10 backdrop-blur ring-1 ring-white/20 grid place-items-center">
            <Sparkles className="h-5 w-5 text-cyan-300" />
          </div>
          <div className="text-lg font-semibold tracking-tight">SewaFinance</div>
        </div>
        <a href="#auth" className="text-sm text-cyan-300 hover:text-cyan-200 transition-colors">Masuk</a>
      </header>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-10 pt-10 grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-200">
            <Sparkles className="h-3.5 w-3.5" />
            AI Finance Tracker
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Ngobrol aja, keuanganmu
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-300">tercatat otomatis</span>
          </h1>
          <p className="text-white/70 max-w-prose">
            Catat pemasukan dan pengeluaran cukup lewat chat. Sewa, AI asistenmu, mengelompokkan transaksi dan menyiapkan insight secara otomatis.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#auth" className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-4 py-2.5 text-[#0F172A] font-medium shadow-lg shadow-cyan-500/20 hover:bg-cyan-300 transition-colors">Mulai Sekarang</a>
            <a href="#chat" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-white/90 hover:bg-white/10 transition-colors">Lihat Demo</a>
          </div>
        </div>
        <div className="relative h-[420px] w-full rounded-2xl ring-1 ring-white/10 overflow-hidden bg-white/5">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
