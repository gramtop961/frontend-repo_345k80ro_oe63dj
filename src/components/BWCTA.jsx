import { ArrowRight } from 'lucide-react'

export default function BWCTA() {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold">Siap mulai mencatat dengan cara paling mudah?</h2>
        <p className="mt-2 text-black/70">Coba demo sekarang. Gratis, cepat, dan tanpa ribet.</p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a href="#chat-demo" className="inline-flex items-center gap-2 rounded-xl border-2 border-black bg-black text-white px-6 py-3 font-semibold shadow-[6px_6px_0_0_#000] active:shadow-[2px_2px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px]">
            Mulai Demo
            <ArrowRight className="h-5 w-5" />
          </a>
          <a href="#fitur" className="inline-flex items-center gap-2 rounded-xl border-2 border-black bg-white text-black px-6 py-3 font-semibold shadow-[6px_6px_0_0_#000] active:shadow-[2px_2px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px]">
            Pelajari Fitur
          </a>
        </div>
      </div>
    </section>
  )
}
