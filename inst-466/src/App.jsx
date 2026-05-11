import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Research from './pages/Research'
import Resources from './pages/Resources'
import Videos from './pages/Videos'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
