export default function BWChatMock() {
  return (
    <section id="chat-demo" className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">Seperti chat biasa</h2>
            <p className="mt-2 text-black/70">Tipekan aktivitas keuanganmu, biar Sewa yang merapikan dan menganalisis.</p>
            <ul className="mt-6 space-y-3 text-sm list-disc pl-5">
              <li>Ketik natural: “Beli pulsa 25k”, “Bayar kos 800k”.</li>
              <li>Sewa mendeteksi nominal, kategori, dan waktu.</li>
              <li>Laporan sederhana siap dibagikan kapan saja.</li>
            </ul>
          </div>
          <div>
            <div className="rounded-3xl border-2 border-black bg-white p-4 shadow-[8px_8px_0_0_#000]">
              <div className="rounded-2xl border-2 border-black p-4 bg-white">
                <div className="space-y-2">
                  <Bubble me={false}>Kopi susu 20k</Bubble>
                  <Bubble me>Dicatat ✅ Kategori: Minuman • -20.000</Bubble>
                  <Bubble me={false}>Gaji freelance 1.2jt</Bubble>
                  <Bubble me>Siap! Pemasukan • +1.200.000</Bubble>
                  <Bubble me={false}>Top up e-wallet 100k</Bubble>
                  <Bubble me>Catat sebagai Transfer • 100.000</Bubble>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <input aria-label="Ketik pesan" className="flex-1 rounded-xl border-2 border-black px-3 py-2 outline-none focus:ring-2 focus:ring-black" placeholder="Tulis pesan…" />
                  <button className="rounded-xl border-2 border-black bg-black text-white px-4 py-2 font-semibold shadow-[4px_4px_0_0_#000] active:shadow-[1px_1px_0_0_#000] active:translate-x-[1px] active:translate-y-[1px]">Kirim</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Bubble({ children, me = false }) {
  const base = 'inline-block max-w-[80%] px-3 py-2 rounded-2xl border-2 border-black text-sm';
  const style = me ? ' bg-black text-white ml-auto' : ' bg-white';
  return (
    <div className={base + style}>
      {children}
    </div>
  )
}
