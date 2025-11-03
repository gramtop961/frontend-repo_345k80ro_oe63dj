import { Send } from 'lucide-react'

export default function ChatPreview() {
  return (
    <section id="demo" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="border-2 border-black rounded-2xl overflow-hidden bg-white">
          <div className="border-b-2 border-black px-4 py-3 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full border-2 border-black" />
            <div className="h-3 w-3 rounded-full border-2 border-black" />
            <div className="h-3 w-3 rounded-full border-2 border-black" />
            <span className="ml-3 font-semibold">Chat SewaFinance</span>
          </div>
          <div className="p-4 space-y-3 bg-white">
            <div className="flex gap-2 max-w-[75%]">
              <div className="h-7 w-7 rounded-full border-2 border-black" />
              <div className="flex-1 border-2 border-black rounded-lg p-3 text-sm">
                Bayar listrik 250k ⚡️
              </div>
            </div>
            <div className="flex gap-2 max-w-[80%] ml-auto">
              <div className="flex-1 border-2 border-black rounded-lg p-3 text-sm bg-black text-white">
                Dicatat sebagai pengeluaran utilitas. Sisa anggaran minggu ini: -250.000.
              </div>
              <div className="h-7 w-7 rounded-full border-2 border-black bg-black" />
            </div>
            <div className="flex gap-2 max-w-[70%]">
              <div className="h-7 w-7 rounded-full border-2 border-black" />
              <div className="flex-1 border-2 border-black rounded-lg p-3 text-sm">
                Refund tiket 120k ✈️
              </div>
            </div>
            <div className="flex gap-2 max-w-[78%] ml-auto">
              <div className="flex-1 border-2 border-black rounded-lg p-3 text-sm bg-black text-white">
                Dicatat sebagai pemasukan lain-lain. Update saldo berhasil.
              </div>
              <div className="h-7 w-7 rounded-full border-2 border-black bg-black" />
            </div>
          </div>
          <div className="border-t-2 border-black p-3 flex items-center gap-2">
            <input
              disabled
              className="flex-1 bg-white text-black placeholder-black/40 border-2 border-black rounded-lg px-3 py-2 outline-none"
              placeholder="Tulis perintah chat di sini..."
            />
            <button disabled className="inline-flex items-center gap-2 border-2 border-black bg-black text-white px-4 py-2 rounded-lg">
              <Send className="h-4 w-4" />
              Kirim
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
