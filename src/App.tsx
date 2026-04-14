import { HashRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Diretoria from './pages/Diretoria'
import Avisos from './pages/Avisos'
import Links from './pages/Links'
import Contato from './pages/Contato'

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/diretoria" element={<Diretoria />} />
              <Route path="/avisos" element={<Avisos />} />
              <Route path="/links" element={<Links />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </ThemeProvider>
  )
}
