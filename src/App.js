import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import {Product} from './pages/Product'
import {Contact} from './pages/Contact'
import {About} from './pages/About'
import {Swanston} from './pages/Swanston'
import {Brighton} from './pages/Brighton'
function App() {
  return (
     <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/swanston" element={<Swanston />} />
          <Route path="/brighton" element={<Brighton />} />
        </Routes>
      </Router>
      </div>
  )
  
}

export default App;
