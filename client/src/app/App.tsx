import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota principal da aplicação */}
        <Route path="/" element={<Home />} />
        
        {/* Rota de fallback (Caso o usuário digite um link que não existe) */}
        <Route path="*" element={
          <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
            <h1 className="text-3xl text-red-500">Página não encontrada (404)</h1>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}