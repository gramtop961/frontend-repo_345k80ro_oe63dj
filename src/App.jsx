import BWHero from './components/BWHero'
import BWFeatures from './components/BWFeatures'
import BWChatMock from './components/BWChatMock'
import BWCTA from './components/BWCTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="border-b-2 border-black bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="#" className="font-extrabold text-xl tracking-tight">SewaFinance</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#fitur" className="hover:underline">Fitur</a>
            <a href="#chat-demo" className="hover:underline">Demo</a>
            <a href="#cta" className="hover:underline">Mulai</a>
          </nav>
        </div>
      </header>

      <main>
        <BWHero />
        <BWFeatures />
        <BWChatMock />
        <div id="cta">
          <BWCTA />
        </div>
      </main>

      <footer className="border-t-2 border-black bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} SewaFinance</p>
          <div className="flex items-center gap-4">
            <a href="#fitur" className="underline">Fitur</a>
            <a href="#chat-demo" className="underline">Demo</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
