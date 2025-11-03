import { Send, Bot, User } from 'lucide-react'

export default function ChatPreview() {
  return (
    <section id="chat" className="bg-[#F9FAFB]">
      <div className="mx-auto max-w-md px-4 pb-12">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="flex items-center gap-2 border-b border-slate-200 bg-gradient-to-r from-indigo-600 to-cyan-500 px-4 py-3 text-white">
            <div className="h-7 w-7 grid place-items-center rounded-lg bg-white/20">
              <Bot className="h-4 w-4" />
            </div>
            <div className="font-medium">Sewa • AI Assistant</div>
          </div>
          <div className="space-y-3 p-4">
            <div className="flex items-start gap-2">
              <div className="h-8 w-8 rounded-full bg-indigo-600 text-white grid place-items-center">
                <Bot className="h-4 w-4" />
              </div>
              <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-indigo-50 px-3 py-2 text-sm text-slate-800 shadow-sm">
                Hai! Tulis transaksi kamu, misal: beli kopi 25rb ☕
              </div>
            </div>
            <div className="flex items-start gap-2 justify-end">
              <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-slate-900 px-3 py-2 text-sm text-white shadow-sm">
                Bayar listrik 250k ⚡️
              </div>
              <div className="h-8 w-8 rounded-full bg-slate-900 text-white grid place-items-center">
                <User className="h-4 w-4" />
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="h-8 w-8 rounded-full bg-indigo-600 text-white grid place-items-center">
                <Bot className="h-4 w-4" />
              </div>
              <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-indigo-50 px-3 py-2 text-sm text-slate-800 shadow-sm">
                Dicatat sebagai pengeluaran • Utilitas. Sisa anggaran minggu ini: Rp 1.250.000.
              </div>
            </div>
            <div className="flex items-center gap-1 pl-10 text-xs text-slate-400">
              <span className="inline-block h-1 w-1 animate-bounce rounded-full bg-slate-400" />
              <span className="inline-block h-1 w-1 animate-bounce rounded-full bg-slate-400 [animation-delay:120ms]" />
              <span className="inline-block h-1 w-1 animate-bounce rounded-full bg-slate-400 [animation-delay:240ms]" />
              <span>Sewa mengetik…</span>
            </div>
          </div>
          <div className="border-t border-slate-200 p-3">
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-2">
              <input
                disabled
                className="flex-1 bg-transparent px-2 py-2 text-sm placeholder-slate-400 outline-none"
                placeholder="Tulis transaksi kamu, misal: beli kopi 25rb ☕"
              />
              <button disabled className="inline-flex items-center justify-center rounded-lg bg-slate-900 p-2 text-white">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
