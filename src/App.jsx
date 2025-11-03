import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ChatPreview from './components/ChatPreview'
import CallToAction from './components/CallToAction'

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ChatPreview />
        <CallToAction />
      </main>
      <footer className="border-t-2 border-black bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-black/70">© {new Date().getFullYear()} SewaFinance</p>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:underline underline-offset-4">Fitur</a>
            <a href="#demo" className="hover:underline underline-offset-4">Demo</a>
            <a href="#cta" className="hover:underline underline-offset-4">Mulai</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
