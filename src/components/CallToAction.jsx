export default function CallToAction() {
  return (
    <section id="cta" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <div className="inline-block border-2 border-black rounded-2xl p-8 bg-white shadow-[8px_8px_0_0_#000]">
          <h3 className="text-2xl md:text-3xl font-extrabold text-black">
            Siap mulai ngobrol dengan finansialmu?
          </h3>
          <p className="mt-2 text-black/70">
            Daftar gratis dan rasakan pencatatan yang lebih menyenangkan.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="border-2 border-black bg-black text-white px-6 py-3 rounded-lg font-semibold">
              Buat Akun
            </a>
            <a href="#" className="border-2 border-black bg-white text-black px-6 py-3 rounded-lg font-semibold">
              Masuk
            </a>
          </div>
        </div>
        <p className="mt-6 text-xs text-black/60">SewaFinance — catat keuanganmu se-simple kirim chat.</p>
      </div>
    </section>
  )
}
