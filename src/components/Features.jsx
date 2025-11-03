import { Wallet, PieChart, Shield, Sparkles } from 'lucide-react'

const items = [
  {
    icon: Wallet,
    title: 'Catat Instan',
    desc: 'Ketik saja pengeluaran/pemasukan. AI mengerti bahasa sehari-hari kamu.',
  },
  {
    icon: PieChart,
    title: 'Ringkasan Otomatis',
    desc: 'Grafik sederhana & laporan bulanan tanpa pusing.',
  },
  {
    icon: Shield,
    title: 'Privasi Dijaga',
    desc: 'Data keuangan aman. Kami hanya simpan yang perlu.',
  },
  {
    icon: Sparkles,
    title: 'Tanpa Ribet',
    desc: 'Desain hitam-putih yang fokus pada konten, bukan gimmick.',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black text-center">
          Fitur Utama
        </h2>
        <p className="text-center text-black/70 mt-2 max-w-2xl mx-auto">
          SewaFinance menggabungkan kemudahan chat dengan pencatatan keuangan yang rapi.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="border-2 border-black rounded-xl p-6 bg-white shadow-[6px_6px_0_0_#000]">
              <div className="h-11 w-11 grid place-items-center border-2 border-black rounded-lg mb-4">
                <Icon className="h-5 w-5 text-black" />
              </div>
              <h3 className="font-bold text-lg text-black">{title}</h3>
              <p className="text-sm text-black/70 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
