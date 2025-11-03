import { Sparkles, MessageSquare, Wallet } from 'lucide-react'

export default function BWHero() {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border-2 border-black rounded-full px-3 py-1 bg-white shadow-[4px_4px_0_0_#000]">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">AI Chat for Finance</span>
            </div>
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">
              SewaFinance
              <span className="block mt-2">Catat pemasukan & pengeluaran</span>
              <span className="block">dengan obrolan sederhana</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-black/80">
              Gaya hitam-putih, sederhana, dan lucu. Ngobrol saja: “Makan siang 35k”, 
              dan Sewa akan otomatis mencatat, mengelompokkan, dan memberi insight.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#chat-demo" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-black bg-black text-white px-5 py-3 font-semibold shadow-[6px_6px_0_0_#000] active:shadow-[2px_2px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px]">
                Coba Demo
                <MessageSquare className="h-5 w-5" />
              </a>
              <a href="#fitur" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-black bg-white text-black px-5 py-3 font-semibold shadow-[6px_6px_0_0_#000] active:shadow-[2px_2px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px]">
                Lihat Fitur
                <Wallet className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="rounded-3xl border-2 border-black bg-white p-4 shadow-[8px_8px_0_0_#000]">
                <div className="rounded-2xl border-2 border-black p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-3 w-3 rounded-full border-2 border-black" />
                    <div className="text-xs font-mono">sewafinance.chat</div>
                    <div className="h-3 w-12 border-2 border-black rounded-full" />
                  </div>
                  <div className="space-y-2">
                    <div className="inline-block max-w-[80%] rounded-2xl border-2 border-black bg-white px-3 py-2">
                      <p className="text-sm">Makan siang 35k</p>
                    </div>
                    <div className="inline-block max-w-[80%] rounded-2xl border-2 border-black bg-black text-white px-3 py-2 ml-auto">
                      <p className="text-sm">Dicatat ✅ Kategori: Makan • -35.000</p>
                    </div>
                    <div className="inline-block max-w-[80%] rounded-2xl border-2 border-black bg-white px-3 py-2">
                      <p className="text-sm">Gaji masuk 7.5jt</p>
                    </div>
                    <div className="inline-block max-w-[80%] rounded-2xl border-2 border-black bg-black text-white px-3 py-2 ml-auto">
                      <p className="text-sm">Mantap! Pemasukan • +7.500.000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Doodles />
          </div>
        </div>
      </div>
    </section>
  )
}

function Doodles() {
  return (
    <svg className="pointer-events-none absolute -top-6 -right-6 w-32 h-32 text-black" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="20" cy="20" r="8" />
      <circle cx="80" cy="30" r="6" />
      <path d="M10 80 Q 30 60 50 80 T 90 80" />
      <path d="M20 50 L 30 60 L 40 50" />
      <rect x="60" y="60" width="20" height="12" rx="3" />
    </svg>
  )
}
