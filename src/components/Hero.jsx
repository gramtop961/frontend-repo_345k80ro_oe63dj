import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
              Catat pemasukan & pengeluaran dengan chat AI yang super sederhana.
            </h1>
            <p className="mt-4 text-lg text-black/70">
              SewaFinance membantu kamu mengelola keuangan harian hanya dengan ngobrol. Gaya hitam-putih, hasil rapi.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#cta" className="inline-flex items-center gap-2 border-2 border-black bg-white text-black px-5 py-3 rounded-lg shadow-[4px_4px_0_0_#000] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] font-semibold">
                Coba Sekarang
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#demo" className="inline-flex items-center gap-2 border-2 border-black px-5 py-3 rounded-lg text-black bg-transparent hover:bg-black hover:text-white transition-colors">
                Lihat Demo
              </a>
            </div>
            <p className="mt-3 text-xs text-black/60">Tanpa ribet. Tanpa warna. Hanya data yang kamu butuhkan.</p>
          </div>

          <div className="relative">
            <div className="border-2 border-black rounded-xl p-4 bg-white shadow-[6px_6px_0_0_#000]">
              <div className="h-7 w-24 border-2 border-black rounded-full mb-4" />
              <div className="space-y-3">
                <div className="flex gap-2 max-w-[90%]">
                  <div className="h-8 w-8 rounded-full border-2 border-black" />
                  <div className="flex-1 border-2 border-black rounded-lg p-3 text-sm">
                    Beli kopi 25k ☕️
                  </div>
                </div>
                <div className="flex gap-2 max-w-[90%] ml-auto">
                  <div className="flex-1 border-2 border-black rounded-lg p-3 text-sm bg-black text-white">
                    Tercatat. Kategori: Minuman. Saldo: -25.000
                  </div>
                  <div className="h-8 w-8 rounded-full border-2 border-black bg-black" />
                </div>
                <div className="flex gap-2 max-w-[85%]">
                  <div className="h-8 w-8 rounded-full border-2 border-black" />
                  <div className="flex-1 border-2 border-black rounded-lg p-3 text-sm">
                    Gaji masuk 5jt 💼
                  </div>
                </div>
                <div className="flex gap-2 max-w-[85%] ml-auto">
                  <div className="flex-1 border-2 border-black rounded-lg p-3 text-sm bg-black text-white">
                    Dicatat. Pemasukan: 5.000.000. Ringkasan siap dibuat.
                  </div>
                  <div className="h-8 w-8 rounded-full border-2 border-black bg-black" />
                </div>
              </div>
            </div>
            <div className="absolute -z-0 inset-0 pointer-events-none">
              <div className="absolute -top-6 -left-6 h-20 w-20 border-2 border-black rounded-full opacity-20" />
              <div className="absolute bottom-6 -right-8 h-10 w-24 border-2 border-dashed border-black rounded-lg opacity-30 rotate-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
