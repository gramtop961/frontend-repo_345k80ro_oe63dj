import { Mail, Lock, LogIn, Github } from 'lucide-react'

export default function AuthCard() {
  return (
    <section id="auth" className="bg-[#F9FAFB] text-slate-900">
      <div className="mx-auto max-w-md px-4 py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold">Masuk ke SewaFinance</h2>
            <p className="text-sm text-slate-500">Kelola keuanganmu dengan bantuan AI</p>
          </div>

          <div className="space-y-3">
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-slate-600">Email</span>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3">
                <Mail className="h-4 w-4 text-slate-400" />
                <input type="email" placeholder="kamu@email.com" className="w-full bg-transparent py-2.5 text-sm outline-none" />
              </div>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-slate-600">Password</span>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3">
                <Lock className="h-4 w-4 text-slate-400" />
                <input type="password" placeholder="••••••••" className="w-full bg-transparent py-2.5 text-sm outline-none" />
              </div>
            </label>
          </div>

          <div className="mt-6 grid gap-3">
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#06B6D4] px-4 py-2.5 text-white font-medium shadow-sm hover:brightness-110 transition">
              <LogIn className="h-4 w-4" />
              Masuk ke SewaFinance
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-700 hover:bg-slate-50 transition">
              <Github className="h-4 w-4" />
              Lanjut dengan GitHub
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
