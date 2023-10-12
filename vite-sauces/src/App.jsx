
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Navbar';
import Footer from './components/Footer/Footer';

//PAGES
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Cart from './pages/Cart'; 
// SPA = Simple Page Application (REACT)

function App() {
  return (
    <Router>
      <>
    <div className='App'>
      <Header/>

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/cart' element={ <Cart /> } />
      </Routes>
      

      <Footer />
      </div>
      </>
      </Router>
  )
}

export default App
