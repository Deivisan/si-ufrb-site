import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Diretoria from './pages/Diretoria'
import Lideres from './pages/Lideres'
import Avisos from './pages/Avisos'
import Links from './pages/Links'
import Contato from './pages/Contato'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diretoria" element={<Diretoria />} />
            <Route path="/lideres" element={<Lideres />} />
            <Route path="/avisos" element={<Avisos />} />
            <Route path="/links" element={<Links />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}