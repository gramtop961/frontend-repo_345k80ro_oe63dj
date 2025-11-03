import HeaderHero from './components/HeaderHero'
import AuthCard from './components/AuthCard'
import DashboardCards from './components/DashboardCards'
import ChatPreview from './components/ChatPreview'

function App() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-slate-900">
      <HeaderHero />
      <main>
        <AuthCard />
        <DashboardCards />
        <ChatPreview />
      </main>
      <footer className="border-t bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-500">© {new Date().getFullYear()} SewaFinance — AI-powered personal finance</p>
          <div className="flex items-center gap-4">
            <a href="#auth" className="text-slate-600 hover:text-slate-900 transition">Masuk</a>
            <a href="#chat" className="text-slate-600 hover:text-slate-900 transition">Demo Chat</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
