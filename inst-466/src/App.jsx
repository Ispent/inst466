import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Research from './pages/Research'
import Resources from './pages/Resources'
import Videos from './pages/Videos'
import './App.css'

function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  )
}

export default App
