import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './component/about'
import Navbar from './component/navbar'
import Content from './component/content'
import News from './component/news'
import Footer from './component/footer'
import './App.css'

function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Content />}/>
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
