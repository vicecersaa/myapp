import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import {Product} from './pages/Product'
import {Contact} from './pages/Contact'
import {About} from './pages/About'
import {Swanston} from './pages/Swanston'
import {Brighton} from './pages/Brighton'
import {GlenIris} from './pages/GlenIris'
import {Wellington} from './pages/Wellington'
import {Morrison} from './pages/Morrison';
import {MorningtonPocket} from './pages/MorningtonPocket'
import { MorningtonBonnel } from './pages/MorningtonBonnel';
import {Sofa} from './pages/Sofa';

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
          <Route path="/gleniris" element={<GlenIris />} />
          <Route path="/wellington" element={<Wellington />} />
          <Route path="/morrison" element={<Morrison />} />   
          <Route path="/morningtonpocket" element={<MorningtonPocket />} />   
          <Route path="/morningtonbonnel" element={<MorningtonBonnel />} />   
          <Route path="/sofa" element={<Sofa />} />   
        </Routes>
      </Router>
      </div>
  )
  
}

export default App;
