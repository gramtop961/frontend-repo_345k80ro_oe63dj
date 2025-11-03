import { MessageSquare } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full border-b-2 border-black bg-white">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 grid place-items-center border-2 border-black rounded-md bg-white">
            <MessageSquare className="h-5 w-5 text-black" />
          </div>
          <span className="font-black tracking-tight text-xl text-black">SewaFinance</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a className="text-black hover:underline underline-offset-4" href="#features">Fitur</a>
          <a className="text-black hover:underline underline-offset-4" href="#demo">Demo</a>
          <a className="text-black hover:underline underline-offset-4" href="#cta">Mulai</a>
        </nav>
      </div>
    </header>
  )
}
