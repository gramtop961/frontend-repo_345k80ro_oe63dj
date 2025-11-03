import { MessageSquare, PieChart, Wallet, Shield } from 'lucide-react'

const features = [
  {
    icon: MessageSquare,
    title: 'Catat lewat chat',
    desc: 'Tulis saja “kopi 20k” — Sewa paham dan mencatat otomatis.'
  },
  {
    icon: Wallet,
    title: 'Kelola dompet',
    desc: 'Pantau pemasukan, pengeluaran, dan saldo bersih kamu.'
  },
  {
    icon: PieChart,
    title: 'Insight cepat',
    desc: 'Lihat kategori paling boros dan tren bulanan dalam sekali lihat.'
  },
  {
    icon: Shield,
    title: 'Privasi aman',
    desc: 'Data milikmu, kami jaga. Selalu bisa ekspor kapan pun.'
  }
]

export default function BWFeatures() {
  return (
    <section id="fitur" className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-extrabold">Fitur utama</h2>
        <p className="mt-2 text-black/70">Serba sederhana, bergaya kartun hitam-putih.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border-2 border-black bg-white p-5 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border-2 border-black bg-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-bold text-lg">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-black/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
